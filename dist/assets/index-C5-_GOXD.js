(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={season:`Science League 2025/2026`,title:`FoodConnectMarkt`,subtitle:`Urban Farming, Verkauf, Bildung und soziales Miteinander an einem Ort.`,description:`Für die zdi Science League entwickeln wir als Team bre-delicious einen FoodConnectMarkt, in dem Vertical Farming, smarter Gemüseverkauf und soziale Angebote zusammenfinden.`,highlights:[`Wettbewerb: Science League 2025/2026`,`Team: bre-delicious`,`Fokus: FoodConnectMarkt mit Vertical Farming`,`Idee: Gemüseverkauf, Bildung und Begegnung in einem urbanen Konzept`],links:{competition:`https://mint-community.de/scienceleague/`,team:`https://mint-community.de/science-league-teams/bre-delicious-saison-2025-2026/`}},t=[{title:`Vertical Farming mitten im Markt`,text:`Frische Kräuter, Salate und Gemüse wachsen direkt vor Ort in platzsparenden vertikalen Systemen. So verbinden wir nachhaltigen Anbau mit einem modernen Einkaufserlebnis.`},{title:`Gemüseverkauf mit smarter Auswahl`,text:`Kundinnen und Kunden können Produkte suchen, vergleichen und direkt in den Warenkorb legen. Der Markt wird dadurch zu einer zugänglichen Verkaufsplattform für frische Lebensmittel.`},{title:`Bildung und Soziales gehören dazu`,text:`Neben dem Verkauf schaffen wir Raum für Nachhilfe, Kochkurse, gemeinschaftliche Veranstaltungen und mietbare Säle. Der Markt ist nicht nur Laden, sondern Treffpunkt.`}],n=[{title:`Wettbewerb & Idee`,text:`Die Science League 2025/2026 stellt den FoodConnectMarkt in den Mittelpunkt: Technik, Nachhaltigkeit und Gemeinschaft sollen zu einem funktionierenden Ort zusammenfinden.`},{title:`Unser Team bre-delicious`,text:`Wir treten als Team bre-delicious an und entwickeln eine urbane Marktidee, die frische Produkte, soziale Nutzung und Bildungsangebote sichtbar zusammenbringt.`},{title:`Unser Konzept`,text:`Unser FoodConnectMarkt verbindet Vertical Farming, einen digitalen Gemüseverkauf, soziale Angebote und Lernräume für eine lebensnahe, nachhaltige Zukunftsidee.`}],r=[`Alle`,`Blattgemüse`,`Kräuter`,`Fruchtgemüse`,`Wurzelgemüse`,`Pilze`],i=[{id:`romana-salat`,name:`Romana Salat`,category:`Blattgemüse`,price:2.9,unit:`pro Kopf`,stock:`Erntebereit`,description:`Knackig, frisch und direkt aus unserem Vertical-Farming-Regal.`,tags:[`Regional`,`Hydroponisch`,`Frisch geerntet`]},{id:`basilikum`,name:`Basilikum`,category:`Kräuter`,price:1.8,unit:`pro Bund`,stock:`Auf Lager`,description:`Intensives Aroma für Pasta, Bowls und unsere Kochklassen.`,tags:[`Aromatisch`,`Urban Farm`,`Beliebt`]},{id:`kirschtomaten`,name:`Kirschtomaten`,category:`Fruchtgemüse`,price:3.7,unit:`pro 500 g`,stock:`Auf Lager`,description:`Süß, saftig und ideal für Snackboxen oder Salate.`,tags:[`Snack`,`Sonnig`,`Lokal`]},{id:`gurke`,name:`Mini Gurken`,category:`Fruchtgemüse`,price:2.6,unit:`pro 400 g`,stock:`Auf Lager`,description:`Kühl, frisch und perfekt für schnelle, gesunde Gerichte.`,tags:[`Knackig`,`Frisch`,`Alltag`]},{id:`microgreens`,name:`Microgreens Mix`,category:`Blattgemüse`,price:3.2,unit:`pro Schale`,stock:`Frisch geschnitten`,description:`Kleine Blätter mit viel Geschmack und starkem Nährstoffprofil.`,tags:[`Premium`,`Nährstoffreich`,`Modern`]},{id:`petersilie`,name:`Petersilie glatt`,category:`Kräuter`,price:1.5,unit:`pro Bund`,stock:`Auf Lager`,description:`Ein Küchenklassiker für Suppen, Gemüsepfannen und Dips.`,tags:[`Klassiker`,`Würzig`,`Erntefrisch`]},{id:`radieschen`,name:`Radieschen`,category:`Wurzelgemüse`,price:2.2,unit:`pro Bund`,stock:`Auf Lager`,description:`Leicht scharf, knackig und ideal für Brote oder Salate.`,tags:[`Saisonal`,`Knackig`,`Regional`]},{id:`seitlinge`,name:`Austernseitlinge`,category:`Pilze`,price:4.4,unit:`pro 300 g`,stock:`Kleine Ernte`,description:`Herzhaft und vielseitig für Pfanne, Pasta und Workshops.`,tags:[`Umami`,`Pilzzucht`,`Kochkurs-Favorit`]}],a=[{title:`Mietbare Säle`,badge:`Soziales Angebot`,text:`Unsere Räume können für Treffen, Vereine, Familienfeiern oder lokale Initiativen genutzt werden. Der Markt wird so zum urbanen Treffpunkt.`,details:[`Flexible Raumgrößen`,`Für Gruppen und Vereine`,`Technik & Bestuhlung denkbar`]},{title:`Nachhilfe & Lernzeit`,badge:`Bildung`,text:`Schülerinnen und Schüler bekommen Raum für Nachhilfe, Lerninseln und praktische Einblicke in Ernährung, Nachhaltigkeit und moderne Anbausysteme.`,details:[`Hausaufgabenhilfe`,`MINT-Bezug`,`Lernen mitten im Markt`]},{title:`Kochklassen`,badge:`Food & Community`,text:`Mit unseren frischen Produkten entstehen Kochkurse für Kinder, Familien und Interessierte. Aus dem Anbau wird direkt gemeinsames Erleben.`,details:[`Saisonale Rezepte`,`Gemüse direkt aus dem Markt`,`Gemeinschaftliches Kochen`]},{title:`Beratung & FoodConnect Events`,badge:`Community`,text:`Workshops, Infotage und Marktaktionen erklären Vertical Farming, nachhaltigen Konsum und urbane Ernährung auf eine zugängliche Weise.`,details:[`Workshops`,`Info-Abende`,`Mitmach-Formate`]}],o=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),s=document.querySelector(`#app`),c={query:``,category:`Alle`,cart:l()};function l(){try{let e=window.localStorage.getItem(`foodconnect-cart`);return e?JSON.parse(e):{}}catch{return{}}}function u(){window.localStorage.setItem(`foodconnect-cart`,JSON.stringify(c.cart))}function d(){let e=c.query.trim().toLowerCase();return i.filter(t=>{let n=c.category===`Alle`||t.category===c.category,r=e.length===0||t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.tags.some(t=>t.toLowerCase().includes(e));return n&&r})}function f(){return Object.entries(c.cart).map(([e,t])=>{let n=i.find(t=>t.id===e);return!n||t<=0?null:{...n,quantity:t,total:t*n.price}}).filter(Boolean)}function p(){return Object.values(c.cart).reduce((e,t)=>e+t,0)}function m(){return f().reduce((e,t)=>e+t.total,0)}function h(e){c.cart[e]=(c.cart[e]??0)+1,u(),T()}function g(e,t){t<=0?delete c.cart[e]:c.cart[e]=t,u(),T()}function _(){c.cart={},u(),T()}function v(){return`
    <section class="relative overflow-hidden px-6 pt-10 pb-20 sm:pt-14 sm:pb-24">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_24%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(240,253,244,0.78)_100%)]"></div>
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">${e.season}</p>
          <h1 class="mt-5 max-w-[12ch] text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            ${e.title} von bre-delicious
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            ${e.subtitle}
          </p>
          <p class="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            ${e.description}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#produkte" class="rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700">
              Gemüse entdecken
            </a>
            <a href="#angebote" class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">
              Soziale Angebote ansehen
            </a>
            <a href="${e.links.competition}" target="_blank" rel="noreferrer" class="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-800 transition hover:bg-emerald-100">
              Wettbewerb ansehen
            </a>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            ${e.highlights.map(e=>`
                  <div class="rounded-2xl border border-white/70 bg-white/75 px-4 py-4 text-sm text-slate-700 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                    ${e}
                  </div>
                `).join(``)}
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:col-span-2">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Unser Konzept</p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Ein Markt, der mehr kann als verkaufen.</h2>
            <p class="mt-4 max-w-2xl text-slate-600">
              Wir denken den FoodConnectMarkt als urbanen Ort für frisches Gemüse, Bildung, Begegnung und praktische Nachhaltigkeit.
            </p>
          </div>
          <div class="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 shadow-[0_20px_50px_rgba(16,185,129,0.10)]">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">Vertical Farming</p>
            <p class="mt-4 text-3xl font-semibold text-slate-950">Frisch vor Ort</p>
            <p class="mt-4 text-sm leading-7 text-slate-600">
              Gemüse wächst direkt im Markt und wird ohne lange Lieferwege angeboten.
            </p>
          </div>
          <div class="rounded-[2rem] border border-sky-100 bg-sky-50 p-6 shadow-[0_20px_50px_rgba(14,165,233,0.10)]">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Community</p>
            <p class="mt-4 text-3xl font-semibold text-slate-950">Lernen & Treffen</p>
            <p class="mt-4 text-sm leading-7 text-slate-600">
              Kochkurse, Nachhilfe und mietbare Räume machen den Markt zum sozialen Mittelpunkt.
            </p>
          </div>
        </div>
      </div>
    </section>
  `}function y(){return`
    <section id="idee" class="px-6 py-12 sm:py-16">
      <div class="mx-auto max-w-7xl rounded-[2.2rem] border border-white/70 bg-white/80 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-9">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">Warum dieser Markt?</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              FoodConnectMarkt heißt: Anbau, Verkauf und Gemeinschaft greifen ineinander.
            </h2>
            <p class="mt-5 text-base leading-8 text-slate-600">
              Die Science League fordert einen Ort, an dem Technik, Nachhaltigkeit und soziales Leben sichtbar zusammenspielen. Genau das übersetzen wir in eine moderne Verkaufswebsite für Gemüse mit Zusatzangeboten für Bildung und Teilhabe.
            </p>
          </div>
          <div class="grid gap-4 md:grid-cols-3">
            ${t.map(e=>`
                  <article class="rounded-[1.75rem] border border-slate-200/70 bg-slate-50/90 p-5">
                    <h3 class="text-lg font-semibold text-slate-950">${e.title}</h3>
                    <p class="mt-3 text-sm leading-7 text-slate-600">${e.text}</p>
                  </article>
                `).join(``)}
          </div>
        </div>
      </div>
    </section>
  `}function b(){let e=d();return`
    <section id="produkte" class="px-6 py-12 sm:py-16">
      <div class="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1fr_21rem]">
        <div>
          <div class="flex flex-col gap-5 rounded-[2.2rem] border border-white/70 bg-white/82 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">Gemüseverkauf</p>
                <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Produktsuche mit Warenkorb</h2>
                <p class="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  Suche nach frischem Gemüse, Kräutern und urban angebauten Produkten. Der Warenkorb zeigt direkt, wie ein digitaler Verkaufsprozess im FoodConnectMarkt aussehen kann.
                </p>
              </div>
              <div class="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                ${e.length} Produkte gefunden
              </div>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-slate-700">Produkte suchen</span>
                <input
                  id="product-search"
                  type="search"
                  value="${D(c.query)}"
                  placeholder="z. B. Salat, Basilikum oder knackig"
                  class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </label>
              <div class="flex flex-wrap gap-2">
                ${r.map(e=>`
                      <button
                        type="button"
                        data-category="${e}"
                        class="rounded-full border px-4 py-2 text-sm font-medium transition ${c.category===e?`border-emerald-600 bg-emerald-600 text-white`:`border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50`}"
                      >
                        ${e}
                      </button>
                    `).join(``)}
              </div>
            </div>
          </div>

          <div class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            ${e.length>0?e.map(e=>`
                        <article class="flex h-full flex-col rounded-[1.9rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
                          <div class="rounded-[1.5rem] bg-gradient-to-br from-emerald-100 via-lime-50 to-white p-5">
                            <div class="flex items-start justify-between gap-4">
                              <span class="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">${e.category}</span>
                              <span class="rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs text-slate-600">${e.stock}</span>
                            </div>
                            <h3 class="mt-5 text-2xl font-semibold text-slate-950">${e.name}</h3>
                            <p class="mt-3 text-sm leading-7 text-slate-600">${e.description}</p>
                          </div>

                          <div class="mt-5 flex flex-1 flex-col">
                            <div class="flex items-end justify-between gap-4">
                              <div>
                                <p class="text-2xl font-semibold text-slate-950">${o.format(e.price)}</p>
                                <p class="mt-1 text-sm text-slate-500">${e.unit}</p>
                              </div>
                              <button
                                type="button"
                                data-add-to-cart="${e.id}"
                                class="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
                              >
                                In den Warenkorb
                              </button>
                            </div>
                            <div class="mt-4 flex flex-wrap gap-2">
                              ${e.tags.map(e=>`
                                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">${e}</span>
                                  `).join(``)}
                            </div>
                          </div>
                        </article>
                      `).join(``):`
                  <div class="md:col-span-2 xl:col-span-3 rounded-[1.9rem] border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-600">
                    Keine Produkte gefunden. Versuche einen anderen Suchbegriff oder eine andere Kategorie.
                  </div>
                `}
          </div>
        </div>

        ${x()}
      </div>
    </section>
  `}function x(){let e=f(),t=p(),n=m();return`
    <aside class="xl:sticky xl:top-6 xl:self-start">
      <div class="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-6 text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Warenkorb</p>
            <h3 class="mt-3 text-2xl font-semibold">${t} Artikel</h3>
          </div>
          <button
            type="button"
            data-clear-cart
            class="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/8"
          >
            Leeren
          </button>
        </div>

        <div class="mt-6 space-y-3">
          ${e.length>0?e.map(e=>`
                      <div class="rounded-[1.5rem] bg-white/8 p-4">
                        <div class="flex items-start justify-between gap-4">
                          <div>
                            <p class="font-medium text-white">${e.name}</p>
                            <p class="mt-1 text-sm text-slate-300">${o.format(e.price)} · ${e.unit}</p>
                          </div>
                          <p class="font-semibold text-emerald-300">${o.format(e.total)}</p>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                          <div class="inline-flex items-center gap-2 rounded-full bg-white/8 p-1">
                            <button type="button" data-decrease="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/20">−</button>
                            <span class="min-w-8 text-center text-sm font-medium">${e.quantity}</span>
                            <button type="button" data-increase="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-400">+</button>
                          </div>
                          <button type="button" data-remove="${e.id}" class="text-sm text-slate-300 transition hover:text-white">Entfernen</button>
                        </div>
                      </div>
                    `).join(``):`
                <div class="rounded-[1.5rem] border border-dashed border-white/15 px-4 py-6 text-sm leading-7 text-slate-300">
                  Noch nichts im Warenkorb. Wähle Produkte aus dem FoodConnectMarkt aus.
                </div>
              `}
        </div>

        <div class="mt-6 rounded-[1.5rem] bg-white/8 p-4">
          <div class="flex items-center justify-between text-sm text-slate-300">
            <span>Zwischensumme</span>
            <span>${o.format(n)}</span>
          </div>
          <div class="mt-2 flex items-center justify-between text-lg font-semibold text-white">
            <span>Gesamt</span>
            <span>${o.format(n)}</span>
          </div>
          <button type="button" class="mt-4 w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-400">
            Demo-Checkout starten
          </button>
        </div>
      </div>
    </aside>
  `}function S(){return`
    <section id="angebote" class="px-6 py-12 sm:py-16">
      <div class="mx-auto max-w-7xl rounded-[2.2rem] border border-white/70 bg-white/82 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8">
        <div class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">Angebote & Gemeinschaft</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Mehr als ein Gemüsemarkt</h2>
          <p class="mt-4 text-base leading-8 text-slate-600">
            Unser FoodConnectMarkt denkt Verkauf, Bildung und soziales Leben zusammen. Neben dem Gemüseangebot entstehen Räume für Austausch, Lernen und gemeinsames Erleben.
          </p>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          ${a.map(e=>`
                <article class="rounded-[1.8rem] border border-slate-200/70 bg-slate-50/80 p-5">
                  <span class="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">${e.badge}</span>
                  <h3 class="mt-4 text-xl font-semibold text-slate-950">${e.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-600">${e.text}</p>
                  <ul class="mt-5 space-y-2 text-sm text-slate-600">
                    ${e.details.map(e=>`<li>• ${e}</li>`).join(``)}
                  </ul>
                </article>
              `).join(``)}
        </div>
      </div>
    </section>
  `}function C(){return`
    <section id="wettbewerb" class="px-6 py-12 sm:py-16">
      <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div class="rounded-[2rem] border border-sky-100 bg-sky-50/80 p-7 shadow-[0_20px_50px_rgba(14,165,233,0.08)]">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Science League</p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Unser Wettbewerbsrahmen</h2>
          <p class="mt-4 text-base leading-8 text-slate-600">
            Die Science League 2025/2026 stellt den FoodConnectMarkt als smarten Ort für Anbau, Verkauf und Gemeinschaft in den Mittelpunkt. Unser Konzept übersetzt diese Idee in eine überzeugende Markt- und Webpräsenz.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="${e.links.competition}" target="_blank" rel="noreferrer" class="rounded-full bg-sky-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-700">
              Science League Seite
            </a>
            <a href="${e.links.team}" target="_blank" rel="noreferrer" class="rounded-full border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-sky-900 transition hover:bg-sky-50">
              Teamseite bre-delicious
            </a>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          ${n.map((e,t)=>`
                <article class="rounded-[1.8rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
                  <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">0${t+1}</p>
                  <h3 class="mt-4 text-xl font-semibold text-slate-950">${e.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-600">${e.text}</p>
                </article>
              `).join(``)}
        </div>
      </div>
    </section>
  `}function w(){return`
    <footer id="kontakt" class="px-6 pb-10 pt-12 sm:pb-14">
      <div class="mx-auto grid max-w-7xl gap-6 rounded-[2.2rem] border border-slate-200/70 bg-slate-950 px-7 py-8 text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">bre-delicious</p>
          <h2 class="mt-4 text-3xl font-semibold">FoodConnectMarkt für die Science League 2025/2026</h2>
          <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Eine Verkaufswebsite für Gemüse mit Warenkorb, Bildungsangeboten und sozialen Räumen — inspiriert vom FoodConnectMarkt-Wettbewerb und unserem Teamkonzept rund um Vertical Farming und urbane Versorgung.
          </p>
        </div>
        <div class="grid gap-2 text-sm text-slate-300">
          <a href="#produkte" class="transition hover:text-white">Produkte</a>
          <a href="#angebote" class="transition hover:text-white">Angebote</a>
          <a href="#wettbewerb" class="transition hover:text-white">Wettbewerb</a>
        </div>
      </div>
    </footer>
  `}function T(){s.innerHTML=`
    <div class="min-h-screen text-slate-900 antialiased">
      <header class="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" class="flex items-center gap-3">
            <div class="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald-400 via-lime-300 to-sky-300 text-sm font-semibold text-slate-950">FC</div>
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">bre-delicious</p>
              <p class="text-sm text-slate-500">FoodConnectMarkt</p>
            </div>
          </a>

          <nav class="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#idee" class="transition hover:text-slate-950">Konzept</a>
            <a href="#produkte" class="transition hover:text-slate-950">Produkte</a>
            <a href="#angebote" class="transition hover:text-slate-950">Angebote</a>
            <a href="#wettbewerb" class="transition hover:text-slate-950">Wettbewerb</a>
          </nav>

          <a href="#produkte" class="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700">
            Warenkorb (${p()})
          </a>
        </div>
      </header>

      <main id="top">
        ${v()}
        ${y()}
        ${b()}
        ${S()}
        ${C()}
      </main>

      ${w()}
    </div>
  `,E()}function E(){let e=document.querySelector(`#product-search`);e&&e.addEventListener(`input`,e=>{c.query=e.target.value,T()}),document.querySelectorAll(`[data-category]`).forEach(e=>{e.addEventListener(`click`,()=>{c.category=e.dataset.category,T()})}),document.querySelectorAll(`[data-add-to-cart]`).forEach(e=>{e.addEventListener(`click`,()=>{h(e.dataset.addToCart)})}),document.querySelectorAll(`[data-increase]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.increase;g(t,(c.cart[t]??0)+1)})}),document.querySelectorAll(`[data-decrease]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.decrease;g(t,(c.cart[t]??0)-1)})}),document.querySelectorAll(`[data-remove]`).forEach(e=>{e.addEventListener(`click`,()=>{g(e.dataset.remove,0)})}),document.querySelectorAll(`[data-clear-cart]`).forEach(e=>{e.addEventListener(`click`,()=>{_()})})}function D(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}T();