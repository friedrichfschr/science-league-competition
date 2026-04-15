import{a as e,c as t,f as n,i as r,o as i,p as a,r as o,s,t as c}from"./shared-DAgsaNh7.js";var l=document.querySelector(`#app`);l.innerHTML=r({activePage:`about`,hero:o({eyebrow:s.season,title:`FoodConnectMarkt mit klarer Story und echtem Nutzwert.`,intro:`${s.subtitle} ${s.description}`,actions:[{href:`food.html`,label:`Zum Food-Bereich`},{href:`soziales.html`,label:`Soziale Angebote ansehen`}],stats:t,supportingCard:`
    <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Über uns</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight">Die Startseite erklärt erst das Projekt und verweist dann sauber weiter.</h2>
    <div class="mt-6 space-y-3">
      ${a.map(e=>`
            <div class="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200">
              ${e}
            </div>
          `).join(``)}
    </div>
  `}),content:`
  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="rounded-[2rem] border border-stone-200 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)] sm:px-8">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">Projektidee</p>
          <h2 class="mt-4 max-w-[13ch] text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
            Ein Ort für Einkauf, Lernen und Nachbarschaft statt einer reinen Marktfläche.
          </h2>
          <p class="mt-5 text-base leading-8 text-stone-600">
            Der FoodConnectMarkt verbindet Frische, Nahversorgung, Bildung und Begegnung. Die neue Struktur trennt deshalb nicht nur Inhalte sauber, sondern macht auch die Nutzung einfacher: Über uns erklärt das Warum, Soziales zeigt die Community-Angebote und Food bildet den Einkaufsfluss ab.
          </p>

          <div class="mt-8 grid gap-3">
            ${e.map(e=>`
                  <article class="grid gap-3 rounded-[1.5rem] border border-stone-200 bg-stone-50 px-4 py-4 sm:grid-cols-[6rem_1fr] sm:items-start">
                    <p class="text-lg font-semibold text-stone-950">${e.value}</p>
                    <p class="text-sm leading-7 text-stone-600">${e.label}</p>
                  </article>
                `).join(``)}
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          ${i.map((e,t)=>`
                <article class="rounded-[2rem] border border-stone-200 ${t===0?`bg-stone-950 text-stone-50 md:col-span-2`:`bg-white text-stone-900`} px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] ${t===0?`text-emerald-300`:`text-emerald-800`}">Schwerpunkt ${t+1}</p>
                  <h3 class="mt-4 text-2xl font-semibold ${t===0?`text-white`:`text-stone-950`}">${e.title}</h3>
                  <p class="mt-3 text-sm leading-7 ${t===0?`text-stone-200`:`text-stone-600`}">
                    ${e.text}
                  </p>
                </article>
              `).join(``)}
        </div>
      </div>
    </div>
  </section>

  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <article class="rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-7 text-stone-50 shadow-[0_18px_50px_rgba(28,25,23,0.14)] sm:px-8">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Science League</p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight">Das Projekt bekommt seinen Kontext, ohne den Rest der Seite zu überladen.</h2>
          <p class="mt-5 text-base leading-8 text-stone-200">
            Die Wettbewerbsgeschichte gehört dazu, aber sie steht jetzt an einem passenden Ort. So bleibt die Startseite verständlich und trotzdem vollständig.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="${s.links.competition}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-400">
              Science League Seite
            </a>
            <a href="${s.links.team}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Team bre-delicious
            </a>
          </div>
        </article>

        <div class="grid gap-4 md:grid-cols-2">
          ${n.map((e,t)=>`
                <article class="rounded-[2rem] border border-stone-200 bg-white px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Schritt ${t+1}</p>
                  <h3 class="mt-4 text-2xl font-semibold text-stone-950">${e.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-stone-600">${e.text}</p>
                </article>
              `).join(``)}
        </div>
      </div>
    </div>
  </section>

  <section class="px-5 py-8 lg:px-6 lg:py-12">
    <div class="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
      <a href="soziales.html" class="rounded-[2rem] border border-stone-200 bg-amber-50 px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_56px_rgba(41,37,36,0.08)]">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">Weiter zu Soziales</p>
        <h3 class="mt-4 text-2xl font-semibold text-stone-950">Räume, Lernangebote und Community-Formate</h3>
        <p class="mt-3 text-sm leading-7 text-stone-600">Eigene Seite für mietbare Säle, Nachhilfe, Kochklassen und offene Formate.</p>
      </a>
      <a href="food.html" class="rounded-[2rem] border border-stone-200 bg-emerald-50 px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_56px_rgba(41,37,36,0.08)]">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">Weiter zu Food</p>
        <h3 class="mt-4 text-2xl font-semibold text-stone-950">Produktsuche, Filter und Warenkorb</h3>
        <p class="mt-3 text-sm leading-7 text-stone-600">Eigene Seite für den klaren Einkaufsfluss mit Suche, Sortierung und Cart.</p>
      </a>
    </div>
  </section>
`}),c(l);