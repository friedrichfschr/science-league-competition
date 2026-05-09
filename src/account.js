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

// ── Helpers ───────────────────────────────────────────────────────────
function roleBadge(role) {
  if (role === 'administrator')
    return `<span class="inline-flex items-center rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Administrator</span>`
  if (role === 'moderator')
    return `<span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Moderator</span>`
  return `<span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-stone-600">Mitglied</span>`
}

function bigAvatar(user) {
  const initials = (user.displayName || user.username || '?')
    .split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  const color =
    user.role === 'administrator' ? 'bg-stone-950 text-white'
    : user.role === 'moderator'   ? 'bg-amber-400 text-stone-950'
    :                               'bg-emerald-100 text-emerald-800'
  return `<span class="grid h-20 w-20 shrink-0 place-items-center rounded-full ${color} text-2xl font-semibold" aria-hidden="true">${initials}</span>`
}

// ── State ─────────────────────────────────────────────────────────────
const state = {
  user: getStoredUser(),
  loading: false,
  error: '',
}

const app = document.querySelector('#app')

// ── Views ─────────────────────────────────────────────────────────────
function renderLogin() {
  return `
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <h2 class="font-display text-2xl font-semibold text-stone-950">Anmelden</h2>
      <p class="mt-1 text-sm text-stone-500">Melde dich mit deinen Zugangsdaten an.</p>
      <form id="login-form" data-action="login" class="mt-8 space-y-4" novalidate>
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
        <button type="submit" ${state.loading ? 'disabled' : ''}
          class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
          ${state.loading ? 'Wird angemeldet…' : 'Anmelden'}
        </button>
      </form>
    </div>`
}

function renderProfile(user) {
  return `
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <div class="rounded-[2rem] border border-stone-200 bg-white/90 p-8 text-center shadow-[var(--shadow-md)]">
        <div class="flex justify-center">${bigAvatar(user)}</div>
        <h2 class="font-display mt-5 text-2xl font-semibold text-stone-950">${user.displayName ?? user.username}</h2>
        <p class="mt-1 text-sm text-stone-500">@${user.username}</p>
        <div class="mt-3 flex justify-center">${roleBadge(user.role)}</div>
        <div class="mt-8 grid grid-cols-2 gap-3">
          <a href="forum.html" class="rounded-full border border-stone-300 py-2.5 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-50">Zum Forum</a>
          <button data-action="logout" class="rounded-full bg-stone-950 py-2.5 text-sm font-medium text-white transition hover:bg-red-700">Abmelden</button>
        </div>
      </div>
    </div>`
}

// ── Render ────────────────────────────────────────────────────────────
function render() {
  app.innerHTML = renderPageFrame({
    activePage: 'account',
    hero: '',
    content: state.user ? renderProfile(state.user) : renderLogin(),
  })
  setupRevealObserver(app)
  bindPageSelect(app)
}

// ── Init: validate stored session ─────────────────────────────────────
async function init() {
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
  render()
}

// ── Handlers ──────────────────────────────────────────────────────────
app.addEventListener('click', async (e) => {
  const el = e.target.closest('[data-action]')
  if (!el) return

  if (el.dataset.action === 'logout') {
    try { await apiFetch('/api/auth/logout', { method: 'POST' }) } catch { /* ignore */ }
    clearAuth()
    state.user = null
    state.error = ''
    render()
  }
})

app.addEventListener('submit', async (e) => {
  e.preventDefault()
  if (e.target.dataset.action !== 'login') return

  const username = e.target.username.value.trim()
  const password = e.target.password.value

  state.loading = true
  state.error = ''
  render()

  try {
    const data = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    saveAuth(data.token, data.user)
    state.user = data.user
    state.error = ''
  } catch (err) {
    state.error = err.message || 'Ungültiger Benutzername oder Passwort.'
  } finally {
    state.loading = false
    render()
  }
})

init()
