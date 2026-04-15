import{d as e,i as t,r as n,t as r}from"./shared-CwnMZZ-T.js";var i=document.querySelector(`#app`);i.innerHTML=t({activePage:`social`,hero:n({eyebrow:`Der ConnectMarkt`,title:`Fünf Etagen für Gemeinschaft, Lernen und Begegnung.`,intro:`Der kreisförmige Turm des FoodConnectMarkts ist dem sozialen Miteinander gewidmet — barrierefrei, mehrzweckfähig und offen für alle.`,supportingCard:`
    <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">Aufbau des ConnectMarkts</p>
    <h2 class="mt-4 text-2xl font-semibold tracking-tight">5 Etagen, ein Konzept</h2>
    <div class="mt-5 space-y-0 border-t border-white/10">
      <div class="flex gap-4 border-b border-white/10 py-3.5">
        <span class="w-24 shrink-0 text-xs font-semibold uppercase tracking-wide text-amber-300/80">EG</span>
        <span class="text-sm leading-6 text-stone-200">Kinderecke, Lernplätze, Infostände</span>
      </div>
      <div class="flex gap-4 border-b border-white/10 py-3.5">
        <span class="w-24 shrink-0 text-xs font-semibold uppercase tracking-wide text-amber-300/80">1. Etage</span>
        <span class="text-sm leading-6 text-stone-200">Verkaufsfläche — barrierefreie Regale & smarte Einkaufswagen</span>
      </div>
      <div class="flex gap-4 border-b border-white/10 py-3.5">
        <span class="w-24 shrink-0 text-xs font-semibold uppercase tracking-wide text-amber-300/80">3. Etage</span>
        <span class="text-sm leading-6 text-stone-200">Restaurant mit eigenem Gemüse, Weiterverarbeitung</span>
      </div>
      <div class="flex gap-4 border-b border-white/10 py-3.5">
        <span class="w-24 shrink-0 text-xs font-semibold uppercase tracking-wide text-amber-300/80">4. Etage</span>
        <span class="text-sm leading-6 text-stone-200">Seminarräume — Workshops, Nachhilfe, Feiern</span>
      </div>
      <div class="flex gap-4 py-3.5">
        <span class="w-24 shrink-0 text-xs font-semibold uppercase tracking-wide text-amber-300/80">5. Etage</span>
        <span class="text-sm leading-6 text-stone-200">Praxisanbau — Selbstversorgung erleben und lernen</span>
      </div>
    </div>
  `}),content:`
  <section class="px-5 py-6 lg:px-6 lg:py-8">
    <div class="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-800">Was wir anbieten</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Mehr als einkaufen.
        </h2>
        <p class="mt-4 text-sm leading-7 text-stone-600">
          Der ConnectMarkt ist kein klassischer Supermarkt. Jede Etage hat eine eigene Funktion — und alle zusammen ergeben einen Ort, der Versorgung, Bildung und Begegnung vereint.
        </p>
        <p class="mt-3 text-sm leading-7 text-stone-600">
          Barrierefreiheit ist dabei kein Zusatz, sondern von Anfang an mitgedacht: smarte Einkaufswagen, bewusst niedrige Regale und drei Fahrstühle machen den Markt für alle zugänglich.
        </p>
      </div>

      <div class="space-y-3">
        ${e.map(e=>`
              <article class="grid gap-4 rounded-2xl bg-white/75 px-4 py-5 md:grid-cols-[11rem_1fr] md:gap-5">
                <div>
                  <span class="inline-flex rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-700">
                    ${e.badge}
                  </span>
                </div>
                <div>
                  <h3 class="text-2xl font-semibold text-stone-950">${e.title}</h3>
                  <p class="mt-2 text-sm leading-7 text-stone-600">${e.text}</p>
                  <ul class="mt-3 grid gap-2 text-sm text-stone-600 sm:grid-cols-2">
                    ${e.details.map(e=>`<li>• ${e}</li>`).join(``)}
                  </ul>
                </div>
              </article>
            `).join(``)}
      </div>
    </div>
  </section>
`}),r(i);