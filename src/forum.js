import './style.css'
import { forumUsers, forumPosts as seedPosts } from './data.js'
import { bindPageSelect, renderPageFrame, setupRevealObserver } from './shared.js'

/*
 * Planned API Routes – api.bredelicious.de
 * ─────────────────────────────────────────
 * Auth
 *   POST   /api/auth/login                   { username, password } → { token, user }
 *   POST   /api/auth/register                { username, displayName, password } → { token, user }
 *   POST   /api/auth/logout                  → 204
 *   GET    /api/auth/me                      → { user }
 *
 * Posts
 *   GET    /api/forum/posts                  ?sort=hot|new|top&page=1&limit=20 → { posts[], total }
 *   POST   /api/forum/posts                  { title, body } → { post }
 *   GET    /api/forum/posts/:id              → { post, comments[] }
 *   PATCH  /api/forum/posts/:id             { title?, body? } → { post }   (own or admin/mod)
 *   DELETE /api/forum/posts/:id              → 204                          (own or admin/mod)
 *
 * Comments
 *   POST   /api/forum/posts/:id/comments     { body } → { comment }
 *   PATCH  /api/forum/comments/:id           { body } → { comment }         (own or admin/mod)
 *   DELETE /api/forum/comments/:id           → 204                          (own or admin/mod)
 *
 * Votes
 *   POST   /api/forum/posts/:id/vote         { value: 1 | -1 | 0 } → { votes }
 *   POST   /api/forum/comments/:id/vote      { value: 1 | -1 | 0 } → { votes }
 *
 * Users (admin only)
 *   GET    /api/users                        → { users[] }
 *   PATCH  /api/users/:id/role               { role } → { user }
 */

// ── Auth ──────────────────────────────────────────────────────────────
const AUTH_KEY = 'fcm-auth'

function getCurrentUser() {
  try {
    const auth = JSON.parse(localStorage.getItem(AUTH_KEY))
    return auth ? (forumUsers.find((u) => u.id === auth.userId) ?? null) : null
  } catch {
    return null
  }
}

// ── State ─────────────────────────────────────────────────────────────
// Deep-clone seed so mutations don't affect the module-level constant
let posts = seedPosts.map((p) => ({ ...p, comments: p.comments.map((c) => ({ ...c })) }))
let nextPostId = posts.length + 1
let nextCommentId = posts.flatMap((p) => p.comments).length + 1

const state = {
  view: 'feed', // 'feed' | 'post'
  selectedPostId: null,
  showNewPost: false,
  sortBy: 'hot', // 'hot' | 'new' | 'top'
  newComment: '',
}

const app = document.querySelector('#app')

// ── Helpers ───────────────────────────────────────────────────────────
function getUser(id) {
  return forumUsers.find((u) => u.id === id)
}

function relativeTime(iso) {
  const s = (Date.now() - new Date(iso)) / 1000
  if (s < 60) return 'Gerade eben'
  if (s < 3600) return `${Math.floor(s / 60)}m`
  if (s < 86400) return `${Math.floor(s / 3600)}h`
  return `${Math.floor(s / 86400)}d`
}

function roleBadge(role) {
  if (role === 'administrator')
    return `<span class="inline-flex items-center rounded-full bg-stone-950 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-white">Admin</span>`
  if (role === 'moderator')
    return `<span class="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Mod</span>`
  return ''
}

function avatar(user, cls = 'h-8 w-8 text-xs') {
  const color =
    user.role === 'administrator'
      ? 'bg-stone-950 text-white'
      : user.role === 'moderator'
        ? 'bg-amber-400 text-stone-950'
        : 'bg-emerald-100 text-emerald-800'
  return `<span class="grid ${cls} shrink-0 place-items-center rounded-full ${color} font-semibold" aria-hidden="true">${user.initials}</span>`
}

