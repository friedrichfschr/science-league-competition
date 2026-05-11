import './style.css'
import { competitionFacts, trustHighlights } from './data.js'

import { API } from './api.js'
const NEWSLETTER_API = `${API}/api/newsletter/subscribe`
import {
  bindPageSelect,
  renderHero,
  renderPageFrame,
  setupRevealObserver,
} from './shared.js'

const app = document.querySelector('#app')

const heroSupportingCard = `
  <p class="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-emerald-300">Unser Ansatz</p>
  <h2 class="font-display mt-4 text-2xl font-semibold tracking-tight">Drei Ideen. Ein Gebäude.</h2>
  <ul class="mt-6 space-y-1" role="list">
    ${trustHighlights
      .map(
        (item, i) => `
          <li class="flex items-start gap-3 border-b border-white/10 py-3.5 last:border-b-0">
            <span class="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-[0.7rem] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">${i + 1}</span>
            <span class="text-sm leading-6 text-stone-200">${item}</span>
          </li>
        `,
      )
      .join('')}
  </ul>
`

const hero = renderHero({
  eyebrow: competitionFacts.season,
  title: 'Städte brauchen Lebensmittel. Wir produzieren sie vor Ort.',
  intro:
    'Bis 2050 leben 68 % der Weltbevölkerung in Städten — bei immer weniger landwirtschaftlicher Fläche und enormen Transportemissionen. Der FoodConnectMarkt zeigt einen anderen Weg.',
  supportingCard: heroSupportingCard,
})

const blogPosts = [
  {
    label: 'Spieltag 1',
    title: 'Spieltag 1 – Bre-delicious',
    summary: 'Wir stellen uns vor: Neun Schülerinnen und Schüler mit Aufgaben in Programmierung, Design und Technik — und der Vision eines FoodConnectMarkts.',
    href: 'https://mint-community.de/science-league-einreichungen/spieltag-1-bre-delicious/',
    image: 'https://mint-community.de/wp-content/uploads/jet-form-builder/c15014ad44f999e0ddd954d7b17db88d/2025/12/IMG_2251-scaled.jpeg',
  },
  {
    label: 'Spieltag 2',
    title: 'Spieltag 2 – Bre-delicious',
    summary: 'Unser Konzept nimmt Form an: zwei Türme, ein Keller — und ein Markt, der Vertical Farming, Einkauf und Gemeinschaft verbindet.',
    href: 'https://mint-community.de/science-league-einreichungen/spieltag-2-bre-delicious/',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=75',
  },
  {
    label: 'Spieltag 3',
    title: 'Spieltag 3 – Bre-delicious',
    summary: 'Wir vertiefen das Bewässerungssystem und den Pflanzenanbau im achtgeschossigen Turm — mit Partnern aus der regionalen Landwirtschaft.',
    href: 'https://mint-community.de/science-league-einreichungen/spieltag-3-bre-delicious/',
    image: 'https://mint-community.de/wp-content/uploads/jet-form-builder/2bbdfff344458044d3226c257a1c17e0/2026/03/34dc71d5-0699-4872-8225-49419222f6fa.jpeg',
  },
]

