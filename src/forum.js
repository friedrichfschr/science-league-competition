import './style.css'
import { bindPageSelect, renderPageFrame, setupRevealObserver } from './shared.js'

const API = 'https://api.bredelicious.de'
const AUTH_KEY = 'fcm-auth'

// ── Auth helpers ──────────────────────────────────────────────────────
function getToken() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY))?.token ?? null } catch { return null }
}

function getStoredUser() {
  try { return JSON.parse(localStorage.getItem(AUTH_KEY))?.user ?? null } catch { return null }
}

function saveAuth(token, user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify({ token, user }))
}

function clearAuth() {
  localStorage.removeItem(AUTH_KEY)
}

// ── API fetch wrapper ─────────────────────────────────────────────────
async function apiFetch(path, options = {}) {
  const token = getToken()
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })
  if (res.status === 204) return null
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.message || `HTTP ${res.status}`)
  return data
}

// ── State ─────────────────────────────────────────────────────────────
const state = {
  view: 'feed',          // 'feed' | 'post'
  user: getStoredUser(), // cached from localStorage, refreshed on init
  posts: [],
  currentPost: null,     // { post, comments }
  loading: false,
  error: null,
  showNewPost: false,
  sortBy: 'new',         // 'new' | 'top' | 'hot'
}

const app = document.querySelector('#app')

// ── Helpers ───────────────────────────────────────────────────────────
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
  if (!user) return `<span class="grid ${cls} shrink-0 place-items-center rounded-full bg-stone-200 text-stone-500 font-semibold">?</span>`
  const initials = (user.displayName || user.username || '?')
    .split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  const color =
    user.role === 'administrator' ? 'bg-stone-950 text-white'
    : user.role === 'moderator'   ? 'bg-amber-400 text-stone-950'
    :                               'bg-emerald-100 text-emerald-800'
  return `<span class="grid ${cls} shrink-0 place-items-center rounded-full ${color} font-semibold" aria-hidden="true">${initials}</span>`
}

// ── Vote buttons ──────────────────────────────────────────────────────
function renderVoteButtons(entityId, votes, userVote, type) {
  const canVote = !!state.user
  const upActive = userVote === 1
  const downActive = userVote === -1
  const scoreColor = votes > 0 ? 'text-emerald-700' : votes < 0 ? 'text-red-600' : 'text-stone-500'
  return `
    <div class="flex items-center gap-1">
      <button data-action="vote-${type}" data-id="${entityId}" data-value="1"
        ${canVote ? '' : 'disabled'} aria-label="Upvote" aria-pressed="${upActive}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${upActive ? 'bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300' : canVote ? 'text-stone-400 hover:bg-stone-100 hover:text-stone-700' : 'cursor-not-allowed text-stone-300'}">▲</button>
      <span class="min-w-[1.75rem] text-center text-sm font-semibold tabular-nums ${scoreColor}">${votes}</span>
      <button data-action="vote-${type}" data-id="${entityId}" data-value="-1"
        ${canVote ? '' : 'disabled'} aria-label="Downvote" aria-pressed="${downActive}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${downActive ? 'bg-red-100 text-red-600 ring-1 ring-inset ring-red-200' : canVote ? 'text-stone-400 hover:bg-stone-100 hover:text-stone-700' : 'cursor-not-allowed text-stone-300'}">▼</button>
    </div>`
}

// ── Spinner ───────────────────────────────────────────────────────────
function renderSpinner() {
  return `<div class="flex justify-center py-16">
    <span class="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-stone-700" aria-label="Lädt…"></span>
  </div>`
}

// ── Error banner ──────────────────────────────────────────────────────
function renderError(msg) {
  return `<div class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">${msg}</div>`
}

// ── Post card ─────────────────────────────────────────────────────────
function renderPostCard(post) {
  const author = post.author
  const preview = (post.body || '').length > 160 ? post.body.slice(0, 160) + '…' : post.body
  return `
    <article class="group rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <button data-action="open-post" data-id="${post.id}" class="block w-full text-left">
        <h3 class="font-display text-lg font-semibold leading-snug text-stone-950 transition group-hover:text-emerald-800">${post.title}</h3>
        <p class="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${avatar(author)}
          <span class="font-medium text-stone-700">${author?.displayName ?? author?.username ?? 'Unbekannt'}</span>
          ${author ? roleBadge(author.role) : ''}
          <span>·</span><span>${relativeTime(post.createdAt)}</span>
          <span>·</span><span>💬 ${post.commentCount ?? 0}</span>
        </p>
        <p class="mt-3 text-sm leading-6 text-stone-600">${preview.replace(/\n/g, ' ')}</p>
      </button>
      <div class="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
        ${renderVoteButtons(post.id, post.votes ?? 0, post.userVote ?? 0, 'post')}
        <button data-action="open-post" data-id="${post.id}" class="text-xs font-medium text-stone-400 transition hover:text-emerald-700">
          ${post.commentCount ?? 0} Kommentar${(post.commentCount ?? 0) !== 1 ? 'e' : ''}
        </button>
      </div>
    </article>`
}