function sortedPosts() {
  switch (state.sortBy) {
    case 'new':
      return [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    case 'top':
      return [...posts].sort((a, b) => b.votes - a.votes)
    default: {
      // hot score: votes decayed by age in hours
      const score = (p) =>
        p.votes / Math.pow((Date.now() - new Date(p.createdAt)) / 3_600_000 + 2, 1.5)
      return [...posts].sort((a, b) => score(b) - score(a))
    }
  }
}

// ── Vote buttons ──────────────────────────────────────────────────────
function renderVoteButtons(entityId, votes, userVote, type) {
  const canVote = !!getCurrentUser()
  const upActive = userVote === 1
  const downActive = userVote === -1
  const scoreColor = votes > 0 ? 'text-emerald-700' : votes < 0 ? 'text-red-600' : 'text-stone-500'

  return `
    <div class="flex items-center gap-1">
      <button
        data-action="vote-${type}" data-id="${entityId}" data-value="1"
        ${canVote ? '' : 'disabled'}
        aria-label="Upvote" aria-pressed="${upActive}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${
          upActive
            ? 'bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300'
            : canVote
              ? 'text-stone-400 hover:bg-stone-100 hover:text-stone-700'
              : 'cursor-not-allowed text-stone-300'
        }"
      >▲</button>
      <span class="min-w-[1.75rem] text-center text-sm font-semibold tabular-nums ${scoreColor}">${votes}</span>
      <button
        data-action="vote-${type}" data-id="${entityId}" data-value="-1"
        ${canVote ? '' : 'disabled'}
        aria-label="Downvote" aria-pressed="${downActive}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${
          downActive
            ? 'bg-red-100 text-red-600 ring-1 ring-inset ring-red-200'
            : canVote
              ? 'text-stone-400 hover:bg-stone-100 hover:text-stone-700'
              : 'cursor-not-allowed text-stone-300'
        }"
      >▼</button>
    </div>
  `
}

// ── Post card (feed) ──────────────────────────────────────────────────
function renderPostCard(post) {
  const author = getUser(post.authorId)
  if (!author) return ''
  const preview = post.body.length > 160 ? post.body.slice(0, 160) + '…' : post.body

  return `
    <article class="group rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <button data-action="open-post" data-id="${post.id}" class="block w-full text-left">
        <h3 class="font-display text-lg font-semibold leading-snug text-stone-950 transition group-hover:text-emerald-800">${post.title}</h3>
        <p class="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${avatar(author)}
          <span class="font-medium text-stone-700">${author.displayName}</span>
          ${roleBadge(author.role)}
          <span>·</span><span>${relativeTime(post.createdAt)}</span>
          <span>·</span><span>💬 ${post.comments.length}</span>
        </p>
        <p class="mt-3 text-sm leading-6 text-stone-600">${preview.replace(/\n/g, ' ')}</p>
      </button>
      <div class="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
        ${renderVoteButtons(post.id, post.votes, post.userVote ?? 0, 'post')}
        <button data-action="open-post" data-id="${post.id}" class="text-xs font-medium text-stone-400 transition hover:text-emerald-700">
          ${post.comments.length} Kommentar${post.comments.length !== 1 ? 'e' : ''}
        </button>
      </div>
    </article>
  `
}

// ── Comment ───────────────────────────────────────────────────────────
function renderComment(comment) {
  const author = getUser(comment.authorId)
  if (!author) return ''
  const me = getCurrentUser()
  const canDelete =
    me && (me.id === comment.authorId || me.role === 'administrator' || me.role === 'moderator')

  return `
    <article class="flex gap-3 border-b border-stone-100 py-4 last:border-b-0" data-comment-id="${comment.id}">
      ${avatar(author)}
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-semibold text-stone-900">${author.displayName}</span>
          ${roleBadge(author.role)}
          <span class="text-xs text-stone-400">${relativeTime(comment.createdAt)}</span>
          ${canDelete ? `<button data-action="delete-comment" data-id="${comment.id}" class="ml-auto text-xs text-stone-400 transition hover:text-red-500">Löschen</button>` : ''}
        </div>
        <p class="mt-1.5 text-sm leading-6 text-stone-700">${comment.body}</p>
        <div class="mt-2">${renderVoteButtons(comment.id, comment.votes, comment.userVote ?? 0, 'comment')}</div>
      </div>
    </article>
  `
}

// ── Post detail ───────────────────────────────────────────────────────
function renderPostDetail() {
  const post = posts.find((p) => p.id === state.selectedPostId)
  if (!post) return `<p class="p-8 text-stone-500">Beitrag nicht gefunden.</p>`
  const author = getUser(post.authorId)
  const me = getCurrentUser()
  const canDelete =
    me && (me.id === post.authorId || me.role === 'administrator' || me.role === 'moderator')

  return `
    <div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">
      <button data-action="back-to-feed" class="mb-6 flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900">
        ← Zurück zur Übersicht
      </button>

      <article>
        <h2 class="font-display text-2xl font-semibold leading-snug text-stone-950 sm:text-3xl">${post.title}</h2>
        <div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${author ? avatar(author, 'h-7 w-7 text-xs') : ''}
          <span class="font-medium text-stone-700">${author?.displayName ?? 'Unbekannt'}</span>
          ${author ? roleBadge(author.role) : ''}
          <span>·</span><span>${relativeTime(post.createdAt)}</span>
        </div>
        <p class="mt-5 whitespace-pre-line text-base leading-7 text-stone-700">${post.body}</p>
        <div class="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
          ${renderVoteButtons(post.id, post.votes, post.userVote ?? 0, 'post')}
          ${canDelete ? `<button data-action="delete-post" data-id="${post.id}" class="text-xs font-medium text-stone-400 transition hover:text-red-500">Beitrag löschen</button>` : ''}
        </div>
      </article>

      <section class="mt-8" aria-labelledby="comments-heading">
        <h3 id="comments-heading" class="text-xs font-semibold uppercase tracking-wider text-stone-500">
          ${post.comments.length} Kommentar${post.comments.length !== 1 ? 'e' : ''}
        </h3>
        <div class="mt-3">
          ${post.comments.length > 0
            ? post.comments.map(renderComment).join('')
            : `<p class="py-6 text-center text-sm text-stone-400">Noch keine Kommentare — sei der Erste!</p>`}
        </div>

        ${me ? `
          <form id="comment-form" data-action="submit-comment" class="mt-6 flex gap-3">
            ${avatar(me, 'h-8 w-8 text-xs')}
            <div class="min-w-0 flex-1">
              <textarea
                id="comment-input"
                placeholder="Kommentar schreiben…"
                rows="3"
                class="w-full resize-none rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
              ></textarea>
              <div class="mt-2 flex justify-end">
                <button type="submit" class="rounded-full bg-stone-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-800">
                  Senden
                </button>
              </div>
            </div>
          </form>
        ` : `
          <div class="mt-6 rounded-2xl border border-dashed border-stone-300 p-5 text-center">
            <p class="text-sm text-stone-600">
              <a href="account.html" class="font-medium text-emerald-700 hover:underline">Anmelden</a>, um zu kommentieren.
            </p>
          </div>
        `}
      </section>
    </div>
  `
}

// ── New post modal ────────────────────────────────────────────────────
function renderNewPostModal() {
  if (!state.showNewPost) return ''
  return `
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Neuer Beitrag">
      <button data-action="close-new-post" class="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" aria-label="Schließen"></button>
      <div class="relative z-10 w-full max-w-lg rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-6 shadow-[0_-24px_60px_rgba(28,25,23,0.18)] sm:rounded-[2rem] sm:shadow-[0_24px_60px_rgba(28,25,23,0.18)]">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-display text-xl font-semibold text-stone-950">Neuer Beitrag</h2>
          <button data-action="close-new-post" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 transition hover:bg-stone-100" aria-label="Schließen">×</button>
        </div>
        <form id="new-post-form" data-action="submit-post" class="space-y-4">
          <div>
            <label for="post-title" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Titel</label>
            <input id="post-title" name="title" type="text" required placeholder="Worüber möchtest du sprechen?"
              class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
          </div>
          <div>
            <label for="post-body" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Inhalt</label>
            <textarea id="post-body" name="body" required rows="5" placeholder="Beschreibe deine Frage oder Idee…"
              class="w-full resize-none rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"></textarea>
          </div>
          <div class="flex justify-end gap-3 pt-1">
            <button type="button" data-action="close-new-post"
              class="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
              Abbrechen
            </button>
            <button type="submit"
              class="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
              Veröffentlichen
            </button>
          </div>
        </form>
      </div>
    </div>
  `
}

// ── Sidebar ───────────────────────────────────────────────────────────
function renderSidebar() {
  const me = getCurrentUser()
  const totalComments = posts.flatMap((p) => p.comments).length

  return `
    <aside class="hidden space-y-4 lg:block lg:sticky lg:top-24">
      ${me ? `
        <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
          <div class="flex items-center gap-3">
            ${avatar(me, 'h-10 w-10 text-sm')}
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-stone-950">${me.displayName}</p>
              <p class="text-xs text-stone-500">@${me.username}</p>
            </div>
          </div>
          ${roleBadge(me.role) ? `<div class="mt-3">${roleBadge(me.role)}</div>` : ''}
          <div class="mt-4 grid grid-cols-2 gap-2">
            <a href="account.html" class="rounded-full border border-stone-300 py-2 text-center text-xs font-medium text-stone-700 transition hover:bg-stone-50">Profil</a>
            <button data-action="logout" class="rounded-full border border-stone-300 py-2 text-xs font-medium text-stone-700 transition hover:border-red-300 hover:text-red-600">Abmelden</button>
          </div>
        </div>
      ` : `
        <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
          <p class="text-sm font-semibold text-stone-950">Mitmachen</p>
          <p class="mt-1.5 text-xs leading-5 text-stone-500">Melde dich an, um Beiträge zu erstellen, zu kommentieren und zu voten.</p>
          <a href="account.html" class="mt-4 block rounded-full bg-stone-950 py-2.5 text-center text-sm font-medium text-white transition hover:bg-emerald-800">Anmelden</a>
        </div>
      `}

      <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
        <p class="text-xs font-semibold uppercase tracking-wider text-stone-500">Über das Forum</p>
        <p class="mt-2 text-xs leading-5 text-stone-600">Stelle Fragen, teile Ideen zur urbanen Landwirtschaft und diskutiere mit der Community.</p>
        <div class="mt-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-stone-50 p-3">
            <p class="font-display text-xl font-semibold text-stone-950">${posts.length}</p>
            <p class="text-xs text-stone-500">Beiträge</p>
          </div>
          <div class="rounded-xl bg-stone-50 p-3">
            <p class="font-display text-xl font-semibold text-stone-950">${totalComments}</p>
            <p class="text-xs text-stone-500">Kommentare</p>
          </div>
        </div>
      </div>
    </aside>
  `
}

// ── Feed ──────────────────────────────────────────────────────────────
function renderFeed() {
  const me = getCurrentUser()
  const sorted = sortedPosts()

  return `
    <div class="mx-auto max-w-7xl px-5 py-8 lg:px-6">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 class="font-display text-2xl font-semibold text-stone-950">Forum</h2>
          <p class="mt-0.5 text-sm text-stone-500">Fragen, Ideen & Diskussionen rund um den FoodConnectMarkt</p>
        </div>
        ${me ? `
          <button data-action="open-new-post"
            class="shrink-0 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
            + Neuer Beitrag
          </button>
        ` : `
          <a href="account.html"
            class="shrink-0 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
            Anmelden
          </a>
        `}
      </div>

      <div class="mb-5 flex w-fit items-center gap-1 rounded-full border border-stone-200 bg-white/80 p-1">
        ${[
          { value: 'hot', label: '🔥 Beliebt' },
          { value: 'new', label: '✨ Neu' },
          { value: 'top', label: '⭐ Top' },
        ]
          .map(
            (opt) => `
              <button data-action="set-sort" data-value="${opt.value}"
                class="rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  state.sortBy === opt.value
                    ? 'bg-stone-950 text-white'
                    : 'text-stone-600 hover:bg-stone-100'
                }">
                ${opt.label}
              </button>
            `,
          )
          .join('')}
      </div>

      <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div class="space-y-3">
          ${
            sorted.length > 0
              ? sorted.map(renderPostCard).join('')
              : `<div class="rounded-2xl border border-dashed border-stone-300 py-12 text-center text-sm text-stone-400">Noch keine Beiträge.</div>`
          }
        </div>
        ${renderSidebar()}
      </div>
    </div>
  `
}