const content = `
  <!-- Science League -->
  <section class="px-5 py-12 lg:px-6 lg:py-16" aria-labelledby="science-league-heading">
    <div class="mx-auto max-w-7xl">
      <div class="reveal grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="scroll-hint">Der Wettbewerb</p>
          <h2 id="science-league-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            Was ist die Science League?
          </h2>
          <p class="mt-5 max-w-2xl text-base leading-8 text-stone-600">
            Die Science League ist ein Schülerwettbewerb des <a href="https://mint-community.de/scienceleague/" target="_blank" rel="noreferrer" class="font-medium text-emerald-800 underline-offset-2 hover:underline">Stifterverbands</a>, bei dem Teams aus ganz Deutschland MINT-Projekte entwickeln und in mehreren Spieltagen präsentieren. Unser Team bre-delicious nimmt in der Saison 2025/2026 teil.
          </p>
          <a
            href="https://mint-community.de/science-league-teams/bre-delicious-saison-2025-2026/"
            target="_blank"
            rel="noreferrer"
            class="mt-6 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-stone-50"
          >
            Unser Teamprofil ↗
          </a>
        </div>
        <div class="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=340&q=75"
            alt="Schülerinnen und Schüler arbeiten gemeinsam an einem Projekt"
            class="h-48 w-72 rounded-[1.5rem] object-cover opacity-85 ring-1 ring-stone-200"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Blog posts -->
  <section class="px-5 pb-12 lg:px-6 lg:pb-16" aria-labelledby="posts-heading">
    <div class="mx-auto max-w-7xl">
      <div class="reveal mb-8">
        <p class="scroll-hint">Einreichungen</p>
        <h2 id="posts-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Unsere Spieltage.
        </h2>
      </div>
      <div class="grid gap-5 sm:grid-cols-3">
        ${blogPosts.map((post, i) => `
          <a
            href="${post.href}"
            target="_blank"
            rel="noreferrer"
            class="reveal reveal-d${i + 1} card-lift group flex flex-col overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white/90 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]"
          >
            <div class="overflow-hidden">
              <img
                src="${post.image}"
                alt="${post.title}"
                class="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <div class="flex flex-1 flex-col p-5">
              <span class="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-emerald-700">${post.label}</span>
              <h3 class="font-display mt-2 text-lg font-semibold text-stone-950">${post.title}</h3>
              <p class="mt-2 flex-1 text-sm leading-6 text-stone-600">${post.summary}</p>
              <span class="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 transition group-hover:gap-2">
                Lesen <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="px-5 py-12 lg:px-6 lg:py-20" aria-labelledby="newsletter-heading">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6">

        <!-- Newsletter signup -->
        <article class="reveal relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 p-8 shadow-[0_30px_80px_-20px_rgba(6,95,70,0.5)] ring-1 ring-inset ring-white/5 sm:p-10">
          <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div aria-hidden="true" class="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl"></div>
          <div class="relative">
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-emerald-300">Newsletter</p>
            <h2 id="newsletter-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bleib auf dem Laufenden.
            </h2>
            <p class="mt-5 text-base leading-8 text-stone-300">
              Trag dich ein und erhalte Neuigkeiten rund um urbane Lebensmittelproduktion, den Fortschritt unseres Modells und Veranstaltungen des FoodConnectMarkts.
            </p>

            <form id="newsletter-form" novalidate class="mt-8" aria-label="Newsletter-Anmeldung">
              <div id="newsletter-idle">
                <label for="newsletter-email" class="block text-sm font-medium text-stone-300">
                  E-Mail-Adresse
                </label>
                <div class="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    placeholder="du@beispiel.de"
                    class="min-w-0 flex-1 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm text-white placeholder:text-stone-500 transition focus:border-emerald-400 focus:bg-white/12 focus:ring-2 focus:ring-emerald-400/40"
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit"
                    class="btn-press inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span id="newsletter-btn-label">Anmelden</span>
                    <span id="newsletter-spinner" class="hidden h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true"></span>
                  </button>
                </div>
                <p id="newsletter-error" class="mt-3 hidden text-sm text-red-300" role="alert" aria-live="polite"></p>
                <p class="mt-4 text-xs leading-5 text-stone-500">
                  Kein Spam. Jederzeit abbestellbar. Du erhältst zuerst eine Bestätigungs-E-Mail.
                </p>
              </div>

              <div id="newsletter-success" class="hidden">
                <div class="flex items-start gap-4">
                  <span aria-hidden="true" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-xl text-emerald-300">✓</span>
                  <div>
                    <p class="font-semibold text-white">Fast geschafft!</p>
                    <p class="mt-1 text-sm leading-7 text-stone-300">
                      Wir haben dir eine Bestätigungs-E-Mail geschickt. Bitte klicke auf den Link darin, um deine Anmeldung abzuschließen.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            <div class="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              <a
                href="${competitionFacts.links.competition}"
                target="_blank"
                rel="noreferrer"
                class="btn-press inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-stone-300 transition hover:border-white/30 hover:text-white"
              >
                Science League ↗
              </a>
              <a
                href="${competitionFacts.links.team}"
                target="_blank"
                rel="noreferrer"
                class="btn-press inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-stone-300 transition hover:border-white/30 hover:text-white"
              >
                Teamprofil ↗
              </a>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
