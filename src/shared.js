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

    if (select.value !== window.location.pathname.split('/').pop() && !(select.value === 'index.html' && window.location.pathname.endsWith('/'))) {
      window.location.href = select.value
    }
  })
}

function renderDesktopNav(activePage) {
  return `
    <nav class="ml-auto hidden items-center gap-2 md:flex">
      ${siteNav
        .map(
          (item) => `
            <a
              href="${item.href}"
              class="rounded-full px-4 py-2 text-sm font-medium transition ${
                item.key === activePage
                  ? 'bg-stone-950 text-white'
                  : 'text-stone-600 hover:bg-white hover:text-stone-950'
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
        class="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
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
    <header class="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(249,247,242,0.92)] backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-6">
        <a href="index.html" class="flex min-w-0 items-center gap-3">
          <div class="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200 bg-emerald-50 text-sm font-semibold text-emerald-900">
            FC
          </div>
          <div class="min-w-0">
            <p class="truncate text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">${competitionFacts.brand}</p>
            <p class="truncate text-sm text-stone-600">${competitionFacts.title}</p>
          </div>
        </a>

        ${renderDesktopNav(activePage)}
        ${renderMobilePageSelect(activePage)}
      </div>
    </header>
  `
}

export function renderHero({ eyebrow, title, intro, supportingCard = '', stats = [], actions = [] }) {
  const hasSupportingCard = supportingCard.trim().length > 0

  return `
    <section class="px-5 pb-8 pt-6 lg:px-6 lg:pb-12 lg:pt-10">
      <div class="mx-auto grid max-w-7xl gap-8 ${hasSupportingCard ? 'lg:grid-cols-[1.08fr_0.92fr] lg:items-end' : ''}">
        <div class="border-b border-stone-300 pb-8">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">${eyebrow}</p>
          <h1 class="mt-5 max-w-[13ch] text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
            ${title}
          </h1>
          <p class="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            ${intro}
          </p>

          ${
            actions.length > 0
              ? `
                <div class="mt-8 flex flex-wrap gap-3">
                  ${actions
                    .map(
                      (action, index) => `
                        <a
                          href="${action.href}"
                          ${action.external ? 'target="_blank" rel="noreferrer"' : ''}
                          class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                            index === 0
                              ? 'bg-stone-950 text-white hover:bg-emerald-800'
                              : 'border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50'
                          }"
                        >
                          ${action.label}
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
                <div class="mt-10 grid gap-5 border-t border-stone-200 pt-6 sm:grid-cols-3">
                  ${stats
                    .map(
                      (item) => `
                        <div class="border-t border-stone-300 pt-4 sm:border-t-0 sm:border-l sm:pl-4 first:border-l-0 first:pl-0">
                          <p class="text-2xl font-semibold text-stone-950">${item.value}</p>
                          <p class="mt-2 text-sm leading-6 text-stone-600">${item.label}</p>
                        </div>
                      `,
                    )
                    .join('')}
                </div>
              `
              : ''
          }
        </div>

        ${
          hasSupportingCard
            ? `
              <div class="rounded-[2rem] bg-stone-950 px-6 py-7 text-stone-50 shadow-[0_20px_60px_rgba(28,25,23,0.12)] sm:px-8 sm:py-8">
                ${supportingCard}
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
    <footer class="px-5 pb-10 pt-10 lg:px-6 lg:pb-14">
      <div class="mx-auto flex max-w-7xl flex-col gap-6 border-t border-stone-300 pt-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">${competitionFacts.brand}</p>
          <h2 class="mt-4 text-2xl font-semibold text-stone-950">${competitionFacts.title} für die ${competitionFacts.season}</h2>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
            Drei klare Seiten statt einer langen Sammelseite: Über uns, Soziales und Food mit reduzierter mobiler Navigation und konsistentem Erscheinungsbild.
          </p>
        </div>

        <nav class="grid gap-2 text-sm text-stone-600">
          ${siteNav
            .map(
              (item) => `
                <a href="${item.href}" class="transition ${item.key === activePage ? 'font-semibold text-stone-950' : 'hover:text-stone-950'}">
                  ${item.label}
                </a>
              `,
            )
            .join('')}
        </nav>
      </div>
    </footer>
  `
}

export function renderPageFrame({ activePage, hero, content }) {
  return `
    <div class="min-h-screen text-stone-900 antialiased">
      ${renderHeader(activePage)}
      <main>
        ${hero}
        ${content}
      </main>
      ${renderFooter(activePage)}
    </div>
  `
}
