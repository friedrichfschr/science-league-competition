(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{key:`about`,label:`Über uns`,href:`index.html`},{key:`social`,label:`Soziales`,href:`soziales.html`},{key:`food`,label:`Food`,href:`food.html`},{key:`forum`,label:`Forum`,href:`forum.html`}],t={season:`Science League 2025/2026`,brand:`bre-delicious`,title:`FoodConnectMarkt`,subtitle:`Ein Markt für frisches Essen, gemeinsames Lernen und echte Nachbarschaft.`,description:`Für die zdi Science League entwickelt das Team bre-delicious einen FoodConnectMarkt, der Vertical Farming, Einkauf, Bildung und soziale Angebote in einem praktischen Konzept verbindet.`,intro:`Die Website soll nicht nur erklären, was die Idee ist, sondern zeigen, wie sie sich im Alltag anfühlt: klar, vertrauenswürdig, nutzbar und offen für verschiedene Zielgruppen.`,links:{competition:`https://mint-community.de/scienceleague/`,team:`https://mint-community.de/science-league-teams/bre-delicious-saison-2025-2026/`}},n=[`Lokal anbauen: frische Produkte direkt am Verkaufsort, ohne weite Transportwege`,`Gemeinschaft stärken: fünf barrierefreie Etagen für Einkauf, Lernen und Begegnung`,`Selbstversorgung fördern: Workshops zum Anbau auf Balkon und in der Wohnung`],r=[{badge:`Erdgeschoss`,title:`Gemeinschaft & offene Räume`,text:`Das Erdgeschoss ist offen für alle: eine betreute Kinderecke, ruhige Lernplätze und Informationsstände laden ein, ohne Einkaufsdruck.`,details:[`betreute Kinderecke`,`ruhige Lerninseln für Schüler*innen`,`Infostände zu allen Angeboten`]},{badge:`Restaurant · 3. Etage`,title:`Restaurant mit eigenem Gemüse`,text:`Frisch gekocht aus dem eigenen Anbau. Die Ernte aus dem Gemüseturm landet direkt in der Küche — und als Produkt im Regal, zum Beispiel als Tomatensauce.`,details:[`Gerichte aus vertikalem Anbau`,`Weiterverarbeitung zu Marktprodukten`,`lokal produziert, kurze Wege`]},{badge:`Workshops · 4. & 5. Etage`,title:`Selbstversorgung lernen`,text:`Wir sind realistisch: Unser Markt allein kann keine ganze Stadt versorgen. Deshalb zeigen wir, wie man selbst auf dem Balkon oder in der Wohnung Gemüse anbaut.`,details:[`Theorie in Seminarräumen (4. Etage)`,`Praxis an echten Anbauanlagen (5. Etage)`,`Ernte wird im Markt verkauft`]},{badge:`Flexible Nutzung`,title:`Seminare, Nachhilfe & Feiern`,text:`Kein Raum soll leer stehen. Die Seminarräume sind mehrzweckfähig — für Kurse, Nachhilfe, Geburtstagsfeiern oder Vereinstreffen.`,details:[`mietbare Seminarräume`,`Nachhilfe und Lernzeit`,`private Veranstaltungen möglich`]}],i=[`Alle`,`Wurzelgemüse`,`Blattgemüse`,`Fruchtgemüse`,`Kräuter & Früchte`],a=[{id:`karotten`,name:`Karotten`,category:`Wurzelgemüse`,price:2.2,unit:`pro 500 g`,stockLabel:`Erntebereit`,stockLevel:`fresh`,image:`/images/products/karotten.jpg`,description:`Aus Ebene 1 & 2 unseres Gemüseturms — angebaut auf Ebbe-Flut-Tischen mit tiefen Substratwannen für optimales Wurzelwachstum unter Vollspektrum-LEDs.`,origin:`Gemüseturm · Ebene 1 & 2`,row:`A2`,badge:`Frisch geerntet`,tags:[`Ebbe-Flut`,`Vollspektrum-LED`,`Wurzelgemüse`]},{id:`radieschen`,name:`Radieschen`,category:`Wurzelgemüse`,price:2,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/radieschen.png`,description:`Knackige Radieschen aus den unteren Anbauetagen — dank Lastenaufzug direkt nebenan täglich frisch im Markt.`,origin:`Gemüseturm · Ebene 1 & 2`,row:`A5`,badge:`Täglich frisch`,tags:[`Ebbe-Flut`,`knackig`,`regional`]},{id:`pastinaken`,name:`Pastinaken`,category:`Wurzelgemüse`,price:2.8,unit:`pro 400 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/pastinaken.jpg`,description:`Süßlich-würzige Pastinaken aus den Ebbe-Flut-Tischen in Etage 1 & 2 — kurzer Weg zum Lastenaufzug garantiert schonenden Transport.`,origin:`Gemüseturm · Ebene 1 & 2`,row:`B1`,badge:`Wochenmarkt-Klassiker`,tags:[`Substratwanne`,`wurzelfrisch`,`lokal`]},{id:`lauch`,name:`Lauch`,category:`Wurzelgemüse`,price:1.9,unit:`pro Stange`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/lauch.jpg`,description:`Frischer Lauch aus den tiefen Substratwannen in Etage 1 & 2 — ideales Fundament für Suppen, Eintöpfe und herzhafte Pfannengerichte.`,origin:`Gemüseturm · Ebene 1 & 2`,row:`B4`,badge:`Küchenfavorit`,tags:[`hydroponisch`,`erntefrisch`,`vielseitig`]},{id:`kopfsalat`,name:`Kopfsalat`,category:`Blattgemüse`,price:2.5,unit:`pro Kopf`,stockLabel:`Erntebereit`,stockLevel:`fresh`,image:`/images/products/romana-salat.jpg`,description:`Massenerntefähiges Blattgemüse aus den 10-lagigen Regalsystemen in Etage 3 & 4 — schnelles Wachstum durch blau betontes LED-Spektrum.`,origin:`Gemüseturm · Ebene 3 & 4`,row:`C3`,badge:`Heute empfohlen`,tags:[`A-Frame`,`blaues LED`,`Massenernte`]},{id:`spinat`,name:`Spinat`,category:`Blattgemüse`,price:2.3,unit:`pro 200 g`,stockLabel:`Frisch geschnitten`,stockLevel:`fresh`,image:`/images/products/spinat.jpg`,description:`Vitaminreicher Spinat aus den vertikalen A-Frames in Etage 3 & 4 — deckt einen wesentlichen Teil des Vitaminbedarfs für 1.000 Personen.`,origin:`Gemüseturm · Ebene 3 & 4`,row:`C7`,badge:`Vitaminreich`,tags:[`blaues LED`,`nährstoffreich`,`frisch`]},{id:`rucola`,name:`Rucola`,category:`Blattgemüse`,price:2.1,unit:`pro 100 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/rucola.jpg`,description:`Würziger Rucola aus den mehrlagigen Regalsystemen — dank blauem LED-Spektrum intensives Blattaroma und schnelles Nachwachsen.`,origin:`Gemüseturm · Ebene 3 & 4`,row:`D2`,badge:`Schnellwüchsig`,tags:[`A-Frame`,`würzig`,`erntefrisch`]},{id:`pak-choi`,name:`Pak Choi`,category:`Blattgemüse`,price:2.7,unit:`pro Kopf`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/pak-choi.jpg`,description:`Zartes Pak Choi aus Etage 3 & 4 — ideal für Asia-Gerichte, Woks und kurze Garzeiten. Optimal angebaut im blauen LED-Spektrum.`,origin:`Gemüseturm · Ebene 3 & 4`,row:`D5`,badge:`Asia-Küche`,tags:[`blaues LED`,`zart`,`lokal`]},{id:`gruenkohl`,name:`Grünkohl`,category:`Blattgemüse`,price:3,unit:`pro 300 g`,stockLabel:`Kleine Ernte`,stockLevel:`limited`,image:`/images/products/mangold.jpg`,description:`Nährstoffdichter Grünkohl aus den vertikalen Regalen in Etage 3 & 4 — angebaut unter blauem LED-Spektrum für maximales Blattwachstum.`,origin:`Gemüseturm · Ebene 3 & 4`,row:`D8`,badge:`Superfood`,tags:[`blaues LED`,`nährstoffreich`,`saisonal`]},{id:`tomaten`,name:`Tomaten`,category:`Fruchtgemüse`,price:3.8,unit:`pro 500 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/kirschtomaten.jpg`,description:`Saftige Tomaten aus den 4,50 m Hochrankensystemen in Etage 5 & 6 — natürlich bestäubt durch Hummelvölker, gereift unter rotem LED-Spektrum.`,origin:`Gemüseturm · Ebene 5 & 6`,row:`E4`,badge:`Hummelbestäubt`,tags:[`Hochranksystem`,`rotes LED`,`natürlich bestäubt`]},{id:`gurken`,name:`Gurken`,category:`Fruchtgemüse`,price:2.6,unit:`pro Stück`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/gurke.jpg`,description:`Frische Gurken von den 4,50 m Drahtranksystemen in Etage 5 & 6 — hohe Luftfeuchtigkeit und rotes LED-Spektrum fördern die Fruchtbildung.`,origin:`Gemüseturm · Ebene 5 & 6`,row:`E8`,badge:`Knackfrisch`,tags:[`Hochranksystem`,`Hummelvölker`,`frisch`]},{id:`paprika`,name:`Paprika`,category:`Fruchtgemüse`,price:3.4,unit:`pro 3 Stück`,stockLabel:`Erntebereit`,stockLevel:`fresh`,image:`/images/products/paprika.jpg`,description:`Bunte Paprika aus den Hochrankesystemen in Etage 5 & 6 — Hummelvölker sorgen für natürliche Bestäubung, rotes LED für optimale Fruchtreife.`,origin:`Gemüseturm · Ebene 5 & 6`,row:`F2`,badge:`Farbenpracht`,tags:[`rotes LED`,`natürlich bestäubt`,`lokal`]},{id:`auberginen`,name:`Auberginen`,category:`Fruchtgemüse`,price:3.2,unit:`pro Stück`,stockLabel:`Kleine Ernte`,stockLevel:`limited`,image:`/images/products/auberginen.jpg`,description:`Zarte Auberginen aus den hohen Rankzonen in Etage 5 & 6 — angebaut unter hoher Luftfeuchtigkeit und rotem LED-Spektrum für volle Fruchtbildung.`,origin:`Gemüseturm · Ebene 5 & 6`,row:`F6`,badge:`Besondere Ernte`,tags:[`Hochranksystem`,`rotes LED`,`besonders`]},{id:`basilikum`,name:`Basilikum`,category:`Kräuter & Früchte`,price:1.8,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/basilikum.jpg`,description:`Aromatisches Basilikum aus der Kräuterküche in Etage 7 & 8 — natürliches Tageslicht durch das Glasdach und optimale Luftfeuchtigkeit für intensiven Geschmack.`,origin:`Gemüseturm · Ebene 7 & 8`,row:`G1`,badge:`Küchenklassiker`,tags:[`Glasdach`,`Kräuterküche`,`aromatisch`]},{id:`petersilie`,name:`Petersilie`,category:`Kräuter & Früchte`,price:1.5,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/petersilie.jpg`,description:`Frische Petersilie aus der Kräuterzone in Etage 7 & 8 — unter dem Glasdach mit natürlichem Lichteinfall angebaut.`,origin:`Gemüseturm · Ebene 7 & 8`,row:`G4`,badge:`Preiswert`,tags:[`Glasdach`,`würzig`,`erntefrisch`]},{id:`erdbeeren`,name:`Erdbeeren`,category:`Kräuter & Früchte`,price:4.2,unit:`pro 250 g`,stockLabel:`Kleine Ernte`,stockLevel:`limited`,image:`/images/products/erdbeeren.jpg`,description:`Aromatische Erdbeeren aus der lichtdurchfluteten Dachetage 8 — das Glasdach liefert maximales natürliches Licht für intensiv süße Früchte.`,origin:`Gemüseturm · Ebene 8 · Glasdach`,row:`H2`,badge:`Nur kleine Menge`,tags:[`Glasdach`,`natürliches Licht`,`besonders`]},{id:`himbeeren`,name:`Himbeeren`,category:`Kräuter & Früchte`,price:4.8,unit:`pro 150 g`,stockLabel:`Kleine Ernte`,stockLevel:`limited`,image:`/images/products/himbeeren.jpg`,description:`Saftige Himbeeren aus der obersten Dachetage — unter dem Glasdach mit natürlichem Licht und hoher Luftfeuchtigkeit kultiviert.`,origin:`Gemüseturm · Ebene 8 · Glasdach`,row:`H6`,badge:`Premium`,tags:[`Glasdach`,`natürliches Licht`,`selten`]}];function o(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function s(e=document){e.addEventListener(`change`,e=>{let t=e.target.closest(`[data-page-select]`);!t||!t.value||t.value!==window.location.pathname.split(`/`).pop()&&!(t.value===`index.html`&&window.location.pathname.endsWith(`/`))&&(window.location.href=t.value)})}function c(e=document){if(typeof window>`u`||!(`IntersectionObserver`in window)){e.querySelectorAll(`.reveal`).forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{rootMargin:`0px 0px -10% 0px`,threshold:.08});e.querySelectorAll(`.reveal`).forEach(e=>t.observe(e))}function l(t){return`
    <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
      ${e.map(e=>`
            <a
              href="${e.href}"
              ${e.key===t?`aria-current="page"`:``}
              class="nav-pill ${e.key===t?`is-active`:``} rounded-full px-4 py-2 text-sm font-medium ${e.key===t?`bg-stone-950 text-white`:`text-stone-700 hover:bg-white/70 hover:text-stone-950`}"
            >
              ${e.label}
            </a>
          `).join(``)}
    </nav>
  `}function u(t){return`
    <div class="ml-auto md:hidden">
      <label class="sr-only" for="mobile-page-select">Seite wählen</label>
      <select
        id="mobile-page-select"
        data-page-select
        class="rounded-full border border-stone-300 bg-white px-4 py-2.5 text-sm font-medium text-stone-900 transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        aria-label="Seite wählen"
      >
        ${e.map(e=>`
              <option value="${e.href}" ${e.key===t?`selected`:``}>${e.label}</option>
            `).join(``)}
      </select>
    </div>
  `}function d(){try{let e=localStorage.getItem(`foodconnect-cart-v2`);if(!e)return 0;let t=JSON.parse(e);return Object.values(t).reduce((e,t)=>e+(t>0?t:0),0)}catch{return 0}}function f(e){return`
    <a href="#main-content" class="skip-link">Zum Inhalt springen</a>
    <header class="sticky top-0 z-40 border-b border-stone-200/70 bg-[rgba(247,244,238,0.82)] backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3.5 lg:px-6">
        <a href="index.html" class="min-w-0 rounded-lg" aria-label="${t.brand} Startseite">
          <p class="truncate text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-800">${t.brand}</p>
          <p class="truncate text-sm text-stone-700">${t.title}</p>
        </a>

        ${l(e)}
        ${u(e)}
        ${(()=>{let t=d(),n=`relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 text-xs font-semibold transition hover:bg-stone-50`,r=`
            <span aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </span>
            ${t>0?`<span class="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-600 px-1 text-[0.6rem] font-bold text-white leading-none">${t>99?`99+`:t}</span>`:``}
          `;return e===`food`?`<button type="button" data-action="toggle-cart" aria-label="Warenkorb öffnen" id="cart-nav-btn" class="${n}">${r}</button>`:`<a href="food.html?cart=open" aria-label="Warenkorb${t>0?` (${t} Artikel)`:``}" id="cart-nav-btn" class="${n}">${r}</a>`})()}
        <a
          href="account.html"
          aria-label="Konto"
          class="grid h-9 w-9 shrink-0 place-items-center rounded-full border text-xs font-semibold transition ${e===`account`?`border-stone-950 bg-stone-950 text-white`:`border-stone-300 bg-white text-stone-700 hover:bg-stone-50`}"
          id="account-nav-btn"
        >
          <span aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </span>
        </a>
      </div>
    </header>
  `}function p({eyebrow:e=``,title:t,intro:n=``,supportingCard:r=``,stats:i=[],actions:a=[]}){let o=r.trim().length>0,s=e.trim().length>0,c=n.trim().length>0;return`
    <section class="px-5 pb-8 pt-8 lg:px-6 lg:pb-12 lg:pt-12" aria-labelledby="page-hero-title">
      <div class="mx-auto grid max-w-7xl gap-8 ${o?`lg:grid-cols-[1.1fr_0.9fr] lg:items-end`:``}">
        <div class="pb-2">
          ${s?`<p class="hero-rise hero-rise-d1 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-800 ring-1 ring-inset ring-emerald-200/80">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
                  ${e}
                </p>`:``}
          <h1 id="page-hero-title" class="hero-rise hero-rise-d2 font-display ${s?`mt-5`:``} max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-tight text-stone-950 sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
            ${t}
          </h1>
          ${c?`
                <p class="hero-rise hero-rise-d3 mt-6 max-w-2xl text-lg leading-[1.7] text-stone-700 sm:text-xl">
                  ${n}
                </p>
              `:``}

          ${a.length>0?`
                <div class="hero-rise hero-rise-d3 mt-7 flex flex-wrap gap-3">
                  ${a.map((e,t)=>`
                        <a
                          href="${e.href}"
                          ${e.external?`target="_blank" rel="noreferrer"`:``}
                          class="btn-press inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${t===0?`bg-stone-950 text-white shadow-[0_10px_30px_-10px_rgba(6,95,70,0.6)] hover:bg-emerald-800`:`border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50`}"
                        >
                          ${e.label}
                          <span aria-hidden="true">→</span>
                        </a>
                      `).join(``)}
                </div>
              `:``}

          ${i.length>0?`
                <dl class="hero-rise hero-rise-d4 mt-10 grid gap-5 border-t border-stone-300/70 pt-6 sm:grid-cols-3">
                  ${i.map(e=>`
                        <div class="sm:border-l sm:border-stone-300/70 sm:pl-5 first:sm:border-l-0 first:sm:pl-0">
                          <dt class="sr-only">${e.label}</dt>
                          <dd>
                            <p class="font-display text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">${e.value}</p>
                            <p class="mt-2 text-sm leading-6 text-stone-600">${e.label}</p>
                          </dd>
                        </div>
                      `).join(``)}
                </dl>
              `:``}
        </div>

        ${o?`
              <div class="hero-rise hero-rise-d3 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 px-6 py-7 text-stone-50 shadow-[0_30px_80px_-20px_rgba(6,95,70,0.45)] ring-1 ring-inset ring-white/5 sm:px-8 sm:py-8">
                <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl"></div>
                <div aria-hidden="true" class="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl"></div>
                <div class="relative">
                  ${r}
                </div>
              </div>
            `:``}
      </div>
    </section>
  `}function m({activePage:e,hero:t,content:n}){return`
    <div class="min-h-screen text-stone-900 antialiased">
      ${f(e)}
      <main id="main-content" tabindex="-1">
        ${t}
        ${n}
      </main>
    </div>
  `}export{c as a,a as c,m as i,r as l,o as n,t as o,p as r,i as s,s as t,n as u};