`

app.innerHTML = renderPageFrame({
  activePage: 'about',
  hero,
  content,
})

bindPageSelect(app)
setupRevealObserver(app)
setupNewsletter()
handleNewsletterUrlParams()

function setupNewsletter() {
  const form = document.getElementById('newsletter-form')
  if (!form) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const emailInput = document.getElementById('newsletter-email')
    const submitBtn = document.getElementById('newsletter-submit')
    const btnLabel = document.getElementById('newsletter-btn-label')
    const spinner = document.getElementById('newsletter-spinner')
    const errorEl = document.getElementById('newsletter-error')
    const idleEl = document.getElementById('newsletter-idle')
    const successEl = document.getElementById('newsletter-success')

    const email = emailInput.value.trim()

    // Client-side validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEl.textContent = 'Bitte gib eine gültige E-Mail-Adresse ein.'
      errorEl.classList.remove('hidden')
      emailInput.focus()
      return
    }

    // Loading state
    errorEl.classList.add('hidden')
    submitBtn.disabled = true
    btnLabel.textContent = 'Wird gesendet…'
    spinner.classList.remove('hidden')

    try {
      const res = await fetch(NEWSLETTER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json().catch(() => ({}))

      if (res.status === 409) {
        // Already subscribed
        errorEl.textContent = data.message || 'Diese E-Mail-Adresse ist bereits angemeldet.'
        errorEl.classList.remove('hidden')
        submitBtn.disabled = false
        btnLabel.textContent = 'Anmelden'
        spinner.classList.add('hidden')
        return
      }

      if (!res.ok) {
        throw new Error(data.message || 'Etwas ist schiefgelaufen. Bitte versuche es erneut.')
      }

      // Success
      idleEl.classList.add('hidden')
      successEl.classList.remove('hidden')
    } catch (err) {
      errorEl.textContent =
        err.message === 'Failed to fetch'
          ? 'Verbindung zum Server fehlgeschlagen. Bitte versuche es später erneut.'
          : (err.message || 'Etwas ist schiefgelaufen. Bitte versuche es erneut.')
      errorEl.classList.remove('hidden')
      submitBtn.disabled = false
      btnLabel.textContent = 'Anmelden'
      spinner.classList.add('hidden')
    }
  })
}

function showToast(message, type = 'success') {
  const existing = document.getElementById('nl-toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.id = 'nl-toast'
  toast.setAttribute('role', 'status')
  toast.setAttribute('aria-live', 'polite')
  toast.style.cssText = `
    position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%) translateY(8px);
    z-index:60;display:inline-flex;align-items:center;gap:0.75rem;
    border-radius:999px;padding:0.75rem 1.25rem;
    font-size:0.875rem;font-weight:500;box-shadow:0 8px 24px rgba(0,0,0,0.18);
    background:${type === 'success' ? '#065f46' : '#7f1d1d'};color:#fff;
    transition:opacity 400ms,transform 400ms;opacity:0;
  `
  toast.textContent = message
  document.body.appendChild(toast)

  requestAnimationFrame(() => {
    toast.style.opacity = '1'
    toast.style.transform = 'translateX(-50%) translateY(0)'
  })

  setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transform = 'translateX(-50%) translateY(8px)'
    setTimeout(() => toast.remove(), 400)
  }, 5000)
}

function handleNewsletterUrlParams() {
  const params = new URLSearchParams(window.location.search)
  const status = params.get('newsletter')

  if (status === 'confirmed') {
    showToast('🌱 Deine Anmeldung ist bestätigt. Willkommen!', 'success')
    // Clean URL without reload
    const clean = window.location.pathname
    window.history.replaceState({}, '', clean)
  } else if (status === 'unsubscribed') {
    showToast('Du wurdest erfolgreich abgemeldet.', 'info')
    window.history.replaceState({}, '', window.location.pathname)
  }
}
