import { competitionFacts, siteNav } from './data.js'

export function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function bindPageSelect(root = document) {
  root.addEventListener('change', (event) => {
    const select = event.target.closest('[data-page-select]')
    if (!select || !select.value) return

    if (
      select.value !== window.location.pathname.split('/').pop() &&
      !(select.value === 'index.html' && window.location.pathname.endsWith('/'))
    ) {
      window.location.href = select.value
    }
  })
}

/**
 * Set up a scroll-triggered reveal observer for any element with the `.reveal` class.
 * Call once per page after render.
 */
export function setupRevealObserver(root = document) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    root.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  )

  root.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

function renderDesktopNav(activePage) {
  return `
    <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
      ${siteNav
        .map(
          (item) => `
            <a
              href="${item.href}"
              ${item.key === activePage ? 'aria-current="page"' : ''}
              class="nav-pill ${item.key === activePage ? 'is-active' : ''} rounded-full px-4 py-2 text-sm font-medium ${
                item.key === activePage
                  ? 'bg-stone-950 text-white'
                  : 'text-stone-700 hover:bg-white/70 hover:text-stone-950'
              }"
            >
              ${item.label}
            </a>
          `,
        )
        .join('')}
    </nav>
  `
}

function renderMobilePageSelect(activePage) {
  return `
    <div class="ml-auto md:hidden">
      <label class="sr-only" for="mobile-page-select">Seite wählen</label>
      <select
        id="mobile-page-select"
        data-page-select
        class="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-900 transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        aria-label="Seite wählen"
      >
        ${siteNav
          .map(
            (item) => `
              <option value="${item.href}" ${item.key === activePage ? 'selected' : ''}>${item.label}</option>
            `,
          )
          .join('')}
      </select>
    </div>
  `
}

export function renderHeader(activePage) {
  return `
    <a href="#main-content" class="skip-link">Zum Inhalt springen</a>
    <header class="sticky top-0 z-40 border-b border-stone-200/70 bg-[rgba(247,244,238,0.82)] backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3.5 lg:px-6">
        <a href="index.html" class="flex min-w-0 items-center gap-3 rounded-2xl" aria-label="${competitionFacts.brand} Startseite">
          <div class="group relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(6,95,70,0.55)] transition group-hover:shadow-[0_10px_26px_-6px_rgba(6,95,70,0.6)]">
            <span aria-hidden="true" class="font-display">FC</span>
            <span class="visually-hidden">FoodConnect</span>
          </div>
          <div class="min-w-0">
            <p class="truncate text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-800">${competitionFacts.brand}</p>
            <p class="truncate text-sm text-stone-700">${competitionFacts.title}</p>
          </div>
        </a>

        ${renderDesktopNav(activePage)}
        ${renderMobilePageSelect(activePage)}
      </div>
    </header>
  `
}