// ── Main render ───────────────────────────────────────────────────────
function render() {
  const content = state.view === 'post' ? renderPostDetail() : renderFeed()

  app.innerHTML =
    renderPageFrame({ activePage: 'forum', hero: '', content }) + renderNewPostModal()

  setupRevealObserver(app)
  bindPageSelect(app)
}

// ── Handlers ──────────────────────────────────────────────────────────
app.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]')
  if (!el) return
  const { action, id, value } = el.dataset

  switch (action) {
    case 'open-post':
      state.view = 'post'
      state.selectedPostId = id
      window.scrollTo({ top: 0, behavior: 'smooth' })
      render()
      break

    case 'back-to-feed':
      state.view = 'feed'
      state.selectedPostId = null
      render()
      break

    case 'set-sort':
      state.sortBy = value
      render()
      break

    case 'open-new-post': {
      if (!getCurrentUser()) { window.location.href = 'account.html'; return }
      state.showNewPost = true
      render()
      document.getElementById('post-title')?.focus()
      break
    }

    case 'close-new-post':
      state.showNewPost = false
      render()
      break

    case 'vote-post': {
      if (!getCurrentUser()) return
      const post = posts.find((p) => p.id === id)
      if (!post) return
      const v = parseInt(value)
      const cur = post.userVote ?? 0
      post.votes += v === cur ? -v : v - cur
      post.userVote = v === cur ? 0 : v
      render()
      break
    }

    case 'vote-comment': {
      if (!getCurrentUser()) return
      for (const post of posts) {
        const c = post.comments.find((c) => c.id === id)
        if (c) {
          const v = parseInt(value)
          const cur = c.userVote ?? 0
          c.votes += v === cur ? -v : v - cur
          c.userVote = v === cur ? 0 : v
          break
        }
      }
      render()
      break
    }

    case 'delete-post': {
      const me = getCurrentUser()
      if (!me) return
      const post = posts.find((p) => p.id === id)
      if (!post) return
      if (me.id !== post.authorId && me.role !== 'administrator' && me.role !== 'moderator') return
      if (!confirm('Beitrag wirklich löschen?')) return
      posts = posts.filter((p) => p.id !== id)
      state.view = 'feed'
      state.selectedPostId = null
      render()
      break
    }

    case 'delete-comment': {
      const me = getCurrentUser()
      if (!me) return
      for (const post of posts) {
        const idx = post.comments.findIndex((c) => c.id === id)
        if (idx !== -1) {
          const c = post.comments[idx]
          if (me.id !== c.authorId && me.role !== 'administrator' && me.role !== 'moderator') return
          post.comments.splice(idx, 1)
          break
        }
      }
      render()
      break
    }

    case 'logout':
      localStorage.removeItem(AUTH_KEY)
      render()
      break
  }
})

app.addEventListener('submit', (e) => {
  e.preventDefault()
  const { action } = e.target.dataset
  const me = getCurrentUser()
  if (!me) return

  if (action === 'submit-post') {
    const title = e.target.querySelector('#post-title')?.value?.trim()
    const body = e.target.querySelector('#post-body')?.value?.trim()
    if (!title || !body) return
    posts.unshift({
      id: `p${nextPostId++}`,
      authorId: me.id,
      title,
      body,
      createdAt: new Date().toISOString(),
      votes: 0,
      userVote: 0,
      comments: [],
    })
    state.showNewPost = false
    state.sortBy = 'new'
    render()
  }

  if (action === 'submit-comment') {
    const input = e.target.querySelector('#comment-input')
    const body = input?.value?.trim()
    if (!body) return
    const post = posts.find((p) => p.id === state.selectedPostId)
    if (!post) return
    post.comments.push({
      id: `c${nextCommentId++}`,
      postId: post.id,
      authorId: me.id,
      body,
      createdAt: new Date().toISOString(),
      votes: 0,
      userVote: 0,
    })
    render()
    setTimeout(() => {
      document
        .querySelector('[data-comment-id]:last-child')
        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 50)
  }
})

render()