// ── Comment ───────────────────────────────────────────────────────────
function renderComment(comment) {
  const author = comment.author
  const canDelete = state.user &&
    (state.user.id === comment.authorId || state.user.role === 'administrator' || state.user.role === 'moderator')
  return `
    <article class="flex gap-3 border-b border-stone-100 py-4 last:border-b-0" data-comment-id="${comment.id}">
      ${avatar(author)}
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-semibold text-stone-900">${author?.displayName ?? author?.username ?? 'Unbekannt'}</span>
          ${author ? roleBadge(author.role) : ''}
          <span class="text-xs text-stone-400">${relativeTime(comment.createdAt)}</span>
          ${canDelete ? `<button data-action="delete-comment" data-id="${comment.id}" class="ml-auto text-xs text-stone-400 transition hover:text-red-500">Löschen</button>` : ''}
        </div>
        <p class="mt-1.5 text-sm leading-6 text-stone-700">${comment.body}</p>
        <div class="mt-2">${renderVoteButtons(comment.id, comment.votes ?? 0, comment.userVote ?? 0, 'comment')}</div>
      </div>
    </article>`
}

// ── Post detail ───────────────────────────────────────────────────────
function renderPostDetail() {
  if (state.loading) return `<div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">${renderSpinner()}</div>`
  if (state.error) return `<div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">${renderError(state.error)}</div>`
  if (!state.currentPost) return ''

  const { post, comments } = state.currentPost
  const author = post.author
  const canDelete = state.user &&
    (state.user.id === post.authorId || state.user.role === 'administrator' || state.user.role === 'moderator')

  return `
    <div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">
      <button data-action="back-to-feed" class="mb-6 flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900">
        ← Zurück zur Übersicht
      </button>
      <article>
        <h2 class="font-display text-2xl font-semibold leading-snug text-stone-950 sm:text-3xl">${post.title}</h2>
        <div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${avatar(author, 'h-7 w-7 text-xs')}
          <span class="font-medium text-stone-700">${author?.displayName ?? author?.username ?? 'Unbekannt'}</span>
          ${author ? roleBadge(author.role) : ''}
          <span>·</span><span>${relativeTime(post.createdAt)}</span>
        </div>
        <p class="mt-5 whitespace-pre-line text-base leading-7 text-stone-700">${post.body}</p>
        <div class="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
          ${renderVoteButtons(post.id, post.votes ?? 0, post.userVote ?? 0, 'post')}
          ${canDelete ? `<button data-action="delete-post" data-id="${post.id}" class="text-xs font-medium text-stone-400 transition hover:text-red-500">Beitrag löschen</button>` : ''}
        </div>
      </article>

      <section class="mt-8" aria-labelledby="comments-heading">
        <h3 id="comments-heading" class="text-xs font-semibold uppercase tracking-wider text-stone-500">
          ${comments.length} Kommentar${comments.length !== 1 ? 'e' : ''}
        </h3>
        <div class="mt-3">
          ${comments.length > 0
            ? comments.map(renderComment).join('')
            : `<p class="py-6 text-center text-sm text-stone-400">Noch keine Kommentare — sei der Erste!</p>`}
        </div>
        ${state.user ? `
          <form id="comment-form" data-action="submit-comment" class="mt-6 flex gap-3">
            ${avatar(state.user, 'h-8 w-8 text-xs')}
            <div class="min-w-0 flex-1">
              <textarea id="comment-input" placeholder="Kommentar schreiben…" rows="3"
                class="w-full resize-none rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"></textarea>
              <div class="mt-2 flex justify-end">
                <button type="submit" class="rounded-full bg-stone-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-800">Senden</button>
              </div>
            </div>
          </form>
        ` : `
          <div class="mt-6 rounded-2xl border border-dashed border-stone-300 p-5 text-center">
            <p class="text-sm text-stone-600"><a href="account.html" class="font-medium text-emerald-700 hover:underline">Anmelden</a>, um zu kommentieren.</p>
          </div>
        `}
      </section>
    </div>`
}