export function renderHero({
  eyebrow = '',
  title,
  intro = '',
  supportingCard = '',
  stats = [],
  actions = [],
}) {
  const hasSupportingCard = supportingCard.trim().length > 0
  const hasEyebrow = eyebrow.trim().length > 0
  const hasIntro = intro.trim().length > 0

  return `
    <section class="px-5 pb-8 pt-8 lg:px-6 lg:pb-12 lg:pt-12" aria-labelledby="page-hero-title">
      <div class="mx-auto grid max-w-7xl gap-8 ${hasSupportingCard ? 'lg:grid-cols-[1.1fr_0.9fr] lg:items-end' : ''}">
        <div class="pb-2">
          ${
            hasEyebrow
              ? `<p class="hero-rise hero-rise-d1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-800 ring-1 ring-inset ring-emerald-200/80">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
                  ${eyebrow}
                </p>`
              : ''
          }
          <h1 id="page-hero-title" class="hero-rise hero-rise-d2 font-display ${hasEyebrow ? 'mt-5' : ''} max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
            ${title}
          </h1>
          ${
            hasIntro
              ? `
                <p class="hero-rise hero-rise-d3 mt-6 max-w-2xl text-lg leading-[1.7] text-stone-700 sm:text-xl">
                  ${intro}
                </p>
              `
              : ''
          }

          ${
            actions.length > 0
              ? `
                <div class="hero-rise hero-rise-d3 mt-7 flex flex-wrap gap-3">
                  ${actions
                    .map(
                      (action, index) => `
                        <a
                          href="${action.href}"
                          ${action.external ? 'target="_blank" rel="noreferrer"' : ''}
                          class="btn-press inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                            index === 0
                              ? 'bg-stone-950 text-white shadow-[0_10px_30px_-10px_rgba(6,95,70,0.6)] hover:bg-emerald-800'
                              : 'border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50'
                          }"
                        >
                          ${action.label}
                          <span aria-hidden="true">→</span>
                        </a>
                      `,
                    )
                    .join('')}
                </div>
              `
              : ''
          }

          ${
            stats.length > 0
              ? `
                <dl class="hero-rise hero-rise-d4 mt-10 grid gap-5 border-t border-stone-300/70 pt-6 sm:grid-cols-3">
                  ${stats
                    .map(
                      (item) => `
                        <div class="sm:border-l sm:border-stone-300/70 sm:pl-5 first:sm:border-l-0 first:sm:pl-0">
                          <dt class="sr-only">${item.label}</dt>
                          <dd>
                            <p class="font-display text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">${item.value}</p>
                            <p class="mt-2 text-sm leading-6 text-stone-600">${item.label}</p>
                          </dd>
                        </div>
                      `,
                    )
                    .join('')}
                </dl>
              `
              : ''
          }
        </div>

        ${
          hasSupportingCard
            ? `
              <div class="hero-rise hero-rise-d3 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 px-6 py-7 text-stone-50 shadow-[0_30px_80px_-20px_rgba(6,95,70,0.45)] ring-1 ring-inset ring-white/5 sm:px-8 sm:py-8">
                <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <div aria-hidden="true" class="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl"></div>
                <div class="relative">
                  ${supportingCard}
                </div>
              </div>
            `
            : ''
        }
      </div>
    </section>
  `
}

export function renderFooter(activePage) {
  return `
    <footer class="mt-6 border-t border-stone-200/70 bg-gradient-to-b from-transparent to-stone-100/50 px-5 pb-10 pt-10 lg:px-6 lg:pb-14 lg:pt-14">
      <div class="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div class="max-w-xl">
          <div class="flex items-center gap-3">
            <div class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-xs font-semibold text-white">
              <span class="font-display" aria-hidden="true">FC</span>
            </div>
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-emerald-800">${competitionFacts.brand}</p>
          </div>
          <h2 class="font-display mt-5 text-2xl font-semibold tracking-tight text-stone-950">
            ${competitionFacts.title} · ${competitionFacts.season}
          </h2>
          <p class="mt-4 text-sm leading-7 text-stone-600">
            Urbane Lebensmittelproduktion, soziale Teilhabe und kurze Lieferketten in einem Gebäude — für Städte, die mehr als Konsum können.
          </p>
        </div>

        <nav class="grid gap-2 text-sm text-stone-700" aria-label="Seitennavigation">
          <p class="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Seiten</p>
          ${siteNav
            .map(
              (item) => `
                <a
                  href="${item.href}"
                  class="inline-flex items-center gap-2 transition ${item.key === activePage ? 'font-semibold text-stone-950' : 'hover:text-stone-950'}"
                  ${item.key === activePage ? 'aria-current="page"' : ''}
                >
                  <span aria-hidden="true" class="h-1 w-1 rounded-full ${item.key === activePage ? 'bg-emerald-600' : 'bg-stone-300'}"></span>
                  ${item.label}
                </a>
              `,
            )
            .join('')}
        </nav>
      </div>

      <p class="mx-auto mt-10 max-w-7xl border-t border-stone-200/80 pt-6 text-xs text-stone-500">
        © ${new Date().getFullYear()} Team bre-delicious · zdi Science League
      </p>
    </footer>
  `
}

