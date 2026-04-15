import './style.css'
import {
  aboutMetrics,
  aboutPillars,
  competitionFacts,
  heroStats,
  storyTimeline,
  trustHighlights,
} from './data.js'
import { bindPageSelect, renderHero, renderPageFrame } from './shared.js'

const app = document.querySelector('#app')

const hero = renderHero({
  eyebrow: competitionFacts.season,
  title: 'FoodConnectMarkt: Projekt, Angebot und Nutzung klar erklärt.',
  intro: 'Der FoodConnectMarkt verbindet Einkauf, soziale Angebote und Science-League-Projektidee auf drei klar getrennten Seiten.',
  stats: heroStats,
  supportingCard: `
    <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Über uns</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight">Kurzüberblick</h2>
    <div class="mt-6 border-t border-white/10">
      ${trustHighlights
        .map(
          (item) => `
            <div class="border-b border-white/10 py-4 text-sm leading-7 text-stone-200 last:border-b-0">
              ${item}
            </div>
          `,
        )
        .join('')}
    </div>
  `,
})

const content = `
  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">Projektidee</p>
        <h2 class="mt-4 max-w-[13ch] text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Ein Markt für Einkauf, Lernen und Nachbarschaft.
        </h2>
        <p class="mt-5 text-base leading-8 text-stone-600">
          Über uns erklärt das Projekt. Soziales zeigt die Community-Angebote. Food zeigt den Einkaufsbereich.
        </p>

        <div class="mt-8 border-y border-stone-300">
          ${aboutMetrics
            .map(
              (metric) => `
                <article class="grid gap-3 border-b border-stone-200 py-5 last:border-b-0 sm:grid-cols-[6rem_1fr] sm:items-start">
                  <p class="text-lg font-semibold text-stone-950">${metric.value}</p>
                  <p class="text-sm leading-7 text-stone-600">${metric.label}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>

      <div class="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/80">
        <div class="bg-stone-950 px-6 py-7 text-stone-50 sm:px-8">
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Schwerpunkt 1</p>
          <h3 class="mt-4 text-2xl font-semibold">${aboutPillars[0].title}</h3>
          <p class="mt-3 text-sm leading-7 text-stone-200">${aboutPillars[0].text}</p>
        </div>
        <div class="grid divide-y divide-stone-200 md:grid-cols-2 md:divide-x md:divide-y-0">
          ${aboutPillars
            .slice(1)
            .map(
              (pillar, index) => `
                <article class="px-6 py-6 ${index === 0 ? 'bg-stone-50/70' : 'bg-white'}">
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Schwerpunkt ${index + 2}</p>
                  <h3 class="mt-4 text-2xl font-semibold text-stone-950">${pillar.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-stone-600">${pillar.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <div class="border-l-4 border-emerald-700 bg-emerald-50 px-6 py-6">
        <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">Science League</p>
        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-stone-950">Das Projekt bekommt Kontext, ohne wieder in viele Einzelkarten zu zerfallen.</h2>
        <p class="mt-5 text-base leading-8 text-stone-700">
          Die Wettbewerbsgeschichte bleibt präsent, sitzt aber in einem klaren Erzählstrang. So wirkt die Seite weniger zerstückelt und mehr wie ein zusammenhängendes Produkt.
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <a href="${competitionFacts.links.competition}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full bg-emerald-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700">
            Science League Seite
          </a>
          <a href="${competitionFacts.links.team}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-stone-50">
            Team bre-delicious
          </a>
        </div>
      </div>

      <div class="border-l border-stone-300 pl-5 sm:pl-8">
        ${storyTimeline
          .map(
            (item, index) => `
              <article class="grid gap-4 border-b border-stone-200 py-6 last:border-b-0 sm:grid-cols-[5.5rem_1fr] sm:items-start">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Schritt ${index + 1}</p>
                </div>
                <div>
                  <h3 class="text-2xl font-semibold text-stone-950">${item.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-stone-600">${item.text}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </div>
  </section>

  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto max-w-7xl border-y border-stone-300">
      <a href="soziales.html" class="grid gap-3 border-b border-stone-200 py-6 transition hover:bg-white/60 md:grid-cols-[12rem_1fr_auto] md:items-center md:gap-6">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Weiter zu Soziales</p>
        <div>
          <h3 class="text-2xl font-semibold text-stone-950">Räume, Lernangebote und Community-Formate</h3>
          <p class="mt-2 text-sm leading-7 text-stone-600">Eigene Seite für mietbare Säle, Nachhilfe, Kochklassen und offene Formate.</p>
        </div>
        <span class="text-sm font-medium text-stone-500">Öffnen →</span>
      </a>
      <a href="food.html" class="grid gap-3 py-6 transition hover:bg-white/60 md:grid-cols-[12rem_1fr_auto] md:items-center md:gap-6">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Weiter zu Food</p>
        <div>
          <h3 class="text-2xl font-semibold text-stone-950">Produktsuche, Filter und Warenkorb</h3>
          <p class="mt-2 text-sm leading-7 text-stone-600">Eigene Seite für den klaren Einkaufsfluss mit Suche, Sortierung und Cart.</p>
        </div>
        <span class="text-sm font-medium text-stone-500">Öffnen →</span>
      </a>
    </div>
  </section>
`

app.innerHTML = renderPageFrame({
  activePage: 'about',
  hero,
  content,
})

bindPageSelect(app)
