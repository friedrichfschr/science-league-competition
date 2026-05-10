import{f as e,i as t,o as n,r,t as i}from"./shared-B4ZAG0Ta.js";var a=document.querySelector(`#app`),o=[{label:`EG`,title:`Gemeinschaft`,text:`Kinderecke, Lernplätze, Infostände`,accent:`amber`},{label:`1`,title:`Verkauf`,text:`Barrierefreie Regale & smarte Einkaufswagen`,accent:`emerald`},{label:`3`,title:`Restaurant`,text:`Küche mit eigenem Gemüse & Weiterverarbeitung`,accent:`rose`},{label:`4`,title:`Seminare`,text:`Workshops, Nachhilfe, Feiern`,accent:`sky`},{label:`5`,title:`Praxisanbau`,text:`Selbstversorgung lernen & erleben`,accent:`emerald`}],s={amber:`bg-amber-400/90`,emerald:`bg-emerald-400/90`,rose:`bg-rose-400/90`,sky:`bg-sky-400/90`},c=r({eyebrow:`Der ConnectMarkt`,title:`Fünf Etagen für Gemeinschaft, Lernen und Begegnung.`,intro:`Der kreisförmige Turm ist dem sozialen Miteinander gewidmet — barrierefrei gedacht, mehrzweckfähig gebaut, offen für alle.`,supportingCard:`
  <p class="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-300">Aufbau des ConnectMarkts</p>
  <h2 class="font-display mt-4 text-2xl font-semibold tracking-tight">5 Etagen, ein Konzept</h2>
  <ol class="mt-6 space-y-0" role="list">
    ${o.slice().reverse().map((e,t,n)=>`
          <li class="floor-row flex items-center gap-4 rounded-lg border-b border-white/10 py-3 last:border-b-0">
            <span aria-hidden="true" class="grid h-9 w-9 shrink-0 place-items-center rounded-full ${s[e.accent]} text-xs font-bold text-stone-950">
              ${e.label}
            </span>
            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-white">${e.title}</p>
              <p class="mt-0.5 text-xs leading-5 text-stone-300">${e.text}</p>
            </div>
          </li>
        `).join(``)}
  </ol>
`}),l=[{icon:`♿`,title:`Smarte Einkaufswagen`,text:`Ausfahrbarer Sitz, damit auch die oberen Regale erreichbar sind.`},{icon:`↕`,title:`Drei Fahrstühle`,text:`Schneller, barrierefreier Transport zwischen allen Etagen.`},{icon:`↓`,title:`Niedrige Regale`,text:`Bewusst tief konzipiert — erreichbar auch für kleinwüchsige Menschen.`}],u=e.map((e,t)=>`
      <article class="reveal reveal-d${t%3+1} card-lift group relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white/85 p-6 shadow-[var(--shadow-md)] transition hover:border-amber-300 hover:shadow-[var(--shadow-lg)] md:p-8">
        <div aria-hidden="true" class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-200/30 blur-2xl transition group-hover:bg-amber-300/40"></div>
        <div class="relative">
          <div class="flex items-center gap-3">
            <span class="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-sm font-bold text-amber-800 ring-1 ring-inset ring-amber-100">
              0${t+1}
            </span>
            <span class="inline-flex rounded-full bg-stone-100 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-stone-700">
              ${e.badge}
            </span>
          </div>
          <h3 class="font-display mt-5 text-2xl font-semibold text-stone-950">${e.title}</h3>
          <p class="mt-3 text-sm leading-7 text-stone-600">${e.text}</p>
          <ul class="mt-5 grid gap-2 text-sm text-stone-700 sm:grid-cols-2" role="list">
            ${e.details.map(e=>`
                  <li class="flex items-start gap-2">
                    <span aria-hidden="true" class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
                    <span class="leading-6">${e}</span>
                  </li>
                `).join(``)}
          </ul>
        </div>
      </article>
    `).join(``);a.innerHTML=t({activePage:`social`,hero:c,content:`
  <section class="px-5 py-12 lg:px-6 lg:py-20" aria-labelledby="intro-heading">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div class="reveal">
          <p class="scroll-hint">Mehr als einkaufen</p>
          <h2 id="intro-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
            Kein klassischer Supermarkt.
          </h2>
          <p class="mt-6 text-base leading-8 text-stone-700">
            Jede Etage des ConnectMarkts hat eine eigene Funktion. Zusammen ergeben sie einen Ort, der Versorgung, Bildung und Begegnung vereint — offen für alle, ohne Einkaufsdruck.
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            ${l.map((e,t)=>`
                  <div class="reveal reveal-d${t+1} rounded-2xl border border-stone-200 bg-white/80 p-4">
                    <span aria-hidden="true" class="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-lg text-emerald-800 ring-1 ring-inset ring-emerald-100">${e.icon}</span>
                    <p class="mt-3 text-sm font-semibold text-stone-950">${e.title}</p>
                    <p class="mt-1 text-xs leading-5 text-stone-600">${e.text}</p>
                  </div>
                `).join(``)}
          </div>
        </div>

        <div class="reveal reveal-d2">
          <div class="relative rounded-[2rem] border border-stone-200 bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 p-6 shadow-[var(--shadow-md)]">
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-amber-800">Vertikaler Grundriss</p>
            <h3 class="font-display mt-2 text-xl font-semibold text-stone-950">Schnitt durch den Turm</h3>

            <ol class="mt-6 relative" role="list">
              <div aria-hidden="true" class="pointer-events-none absolute left-[1.125rem] top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-emerald-300 to-stone-200"></div>
              ${o.slice().reverse().map(e=>`
                    <li class="floor-row relative flex items-start gap-4 rounded-xl py-3 pl-0 pr-3">
                      <span aria-hidden="true" class="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full ${s[e.accent]} text-xs font-bold text-stone-950 ring-4 ring-white">
                        ${e.label}
                      </span>
                      <div class="pt-1">
                        <p class="text-sm font-semibold text-stone-950">${e.title}</p>
                        <p class="mt-0.5 text-xs leading-5 text-stone-600">${e.text}</p>
                      </div>
                    </li>
                  `).join(``)}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-5 py-12 lg:px-6 lg:py-20" aria-labelledby="services-heading">
    <div class="mx-auto max-w-7xl">
      <div class="reveal flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="scroll-hint">Die Angebote</p>
          <h2 id="services-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
            Was im ConnectMarkt passiert.
          </h2>
        </div>
        <p class="max-w-md text-sm leading-7 text-stone-600 md:text-right">
          Vier zentrale Funktionen, die einander ergänzen — vom niedrigschwelligen Treffpunkt bis zum praktischen Workshop.
        </p>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2">
        ${u}
      </div>
    </div>
  </section>
`}),i(a),n(a);