export function renderPageFrame({ activePage, hero, content }) {
  return `
    <div class="min-h-screen text-stone-900 antialiased">
      ${renderHeader(activePage)}
      <main id="main-content" tabindex="-1">
        ${hero}
        ${content}
      </main>
      ${renderFooter(activePage)}
    </div>
  `
}

/**
 * Renders the signature two-tower SVG illustration.
 * Can be used as a hero decoration or inline visual.
 */
export function renderTowersSvg({ className = '' } = {}) {
  return `
    <svg
      viewBox="0 0 420 420"
      class="${className}"
      role="img"
      aria-label="Illustration der beiden Türme des FoodConnectMarkts mit Keller"
    >
      <defs>
        <linearGradient id="tower-gradient-dark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#1c1917" />
          <stop offset="1" stop-color="#0f172a" />
        </linearGradient>
        <linearGradient id="tower-gradient-green" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#10b981" />
          <stop offset="1" stop-color="#065f46" />
        </linearGradient>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#fef3c7" stop-opacity="0.35" />
          <stop offset="1" stop-color="#fef3c7" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Sky glow -->
      <rect x="0" y="0" width="420" height="260" fill="url(#sky)" />

      <!-- Sun -->
      <circle cx="330" cy="90" r="28" fill="#fbbf24" opacity="0.7" class="float-soft" />

      <!-- ConnectMarkt (circular, shorter) -->
      <g>
        <rect x="70" y="160" width="120" height="180" rx="60" fill="url(#tower-gradient-dark)" />
        <!-- Floor indicators -->
        <g stroke="#10b981" stroke-width="1.5" opacity="0.65">
          <line x1="85" y1="195" x2="175" y2="195" />
          <line x1="85" y1="230" x2="175" y2="230" />
          <line x1="85" y1="265" x2="175" y2="265" />
          <line x1="85" y1="300" x2="175" y2="300" />
        </g>
        <!-- Window dots -->
        <g fill="#fbbf24" opacity="0.85">
          <circle cx="105" cy="212" r="2.5" />
          <circle cx="130" cy="212" r="2.5" />
          <circle cx="155" cy="212" r="2.5" />
          <circle cx="105" cy="247" r="2.5" />
          <circle cx="130" cy="247" r="2.5" />
          <circle cx="155" cy="247" r="2.5" />
          <circle cx="105" cy="282" r="2.5" />
          <circle cx="155" cy="282" r="2.5" />
        </g>
      </g>

      <!-- Gemüseturm (taller, bean-like) -->
      <g>
        <path
          d="M 230 100 Q 215 100 210 130 L 210 320 Q 215 350 245 350 L 300 350 Q 330 350 335 320 L 335 150 Q 330 100 300 100 Z"
          fill="url(#tower-gradient-green)"
        />
        <!-- Horizontal growing stripes (10 floors) -->
        <g class="tower-stripes">
          <rect x="220" y="120" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="145" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="170" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="195" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="220" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="245" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="270" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="295" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="320" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
        </g>
        <!-- Little leaves on top -->
        <g fill="#86efac">
          <ellipse cx="265" cy="100" rx="7" ry="4" transform="rotate(-20 265 100)" />
          <ellipse cx="282" cy="96" rx="6" ry="3" transform="rotate(25 282 96)" />
        </g>
      </g>

      <!-- Ground line -->
      <line x1="20" y1="340" x2="400" y2="340" stroke="#78716c" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 3" />

      <!-- Keller (underground basement) -->
      <g opacity="0.55">
        <rect x="60" y="348" width="300" height="48" rx="6" fill="#78716c" />
        <g stroke="#fbbf24" stroke-width="1.2" opacity="0.7">
          <line x1="80" y1="370" x2="340" y2="370" />
        </g>
        <g fill="#fbbf24" opacity="0.85">
          <circle cx="100" cy="370" r="2" />
          <circle cx="210" cy="370" r="2" />
          <circle cx="320" cy="370" r="2" />
        </g>
      </g>
    </svg>
  `
}
