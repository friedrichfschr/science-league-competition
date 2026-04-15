import './style.css'
import { competitionFacts, services } from './data.js'
import { bindPageSelect, renderHero, renderPageFrame } from './shared.js'

const app = document.querySelector('#app')

const socialMoments = [
  {
    title: 'Nach der Schule',
    text: 'Lerninseln, ruhige Tische und Nachhilfe machen den Markt für Schülerinnen und Schüler direkt nutzbar.',
  },
  {
    title: 'Am Wochenende',
    text: 'Kochklassen, offene Marktaktionen oder kleine Events holen Familien und Nachbarschaft zusammen.',
  },
  {
    title: 'Für Initiativen',
    text: 'Mietbare Räume geben Vereinen, Gruppen und lokalen Projekten einen sichtbaren Ort im Quartier.',
  },
]

const hero = renderHero({
  eyebrow: 'Soziales & Community',
  title: 'Der Markt funktioniert auch als Treffpunkt, Lernort und Raum für Beteiligung.',
  intro:
    'Soziale Angebote stehen hier nicht am Rand. Sie sind als eigene Seite organisiert, damit Menschen schnell erkennen, welche Formate der FoodConnectMarkt neben dem Einkauf anbietet.',
  actions: [
    { href: 'food.html', label: 'Food ansehen' },
    { href: 'index.html', label: 'Zurück zu Über uns' },
  ],
  supportingCard: `
    <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">Soziales</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight">Ein glaubwürdiger Markt braucht auch Gründe, dort zu bleiben.</h2>
    <p class="mt-5 text-base leading-8 text-stone-200">
      Der FoodConnectMarkt soll Menschen nicht nur kurz zum Einkauf holen, sondern auch für Lernen, Austausch und gemeinsame Nutzung ansprechbar sein.
    </p>
    <div class="mt-6 space-y-3">
      <div class="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200">Soziale Angebote sind eigenständig sichtbar statt irgendwo mitten im Fließtext versteckt.</div>
      <div class="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200">Die Seite nutzt dieselbe Designsprache wie Food und Über uns, bleibt aber thematisch klar.</div>
    </div>
  `,
})

const content = `
  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div class="grid gap-4">
          <article class="rounded-[2rem] border border-stone-200 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)] sm:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-800">Warum dieser Bereich wichtig ist</p>
            <h2 class="mt-4 max-w-[13ch] text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              Gemeinschaft wird als eigener Nutzen sichtbar gemacht.
            </h2>
            <p class="mt-5 text-base leading-8 text-stone-600">
              Soziales schafft echte Alltagsrelevanz. Wenn Räume, Lernzeiten und Kochformate sichtbar beschrieben werden, wirkt das Projekt greifbarer und vertrauenswürdiger.
            </p>
          </article>

          <article class="rounded-[2rem] border border-amber-200 bg-amber-50 px-6 py-6">
            <p class="text-sm font-medium text-amber-900">Was diese Seite leistet</p>
            <ul class="mt-4 space-y-3 text-sm leading-7 text-stone-700">
              <li>• Sie trennt soziale Nutzung klar vom Einkaufsfluss.</li>
              <li>• Sie zeigt Formate für verschiedene Zielgruppen.</li>
              <li>• Sie macht den Markt als öffentlichen Ort glaubwürdiger.</li>
            </ul>
          </article>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          ${services
            .map(
              (service, index) => `
                <article class="rounded-[2rem] border border-stone-200 ${
                  index === 2 ? 'bg-emerald-50' : 'bg-white'
                } px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
                  <span class="inline-flex rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-700">
                    ${service.badge}
                  </span>
                  <h3 class="mt-4 text-2xl font-semibold text-stone-950">${service.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-stone-600">${service.text}</p>
                  <ul class="mt-5 space-y-2 text-sm text-stone-600">
                    ${service.details.map((detail) => `<li>• ${detail}</li>`).join('')}
                  </ul>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
      ${socialMoments
        .map(
          (moment) => `
            <article class="rounded-[2rem] border border-stone-200 bg-white px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Nutzungsszenario</p>
              <h3 class="mt-4 text-2xl font-semibold text-stone-950">${moment.title}</h3>
              <p class="mt-3 text-sm leading-7 text-stone-600">${moment.text}</p>
            </article>
          `,
        )
        .join('')}
    </div>
  </section>

  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
      <a href="index.html" class="rounded-[2rem] border border-stone-200 bg-white px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_56px_rgba(41,37,36,0.08)]">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Über uns</p>
        <h3 class="mt-4 text-2xl font-semibold text-stone-950">Projekt, Mission und Science-League-Kontext</h3>
        <p class="mt-3 text-sm leading-7 text-stone-600">Zur strukturierten Startseite mit Teamstory und Projektlogik.</p>
      </a>
      <a href="food.html" class="rounded-[2rem] border border-stone-200 bg-emerald-50 px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_56px_rgba(41,37,36,0.08)]">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Food</p>
        <h3 class="mt-4 text-2xl font-semibold text-stone-950">Produktsuche und Warenkorb</h3>
        <p class="mt-3 text-sm leading-7 text-stone-600">Zum Shop-Bereich mit Filtern, starken Karten und klaren CTAs.</p>
      </a>
    </div>
  </section>
`

app.innerHTML = renderPageFrame({
  activePage: 'social',
  hero,
  content,
})

bindPageSelect(app)
