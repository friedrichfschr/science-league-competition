import{d as e,i as t,r as n,t as r}from"./shared-CkGW7q7w.js";var i=document.querySelector(`#app`);i.innerHTML=t({activePage:`social`,hero:n({eyebrow:`Soziales & Community`,title:`Räume, Lernangebote und Kochformate auf einen Blick.`,intro:`Hier stehen die sozialen Angebote des FoodConnectMarkts: mietbare Säle, Nachhilfe, Kochklassen und offene Formate.`,supportingCard:`
    <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">Soziales</p>
    <h2 class="mt-4 text-3xl font-semibold tracking-tight">Wofür der Bereich da ist</h2>
    <div class="mt-6 border-t border-white/10">
      <div class="border-b border-white/10 py-4 text-sm leading-7 text-stone-200">Säle für Gruppen, Vereine und Treffen</div>
      <div class="border-b border-white/10 py-4 text-sm leading-7 text-stone-200">Nachhilfe und Lernzeit im Markt</div>
      <div class="border-b border-white/10 py-4 text-sm leading-7 text-stone-200">Kochklassen und Mitmachformate</div>
      <div class="py-4 text-sm leading-7 text-stone-200">Offene Events für Nachbarschaft und Initiativen</div>
    </div>
  `}),content:`
  <section class="px-5 py-6 lg:px-6 lg:py-8">
    <div class="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-800">Kurz erklärt</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
          Vier zentrale Angebote.
        </h2>
        <ul class="mt-5 space-y-2 text-sm leading-7 text-stone-700">
          <li>• mietbare Säle</li>
          <li>• Nachhilfe & Lernzeit</li>
          <li>• Kochklassen</li>
          <li>• offene Community-Formate</li>
        </ul>
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