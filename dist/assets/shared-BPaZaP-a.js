(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{key:`about`,label:`Über uns`,href:`index.html`},{key:`social`,label:`Soziales`,href:`soziales.html`},{key:`food`,label:`Food`,href:`food.html`}],t={season:`Science League 2025/2026`,brand:`bre-delicious`,title:`FoodConnectMarkt`,subtitle:`Ein Markt für frisches Essen, gemeinsames Lernen und echte Nachbarschaft.`,description:`Für die zdi Science League entwickelt das Team bre-delicious einen FoodConnectMarkt, der Vertical Farming, Einkauf, Bildung und soziale Angebote in einem praktischen Konzept verbindet.`,intro:`Die Website soll nicht nur erklären, was die Idee ist, sondern zeigen, wie sie sich im Alltag anfühlt: klar, vertrauenswürdig, nutzbar und offen für verschiedene Zielgruppen.`,links:{competition:`https://mint-community.de/scienceleague/`,team:`https://mint-community.de/science-league-teams/bre-delicious-saison-2025-2026/`}},n=[{value:`9`,label:`Produkte im Demo-Markt`},{value:`4`,label:`Soziale und Bildungsangebote`},{value:`1`,label:`Ort für Food, Lernen und Gemeinschaft`}],r=[`Transparente Produktinfos statt Deko-Overload`,`Klare Food-Suche mit Filtern, Warenkorb und Zustandsanzeige`,`Projektpräsentation, Community-Angebote und Einkauf in einem System`],i=[{title:`FoodConnectMarkt als echter Ort`,text:`Der Markt ist nicht nur Verkaufsfläche, sondern verbindet Anbau, Beratung, Begegnung und Teilhabe an einem Standort.`},{title:`Urban Farming sichtbar machen`,text:`Vertical Farming wird nicht im Hintergrund versteckt, sondern als Teil des Einkaufserlebnisses und der Bildungsarbeit erklärt.`},{title:`Niedrige Einstiegshürden`,text:`Menschen sollen schnell verstehen, was angeboten wird, wie Produkte gefunden werden und welche sozialen Formate es gibt.`}],a=[{value:`Food`,label:`Frisches Gemüse und Kräuter mit klarer Produktsuche, Lagerstatus und Warenkorb.`},{value:`Soziales`,label:`Mietbare Räume, Kochklassen, Lernangebote und offene Events für die Nachbarschaft.`},{value:`Projekt`,label:`Science League Kontext, Teamstory und Mission verständlich aufbereitet.`}],o=[{badge:`Raum & Begegnung`,title:`Mietbare Säle`,text:`Flexible Räume für Vereine, kleine Feiern, Initiativen oder Workshops. Der Markt bleibt dadurch auch außerhalb des Einkaufs relevant.`,details:[`verschiedene Raumgrößen`,`für Gruppen, Vereine und Familien`,`mit Technik und Bestuhlung planbar`]},{badge:`Bildung`,title:`Nachhilfe & Lernzeit`,text:`Schülerinnen und Schüler können Lerninseln, Hausaufgabenhilfe und praktische MINT-Bezüge rund um Ernährung und Anbau nutzen.`,details:[`Lernzeiten nach der Schule`,`MINT-Bezug durch Vertical Farming`,`ruhige Arbeitsplätze im Markt`]},{badge:`Food & Community`,title:`Kochklassen`,text:`Aus frischen Zutaten werden gemeinsame Kochformate für Kinder, Familien und Interessierte. Einkauf und Anwendung rücken näher zusammen.`,details:[`saisonale Rezepte`,`gemeinsames Kochen mit Marktgemüse`,`praxisnah und niedrigschwellig`]},{badge:`Mitmachen`,title:`Events & offene Formate`,text:`Workshops, Infotage und Mitmach-Aktionen bringen Nachbarschaft, Nachhaltigkeit und Ernährung in einen gemeinsamen Rahmen.`,details:[`Workshops und Themenabende`,`Mitmachformate für Schulklassen`,`offene Nachbarschaftstreffen`]}],s=[{title:`Science League Briefing`,text:`Die Aufgabe stellt einen FoodConnectMarkt in den Mittelpunkt, der Technik, Nachhaltigkeit und Alltagsnutzen zusammenbringt.`},{title:`Team bre-delicious`,text:`Das Team entwickelt daraus ein Konzept, das Gemüseverkauf, Community-Angebote und Bildung nicht trennt, sondern gemeinsam denkt.`},{title:`Digitale Nutzerführung`,text:`Die Website übersetzt das Marktmodell in eine nachvollziehbare Navigation mit klarem Einstieg für Über uns, Soziales und Food.`},{title:`Praktischer Demo-Flow`,text:`Produkte können gefiltert, verglichen und in einen Warenkorb gelegt werden, damit die Idee nicht abstrakt bleibt.`}],c=[`Alle`,`Blattgemüse`,`Kräuter`,`Fruchtgemüse`,`Wurzelgemüse`,`Pilze`],l=[{id:`romana-salat`,name:`Romana Salat`,category:`Blattgemüse`,price:2.9,unit:`pro Kopf`,stockLabel:`Erntebereit`,stockLevel:`fresh`,image:`/images/products/romana-salat.jpg`,description:`Knackiger Salat direkt aus dem Vertical-Farming-Regal für Bowls, Sandwiches und schnelle Alltagsküche.`,origin:`Anbau im FoodConnectMarkt`,badge:`Heute empfohlen`,tags:[`hydroponisch`,`regional`,`frisch geerntet`]},{id:`basilikum`,name:`Basilikum`,category:`Kräuter`,price:1.8,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/basilikum.jpg`,description:`Aromatisches Basilikum für Pasta, Sandwiches, Pesto oder Kochklassen im Markt.`,origin:`Marktregal Kräuterzone`,badge:`Küchenklassiker`,tags:[`aromatisch`,`urban farm`,`beliebt`]},{id:`kirschtomaten`,name:`Kirschtomaten`,category:`Fruchtgemüse`,price:3.7,unit:`pro 500 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/kirschtomaten.jpg`,description:`Süß, saftig und gut für Snackboxen, Salate oder kleine Marktverkostungen.`,origin:`Gewächshaus nah am Markt`,badge:`Familienfreundlich`,tags:[`snack`,`lokal`,`sommerlich`]},{id:`gurke`,name:`Mini Gurken`,category:`Fruchtgemüse`,price:2.6,unit:`pro 400 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/gurke.jpg`,description:`Kühle, frische Gurken für Brotdosen, Salate und einfache gesunde Gerichte.`,origin:`Tagesfrische Lieferung`,badge:`Schnell vergriffen`,tags:[`knackig`,`alltag`,`frisch`]},{id:`microgreens`,name:`Microgreens Mix`,category:`Blattgemüse`,price:3.2,unit:`pro Schale`,stockLabel:`Frisch geschnitten`,stockLevel:`fresh`,image:`/images/products/microgreens.jpg`,description:`Kleine Blätter mit viel Geschmack und hohem Nährstoffprofil für Bowls und kreative Küche.`,origin:`Indoor Farm`,badge:`Premium`,tags:[`nährstoffreich`,`modern`,`fein`]},{id:`petersilie`,name:`Petersilie glatt`,category:`Kräuter`,price:1.5,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/petersilie.jpg`,description:`Vielseitig einsetzbar für Suppen, Dips, Gemüsepfannen und Kochkurse.`,origin:`Kräuterstation`,badge:`Preiswert`,tags:[`würzig`,`klassiker`,`erntefrisch`]},{id:`radieschen`,name:`Radieschen`,category:`Wurzelgemüse`,price:2.2,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/radieschen.png`,description:`Leicht scharf und knackig für Brote, Salate oder kleine Snackteller.`,origin:`Regionaler Partnerbetrieb`,badge:`Wochenmarkt-Gefühl`,tags:[`saisonal`,`regional`,`knackig`]},{id:`seitlinge`,name:`Austernseitlinge`,category:`Pilze`,price:4.4,unit:`pro 300 g`,stockLabel:`Kleine Ernte`,stockLevel:`limited`,image:`/images/products/seitlinge.jpg`,description:`Herzhafte Pilze für Pfanne, Pasta oder Workshops rund um nachhaltige Ernährung.`,origin:`Pilzzucht-Partner`,badge:`Nur kleine Menge`,tags:[`umami`,`kochkurs-favorit`,`besonders`]},{id:`mangold`,name:`Bunter Mangold`,category:`Blattgemüse`,price:3.4,unit:`pro Bund`,stockLabel:`Erntebereit`,stockLevel:`fresh`,image:`/images/products/mangold.jpg`,description:`Farbenfroher Mangold für Pfanne, Ofengerichte und sichtbare Frische im Regal.`,origin:`Vertical-Farming-Modul`,badge:`Saisonal`,tags:[`farbig`,`frisch geerntet`,`regional`]}];function u(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function d(e=document){e.addEventListener(`change`,e=>{let t=e.target.closest(`[data-page-select]`);!t||!t.value||t.value!==window.location.pathname.split(`/`).pop()&&!(t.value===`index.html`&&window.location.pathname.endsWith(`/`))&&(window.location.href=t.value)})}function f(t){return`
    <nav class="ml-auto hidden items-center gap-2 md:flex">
      ${e.map(e=>`
            <a
              href="${e.href}"
              class="rounded-full px-4 py-2 text-sm font-medium transition ${e.key===t?`bg-stone-950 text-white`:`text-stone-600 hover:bg-white hover:text-stone-950`}"
            >
              ${e.label}
            </a>
          `).join(``)}
    </nav>
  `}function p(t){return`
    <div class="ml-auto md:hidden">
      <label class="sr-only" for="mobile-page-select">Seite wählen</label>
      <select
        id="mobile-page-select"
        data-page-select
        class="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
        aria-label="Seite wählen"
      >
        ${e.map(e=>`
              <option value="${e.href}" ${e.key===t?`selected`:``}>${e.label}</option>
            `).join(``)}
      </select>
    </div>
  `}function m(e){return`
    <header class="sticky top-0 z-40 border-b border-stone-200/80 bg-[rgba(249,247,242,0.92)] backdrop-blur">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-5 py-4 lg:px-6">
        <a href="index.html" class="flex min-w-0 items-center gap-3">
          <div class="grid h-11 w-11 place-items-center rounded-2xl border border-emerald-200 bg-emerald-50 text-sm font-semibold text-emerald-900">
            FC
          </div>
          <div class="min-w-0">
            <p class="truncate text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">${t.brand}</p>
            <p class="truncate text-sm text-stone-600">${t.title}</p>
          </div>
        </a>

        ${f(e)}
        ${p(e)}
      </div>
    </header>
  `}function h({eyebrow:e=``,title:t,intro:n=``,supportingCard:r=``,stats:i=[],actions:a=[]}){let o=r.trim().length>0,s=e.trim().length>0,c=n.trim().length>0;return`
    <section class="px-5 pb-8 pt-6 lg:px-6 lg:pb-12 lg:pt-10">
      <div class="mx-auto grid max-w-7xl gap-8 ${o?`lg:grid-cols-[1.08fr_0.92fr] lg:items-end`:``}">
        <div class="border-b border-stone-300 pb-8">
          ${s?`<p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">${e}</p>`:``}
          <h1 class="${s?`mt-5`:``} max-w-[13ch] text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
            ${t}
          </h1>
          ${c?`
                <p class="mt-5 max-w-3xl text-lg leading-8 text-stone-700">
                  ${n}
                </p>
              `:``}

          ${a.length>0?`
                <div class="mt-8 flex flex-wrap gap-3">
                  ${a.map((e,t)=>`
                        <a
                          href="${e.href}"
                          ${e.external?`target="_blank" rel="noreferrer"`:``}
                          class="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${t===0?`bg-stone-950 text-white hover:bg-emerald-800`:`border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50`}"
                        >
                          ${e.label}
                        </a>
                      `).join(``)}
                </div>
              `:``}

          ${i.length>0?`
                <div class="mt-10 grid gap-5 border-t border-stone-200 pt-6 sm:grid-cols-3">
                  ${i.map(e=>`
                        <div class="border-t border-stone-300 pt-4 sm:border-t-0 sm:border-l sm:pl-4 first:border-l-0 first:pl-0">
                          <p class="text-2xl font-semibold text-stone-950">${e.value}</p>
                          <p class="mt-2 text-sm leading-6 text-stone-600">${e.label}</p>
                        </div>
                      `).join(``)}
                </div>
              `:``}
        </div>

        ${o?`
              <div class="rounded-[2rem] bg-stone-950 px-6 py-7 text-stone-50 shadow-[0_20px_60px_rgba(28,25,23,0.12)] sm:px-8 sm:py-8">
                ${r}
              </div>
            `:``}
      </div>
    </section>
  `}function g(n){return`
    <footer class="px-5 pb-10 pt-10 lg:px-6 lg:pb-14">
      <div class="mx-auto flex max-w-7xl flex-col gap-6 border-t border-stone-300 pt-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">${t.brand}</p>
          <h2 class="mt-4 text-2xl font-semibold text-stone-950">${t.title} für die ${t.season}</h2>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-stone-600">
            Drei klare Seiten statt einer langen Sammelseite: Über uns, Soziales und Food mit reduzierter mobiler Navigation und konsistentem Erscheinungsbild.
          </p>
        </div>

        <nav class="grid gap-2 text-sm text-stone-600">
          ${e.map(e=>`
                <a href="${e.href}" class="transition ${e.key===n?`font-semibold text-stone-950`:`hover:text-stone-950`}">
                  ${e.label}
                </a>
              `).join(``)}
        </nav>
      </div>
    </footer>
  `}function _({activePage:e,hero:t,content:n}){return`
    <div class="min-h-screen text-stone-900 antialiased">
      ${m(e)}
      <main>
        ${t}
        ${n}
      </main>
      ${g(e)}
    </div>
  `}export{a,n as c,o as d,s as f,_ as i,c as l,u as n,i as o,r as p,h as r,t as s,d as t,l as u};