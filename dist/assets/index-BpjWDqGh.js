(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{label:`Über uns`,href:`#ueber-uns`},{label:`Soziales`,href:`#soziales`},{label:`Food`,href:`#food`}],t={season:`Science League 2025/2026`,brand:`bre-delicious`,title:`FoodConnectMarkt`,subtitle:`Ein Markt für frisches Essen, gemeinsames Lernen und echte Nachbarschaft.`,description:`Für die zdi Science League entwickelt das Team bre-delicious einen FoodConnectMarkt, der Vertical Farming, Einkauf, Bildung und soziale Angebote in einem praktischen Konzept verbindet.`,intro:`Die Website soll nicht nur erklären, was die Idee ist, sondern zeigen, wie sie sich im Alltag anfühlt: klar, vertrauenswürdig, nutzbar und offen für verschiedene Zielgruppen.`,links:{competition:`https://mint-community.de/scienceleague/`,team:`https://mint-community.de/science-league-teams/bre-delicious-saison-2025-2026/`}},n=[{value:`9`,label:`Produkte im Demo-Markt`},{value:`4`,label:`Soziale und Bildungsangebote`},{value:`1`,label:`Ort für Food, Lernen und Gemeinschaft`}],r=[`Transparente Produktinfos statt Deko-Overload`,`Klare Food-Suche mit Filtern, Warenkorb und Zustandsanzeige`,`Projektpräsentation, Community-Angebote und Einkauf in einem System`],i=[{title:`FoodConnectMarkt als echter Ort`,text:`Der Markt ist nicht nur Verkaufsfläche, sondern verbindet Anbau, Beratung, Begegnung und Teilhabe an einem Standort.`},{title:`Urban Farming sichtbar machen`,text:`Vertical Farming wird nicht im Hintergrund versteckt, sondern als Teil des Einkaufserlebnisses und der Bildungsarbeit erklärt.`},{title:`Niedrige Einstiegshürden`,text:`Menschen sollen schnell verstehen, was angeboten wird, wie Produkte gefunden werden und welche sozialen Formate es gibt.`}],a=[{value:`Food`,label:`Frisches Gemüse und Kräuter mit klarer Produktsuche, Lagerstatus und Warenkorb.`},{value:`Soziales`,label:`Mietbare Räume, Kochklassen, Lernangebote und offene Events für die Nachbarschaft.`},{value:`Projekt`,label:`Science League Kontext, Teamstory und Mission verständlich aufbereitet.`}],o=[{badge:`Raum & Begegnung`,title:`Mietbare Säle`,text:`Flexible Räume für Vereine, kleine Feiern, Initiativen oder Workshops. Der Markt bleibt dadurch auch außerhalb des Einkaufs relevant.`,details:[`verschiedene Raumgrößen`,`für Gruppen, Vereine und Familien`,`mit Technik und Bestuhlung planbar`]},{badge:`Bildung`,title:`Nachhilfe & Lernzeit`,text:`Schülerinnen und Schüler können Lerninseln, Hausaufgabenhilfe und praktische MINT-Bezüge rund um Ernährung und Anbau nutzen.`,details:[`Lernzeiten nach der Schule`,`MINT-Bezug durch Vertical Farming`,`ruhige Arbeitsplätze im Markt`]},{badge:`Food & Community`,title:`Kochklassen`,text:`Aus frischen Zutaten werden gemeinsame Kochformate für Kinder, Familien und Interessierte. Einkauf und Anwendung rücken näher zusammen.`,details:[`saisonale Rezepte`,`gemeinsames Kochen mit Marktgemüse`,`praxisnah und niedrigschwellig`]},{badge:`Mitmachen`,title:`Events & offene Formate`,text:`Workshops, Infotage und Mitmach-Aktionen bringen Nachbarschaft, Nachhaltigkeit und Ernährung in einen gemeinsamen Rahmen.`,details:[`Workshops und Themenabende`,`Mitmachformate für Schulklassen`,`offene Nachbarschaftstreffen`]}],s=[{title:`Science League Briefing`,text:`Die Aufgabe stellt einen FoodConnectMarkt in den Mittelpunkt, der Technik, Nachhaltigkeit und Alltagsnutzen zusammenbringt.`},{title:`Team bre-delicious`,text:`Das Team entwickelt daraus ein Konzept, das Gemüseverkauf, Community-Angebote und Bildung nicht trennt, sondern gemeinsam denkt.`},{title:`Digitale Nutzerführung`,text:`Die Website übersetzt das Marktmodell in eine nachvollziehbare Navigation mit klarem Einstieg für Über uns, Soziales und Food.`},{title:`Praktischer Demo-Flow`,text:`Produkte können gefiltert, verglichen und in einen Warenkorb gelegt werden, damit die Idee nicht abstrakt bleibt.`}],c=[`Alle`,`Blattgemüse`,`Kräuter`,`Fruchtgemüse`,`Wurzelgemüse`,`Pilze`],l=[{id:`romana-salat`,name:`Romana Salat`,category:`Blattgemüse`,price:2.9,unit:`pro Kopf`,stockLabel:`Erntebereit`,stockLevel:`fresh`,description:`Knackiger Salat direkt aus dem Vertical-Farming-Regal für Bowls, Sandwiches und schnelle Alltagsküche.`,origin:`Anbau im FoodConnectMarkt`,badge:`Heute empfohlen`,tags:[`hydroponisch`,`regional`,`frisch geerntet`]},{id:`basilikum`,name:`Basilikum`,category:`Kräuter`,price:1.8,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,description:`Aromatisches Basilikum für Pasta, Sandwiches, Pesto oder Kochklassen im Markt.`,origin:`Marktregal Kräuterzone`,badge:`Küchenklassiker`,tags:[`aromatisch`,`urban farm`,`beliebt`]},{id:`kirschtomaten`,name:`Kirschtomaten`,category:`Fruchtgemüse`,price:3.7,unit:`pro 500 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,description:`Süß, saftig und gut für Snackboxen, Salate oder kleine Marktverkostungen.`,origin:`Gewächshaus nah am Markt`,badge:`Familienfreundlich`,tags:[`snack`,`lokal`,`sommerlich`]},{id:`gurke`,name:`Mini Gurken`,category:`Fruchtgemüse`,price:2.6,unit:`pro 400 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,description:`Kühle, frische Gurken für Brotdosen, Salate und einfache gesunde Gerichte.`,origin:`Tagesfrische Lieferung`,badge:`Schnell vergriffen`,tags:[`knackig`,`alltag`,`frisch`]},{id:`microgreens`,name:`Microgreens Mix`,category:`Blattgemüse`,price:3.2,unit:`pro Schale`,stockLabel:`Frisch geschnitten`,stockLevel:`fresh`,description:`Kleine Blätter mit viel Geschmack und hohem Nährstoffprofil für Bowls und kreative Küche.`,origin:`Indoor Farm`,badge:`Premium`,tags:[`nährstoffreich`,`modern`,`fein`]},{id:`petersilie`,name:`Petersilie glatt`,category:`Kräuter`,price:1.5,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,description:`Vielseitig einsetzbar für Suppen, Dips, Gemüsepfannen und Kochkurse.`,origin:`Kräuterstation`,badge:`Preiswert`,tags:[`würzig`,`klassiker`,`erntefrisch`]},{id:`radieschen`,name:`Radieschen`,category:`Wurzelgemüse`,price:2.2,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,description:`Leicht scharf und knackig für Brote, Salate oder kleine Snackteller.`,origin:`Regionaler Partnerbetrieb`,badge:`Wochenmarkt-Gefühl`,tags:[`saisonal`,`regional`,`knackig`]},{id:`seitlinge`,name:`Austernseitlinge`,category:`Pilze`,price:4.4,unit:`pro 300 g`,stockLabel:`Kleine Ernte`,stockLevel:`limited`,description:`Herzhafte Pilze für Pfanne, Pasta oder Workshops rund um nachhaltige Ernährung.`,origin:`Pilzzucht-Partner`,badge:`Nur kleine Menge`,tags:[`umami`,`kochkurs-favorit`,`besonders`]},{id:`mangold`,name:`Bunter Mangold`,category:`Blattgemüse`,price:3.4,unit:`pro Bund`,stockLabel:`Erntebereit`,stockLevel:`fresh`,description:`Farbenfroher Mangold für Pfanne, Ofengerichte und sichtbare Frische im Regal.`,origin:`Vertical-Farming-Modul`,badge:`Saisonal`,tags:[`farbig`,`frisch geerntet`,`regional`]}],u=`foodconnect-cart-v2`,d=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),f=[{value:`Alle`,label:`Alle Bestände`},{value:`fresh`,label:`Frisch geerntet`},{value:`ready`,label:`Sofort verfügbar`},{value:`limited`,label:`Nur kleine Menge`}],p=[{value:`empfohlen`,label:`Empfohlen`},{value:`preis-aufsteigend`,label:`Preis: niedrig zuerst`},{value:`preis-absteigend`,label:`Preis: hoch zuerst`},{value:`name-a-z`,label:`Name A–Z`}],m=document.querySelector(`#app`),h={query:``,category:`Alle`,stock:`Alle`,sort:`empfohlen`,cart:g(),mobileMenuOpen:!1,cartDrawerOpen:!1};function g(){try{let e=window.localStorage.getItem(u);return e?JSON.parse(e):{}}catch{return{}}}function _(){window.localStorage.setItem(u,JSON.stringify(h.cart))}function v(e){return l.find(t=>t.id===e)}function y(){return Object.entries(h.cart).map(([e,t])=>{let n=v(e);return!n||t<=0?null:{...n,quantity:t,total:n.price*t}}).filter(Boolean)}function b(){return Object.values(h.cart).reduce((e,t)=>e+t,0)}function x(){return y().reduce((e,t)=>e+t.total,0)}function S(){let e=0;return h.query.trim()&&(e+=1),h.category!==`Alle`&&(e+=1),h.stock!==`Alle`&&(e+=1),e}function C(e,t){return t?[e.name,e.description,e.category,e.origin,e.badge,...e.tags].join(` `).toLowerCase().includes(t):!0}function w(e){return h.stock===`Alle`?!0:e.stockLevel===h.stock}function T(e){switch(h.sort){case`preis-aufsteigend`:return[...e].sort((e,t)=>e.price-t.price);case`preis-absteigend`:return[...e].sort((e,t)=>t.price-e.price);case`name-a-z`:return[...e].sort((e,t)=>e.name.localeCompare(t.name,`de`));default:return[...e].sort((e,t)=>{let n=E(e),r=E(t);return r===n?e.name.localeCompare(t.name,`de`):r-n})}}function E(e){return{fresh:3,ready:2,limited:1}[e.stockLevel]+(e.badge===`Heute empfohlen`?2:0)}function D(){let e=h.query.trim().toLowerCase();return T(l.filter(t=>(h.category===`Alle`||t.category===h.category)&&w(t)&&C(t,e)))}function O(e){h.cart[e]=(h.cart[e]??0)+1,_(),K()}function k(e,t){t<=0?delete h.cart[e]:h.cart[e]=t,_(),K()}function A(){h.cart={},_(),K()}function j(){h.query=``,h.category=`Alle`,h.stock=`Alle`,h.sort=`empfohlen`,K()}function M(e){return{fresh:`border-emerald-200 bg-emerald-50 text-emerald-800`,ready:`border-sky-200 bg-sky-50 text-sky-800`,limited:`border-amber-200 bg-amber-50 text-amber-800`}[e.stockLevel]??`border-stone-200 bg-stone-100 text-stone-700`}function N(){return`
    <header class="sticky top-0 z-50 border-b border-stone-200/80 bg-[rgba(249,247,242,0.92)] backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-6">
        <a href="#top" class="flex min-w-0 items-center gap-3" data-action="close-overlays">
          <div class="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200 bg-emerald-50 text-sm font-semibold text-emerald-900">
            FC
          </div>
          <div class="min-w-0">
            <p class="truncate text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">${t.brand}</p>
            <p class="truncate text-sm text-stone-600">${t.title}</p>
          </div>
        </a>

        <nav class="ml-auto hidden items-center gap-6 text-sm text-stone-600 lg:flex">
          ${e.map(e=>`
                <a href="${e.href}" class="transition hover:text-stone-950">${e.label}</a>
              `).join(``)}
          <a
            href="#food"
            class="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 font-medium text-stone-900 transition hover:border-stone-400 hover:bg-stone-50"
          >
            Warenkorb
            <span class="rounded-full bg-stone-900 px-2 py-0.5 text-xs text-white">${b()}</span>
          </a>
        </nav>

        <div class="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            data-action="toggle-cart"
            class="inline-flex h-11 items-center gap-2 rounded-full border border-stone-300 bg-white px-4 text-sm font-medium text-stone-900"
            aria-label="Warenkorb öffnen"
          >
            Korb
            <span class="rounded-full bg-stone-900 px-2 py-0.5 text-xs text-white">${b()}</span>
          </button>
          <button
            type="button"
            data-action="toggle-menu"
            class="grid h-11 w-11 place-items-center rounded-full border border-stone-300 bg-white text-stone-900"
            aria-expanded="${h.mobileMenuOpen?`true`:`false`}"
            aria-label="Navigation umschalten"
          >
            <span class="text-lg">${h.mobileMenuOpen?`×`:`☰`}</span>
          </button>
        </div>
      </div>

      ${h.mobileMenuOpen?`
            <div class="border-t border-stone-200 bg-[rgba(249,247,242,0.98)] lg:hidden">
              <nav class="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
                ${e.map(e=>`
                      <a
                        href="${e.href}"
                        data-action="close-overlays"
                        class="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white"
                      >
                        ${e.label}
                      </a>
                    `).join(``)}
                <a
                  href="#science-league"
                  data-action="close-overlays"
                  class="rounded-2xl px-4 py-3 text-base font-medium text-stone-800 transition hover:bg-white"
                >
                  Science League
                </a>
              </nav>
            </div>
          `:``}
    </header>
  `}function P(){return`
    <section id="top" class="px-5 pb-8 pt-6 lg:px-6 lg:pb-12 lg:pt-10">
      <div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="rounded-[2rem] border border-stone-200 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(41,37,36,0.06)] sm:px-8 sm:py-9 lg:min-h-[34rem]">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">${t.season}</p>
          <h1 class="mt-5 max-w-[12ch] text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
            ${t.title} mit klarem Food-Fokus und echter Community.
          </h1>
          <p class="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
            ${t.subtitle}
          </p>
          <p class="mt-4 max-w-3xl text-base leading-8 text-stone-600">
            ${t.description}
          </p>
          <p class="mt-4 max-w-3xl text-base leading-8 text-stone-600">
            ${t.intro}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#food"
              class="inline-flex items-center justify-center rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
            >
              Food-Bereich öffnen
            </a>
            <a
              href="#soziales"
              class="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-900 transition hover:border-stone-400 hover:bg-stone-50"
            >
              Soziale Angebote ansehen
            </a>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            ${n.map(e=>`
                  <article class="rounded-[1.4rem] border border-stone-200 bg-stone-50 px-4 py-4">
                    <p class="text-2xl font-semibold text-stone-950">${e.value}</p>
                    <p class="mt-2 text-sm leading-6 text-stone-600">${e.label}</p>
                  </article>
                `).join(``)}
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <article class="rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-6 text-stone-50 shadow-[0_20px_60px_rgba(28,25,23,0.12)]">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Marktüberblick</p>
                <h2 class="mt-3 text-2xl font-semibold">Drei Ebenen, ein System</h2>
              </div>
              <span class="rounded-full border border-white/15 px-3 py-1 text-xs text-stone-300">FoodConnectMarkt</span>
            </div>
            <div class="mt-6 space-y-3">
              ${r.map(e=>`
                    <div class="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200">
                      ${e}
                    </div>
                  `).join(``)}
            </div>
          </article>

          <article class="rounded-[2rem] border border-emerald-200 bg-emerald-50 px-6 py-6">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">Food</p>
            <h2 class="mt-3 text-2xl font-semibold text-stone-950">Produktinfos, Filter und Warenkorb</h2>
            <p class="mt-3 text-sm leading-7 text-stone-700">
              Der Einkaufsbereich wurde wie ein nutzbares Shop-Modul gedacht: schneller Einstieg, klare Karten, sichtbare Preise und eindeutige Aktionen.
            </p>
          </article>

          <article class="rounded-[2rem] border border-amber-200 bg-amber-50 px-6 py-6">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-800">Community</p>
            <h2 class="mt-3 text-2xl font-semibold text-stone-950">Markt, Lernort und Treffpunkt</h2>
            <p class="mt-3 text-sm leading-7 text-stone-700">
              Soziale Räume, Kochklassen und Veranstaltungen geben dem Projekt Tiefe und machen den Markt für verschiedene Menschen relevant.
            </p>
          </article>
        </div>
      </div>
    </section>
  `}function F(){return`
    <section id="ueber-uns" class="px-5 py-8 lg:px-6 lg:py-12">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div class="rounded-[2rem] border border-stone-200 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)] sm:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">Über uns</p>
            <h2 class="mt-4 max-w-[13ch] text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
              Das Projekt wird als brauchbares Produkt erzählt, nicht als lose Ideenliste.
            </h2>
            <p class="mt-5 text-base leading-8 text-stone-600">
              Der FoodConnectMarkt verbindet Frische, Nahversorgung, Bildung und Nachbarschaft. Deshalb ist die Website in klare Einstiege gegliedert: Wer die Idee verstehen will, landet bei Über uns. Wer Angebote sucht, findet Soziales. Wer einkaufen will, bekommt einen fokussierten Food-Bereich.
            </p>

            <div class="mt-8 grid gap-3">
              ${a.map(e=>`
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
  `}function I(){return`
    <section id="soziales" class="px-5 py-8 lg:px-6 lg:py-12">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div class="grid gap-4">
            <article class="rounded-[2rem] border border-stone-200 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)] sm:px-8">
              <p class="text-xs font-semibold uppercase tracking-[0.32em] text-amber-800">Soziales</p>
              <h2 class="mt-4 max-w-[12ch] text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">
                Gemeinschaftsangebote sind kein Anhang, sondern ein eigener Nutzungsgrund.
              </h2>
              <p class="mt-5 text-base leading-8 text-stone-600">
                Der Markt soll auch Menschen ansprechen, die nicht nur einkaufen wollen. Deshalb bekommt der Bereich Soziales eine eigenständige Bühne mit Raumangeboten, Lernformaten und Veranstaltungen.
              </p>
            </article>

            <article class="rounded-[2rem] border border-amber-200 bg-amber-50 px-6 py-6">
              <p class="text-sm font-medium text-amber-900">Warum das wichtig ist</p>
              <ul class="mt-4 space-y-3 text-sm leading-7 text-stone-700">
                <li>• Der FoodConnectMarkt wirkt glaubwürdiger, wenn er reale Alltagsnutzung zeigt.</li>
                <li>• Bildung und Teilhabe machen das Projekt sozialer und öffentlicher.</li>
                <li>• Unterschiedliche Zielgruppen finden schnell den passenden Einstieg.</li>
              </ul>
            </article>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            ${o.map((e,t)=>`
                  <article class="rounded-[2rem] border border-stone-200 ${t===2?`bg-emerald-50`:`bg-white`} px-6 py-6 shadow-[0_18px_50px_rgba(41,37,36,0.05)]">
                    <span class="inline-flex rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-stone-700">
                      ${e.badge}
                    </span>
                    <h3 class="mt-4 text-2xl font-semibold text-stone-950">${e.title}</h3>
                    <p class="mt-3 text-sm leading-7 text-stone-600">${e.text}</p>
                    <ul class="mt-5 space-y-2 text-sm text-stone-600">
                      ${e.details.map(e=>`<li>• ${e}</li>`).join(``)}
                    </ul>
                  </article>
                `).join(``)}
          </div>
        </div>
      </div>
    </section>
  `}function L(){return`
    <aside class="rounded-[1.75rem] border border-stone-200 bg-stone-50 px-5 py-5">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-sm font-semibold text-stone-950">Filter</p>
          <p class="mt-1 text-sm text-stone-600">${S()} aktiv</p>
        </div>
        <button
          type="button"
          data-action="clear-filters"
          class="text-sm font-medium text-stone-600 transition hover:text-stone-950"
        >
          Zurücksetzen
        </button>
      </div>

      <div class="mt-6">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Kategorie</p>
        <div class="mt-3 flex flex-wrap gap-2 lg:flex-col">
          ${c.map(e=>`
                <button
                  type="button"
                  data-action="set-category"
                  data-value="${e}"
                  class="rounded-full border px-4 py-2 text-sm font-medium transition ${h.category===e?`border-stone-950 bg-stone-950 text-white`:`border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100`}"
                >
                  ${e}
                </button>
              `).join(``)}
        </div>
      </div>

      <div class="mt-6">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Bestand</p>
        <div class="mt-3 grid gap-2">
          ${f.map(e=>`
                <button
                  type="button"
                  data-action="set-stock"
                  data-value="${e.value}"
                  class="flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${h.stock===e.value?`border-emerald-300 bg-emerald-50 text-emerald-900`:`border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100`}"
                >
                  <span>${e.label}</span>
                  <span class="text-xs uppercase tracking-[0.2em]">${e.value===`Alle`?`ALL`:e.value}</span>
                </button>
              `).join(``)}
        </div>
      </div>

      <div class="mt-6 rounded-[1.4rem] border border-stone-200 bg-white px-4 py-4">
        <p class="text-sm font-semibold text-stone-950">Einkauf im Überblick</p>
        <ul class="mt-3 space-y-2 text-sm leading-6 text-stone-600">
          <li>• sichtbare Kategorie- und Bestandsanzeige</li>
          <li>• schnelle Suche ohne unnötige Schritte</li>
          <li>• direkter Warenkorb mit Mengensteuerung</li>
        </ul>
      </div>
    </aside>
  `}function R(e){let t=h.cart[e.id]??0;return`
    <article class="flex h-full flex-col rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-[0_14px_34px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-[0_20px_44px_rgba(41,37,36,0.08)]">
      <div class="flex items-start justify-between gap-3">
        <span class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
          ${e.category}
        </span>
        <span class="rounded-full border px-3 py-1 text-xs font-medium ${M(e)}">
          ${e.stockLabel}
        </span>
      </div>

      <div class="mt-5">
        <p class="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-800">${e.badge}</p>
        <h3 class="mt-2 text-2xl font-semibold text-stone-950">${e.name}</h3>
        <p class="mt-3 text-sm leading-7 text-stone-600">${e.description}</p>
      </div>

      <dl class="mt-5 grid grid-cols-2 gap-3 rounded-[1.4rem] border border-stone-200 bg-stone-50 px-4 py-4 text-sm">
        <div>
          <dt class="text-stone-500">Preis</dt>
          <dd class="mt-1 font-semibold text-stone-950">${d.format(e.price)}</dd>
        </div>
        <div>
          <dt class="text-stone-500">Einheit</dt>
          <dd class="mt-1 font-medium text-stone-800">${e.unit}</dd>
        </div>
        <div class="col-span-2">
          <dt class="text-stone-500">Herkunft</dt>
          <dd class="mt-1 font-medium text-stone-800">${e.origin}</dd>
        </div>
      </dl>

      <div class="mt-5 flex flex-wrap gap-2">
        ${e.tags.map(e=>`
              <span class="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                ${e}
              </span>
            `).join(``)}
      </div>

      <div class="mt-auto pt-6">
        ${t>0?`
              <div class="flex items-center justify-between gap-3">
                <div class="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-2 py-2">
                  <button type="button" data-action="decrease" data-id="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-white text-lg text-stone-900 transition hover:bg-stone-200" aria-label="Menge verringern">−</button>
                  <span class="min-w-7 text-center text-sm font-semibold text-stone-900">${t}</span>
                  <button type="button" data-action="increase" data-id="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-stone-950 text-lg text-white transition hover:bg-emerald-800" aria-label="Menge erhöhen">+</button>
                </div>
                <p class="text-sm font-medium text-emerald-800">Im Warenkorb</p>
              </div>
            `:`
              <button
                type="button"
                data-action="add-to-cart"
                data-id="${e.id}"
                class="inline-flex w-full items-center justify-center rounded-full bg-stone-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
              >
                In den Warenkorb
              </button>
            `}
      </div>
    </article>
  `}function z(){let e=D();return e.length===0?`
      <div class="rounded-[1.75rem] border border-dashed border-stone-300 bg-stone-50 px-6 py-10 text-center">
        <p class="text-lg font-semibold text-stone-950">Keine Produkte gefunden</p>
        <p class="mt-3 text-sm leading-7 text-stone-600">
          Versuche eine andere Kategorie, lösche Filter oder suche nach Begriffen wie Kräuter, frisch oder regional.
        </p>
      </div>
    `:`
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      ${e.map(e=>R(e)).join(``)}
    </div>
  `}function B(){let e=y(),t=b(),n=x();return`
    <div class="rounded-[1.75rem] border border-stone-200 bg-stone-950 px-5 py-5 text-stone-50 shadow-[0_18px_50px_rgba(28,25,23,0.18)]">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Warenkorb</p>
          <h3 class="mt-3 text-2xl font-semibold">${t} Artikel</h3>
        </div>
        <button
          type="button"
          data-action="clear-cart"
          class="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-stone-200 transition hover:border-white/30 hover:bg-white/10"
        >
          Leeren
        </button>
      </div>

      <div class="mt-5 space-y-3">
        ${e.length>0?e.map(e=>`
                    <article class="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <p class="font-medium text-white">${e.name}</p>
                          <p class="mt-1 text-sm text-stone-300">${d.format(e.price)} · ${e.unit}</p>
                        </div>
                        <p class="font-semibold text-emerald-300">${d.format(e.total)}</p>
                      </div>
                      <div class="mt-4 flex items-center justify-between gap-3">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2">
                          <button type="button" data-action="decrease" data-id="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20" aria-label="Menge verringern">−</button>
                          <span class="min-w-7 text-center text-sm font-semibold text-white">${e.quantity}</span>
                          <button type="button" data-action="increase" data-id="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-lg text-white transition hover:bg-emerald-400" aria-label="Menge erhöhen">+</button>
                        </div>
                        <button type="button" data-action="remove" data-id="${e.id}" class="text-sm text-stone-300 transition hover:text-white">
                          Entfernen
                        </button>
                      </div>
                    </article>
                  `).join(``):`
              <div class="rounded-[1.35rem] border border-dashed border-white/15 px-4 py-6 text-sm leading-7 text-stone-300">
                Noch nichts im Warenkorb. Wähle Produkte aus dem Food-Bereich aus, um den Demo-Checkout zu testen.
              </div>
            `}
      </div>

      <div class="mt-5 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
        <div class="flex items-center justify-between text-sm text-stone-300">
          <span>Zwischensumme</span>
          <span>${d.format(n)}</span>
        </div>
        <div class="mt-2 flex items-center justify-between text-lg font-semibold text-white">
          <span>Gesamt</span>
          <span>${d.format(n)}</span>
        </div>
        <p class="mt-3 text-sm leading-6 text-stone-300">Demo-Flow für den FoodConnectMarkt: Auswahl, Mengensteuerung und klare Zusammenfassung in einem Blick.</p>
        <button type="button" class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-400">
          Demo-Checkout starten
        </button>
      </div>
    </div>
  `}function V(){let e=D();return`
    <section id="food" class="px-5 py-8 lg:px-6 lg:py-12">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">Food</p>
            <h2 class="mt-3 text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">Produktsuche mit vertrauter Shop-Logik</h2>
            <p class="mt-4 max-w-3xl text-base leading-8 text-stone-600">
              Der Einkaufsbereich ist auf schnelle Orientierung ausgelegt: Suche, Filter, starke Produktkarten und ein sichtbarer Warenkorb sorgen für einen nutzbaren Demo-Shop.
            </p>
          </div>
          <div class="rounded-[1.5rem] border border-stone-200 bg-white px-4 py-4 text-sm text-stone-700 shadow-[0_10px_24px_rgba(41,37,36,0.05)]">
            <p class="font-semibold text-stone-950">${e.length} Treffer</p>
            <p class="mt-1">${b()} Artikel im Warenkorb</p>
          </div>
        </div>

        <div class="mt-6 rounded-[2rem] border border-stone-200 bg-white px-4 py-4 shadow-[0_18px_50px_rgba(41,37,36,0.05)] lg:px-6 lg:py-6">
          <div class="grid gap-4 border-b border-stone-200 pb-5 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-stone-700">Produkte suchen</span>
              <input
                id="product-search"
                type="search"
                value="${X(h.query)}"
                placeholder="z. B. Salat, Basilikum, regional oder frisch"
                class="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-stone-700">Sortieren</span>
              <select
                id="sort-select"
                class="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              >
                ${p.map(e=>`<option value="${e.value}" ${h.sort===e.value?`selected`:``}>${e.label}</option>`).join(``)}
              </select>
            </label>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <span class="font-medium text-stone-800">Aktive Auswahl:</span>
            ${h.category===`Alle`?``:`<span class="rounded-full bg-stone-100 px-3 py-1">Kategorie: ${h.category}</span>`}
            ${h.stock===`Alle`?``:`<span class="rounded-full bg-stone-100 px-3 py-1">Bestand: ${f.find(e=>e.value===h.stock)?.label}</span>`}
            ${h.query.trim()?`<span class="rounded-full bg-stone-100 px-3 py-1">Suche: „${X(h.query.trim())}“</span>`:``}
            ${S()===0?`<span class="rounded-full bg-emerald-50 px-3 py-1 text-emerald-800">Keine Filter aktiv</span>`:``}
          </div>

          <div class="mt-6 grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)_20rem]">
            ${L()}

            <div>
              <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm text-stone-600">${e.length} Produkte sichtbar · klare Preis-, Kategorie- und Bestandsanzeige</p>
                <a href="#science-league" class="text-sm font-medium text-emerald-800 transition hover:text-emerald-900">Mehr zum Projekt</a>
              </div>
              ${z()}
            </div>

            <aside class="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              ${B()}
            </aside>
          </div>
        </div>
      </div>
    </section>
  `}function H(){return`
    <section id="science-league" class="px-5 py-8 lg:px-6 lg:py-12">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article class="rounded-[2rem] border border-stone-200 bg-stone-950 px-6 py-7 text-stone-50 shadow-[0_18px_50px_rgba(28,25,23,0.14)] sm:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Science League</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight">Projektkontext und Teamstory bleiben sichtbar, aber geordnet.</h2>
            <p class="mt-5 text-base leading-8 text-stone-200">
              Der Science-League-Rahmen gehört klar zur Geschichte des Projekts, soll aber die eigentliche Nutzung nicht überdecken. Deshalb steht er in einer eigenen Sektion mit kurzen Entwicklungsschritten, Teambezug und externen Links.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="${t.links.competition}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-400">
                Science League Seite
              </a>
              <a href="${t.links.team}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                Team bre-delicious
              </a>
            </div>
          </article>

          <div class="grid gap-4 md:grid-cols-2">
            ${s.map((e,t)=>`
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
  `}function U(){return`
    <footer class="px-5 pb-10 pt-8 lg:px-6 lg:pb-14">
      <div class="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-stone-200 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(41,37,36,0.05)] lg:grid-cols-[1fr_auto_auto] lg:items-start">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">${t.brand}</p>
          <h2 class="mt-4 text-2xl font-semibold text-stone-950">${t.title} für die ${t.season}</h2>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
            Eine Website mit klarer Navigation, nutzbarer Produktdarstellung und einer konsistenten visuellen Sprache für Food, Soziales und Projektstory.
          </p>
        </div>

        <div class="grid gap-2 text-sm text-stone-600">
          ${e.map(e=>`<a href="${e.href}" class="transition hover:text-stone-950">${e.label}</a>`).join(``)}
        </div>

        <div class="grid gap-2 text-sm text-stone-600">
          <a href="#science-league" class="transition hover:text-stone-950">Science League</a>
          <a href="#top" class="transition hover:text-stone-950">Nach oben</a>
        </div>
      </div>
    </footer>
  `}function W(){return`
    <div class="fixed inset-0 z-50 ${h.cartDrawerOpen?``:`pointer-events-none`} lg:hidden" aria-hidden="${h.cartDrawerOpen?`false`:`true`}">
      <button
        type="button"
        data-action="close-cart"
        class="absolute inset-0 bg-stone-950/35 transition ${h.cartDrawerOpen?`opacity-100`:`opacity-0`}"
        aria-label="Warenkorb schließen"
      ></button>
      <div class="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[2rem] border border-stone-200 bg-[rgba(249,247,242,0.98)] p-4 shadow-[0_-18px_40px_rgba(28,25,23,0.18)] transition duration-200 ${h.cartDrawerOpen?`translate-y-0`:`translate-y-full`}">
        <div class="mb-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-stone-950">Mobiler Warenkorb</p>
            <p class="text-sm text-stone-600">Mengen direkt hier anpassen</p>
          </div>
          <button type="button" data-action="close-cart" class="grid h-10 w-10 place-items-center rounded-full border border-stone-300 bg-white text-stone-900" aria-label="Schließen">×</button>
        </div>
        ${B()}
      </div>
    </div>
  `}function G(){return b()===0?``:`
    <div class="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <button
        type="button"
        data-action="toggle-cart"
        class="flex w-full items-center justify-between rounded-full border border-stone-300 bg-white px-5 py-3 text-left shadow-[0_12px_30px_rgba(41,37,36,0.12)]"
      >
        <div>
          <p class="text-sm font-semibold text-stone-950">Warenkorb öffnen</p>
          <p class="text-sm text-stone-600">${b()} Artikel · ${d.format(x())}</p>
        </div>
        <span class="rounded-full bg-stone-950 px-3 py-1 text-sm font-medium text-white">Ansehen</span>
      </button>
    </div>
  `}function K(){m.innerHTML=`
    <div class="min-h-screen text-stone-900 antialiased">
      ${N()}
      <main>
        ${P()}
        ${F()}
        ${I()}
        ${V()}
        ${H()}
      </main>
      ${U()}
      ${W()}
      ${G()}
    </div>
  `}function q(e){let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,value:r,id:i}=t.dataset;switch(n){case`toggle-menu`:h.mobileMenuOpen=!h.mobileMenuOpen,h.mobileMenuOpen&&(h.cartDrawerOpen=!1),K();break;case`toggle-cart`:h.cartDrawerOpen=!h.cartDrawerOpen,h.cartDrawerOpen&&(h.mobileMenuOpen=!1),K();break;case`close-cart`:h.cartDrawerOpen=!1,K();break;case`close-overlays`:h.mobileMenuOpen=!1,h.cartDrawerOpen=!1,K();break;case`set-category`:h.category=r,K();break;case`set-stock`:h.stock=r,K();break;case`clear-filters`:j();break;case`add-to-cart`:O(i);break;case`increase`:k(i,(h.cart[i]??0)+1);break;case`decrease`:k(i,(h.cart[i]??0)-1);break;case`remove`:k(i,0);break;case`clear-cart`:A();break;default:break}}function J(e){e.target.id===`product-search`&&(h.query=e.target.value,K())}function Y(e){e.target.id===`sort-select`&&(h.sort=e.target.value,K())}function X(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}m.addEventListener(`click`,q),m.addEventListener(`input`,J),m.addEventListener(`change`,Y),K();