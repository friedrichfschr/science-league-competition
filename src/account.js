import './style.css'
import { forumUsers } from './data.js'
import { bindPageSelect, renderPageFrame, setupRevealObserver } from './shared.js'

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

function login(userId) {
  localStorage.setItem(AUTH_KEY, JSON.stringify({ userId }))
}

function logout() {
  localStorage.removeItem(AUTH_KEY)
}

// ── Helpers ───────────────────────────────────────────────────────────
function roleBadge(role) {
  if (role === 'administrator')
    return `<span class="inline-flex items-center rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Administrator</span>`
  if (role === 'moderator')
    return `<span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Moderator</span>`
  return `<span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-stone-600">Mitglied</span>`
}

function bigAvatar(user) {
  const color =
    user.role === 'administrator'
      ? 'bg-stone-950 text-white'
      : user.role === 'moderator'
        ? 'bg-amber-400 text-stone-950'
        : 'bg-emerald-100 text-emerald-800'
  return `<span class="grid h-20 w-20 shrink-0 place-items-center rounded-full ${color} text-2xl font-semibold" aria-hidden="true">${user.initials}</span>`
}

// ── State ─────────────────────────────────────────────────────────────
const state = { error: '' }
const app = document.querySelector('#app')

// ── Login view ────────────────────────────────────────────────────────
function renderLogin() {
  return `
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <h2 class="font-display text-2xl font-semibold text-stone-950">Anmelden</h2>
      <p class="mt-1 text-sm text-stone-500">Nutze einen der Test-Zugänge unten oder gib Benutzername und Passwort ein.</p>

      <!-- Demo accounts -->
      <div class="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-4">
        <p class="mb-3 text-[0.65rem] font-semibold uppercase tracking-wider text-stone-500">Test-Zugänge</p>
        <div class="space-y-1">
          ${forumUsers
            .map(
              (u) => `
              <button data-action="quick-login" data-id="${u.id}"
                class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition hover:bg-white">
                <span class="flex items-center gap-2">
                  <span class="font-semibold text-stone-800">${u.username}</span>
                  <span class="font-mono text-stone-400">${u.password}</span>
                </span>
                ${u.role !== 'member' ? roleBadge(u.role) : ''}
              </button>
            `,
            )
            .join('')}
        </div>
      </div>

      <!-- Login form -->
      <form id="login-form" data-action="login" class="mt-6 space-y-4" novalidate>
        ${state.error ? `<p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">${state.error}</p>` : ''}
        <div>
          <label for="login-username" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Benutzername</label>
          <input id="login-username" name="username" type="text" required autocomplete="username" placeholder="benutzername"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
        </div>
        <div>
          <label for="login-password" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Passwort</label>
          <input id="login-password" name="password" type="password" required autocomplete="current-password" placeholder="••••••••"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
        </div>
        <button type="submit" class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">
          Anmelden
        </button>
      </form>
    </div>
  `
}

// ── Profile view ──────────────────────────────────────────────────────
function renderProfile(user) {
  return `
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <div class="rounded-[2rem] border border-stone-200 bg-white/90 p-8 text-center shadow-[var(--shadow-md)]">
        <div class="flex justify-center">
          ${bigAvatar(user)}
        </div>
        <h2 class="font-display mt-5 text-2xl font-semibold text-stone-950">${user.displayName}</h2>
        <p class="mt-1 text-sm text-stone-500">@${user.username}</p>
        <div class="mt-3 flex justify-center">${roleBadge(user.role)}</div>
        <div class="mt-8 grid grid-cols-2 gap-3">
          <a href="forum.html"
            class="rounded-full border border-stone-300 py-2.5 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-50">
            Zum Forum
          </a>
          <button data-action="logout"
            class="rounded-full bg-stone-950 py-2.5 text-sm font-medium text-white transition hover:bg-red-700">
            Abmelden
          </button>
        </div>
      </div>
    </div>
  `
}

// ── Render ────────────────────────────────────────────────────────────
function render() {
  const user = getCurrentUser()
  app.innerHTML = renderPageFrame({
    activePage: 'account',
    hero: '',
    content: user ? renderProfile(user) : renderLogin(),
  })
  setupRevealObserver(app)
  bindPageSelect(app)
}

// ── Handlers ──────────────────────────────────────────────────────────
app.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]')
  if (!el) return
  const { action, id } = el.dataset

  if (action === 'logout') {
    logout()
    state.error = ''
    render()
  }

  if (action === 'quick-login') {
    const user = forumUsers.find((u) => u.id === id)
    if (user) { login(user.id); render() }
  }
})

app.addEventListener('submit', (e) => {
  e.preventDefault()
  if (e.target.dataset.action !== 'login') return

  const username = e.target.username.value.trim().toLowerCase()
  const password = e.target.password.value
  const user = forumUsers.find((u) => u.username === username && u.password === password)

  if (!user) {
    state.error = 'Ungültiger Benutzername oder Passwort.'
    render()
    document.getElementById('login-username')?.focus()
    return
  }

  login(user.id)
  state.error = ''
  render()
})

render()
