import './style.css'
import { API } from './api.js'
import { bindPageSelect, renderPageFrame, setupRevealObserver } from './shared.js'

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
  return `<span class="grid h-20 w-20 place-items-center rounded-full ${color} text-2xl font-semibold" aria-hidden="true">${initials}</span>`
}

function inputClass() {
  return 'w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100'
}

function labelClass() {
  return 'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500'
}

// ── State ─────────────────────────────────────────────────────────────
const state = {
  user: getStoredUser(),
  tab: 'login',   // 'login' | 'register'
  loading: false,
  error: '',
  registered: false,
}

const app = document.querySelector('#app')

// ── Views ─────────────────────────────────────────────────────────────
function renderTabBar() {
  return `
    <div class="mt-6 flex rounded-full border border-stone-200 bg-stone-100 p-1">
      <button data-action="set-tab" data-value="login"
        class="flex-1 rounded-full py-2 text-sm font-medium transition ${state.tab === 'login' ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-500 hover:text-stone-700'}">
        Anmelden
      </button>
      <button data-action="set-tab" data-value="register"
        class="flex-1 rounded-full py-2 text-sm font-medium transition ${state.tab === 'register' ? 'bg-white text-stone-950 shadow-sm' : 'text-stone-500 hover:text-stone-700'}">
        Registrieren
      </button>
    </div>`
}

function renderError() {
  return state.error
    ? `<p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">${state.error}</p>`
    : ''
}

function renderLoginForm() {
  return `
    <form id="auth-form" data-action="login" class="mt-6 space-y-4" novalidate>
      ${renderError()}
      <div>
        <label for="f-email" class="${labelClass()}">E-Mail</label>
        <input id="f-email" name="email" type="email" required autocomplete="email" placeholder="deine@email.de" class="${inputClass()}" />
      </div>
      <div>
        <label for="f-password" class="${labelClass()}">Passwort</label>
        <input id="f-password" name="password" type="password" required autocomplete="current-password" placeholder="••••••••" class="${inputClass()}" />
      </div>
      <button type="submit" ${state.loading ? 'disabled' : ''}
        class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
        ${state.loading ? 'Wird angemeldet…' : 'Anmelden'}
      </button>
    </form>`
}

function renderRegisterForm() {
  if (state.registered) {
    return `
      <div class="mt-6 rounded-xl bg-emerald-50 px-4 py-5 text-center ring-1 ring-inset ring-emerald-200">
        <p class="text-sm font-semibold text-emerald-800">Konto erstellt!</p>
        <p class="mt-1 text-sm text-emerald-700">Bitte bestätige deine E-Mail-Adresse, um dich anmelden zu können.</p>
      </div>`
  }
  return `
    <form id="auth-form" data-action="register" class="mt-6 space-y-4" novalidate>
      ${renderError()}
      <div>
        <label for="f-displayname" class="${labelClass()}">Name</label>
        <input id="f-displayname" name="displayName" type="text" required autocomplete="name" placeholder="Dein angezeigter Name" class="${inputClass()}" />
      </div>
      <div>
        <label for="f-email" class="${labelClass()}">E-Mail</label>
        <input id="f-email" name="email" type="email" required autocomplete="email" placeholder="deine@email.de" class="${inputClass()}" />
      </div>
      <div>
        <label for="f-password" class="${labelClass()}">Passwort</label>
        <input id="f-password" name="password" type="password" required autocomplete="new-password" placeholder="••••••••" class="${inputClass()}" />
      </div>
      <div>
        <label for="f-password2" class="${labelClass()}">Passwort bestätigen</label>
        <input id="f-password2" name="password2" type="password" required autocomplete="new-password" placeholder="••••••••" class="${inputClass()}" />
      </div>
      <button type="submit" ${state.loading ? 'disabled' : ''}
        class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
        ${state.loading ? 'Wird registriert…' : 'Konto erstellen'}
      </button>
    </form>`
}

function renderAuth() {
  return `
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <h2 class="font-display text-2xl font-semibold text-stone-950">Konto</h2>
      <p class="mt-1 text-sm text-stone-500">
        ${state.tab === 'login' ? 'Melde dich mit deinen Zugangsdaten an.' : 'Erstelle ein neues Konto.'}
      </p>
      ${renderTabBar()}
      ${state.tab === 'login' ? renderLoginForm() : renderRegisterForm()}
    </div>`
}

function renderProfile(user) {
  return `
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <div class="rounded-[2rem] border border-stone-200 bg-white/90 p-8 text-center shadow-[var(--shadow-md)]">
        <div class="flex justify-center">${bigAvatar(user)}</div>
        <h2 class="font-display mt-5 text-2xl font-semibold text-stone-950">${user.displayName ?? user.username ?? user.email}</h2>
        <p class="mt-1 text-sm text-stone-500">${user.email}</p>
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
    content: state.user ? renderProfile(state.user) : renderAuth(),
  })
  setupRevealObserver(app)
  bindPageSelect(app)
}

// ── Init ──────────────────────────────────────────────────────────────
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
  const { action, value } = el.dataset

  if (action === 'set-tab') {
    state.tab = value
    state.error = ''
    state.registered = false
    render()
    document.getElementById('f-username')?.focus()
  }

  if (action === 'logout') {
    try { await apiFetch('/api/auth/logout', { method: 'POST' }) } catch { /* ignore */ }
    clearAuth()
    state.user = null
    state.error = ''
    render()
  }
})

app.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { action } = e.target.dataset
  if (!['login', 'register'].includes(action)) return

  const fd = new FormData(e.target)
  state.loading = true
  state.error = ''
  render()

  try {
    if (action === 'login') {
      const data = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: fd.get('email').trim(),
          password: fd.get('password'),
        }),
      })
      saveAuth(data.token, data.user)
      state.user = data.user
    }

    if (action === 'register') {
      const password = fd.get('password')
      const password2 = fd.get('password2')
      if (password !== password2) {
        state.error = 'Die Passwörter stimmen nicht überein.'
        state.loading = false
        render()
        return
      }
      await apiFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          displayName: fd.get('displayName').trim(),
          email: fd.get('email').trim(),
          password,
        }),
      })
      // Server requires email confirmation before login — no token returned
      state.registered = true
    }
  } catch (err) {
    state.error = err.message || 'Ein Fehler ist aufgetreten.'
  } finally {
    state.loading = false
    render()
  }
})

init()
