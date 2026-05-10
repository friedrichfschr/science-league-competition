import{c as e,d as t,i as n,n as r,o as i,r as a,t as o,u as s}from"./shared-toaPw1j9.js";import{t as c}from"./api-CAqj1E_R.js";var l=`foodconnect-cart-v2`,u=`fcm-auth`;function d(){try{return JSON.parse(localStorage.getItem(u))?.token??null}catch{return null}}function f(){try{return JSON.parse(localStorage.getItem(u))?.user??null}catch{return null}}async function p(e,t={}){let n=d(),r=await fetch(`${c}${e}`,{...t,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{},...t.headers}});if(r.status===204)return null;let i=await r.json().catch(()=>({}));if(!r.ok)throw Error(i.message||`HTTP ${r.status}`);return i}var m=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),h=[{value:`Alle`,label:`Alle Bestände`},{value:`fresh`,label:`Frisch geerntet`},{value:`ready`,label:`Sofort verfügbar`},{value:`limited`,label:`Nur kleine Menge`}],g=[{value:`empfohlen`,label:`Empfohlen`},{value:`preis-aufsteigend`,label:`Preis: niedrig zuerst`},{value:`preis-absteigend`,label:`Preis: hoch zuerst`},{value:`name-a-z`,label:`Name A–Z`}],_=document.querySelector(`#app`),v={query:``,category:`Alle`,stock:`Alle`,sort:`empfohlen`,cart:y(),cartDrawerOpen:!1,filtersOpen:!1,checkoutStep:null,checkoutError:``,lastOrder:null};function y(){try{let e=window.localStorage.getItem(l);return e?JSON.parse(e):{}}catch{return{}}}function b(){window.localStorage.setItem(l,JSON.stringify(v.cart))}function x(e){return t.find(t=>t.id===e)}function S(){return Object.entries(v.cart).map(([e,t])=>{let n=x(e);return!n||t<=0?null:{...n,quantity:t,total:n.price*t}}).filter(Boolean)}function C(){return Object.values(v.cart).reduce((e,t)=>e+t,0)}function w(){return S().reduce((e,t)=>e+t.total,0)}function T(){let e=0;return v.query.trim()&&(e+=1),v.category!==`Alle`&&(e+=1),v.stock!==`Alle`&&(e+=1),e}function E(e){return{fresh:3,ready:2,limited:1}[e.stockLevel]+(e.badge===`Heute empfohlen`?2:0)}function D(e){switch(v.sort){case`preis-aufsteigend`:return[...e].sort((e,t)=>e.price-t.price);case`preis-absteigend`:return[...e].sort((e,t)=>t.price-e.price);case`name-a-z`:return[...e].sort((e,t)=>e.name.localeCompare(t.name,`de`));default:return[...e].sort((e,t)=>{let n=E(e),r=E(t);return r===n?e.name.localeCompare(t.name,`de`):r-n})}}function O(){let e=v.query.trim().toLowerCase();return D(t.filter(t=>{let n=v.category===`Alle`||t.category===v.category,r=v.stock===`Alle`||t.stockLevel===v.stock,i=e.length===0||[t.name,t.category,t.origin,t.stockLabel].join(` `).toLowerCase().includes(e);return n&&r&&i}))}function k(e){v.cart[e]=(v.cart[e]??0)+1,b(),H()}function A(e,t){t<=0?delete v.cart[e]:v.cart[e]=t,b(),H()}function j(){v.cart={},b(),H()}function M(){v.query=``,v.category=`Alle`,v.stock=`Alle`,v.sort=`empfohlen`,H()}function N(e){return{fresh:`border-emerald-200 bg-emerald-50 text-emerald-800`,ready:`border-sky-200 bg-sky-50 text-sky-800`,limited:`border-amber-200 bg-amber-50 text-amber-800`}[e.stockLevel]??`border-stone-200 bg-stone-100 text-stone-700`}function P(e){return{fresh:`bg-emerald-500`,ready:`bg-sky-500`,limited:`bg-amber-500`}[e.stockLevel]??`bg-stone-400`}function F(){let e=T();return`
    <div>
      <div class="rounded-2xl border border-stone-200 bg-white/85 p-4 shadow-[var(--shadow-sm)]">
        <div class="flex items-center gap-3">
          <button
            type="button"
            data-action="toggle-filters"
            aria-expanded="${v.filtersOpen?`true`:`false`}"
            aria-controls="filter-panel"
            class="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
          >
            <span class="flex items-center gap-2">
              <span aria-hidden="true" class="grid h-7 w-7 place-items-center rounded-lg bg-stone-100 text-stone-700">⚙</span>
              <span class="text-sm font-semibold text-stone-900">Filter</span>
              ${e>0?`<span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-800">${e}</span>`:``}
            </span>
            <span class="text-xs font-medium text-stone-600" aria-hidden="true">${v.filtersOpen?`−`:`+`}</span>
          </button>
          ${e>0?`<button type="button" data-action="clear-filters" class="shrink-0 rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50">Zurücksetzen</button>`:``}
        </div>

        <div id="filter-panel" ${v.filtersOpen?``:`hidden`}>
          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Sortierung</p>
            <select
              data-action="set-sort"
              aria-label="Sortierung"
              class="mt-3 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            >
              ${g.map(e=>`<option value="${e.value}" ${v.sort===e.value?`selected`:``}>${e.label}</option>`).join(``)}
            </select>
          </div>

          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Kategorie</p>
            <div class="mt-3 flex flex-wrap gap-1.5 lg:flex-col">
              ${s.map(e=>`
                    <button
                      type="button"
                      data-action="set-category"
                      data-value="${e}"
                      ${v.category===e?`aria-pressed="true"`:`aria-pressed="false"`}
                      class="rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${v.category===e?`border-stone-950 bg-stone-950 text-white shadow-[0_8px_20px_-10px_rgba(6,95,70,0.5)]`:`border-stone-300 bg-white text-stone-700 hover:border-stone-500 hover:bg-stone-50`}"
                    >
                      ${e}
                    </button>
                  `).join(``)}
            </div>
          </div>

          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Bestand</p>
            <div class="mt-3 grid gap-1.5">
              ${h.map(e=>`
                  <button
                    type="button"
                    data-action="set-stock"
                    data-value="${e.value}"
                    ${v.stock===e.value?`aria-pressed="true"`:`aria-pressed="false"`}
                    class="flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium transition ${v.stock===e.value?`border-emerald-400 bg-emerald-50 text-emerald-900`:`border-stone-300 bg-white text-stone-700 hover:border-stone-500 hover:bg-stone-50`}"
                  >
                    <span class="flex items-center gap-2">
                      <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full ${e.value===`fresh`?`bg-emerald-500`:e.value===`ready`?`bg-sky-500`:e.value===`limited`?`bg-amber-500`:`bg-stone-400`}"></span>
                      ${e.label}
                    </span>
                    ${v.stock===e.value?`<span aria-hidden="true">✓</span>`:``}
                  </button>
                `).join(``)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function I(e,t){let n=v.cart[e.id]??0;return`
    <article class="reveal reveal-d${t%3+1} card-lift group flex h-full flex-col rounded-[1.5rem] border border-stone-200 bg-white/90 p-4 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <div class="flex flex-wrap items-start justify-between gap-2">
        <span class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-700">
          ${e.category}
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-medium ${N(e)}">
          <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full ${P(e)}"></span>
          ${e.stockLabel}
        </span>
      </div>

      <div class="mt-3 overflow-hidden rounded-[1.1rem] bg-stone-100">
        <img
          src="${e.image}"
          alt="${r(e.name)}"
          class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div class="mt-4">
        <h3 class="font-display text-2xl font-semibold text-stone-950">${e.name}</h3>
      </div>

      <dl class="mt-4 grid grid-cols-2 gap-3 border-t border-stone-200 pt-3 text-sm">
        <div>
          <dt class="text-xs text-stone-500">Preis</dt>
          <dd class="mt-1 font-display text-lg font-semibold text-stone-950">${m.format(e.price)}</dd>
        </div>
        <div>
          <dt class="text-xs text-stone-500">Einheit</dt>
          <dd class="mt-1 text-sm font-medium text-stone-800">${e.unit}</dd>
        </div>
        <div class="col-span-2">
          <dt class="text-xs text-stone-500">Herkunft</dt>
          <dd class="mt-1 text-sm font-medium text-stone-800">${e.origin}</dd>
        </div>
      </dl>

      <div class="mt-auto pt-5">
        ${n>0?`
              <div class="flex items-center justify-between gap-3">
                <div class="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-stone-50 p-1">
                  <button type="button" data-action="decrease" data-id="${e.id}" class="btn-press grid h-9 w-9 place-items-center rounded-full bg-white text-lg text-stone-900 transition hover:bg-stone-200" aria-label="Menge für ${r(e.name)} verringern">−</button>
                  <span class="min-w-8 text-center text-sm font-semibold text-stone-900" aria-live="polite">${n}</span>
                  <button type="button" data-action="increase" data-id="${e.id}" class="btn-press grid h-9 w-9 place-items-center rounded-full bg-stone-950 text-lg text-white transition hover:bg-emerald-800" aria-label="Menge für ${r(e.name)} erhöhen">+</button>
                </div>
                <p class="text-xs font-semibold text-emerald-800">✓ Im Korb</p>
              </div>
            `:`
              <button type="button" data-action="add-to-cart" data-id="${e.id}" class="btn-press inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-4 py-3 text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(6,95,70,0.5)] transition hover:bg-emerald-800">
                In den Warenkorb
                <span aria-hidden="true">+</span>
              </button>
            `}
      </div>
    </article>
  `}function L(){let e=O();return e.length===0?`
      <div class="rounded-2xl border border-dashed border-stone-300 bg-white/60 py-12 text-center">
        <p class="font-display text-xl font-semibold text-stone-950">Keine Produkte gefunden</p>
        <p class="mt-3 text-sm leading-7 text-stone-600">Versuche eine andere Kategorie oder lösche die aktiven Filter.</p>
        <button type="button" data-action="clear-filters" class="btn-press mt-5 inline-flex items-center rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
          Filter zurücksetzen
        </button>
      </div>
    `:`
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      ${e.map((e,t)=>I(e,t)).join(``)}
    </div>
  `}function R(){let e=S(),t=C(),n=w();return`
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 px-5 py-5 text-stone-50 shadow-[0_20px_50px_-18px_rgba(6,95,70,0.55)] ring-1 ring-inset ring-white/5">
      <div aria-hidden="true" class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/25 blur-3xl"></div>
      <div class="relative">
        <div class="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-300">Warenkorb</p>
            <h3 class="font-display mt-2 text-2xl font-semibold">${t} Artikel</h3>
          </div>
          ${t>0?`<button type="button" data-action="clear-cart" class="rounded-full border border-white/15 px-3 py-1.5 text-[0.7rem] font-medium text-stone-200 transition hover:border-white/30 hover:bg-white/10">Leeren</button>`:``}
        </div>

        <div class="mt-4 space-y-4">
          ${e.length>0?e.map(e=>`
                      <article class="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="font-medium text-white">${e.name}</p>
                            <p class="mt-1 text-xs text-stone-400">${m.format(e.price)} · ${e.unit}</p>
                          </div>
                          <p class="font-display font-semibold text-emerald-300">${m.format(e.total)}</p>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <div class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                            <button type="button" data-action="decrease" data-id="${e.id}" class="btn-press grid h-7 w-7 place-items-center rounded-full bg-white/10 text-sm text-white transition hover:bg-white/20" aria-label="Menge verringern">−</button>
                            <span class="min-w-6 text-center text-xs font-semibold text-white">${e.quantity}</span>
                            <button type="button" data-action="increase" data-id="${e.id}" class="btn-press grid h-7 w-7 place-items-center rounded-full bg-emerald-700 text-sm text-white transition hover:bg-emerald-600" aria-label="Menge erhöhen">+</button>
                          </div>
                          <button type="button" data-action="remove" data-id="${e.id}" class="text-xs text-stone-400 transition hover:text-white">Entfernen</button>
                        </div>
                      </article>
                    `).join(``):`
                <div class="rounded-xl border border-dashed border-white/15 px-4 py-6 text-center text-sm leading-7 text-stone-300">
                  <p>Noch nichts im Korb.</p>
                  <p class="mt-1 text-xs text-stone-400">Füge Produkte hinzu, um zu sehen wie der Einkauf wächst.</p>
                </div>
              `}
        </div>

        <div class="mt-5 border-t border-white/10 pt-4">
          <div class="flex items-center justify-between text-sm text-stone-300">
            <span>Zwischensumme</span>
            <span>${m.format(n)}</span>
          </div>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-base font-semibold text-white">Gesamt</span>
            <span class="font-display text-2xl font-semibold text-emerald-300">${m.format(n)}</span>
          </div>
          <button type="button" data-action="checkout" class="btn-press mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50" ${t===0?`disabled`:``}>
            Zur Kasse
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  `}function z(){return`
    <div class="fixed inset-0 z-50 ${v.cartDrawerOpen?``:`pointer-events-none`} lg:hidden" aria-hidden="${v.cartDrawerOpen?`false`:`true`}" role="dialog" aria-label="Warenkorb">
      <button type="button" data-action="toggle-cart" class="absolute inset-0 bg-stone-950/50 transition ${v.cartDrawerOpen?`opacity-100`:`opacity-0`}" aria-label="Warenkorb schließen" tabindex="${v.cartDrawerOpen?`0`:`-1`}"></button>
      <div class="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-4 shadow-[0_-24px_50px_-12px_rgba(28,25,23,0.25)] transition duration-300 ${v.cartDrawerOpen?`translate-y-0`:`translate-y-full`}">
        <div aria-hidden="true" class="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-300"></div>
        <div class="mb-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-stone-950">Dein Korb</p>
            <p class="text-xs text-stone-600">Mengen direkt hier anpassen</p>
          </div>
          <button type="button" data-action="toggle-cart" class="grid h-10 w-10 place-items-center rounded-full border border-stone-300 bg-white text-stone-900 transition hover:bg-stone-50" aria-label="Schließen">×</button>
        </div>
        ${R()}
      </div>
    </div>
  `}function B(){return C()===0?``:`
    <div class="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <button type="button" data-action="toggle-cart" class="flex w-full items-center justify-between gap-3 rounded-full border border-stone-300 bg-white/95 px-5 py-3 text-left shadow-[0_14px_36px_-12px_rgba(28,25,23,0.22)] backdrop-blur">
        <div class="flex items-center gap-3">
          <span aria-hidden="true" class="grid h-9 w-9 place-items-center rounded-full bg-stone-950 text-white">🛒</span>
          <div>
            <p class="text-sm font-semibold text-stone-950">Warenkorb öffnen</p>
            <p class="text-xs text-stone-600">${C()} Artikel · ${m.format(w())}</p>
          </div>
        </div>
        <span class="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">Ansehen</span>
      </button>
    </div>
  `}function V(){if(!v.checkoutStep)return``;let e=f(),t=S(),n=w(),i=``;return v.checkoutStep===`confirm`&&(i=`
      <div class="mb-5 flex items-center justify-between">
        <h2 class="font-display text-xl font-semibold text-stone-950">Bestellung bestätigen</h2>
        <button data-action="close-checkout" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100">×</button>
      </div>
      <div class="mb-4 rounded-xl bg-stone-50 p-4 text-sm text-stone-700">
        <p class="font-semibold text-stone-950 mb-2">Bestellung als <span class="text-emerald-800">${r(e?.username??e?.email??``)}</span></p>
        <div class="space-y-1.5">
          ${t.map(e=>`
            <div class="flex justify-between gap-3">
              <span>${r(e.name)} <span class="text-stone-400">× ${e.quantity}</span></span>
              <span class="font-medium">${m.format(e.total)}</span>
            </div>`).join(``)}
        </div>
        <div class="mt-3 border-t border-stone-200 pt-3 flex justify-between font-semibold text-stone-950">
          <span>Gesamt</span><span class="text-emerald-800">${m.format(n)}</span>
        </div>
      </div>
      <p class="mb-5 text-xs text-stone-500">Nach der Bestätigung erhältst du eine Quittung per E-Mail. Keine Zahlung erforderlich.</p>
      <div class="flex gap-3">
        <button data-action="close-checkout" class="flex-1 rounded-full border border-stone-300 bg-white py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50">Abbrechen</button>
        <button data-action="confirm-order" class="flex-1 rounded-full bg-emerald-700 py-3 text-sm font-medium text-white transition hover:bg-emerald-600">Jetzt bestellen</button>
      </div>`),v.checkoutStep===`loading`&&(i=`
      <div class="py-10 text-center">
        <span class="mx-auto block h-10 w-10 animate-spin rounded-full border-2 border-stone-200 border-t-emerald-700"></span>
        <p class="mt-4 text-sm text-stone-600">Bestellung wird aufgegeben…</p>
      </div>`),v.checkoutStep===`success`&&(i=`
      <div class="py-6 text-center">
        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">✓</div>
        <h2 class="font-display text-xl font-semibold text-stone-950">Bestellung aufgegeben!</h2>
        <p class="mt-2 text-sm text-stone-600">Eine Quittung wurde an deine E-Mail-Adresse gesendet.</p>
        <p class="mt-1 text-xs text-stone-400">Bestellnr.: ${v.lastOrder?.id?.slice(0,8)??`—`}</p>
        <button data-action="close-checkout" class="mt-6 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">Fertig</button>
      </div>`),v.checkoutStep===`error`&&(i=`
      <div class="mb-5 flex items-center justify-between">
        <h2 class="font-display text-xl font-semibold text-stone-950">Fehler</h2>
        <button data-action="close-checkout" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100">×</button>
      </div>
      <p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">${r(v.checkoutError)}</p>
      <button data-action="close-checkout" class="mt-4 w-full rounded-full border border-stone-300 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50">Schließen</button>`),`
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <button data-action="close-checkout" class="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" aria-label="Schließen"></button>
      <div class="relative z-10 w-full max-w-md rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-6 shadow-[0_-24px_60px_rgba(28,25,23,0.18)] sm:rounded-[2rem]">
        ${i}
      </div>
    </div>`}function H(){let t=O();C(),_.innerHTML=n({activePage:`food`,hero:a({eyebrow:`Der Gemüseturm`,title:`Produkte aus unserem Vertical Farming.`,intro:`Knackig, frisch und lokal produziert. Filtere nach Kategorie oder Bestand, lege Produkte in den Korb und sieh den Einkauf live wachsen.`}),content:`
    <section class="px-5 pb-12 lg:px-6 lg:pb-20" aria-labelledby="products-heading">
      <div class="mx-auto max-w-7xl">
        <div class="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-[var(--shadow-sm)]">
          <label class="block">
            <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Produkte durchsuchen</span>
            <div class="relative">
              <span aria-hidden="true" class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">🔍</span>
              <input
                id="product-search"
                type="search"
                value="${r(v.query)}"
                placeholder="z. B. Salat, Basilikum, regional oder frisch"
                aria-label="Produkte durchsuchen"
                class="w-full rounded-xl border border-stone-300 bg-stone-50 py-3 pl-11 pr-4 text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </div>
          </label>
        </div>

        <h2 id="products-heading" class="sr-only">Produktübersicht</h2>

        <div class="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div>
            <div class="lg:hidden">
              ${F()}
              <div class="h-4"></div>
            </div>

            <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-stone-600">
                <span class="font-display text-xl font-semibold text-stone-950">${t.length}</span> ${t.length===1?`Produkt`:`Produkte`} sichtbar
              </p>
              <a href="${e.links.team}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 text-sm font-medium text-emerald-800 transition hover:text-emerald-900">
                Teamprofil
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            ${L()}
          </div>

          <aside class="hidden lg:flex lg:flex-col lg:gap-4 lg:sticky lg:top-24" aria-label="Filter und Warenkorb">
            ${F()}
            ${R()}
          </aside>
        </div>
      </div>
    </section>
  `})+z()+B()+V(),i(_)}function U(e){let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,value:r,id:i}=t.dataset;switch(n){case`toggle-filters`:v.filtersOpen=!v.filtersOpen,H();break;case`set-category`:v.category=r,H();break;case`set-stock`:v.stock=r,H();break;case`clear-filters`:M();break;case`add-to-cart`:k(i);break;case`increase`:A(i,(v.cart[i]??0)+1);break;case`decrease`:A(i,(v.cart[i]??0)-1);break;case`remove`:A(i,0);break;case`clear-cart`:j();break;case`toggle-cart`:v.cartDrawerOpen=!v.cartDrawerOpen,H();break;case`checkout`:if(C()===0)break;if(!f()||!d()){window.location.href=`account.html`;break}v.checkoutStep=`confirm`,v.cartDrawerOpen=!1,H();break;case`confirm-order`:{v.checkoutStep=`loading`,H();let e=S().map(({id:e,name:t,price:n,quantity:r,unit:i})=>({id:e,name:t,price:n,quantity:r,unit:i}));p(`/api/orders`,{method:`POST`,body:JSON.stringify({items:e})}).then(e=>{v.lastOrder=e.order,v.checkoutStep=`success`,j()}).catch(e=>{v.checkoutError=e.message||`Ein Fehler ist aufgetreten.`,v.checkoutStep=`error`,H()}).finally(()=>{v.checkoutStep!==`error`&&H()});break}case`close-checkout`:if(v.checkoutStep===`loading`)break;v.checkoutStep=null,v.checkoutError=``,H();break;default:break}}function W(e){e.target.id===`product-search`&&(v.query=e.target.value,H())}function G(e){e.target.closest(`[data-action="set-sort"]`)&&(v.sort=e.target.value,H())}_.addEventListener(`click`,U),_.addEventListener(`input`,W),_.addEventListener(`change`,G),o(_),H();