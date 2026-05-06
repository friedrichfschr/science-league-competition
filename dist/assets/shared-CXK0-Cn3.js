(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{key:`about`,label:`Über uns`,href:`index.html`},{key:`social`,label:`Soziales`,href:`soziales.html`},{key:`food`,label:`Food`,href:`food.html`},{key:`forum`,label:`Forum`,href:`forum.html`}],t={season:`Science League 2025/2026`,brand:`bre-delicious`,title:`FoodConnectMarkt`,subtitle:`Ein Markt für frisches Essen, gemeinsames Lernen und echte Nachbarschaft.`,description:`Für die zdi Science League entwickelt das Team bre-delicious einen FoodConnectMarkt, der Vertical Farming, Einkauf, Bildung und soziale Angebote in einem praktischen Konzept verbindet.`,intro:`Die Website soll nicht nur erklären, was die Idee ist, sondern zeigen, wie sie sich im Alltag anfühlt: klar, vertrauenswürdig, nutzbar und offen für verschiedene Zielgruppen.`,links:{competition:`https://mint-community.de/scienceleague/`,team:`https://mint-community.de/science-league-teams/bre-delicious-saison-2025-2026/`}},n=[{value:`68 %`,label:`der Weltbevölkerung werden bis 2050 in Städten leben`},{value:`~20 %`,label:`der CO₂-Emissionen aus Lebensmitteln entstehen durch Transport`},{value:`2 Türme`,label:`und ein Keller bilden den FoodConnectMarkt`}],r=[`Lokal anbauen: frische Produkte direkt am Verkaufsort, ohne weite Transportwege`,`Gemeinschaft stärken: fünf barrierefreie Etagen für Einkauf, Lernen und Begegnung`,`Selbstversorgung fördern: Workshops zum Anbau auf Balkon und in der Wohnung`],i=[{badge:`ConnectMarkt`,sublabel:`5 Etagen · Kreisförmig`,heading:`Begegnung & Verkauf`,text:`Der soziale Turm. Kinderecke und Lernplätze im Erdgeschoss, barrierefreie Verkaufsfläche mit smarten Einkaufswagen im ersten Stock, Restaurant mit eigenem Gemüse im dritten Stock, Seminarräume und Praxisanbauflächen in den oberen Etagen.`},{badge:`Gemüseturm`,sublabel:`10 Etagen · Bohnenform`,heading:`Vertical Farming`,text:`Der Produktionsturm. Die Bohnenform maximiert die horizontale Fläche und behält die Windresistenz eines ovalen Querschnitts. Alle Etagen sind dem kontrollierten Gemüseanbau gewidmet — mit automatischer Bewässerung und optimiertem Licht.`},{badge:`Keller`,sublabel:`Logistik & Technik`,heading:`Das Rückgrat`,text:`Warenlager, Heizung, Strom- und Wasserversorgung sowie Kontrolleinheiten liegen im Untergrund — damit oberirdisch jeder Quadratmeter für Grünanlagen und soziale Räume frei bleibt.`}],a=[{badge:`Erdgeschoss`,title:`Gemeinschaft & offene Räume`,text:`Das Erdgeschoss ist offen für alle: eine betreute Kinderecke, ruhige Lernplätze und Informationsstände laden ein, ohne Einkaufsdruck.`,details:[`betreute Kinderecke`,`ruhige Lerninseln für Schüler*innen`,`Infostände zu allen Angeboten`]},{badge:`Restaurant · 3. Etage`,title:`Restaurant mit eigenem Gemüse`,text:`Frisch gekocht aus dem eigenen Anbau. Die Ernte aus dem Gemüseturm landet direkt in der Küche — und als Produkt im Regal, zum Beispiel als Tomatensauce.`,details:[`Gerichte aus vertikalem Anbau`,`Weiterverarbeitung zu Marktprodukten`,`lokal produziert, kurze Wege`]},{badge:`Workshops · 4. & 5. Etage`,title:`Selbstversorgung lernen`,text:`Wir sind realistisch: Unser Markt allein kann keine ganze Stadt versorgen. Deshalb zeigen wir, wie man selbst auf dem Balkon oder in der Wohnung Gemüse anbaut.`,details:[`Theorie in Seminarräumen (4. Etage)`,`Praxis an echten Anbauanlagen (5. Etage)`,`Ernte wird im Markt verkauft`]},{badge:`Flexible Nutzung`,title:`Seminare, Nachhilfe & Feiern`,text:`Kein Raum soll leer stehen. Die Seminarräume sind mehrzweckfähig — für Kurse, Nachhilfe, Geburtstagsfeiern oder Vereinstreffen.`,details:[`mietbare Seminarräume`,`Nachhilfe und Lernzeit`,`private Veranstaltungen möglich`]}],o=[{id:`u1`,username:`friedrichfschr`,displayName:`Friedrich S.`,role:`administrator`,initials:`FS`,password:`admin`},{id:`u2`,username:`jana_k`,displayName:`Jana K.`,role:`moderator`,initials:`JK`,password:`mod`},{id:`u3`,username:`anna_m`,displayName:`Anna M.`,role:`member`,initials:`AM`,password:`pass`},{id:`u4`,username:`lukas_b`,displayName:`Lukas B.`,role:`member`,initials:`LB`,password:`pass`},{id:`u5`,username:`marie_u`,displayName:`Marie U.`,role:`member`,initials:`MU`,password:`pass`}],s=Date.now(),c=60*1e3,l=60*c,u=24*l,d=[{id:`p1`,authorId:`u1`,title:`Willkommen im FoodConnectMarkt-Forum!`,body:`Herzlich willkommen im offiziellen Forum des FoodConnectMarkts!

Hier könnt ihr Fragen stellen, Ideen teilen und euch über urbane Landwirtschaft, Selbstversorgung und das Konzept unseres Markts austauschen. Bitte bleibt respektvoll und konstruktiv.

Wir freuen uns auf eine lebhafte Diskussion!`,createdAt:new Date(s-2*u).toISOString(),votes:24,userVote:0,comments:[{id:`c1`,postId:`p1`,authorId:`u3`,body:`Super Initiative! Ich freue mich sehr auf den Austausch hier.`,createdAt:new Date(s-47*l).toISOString(),votes:8,userVote:0},{id:`c2`,postId:`p1`,authorId:`u4`,body:`Endlich ein Ort für Fragen zum Projekt. Ich hatte schon so viele!`,createdAt:new Date(s-30*l).toISOString(),votes:5,userVote:0}]},{id:`p2`,authorId:`u3`,title:`Wie funktioniert das Vertical Farming im Gemüseturm genau?`,body:`Ich habe auf der Website gelesen, dass der Gemüseturm 99 % weniger Wasser verbraucht als konventionelle Landwirtschaft. Wie wird das technisch umgesetzt?

Welche Pflanzen können dort angebaut werden und wie viele Etagen sind tatsächlich für den Anbau vorgesehen? Und: Kann man als Besucher die Anbauflächen irgendwann besichtigen?`,createdAt:new Date(s-18*l).toISOString(),votes:17,userVote:0,comments:[{id:`c3`,postId:`p2`,authorId:`u1`,body:`Gute Frage! Der Gemüseturm nutzt hydroponische Systeme — die Pflanzen wachsen in Nährlösung statt in Erde. Das spart nicht nur Wasser, sondern erlaubt auch ganzjährigen Anbau unabhängig vom Wetter. Alle 10 Etagen sind für den Anbau geplant. Führungen sind in Planung!`,createdAt:new Date(s-16*l).toISOString(),votes:11,userVote:0},{id:`c4`,postId:`p2`,authorId:`u5`,body:`Blattgemüse und Kräuter funktionieren am besten bei Vertical Farming. Tomaten und Gurken gehen auch, brauchen aber mehr Licht. Ich gärtnere selbst auf dem Balkon mit ähnlichen Methoden und kann nur empfehlen, damit anzufangen!`,createdAt:new Date(s-12*l).toISOString(),votes:7,userVote:0}]},{id:`p3`,authorId:`u4`,title:`Kann man die Seminarräume auch privat mieten?`,body:`Ich habe gelesen, dass die Räume in der 4. Etage auch für private Veranstaltungen genutzt werden können. Gibt es schon Informationen zu den Konditionen — Preise, Verfügbarkeit, maximale Personenzahl?`,createdAt:new Date(s-6*l).toISOString(),votes:9,userVote:0,comments:[{id:`c5`,postId:`p3`,authorId:`u2`,body:`Die genauen Konditionen werden noch ausgearbeitet. Ich plane eine Antwort bis Ende des Monats zu veröffentlichen. Kurz: bis ca. 40 Personen, stundenweise buchbar, Preise richten sich nach Vereins- oder Privatnutzung.`,createdAt:new Date(s-4*l).toISOString(),votes:6,userVote:0}]},{id:`p4`,authorId:`u5`,title:`Tipps für Balkongemüse im Winter?`,body:`Nachdem ich den Workshop über Selbstversorgung besucht habe, möchte ich auch im Winter auf meinem Balkon etwas anbauen. Hat jemand Erfahrungen mit Wintersorten oder Mini-Gewächshäusern für den Balkon?`,createdAt:new Date(s-2*l).toISOString(),votes:14,userVote:0,comments:[{id:`c6`,postId:`p4`,authorId:`u3`,body:`Feldsalat und Spinat überleben sogar leichten Frost! Ich nutze ein kleines Foliengewächshaus (~30 €) und kann damit bis in den Dezember hinein ernten.`,createdAt:new Date(s-90*c).toISOString(),votes:9,userVote:0},{id:`c7`,postId:`p4`,authorId:`u4`,body:`Radieschen und Schnittlauch sind sehr winterhart. Und Microgreens kann man sogar drinnen auf der Fensterbank anbauen — ganzjährig!`,createdAt:new Date(s-30*c).toISOString(),votes:4,userVote:0}]},{id:`p5`,authorId:`u2`,title:`[Ankündigung] Erster Workshop „Gemüse auf dem Balkon" – Anmeldung offen`,body:`Wir freuen uns, den ersten Workshop des FoodConnectMarkts ankündigen zu können:

„Gemüse auf dem Balkon — Einstieg in die Selbstversorgung"

Datum: 15. Juni 2026 · 14:00–17:00 Uhr
Ort: 5. Etage, Praxisanbaufläche
Kosten: kostenlos

Anmeldung über den Newsletter. Plätze sind begrenzt!`,createdAt:new Date(s-20*c).toISOString(),votes:31,userVote:0,comments:[]}],f=[`Alle`,`Blattgemüse`,`Kräuter`,`Fruchtgemüse`,`Wurzelgemüse`,`Pilze`],p=[{id:`romana-salat`,name:`Romana Salat`,category:`Blattgemüse`,price:2.9,unit:`pro Kopf`,stockLabel:`Erntebereit`,stockLevel:`fresh`,image:`/images/products/romana-salat.jpg`,description:`Knackiger Salat direkt aus dem Vertical-Farming-Regal für Bowls, Sandwiches und schnelle Alltagsküche.`,origin:`Anbau im FoodConnectMarkt`,badge:`Heute empfohlen`,tags:[`hydroponisch`,`regional`,`frisch geerntet`]},{id:`basilikum`,name:`Basilikum`,category:`Kräuter`,price:1.8,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/basilikum.jpg`,description:`Aromatisches Basilikum für Pasta, Sandwiches, Pesto oder Kochklassen im Markt.`,origin:`Marktregal Kräuterzone`,badge:`Küchenklassiker`,tags:[`aromatisch`,`urban farm`,`beliebt`]},{id:`kirschtomaten`,name:`Kirschtomaten`,category:`Fruchtgemüse`,price:3.7,unit:`pro 500 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/kirschtomaten.jpg`,description:`Süß, saftig und gut für Snackboxen, Salate oder kleine Marktverkostungen.`,origin:`Gewächshaus nah am Markt`,badge:`Familienfreundlich`,tags:[`snack`,`lokal`,`sommerlich`]},{id:`gurke`,name:`Mini Gurken`,category:`Fruchtgemüse`,price:2.6,unit:`pro 400 g`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/gurke.jpg`,description:`Kühle, frische Gurken für Brotdosen, Salate und einfache gesunde Gerichte.`,origin:`Tagesfrische Lieferung`,badge:`Schnell vergriffen`,tags:[`knackig`,`alltag`,`frisch`]},{id:`microgreens`,name:`Microgreens Mix`,category:`Blattgemüse`,price:3.2,unit:`pro Schale`,stockLabel:`Frisch geschnitten`,stockLevel:`fresh`,image:`/images/products/microgreens.jpg`,description:`Kleine Blätter mit viel Geschmack und hohem Nährstoffprofil für Bowls und kreative Küche.`,origin:`Indoor Farm`,badge:`Premium`,tags:[`nährstoffreich`,`modern`,`fein`]},{id:`petersilie`,name:`Petersilie glatt`,category:`Kräuter`,price:1.5,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/petersilie.jpg`,description:`Vielseitig einsetzbar für Suppen, Dips, Gemüsepfannen und Kochkurse.`,origin:`Kräuterstation`,badge:`Preiswert`,tags:[`würzig`,`klassiker`,`erntefrisch`]},{id:`radieschen`,name:`Radieschen`,category:`Wurzelgemüse`,price:2.2,unit:`pro Bund`,stockLabel:`Auf Lager`,stockLevel:`ready`,image:`/images/products/radieschen.png`,description:`Leicht scharf und knackig für Brote, Salate oder kleine Snackteller.`,origin:`Regionaler Partnerbetrieb`,badge:`Wochenmarkt-Gefühl`,tags:[`saisonal`,`regional`,`knackig`]},{id:`seitlinge`,name:`Austernseitlinge`,category:`Pilze`,price:4.4,unit:`pro 300 g`,stockLabel:`Kleine Ernte`,stockLevel:`limited`,image:`/images/products/seitlinge.jpg`,description:`Herzhafte Pilze für Pfanne, Pasta oder Workshops rund um nachhaltige Ernährung.`,origin:`Pilzzucht-Partner`,badge:`Nur kleine Menge`,tags:[`umami`,`kochkurs-favorit`,`besonders`]},{id:`mangold`,name:`Bunter Mangold`,category:`Blattgemüse`,price:3.4,unit:`pro Bund`,stockLabel:`Erntebereit`,stockLevel:`fresh`,image:`/images/products/mangold.jpg`,description:`Farbenfroher Mangold für Pfanne, Ofengerichte und sichtbare Frische im Regal.`,origin:`Vertical-Farming-Modul`,badge:`Saisonal`,tags:[`farbig`,`frisch geerntet`,`regional`]}];function m(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function h(e=document){e.addEventListener(`change`,e=>{let t=e.target.closest(`[data-page-select]`);!t||!t.value||t.value!==window.location.pathname.split(`/`).pop()&&!(t.value===`index.html`&&window.location.pathname.endsWith(`/`))&&(window.location.href=t.value)})}function g(e=document){if(typeof window>`u`||!(`IntersectionObserver`in window)){e.querySelectorAll(`.reveal`).forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{rootMargin:`0px 0px -10% 0px`,threshold:.08});e.querySelectorAll(`.reveal`).forEach(e=>t.observe(e))}function _(t){return`
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
  `}function v(t){return`
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
  `}function y(e){return`
    <a href="#main-content" class="skip-link">Zum Inhalt springen</a>
    <header class="sticky top-0 z-40 border-b border-stone-200/70 bg-[rgba(247,244,238,0.82)] backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3.5 lg:px-6">
        <a href="index.html" class="flex min-w-0 items-center gap-3 rounded-2xl" aria-label="${t.brand} Startseite">
          <div class="group relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(6,95,70,0.55)] transition group-hover:shadow-[0_10px_26px_-6px_rgba(6,95,70,0.6)]">
            <span aria-hidden="true" class="font-display">FC</span>
            <span class="visually-hidden">FoodConnect</span>
          </div>
          <div class="min-w-0">
            <p class="truncate text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-emerald-800">${t.brand}</p>
            <p class="truncate text-sm text-stone-700">${t.title}</p>
          </div>
        </a>

        ${_(e)}
        ${v(e)}
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
  `}function b({eyebrow:e=``,title:t,intro:n=``,supportingCard:r=``,stats:i=[],actions:a=[]}){let o=r.trim().length>0,s=e.trim().length>0,c=n.trim().length>0;return`
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
  `}function x({activePage:e,hero:t,content:n}){return`
    <div class="min-h-screen text-stone-900 antialiased">
      ${y(e)}
      <main id="main-content" tabindex="-1">
        ${t}
        ${n}
      </main>
    </div>
  `}function S({className:e=``}={}){return`
    <svg
      viewBox="0 0 420 420"
      class="${e}"
      role="img"
      aria-label="Illustration der beiden Türme des FoodConnectMarkts mit Keller"
    >
      <defs>
        <linearGradient id="tower-gradient-dark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#1c1917" />
          <stop offset="1" stop-color="#0f172a" />
        </linearGradient>
        <linearGradient id="tower-gradient-green" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#10b981" />
          <stop offset="1" stop-color="#065f46" />
        </linearGradient>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#fef3c7" stop-opacity="0.35" />
          <stop offset="1" stop-color="#fef3c7" stop-opacity="0" />
        </linearGradient>
      </defs>

      <!-- Sky glow -->
      <rect x="0" y="0" width="420" height="260" fill="url(#sky)" />

      <!-- Sun -->
      <circle cx="330" cy="90" r="28" fill="#fbbf24" opacity="0.7" class="float-soft" />

      <!-- ConnectMarkt (circular, shorter) -->
      <g>
        <rect x="70" y="160" width="120" height="180" rx="60" fill="url(#tower-gradient-dark)" />
        <!-- Floor indicators -->
        <g stroke="#10b981" stroke-width="1.5" opacity="0.65">
          <line x1="85" y1="195" x2="175" y2="195" />
          <line x1="85" y1="230" x2="175" y2="230" />
          <line x1="85" y1="265" x2="175" y2="265" />
          <line x1="85" y1="300" x2="175" y2="300" />
        </g>
        <!-- Window dots -->
        <g fill="#fbbf24" opacity="0.85">
          <circle cx="105" cy="212" r="2.5" />
          <circle cx="130" cy="212" r="2.5" />
          <circle cx="155" cy="212" r="2.5" />
          <circle cx="105" cy="247" r="2.5" />
          <circle cx="130" cy="247" r="2.5" />
          <circle cx="155" cy="247" r="2.5" />
          <circle cx="105" cy="282" r="2.5" />
          <circle cx="155" cy="282" r="2.5" />
        </g>
      </g>

      <!-- Gemüseturm (taller, bean-like) -->
      <g>
        <path
          d="M 230 100 Q 215 100 210 130 L 210 320 Q 215 350 245 350 L 300 350 Q 330 350 335 320 L 335 150 Q 330 100 300 100 Z"
          fill="url(#tower-gradient-green)"
        />
        <!-- Horizontal growing stripes (10 floors) -->
        <g class="tower-stripes">
          <rect x="220" y="120" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="145" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="170" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="195" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="220" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="245" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="270" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="295" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
          <rect x="220" y="320" width="105" height="3" rx="1.5" fill="#ffffff" opacity="0.32" />
        </g>
        <!-- Little leaves on top -->
        <g fill="#86efac">
          <ellipse cx="265" cy="100" rx="7" ry="4" transform="rotate(-20 265 100)" />
          <ellipse cx="282" cy="96" rx="6" ry="3" transform="rotate(25 282 96)" />
        </g>
      </g>

      <!-- Ground line -->
      <line x1="20" y1="340" x2="400" y2="340" stroke="#78716c" stroke-width="1.5" opacity="0.4" stroke-dasharray="4 3" />

      <!-- Keller (underground basement) -->
      <g opacity="0.55">
        <rect x="60" y="348" width="300" height="48" rx="6" fill="#78716c" />
        <g stroke="#fbbf24" stroke-width="1.2" opacity="0.7">
          <line x1="80" y1="370" x2="340" y2="370" />
        </g>
        <g fill="#fbbf24" opacity="0.85">
          <circle cx="100" cy="370" r="2" />
          <circle cx="210" cy="370" r="2" />
          <circle cx="320" cy="370" r="2" />
        </g>
      </g>
    </svg>
  `}export{S as a,t as c,n as d,f,r as h,x as i,d as l,a as m,m as n,g as o,p,b as r,i as s,h as t,o as u};