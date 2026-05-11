import{a as e,i as t,l as n,r,t as i}from"./shared-cR3R1ezK.js";var a=document.querySelector(`#app`);a.innerHTML=t({activePage:`social`,hero:r({eyebrow:`Der ConnectMarkt`,title:`Fünf Etagen für Gemeinschaft, Lernen und Begegnung.`,intro:`Der kreisförmige Turm ist dem sozialen Miteinander gewidmet — barrierefrei gedacht, mehrzweckfähig gebaut, offen für alle.`}),content:`
  <section class="px-5 py-12 lg:px-6 lg:py-20" aria-labelledby="services-heading">
    <div class="mx-auto max-w-7xl">
      <div class="reveal">
        <p class="scroll-hint">Die Angebote</p>
        <h2 id="services-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
          Was im ConnectMarkt passiert.
        </h2>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-2">
        ${n.map((e,t)=>`
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
    `).join(``)}
      </div>
    </div>
  </section>

  <section class="px-5 py-12 lg:px-6 lg:py-20" aria-labelledby="contact-heading">
    <div class="mx-auto max-w-7xl">
      <div class="reveal relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 p-8 shadow-[0_30px_80px_-20px_rgba(6,95,70,0.45)] ring-1 ring-inset ring-white/5 sm:p-12">
        <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl"></div>
        <div aria-hidden="true" class="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl"></div>
        <div class="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-300">Kontakt & Buchung</p>
            <h2 id="contact-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Räume buchen — für Feiern, Kurse & mehr.
            </h2>
            <p class="mt-5 max-w-xl text-base leading-8 text-stone-300">
              Die Seminarräume des ConnectMarkts stehen für Geburtstagsfeiern, Vereinstreffen, Nachhilfekurse und private Veranstaltungen offen. Bei Fragen zur Buchung oder für ein individuelles Angebot melde dich direkt bei uns.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-stone-300">
              <li class="flex items-center gap-3">
                <span aria-hidden="true" class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-inset ring-emerald-400/30">✓</span>
                Geburtstage & private Feiern
              </li>
              <li class="flex items-center gap-3">
                <span aria-hidden="true" class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-inset ring-emerald-400/30">✓</span>
                Vereins- und Gruppentreffen
              </li>
              <li class="flex items-center gap-3">
                <span aria-hidden="true" class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-inset ring-emerald-400/30">✓</span>
                Kurse, Workshops & Nachhilfe
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start gap-4 lg:items-end">
            <div class="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-stone-400">Schreib uns</p>
              <a
                href="mailto:info@bredelicious.de"
                class="mt-2 block font-display text-xl font-semibold text-white transition hover:text-emerald-300 sm:text-2xl"
              >
                info@bredelicious.de
              </a>
              <p class="mt-1 text-xs text-stone-500">Wir antworten in der Regel innerhalb von 48 Stunden.</p>
            </div>
            <a
              href="mailto:info@bredelicious.de"
              class="btn-press inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(16,185,129,0.5)] transition hover:bg-emerald-500"
            >
              Anfrage senden
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
`}),i(a),e(a);