// ── New post modal ────────────────────────────────────────────────────
function renderNewPostModal() {
  if (!state.showNewPost) return ''
  return `
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <button data-action="close-new-post" class="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" aria-label="Schließen"></button>
      <div class="relative z-10 w-full max-w-lg rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-6 shadow-[0_-24px_60px_rgba(28,25,23,0.18)] sm:rounded-[2rem]">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-display text-xl font-semibold text-stone-950">Neuer Beitrag</h2>
          <button data-action="close-new-post" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100">×</button>
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
          ${state.postError ? `<p class="text-sm text-red-600">${state.postError}</p>` : ''}
          <div class="flex justify-end gap-3 pt-1">
            <button type="button" data-action="close-new-post" class="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50">Abbrechen</button>
            <button type="submit" class="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800">Veröffentlichen</button>
          </div>
        </form>
      </div>
    </div>`
}

// ── Sidebar ───────────────────────────────────────────────────────────
function renderSidebar() {
  const totalComments = state.posts.reduce((n, p) => n + (p.commentCount ?? 0), 0)
  return `
    <aside class="hidden space-y-4 lg:block lg:sticky lg:top-24">
      ${state.user ? `
        <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
          <div class="flex items-center gap-3">
            ${avatar(state.user, 'h-10 w-10 text-sm')}
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-stone-950">${state.user.displayName ?? state.user.username}</p>
              <p class="text-xs text-stone-500">@${state.user.username}</p>
            </div>
          </div>
          ${roleBadge(state.user.role) ? `<div class="mt-3">${roleBadge(state.user.role)}</div>` : ''}
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
            <p class="font-display text-xl font-semibold text-stone-950">${state.posts.length}</p>
            <p class="text-xs text-stone-500">Beiträge</p>
          </div>
          <div class="rounded-xl bg-stone-50 p-3">
            <p class="font-display text-xl font-semibold text-stone-950">${totalComments}</p>
            <p class="text-xs text-stone-500">Kommentare</p>
          </div>
        </div>
      </div>
    </aside>`
}

// ── Feed ──────────────────────────────────────────────────────────────
function renderFeed() {
  return `
    <div class="mx-auto max-w-7xl px-5 py-8 lg:px-6">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 class="font-display text-2xl font-semibold text-stone-950">Forum</h2>
          <p class="mt-0.5 text-sm text-stone-500">Fragen, Ideen & Diskussionen rund um den FoodConnectMarkt</p>
        </div>
        ${state.user ? `
          <button data-action="open-new-post" class="shrink-0 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">+ Neuer Beitrag</button>
        ` : `
          <a href="account.html" class="shrink-0 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50">Anmelden</a>
        `}
      </div>
      <div class="mb-5 flex w-fit items-center gap-1 rounded-full border border-stone-200 bg-white/80 p-1">
        ${[
          { value: 'new', label: 'Neueste' },
          { value: 'top', label: 'Beliebteste' },
          { value: 'hot', label: 'Meiste Antworten' },
        ].map((opt) => `
          <button data-action="set-sort" data-value="${opt.value}"
            class="rounded-full px-4 py-1.5 text-xs font-medium transition ${state.sortBy === opt.value ? 'bg-stone-950 text-white' : 'text-stone-600 hover:bg-stone-100'}">
            ${opt.label}
          </button>`).join('')}
      </div>
      <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div class="space-y-3">
          ${state.loading ? renderSpinner()
            : state.error ? renderError(state.error)
            : state.posts.length > 0 ? state.posts.map(renderPostCard).join('')
            : `<div class="rounded-2xl border border-dashed border-stone-300 py-12 text-center text-sm text-stone-400">Noch keine Beiträge.</div>`}
        </div>
        ${renderSidebar()}
      </div>
    </div>`
}

// ── Render ────────────────────────────────────────────────────────────
function render() {
  app.innerHTML =
    renderPageFrame({ activePage: 'forum', hero: '', content: state.view === 'post' ? renderPostDetail() : renderFeed() }) +
    renderNewPostModal()
  setupRevealObserver(app)
  bindPageSelect(app)
}

// ── API actions ───────────────────────────────────────────────────────
async function loadPosts() {
  state.loading = true
  state.error = null
  render()
  try {
    const data = await apiFetch(`/api/forum/posts?sort=${state.sortBy}`)
    state.posts = data.posts ?? data
  } catch (err) {
    state.error = err.message
  } finally {
    state.loading = false
    render()
  }
}

async function loadPost(id) {
  state.loading = true
  state.error = null
  render()
  try {
    const data = await apiFetch(`/api/forum/posts/${id}`)
    state.currentPost = { post: data.post ?? data, comments: data.comments ?? [] }
  } catch (err) {
    state.error = err.message
  } finally {
    state.loading = false
    render()
  }
}

async function init() {
  // Validate stored token against server
  if (getToken()) {
    try {
      const data = await apiFetch('/api/auth/me')
      state.user = data.user ?? data
      saveAuth(getToken(), state.user)
    } catch {
      clearAuth()
      state.user = null
    }
  }
  await loadPosts()
}

// ── Event handlers ────────────────────────────────────────────────────
app.addEventListener('click', async (e) => {
  const el = e.target.closest('[data-action]')
  if (!el) return
  const { action, id, value } = el.dataset

  switch (action) {
    case 'open-post':
      state.view = 'post'
      state.selectedPostId = id
      window.scrollTo({ top: 0, behavior: 'smooth' })
      await loadPost(id)
      break

    case 'back-to-feed':
      state.view = 'feed'
      state.currentPost = null
      render()
      break

    case 'set-sort':
      state.sortBy = value
      await loadPosts()
      break

    case 'open-new-post':
      if (!state.user) { window.location.href = 'account.html'; return }
      state.showNewPost = true
      state.postError = null
      render()
      document.getElementById('post-title')?.focus()
      break

    case 'close-new-post':
      state.showNewPost = false
      render()
      break

    case 'vote-post': {
      if (!state.user) return
      const v = parseInt(value)
      try {
        const res = await apiFetch(`/api/forum/posts/${id}/vote`, {
          method: 'POST',
          body: JSON.stringify({ value: v }),
        })
        // Update in feed list
        const post = state.posts.find((p) => p.id === id)
        if (post) { post.votes = res.votes ?? post.votes; post.userVote = res.userVote ?? v }
        // Update in detail view
        if (state.currentPost?.post?.id === id) {
          state.currentPost.post.votes = res.votes ?? state.currentPost.post.votes
          state.currentPost.post.userVote = res.userVote ?? v
        }
      } catch { /* ignore */ }
      render()
      break
    }

    case 'vote-comment': {
      if (!state.user) return
      const v = parseInt(value)
      try {
        const res = await apiFetch(`/api/forum/comments/${id}/vote`, {
          method: 'POST',
          body: JSON.stringify({ value: v }),
        })
        if (state.currentPost) {
          const c = state.currentPost.comments.find((c) => c.id === id)
          if (c) { c.votes = res.votes ?? c.votes; c.userVote = res.userVote ?? v }
        }
      } catch { /* ignore */ }
      render()
      break
    }

    case 'delete-post': {
      if (!state.user || !confirm('Beitrag wirklich löschen?')) return
      try {
        await apiFetch(`/api/forum/posts/${id}`, { method: 'DELETE' })
        state.view = 'feed'
        state.currentPost = null
        await loadPosts()
      } catch (err) {
        alert(err.message)
      }
      break
    }

    case 'delete-comment': {
      if (!state.user) return
      try {
        await apiFetch(`/api/forum/comments/${id}`, { method: 'DELETE' })
        if (state.currentPost) {
          state.currentPost.comments = state.currentPost.comments.filter((c) => c.id !== id)
        }
      } catch (err) {
        alert(err.message)
      }
      render()
      break
    }

    case 'logout':
      try { await apiFetch('/api/auth/logout', { method: 'POST' }) } catch { /* ignore */ }
      clearAuth()
      state.user = null
      render()
      break
  }
})

app.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { action } = e.target.dataset
  if (!state.user) return

  if (action === 'submit-post') {
    const title = e.target.querySelector('#post-title')?.value?.trim()
    const body = e.target.querySelector('#post-body')?.value?.trim()
    if (!title || !body) return
    const btn = e.target.querySelector('[type=submit]')
    btn.disabled = true
    try {
      await apiFetch('/api/forum/posts', { method: 'POST', body: JSON.stringify({ title, body }) })
      state.showNewPost = false
      state.sortBy = 'new'
      await loadPosts()
    } catch (err) {
      state.postError = err.message
      btn.disabled = false
      render()
    }
  }

  if (action === 'submit-comment') {
    const input = e.target.querySelector('#comment-input')
    const body = input?.value?.trim()
    if (!body || !state.currentPost) return
    const btn = e.target.querySelector('[type=submit]')
    btn.disabled = true
    try {
      const data = await apiFetch(`/api/forum/posts/${state.currentPost.post.id}/comments`, {
        method: 'POST',
        body: JSON.stringify({ body }),
      })
      state.currentPost.comments.push(data.comment ?? data)
      render()
      setTimeout(() => {
        document.querySelector('[data-comment-id]:last-child')
          ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 50)
    } catch (err) {
      alert(err.message)
      btn.disabled = false
    }
  }
})

init()
