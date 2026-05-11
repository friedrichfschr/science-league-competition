import{a as e,c as t,i as n,n as r,r as i,s as a,t as o}from"./shared-COfGIemK.js";import{t as s}from"./api-eHN6Hcp6.js";var c=`foodconnect-cart-v2`,l=`fcm-auth`;function u(){try{return JSON.parse(localStorage.getItem(l))?.token??null}catch{return null}}function d(){try{return JSON.parse(localStorage.getItem(l))?.user??null}catch{return null}}async function f(e,t={}){let n=u(),r=await fetch(`${s}${e}`,{...t,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{},...t.headers}});if(r.status===204)return null;let i=await r.json().catch(()=>({}));if(!r.ok)throw Error(i.message||`HTTP ${r.status}`);return i}var p=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),m=[{value:`Alle`,label:`Alle Bestände`},{value:`fresh`,label:`Frisch geerntet`},{value:`ready`,label:`Sofort verfügbar`},{value:`limited`,label:`Nur kleine Menge`}],h=[{value:`empfohlen`,label:`Empfohlen`},{value:`preis-aufsteigend`,label:`Preis: niedrig zuerst`},{value:`preis-absteigend`,label:`Preis: hoch zuerst`},{value:`name-a-z`,label:`Name A–Z`}],g=document.querySelector(`#app`),_={query:``,category:`Alle`,stock:`Alle`,sort:`empfohlen`,cart:v(),cartDrawerOpen:!1,filtersOpen:!1,checkoutStep:null,checkoutError:``,lastOrder:null,rowListOpen:!1};function v(){try{let e=window.localStorage.getItem(c);return e?JSON.parse(e):{}}catch{return{}}}function y(){window.localStorage.setItem(c,JSON.stringify(_.cart))}function b(e){return t.find(t=>t.id===e)}function x(){return Object.entries(_.cart).map(([e,t])=>{let n=b(e);return!n||t<=0?null:{...n,quantity:t,total:n.price*t}}).filter(Boolean)}function S(){return Object.values(_.cart).reduce((e,t)=>e+t,0)}function C(){return x().reduce((e,t)=>e+t.total,0)}function w(){let e=0;return _.query.trim()&&(e+=1),_.category!==`Alle`&&(e+=1),_.stock!==`Alle`&&(e+=1),e}function T(e){return{fresh:3,ready:2,limited:1}[e.stockLevel]+(e.badge===`Heute empfohlen`?2:0)}function E(e){switch(_.sort){case`preis-aufsteigend`:return[...e].sort((e,t)=>e.price-t.price);case`preis-absteigend`:return[...e].sort((e,t)=>t.price-e.price);case`name-a-z`:return[...e].sort((e,t)=>e.name.localeCompare(t.name,`de`));default:return[...e].sort((e,t)=>{let n=T(e),r=T(t);return r===n?e.name.localeCompare(t.name,`de`):r-n})}}function D(){let e=_.query.trim().toLowerCase();return E(t.filter(t=>{let n=_.category===`Alle`||t.category===_.category,r=_.stock===`Alle`||t.stockLevel===_.stock,i=e.length===0||[t.name,t.category,t.origin,t.row,t.stockLabel].join(` `).toLowerCase().includes(e);return n&&r&&i}))}function O(e){_.cart[e]=(_.cart[e]??0)+1,y(),H()}function k(e,t){t<=0?delete _.cart[e]:_.cart[e]=t,y(),H()}function A(){_.cart={},y(),H()}function j(){_.query=``,_.category=`Alle`,_.stock=`Alle`,_.sort=`empfohlen`,H()}function M(e){return{fresh:`border-emerald-200 bg-emerald-50 text-emerald-800`,ready:`border-sky-200 bg-sky-50 text-sky-800`,limited:`border-amber-200 bg-amber-50 text-amber-800`}[e.stockLevel]??`border-stone-200 bg-stone-100 text-stone-700`}function N(e){return{fresh:`bg-emerald-500`,ready:`bg-sky-500`,limited:`bg-amber-500`}[e.stockLevel]??`bg-stone-400`}function P(){let e=w();return`
    <div>
      <div class="rounded-2xl border border-stone-200 bg-white/85 p-4 shadow-[var(--shadow-sm)]">
        <div class="flex items-center gap-3">
          <button
            type="button"
            data-action="toggle-filters"
            aria-expanded="${_.filtersOpen?`true`:`false`}"
            aria-controls="filter-panel"
            class="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
          >
            <span class="flex items-center gap-2">
              <span aria-hidden="true" class="grid h-7 w-7 place-items-center rounded-lg bg-stone-100 text-stone-700">⚙</span>
              <span class="text-sm font-semibold text-stone-900">Filter</span>
              ${e>0?`<span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-800">${e}</span>`:``}
            </span>
            <span class="text-xs font-medium text-stone-600" aria-hidden="true">${_.filtersOpen?`−`:`+`}</span>
          </button>
          ${e>0?`<button type="button" data-action="clear-filters" class="shrink-0 rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50">Zurücksetzen</button>`:``}
        </div>

        <div id="filter-panel" ${_.filtersOpen?``:`hidden`}>
          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Sortierung</p>
            <select
              data-action="set-sort"
              aria-label="Sortierung"
              class="mt-3 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            >
              ${h.map(e=>`<option value="${e.value}" ${_.sort===e.value?`selected`:``}>${e.label}</option>`).join(``)}
            </select>
          </div>

          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Kategorie</p>
            <div class="mt-3 flex flex-wrap gap-1.5 lg:flex-col">
              ${a.map(e=>`
                    <button
                      type="button"
                      data-action="set-category"
                      data-value="${e}"
                      ${_.category===e?`aria-pressed="true"`:`aria-pressed="false"`}
                      class="rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${_.category===e?`border-stone-950 bg-stone-950 text-white shadow-[0_8px_20px_-10px_rgba(6,95,70,0.5)]`:`border-stone-300 bg-white text-stone-700 hover:border-stone-500 hover:bg-stone-50`}"
                    >
                      ${e}
                    </button>
                  `).join(``)}
            </div>
          </div>

          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Bestand</p>
            <div class="mt-3 grid gap-1.5">
              ${m.map(e=>`
                  <button
                    type="button"
                    data-action="set-stock"
                    data-value="${e.value}"
                    ${_.stock===e.value?`aria-pressed="true"`:`aria-pressed="false"`}
                    class="flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium transition ${_.stock===e.value?`border-emerald-400 bg-emerald-50 text-emerald-900`:`border-stone-300 bg-white text-stone-700 hover:border-stone-500 hover:bg-stone-50`}"
                  >
                    <span class="flex items-center gap-2">
                      <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full ${e.value===`fresh`?`bg-emerald-500`:e.value===`ready`?`bg-sky-500`:e.value===`limited`?`bg-amber-500`:`bg-stone-400`}"></span>
                      ${e.label}
                    </span>
                    ${_.stock===e.value?`<span aria-hidden="true">✓</span>`:``}
                  </button>
                `).join(``)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function F(e,t){let n=_.cart[e.id]??0;return`
    <article class="reveal reveal-d${t%3+1} card-lift group flex h-full flex-col rounded-[1.5rem] border border-stone-200 bg-white/90 p-4 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <div class="flex flex-wrap items-start justify-between gap-2">
        <span class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-700">
          ${e.category}
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-medium ${M(e)}">
          <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full ${N(e)}"></span>
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

      <div class="mt-3 flex items-center gap-2">
        <span class="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-stone-50 px-2.5 py-1 text-xs font-semibold text-stone-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Reihe ${e.row}
        </span>
      </div>
      <dl class="mt-3 grid grid-cols-2 gap-3 border-t border-stone-200 pt-3 text-sm">
        <div>
          <dt class="text-xs text-stone-500">Preis</dt>
          <dd class="mt-1 font-display text-lg font-semibold text-stone-950">${p.format(e.price)}</dd>
        </div>
        <div>
          <dt class="text-xs text-stone-500">Einheit</dt>
          <dd class="mt-1 text-sm font-medium text-stone-800">${e.unit}</dd>
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
  `}function I(){let e=D();return e.length===0?`
      <div class="rounded-2xl border border-dashed border-stone-300 bg-white/60 py-12 text-center">
        <p class="font-display text-xl font-semibold text-stone-950">Keine Produkte gefunden</p>
        <p class="mt-3 text-sm leading-7 text-stone-600">Versuche eine andere Kategorie oder lösche die aktiven Filter.</p>
        <button type="button" data-action="clear-filters" class="btn-press mt-5 inline-flex items-center rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
          Filter zurücksetzen
        </button>
      </div>
    `:`
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      ${e.map((e,t)=>F(e,t)).join(``)}
    </div>
  `}function L(){let e=x(),t=S(),n=C();return`
    <div class="relative flex max-h-[calc(100vh-6rem)] flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 text-stone-50 shadow-[0_20px_50px_-18px_rgba(6,95,70,0.55)] ring-1 ring-inset ring-white/5">
      <div aria-hidden="true" class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/25 blur-3xl"></div>

      <!-- Header + actions (sticky top) -->
      <div class="relative shrink-0 px-4 pb-3 pt-4">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">Warenkorb</p>
            <span class="rounded-full bg-white/10 px-2 py-0.5 text-[0.7rem] font-semibold text-white">${t}</span>
          </div>
          ${t>0?`<button type="button" data-action="clear-cart" class="text-[0.7rem] font-medium text-stone-400 transition hover:text-white">Leeren</button>`:``}
        </div>

        <!-- Total row -->
        <div class="mt-2 flex items-baseline justify-between gap-2">
          <span class="text-xs text-stone-400">Gesamt</span>
          <span class="font-display text-xl font-semibold text-emerald-300">${p.format(n)}</span>
        </div>

        <!-- Action buttons -->
        <div class="mt-3 flex flex-col gap-1.5">
          <button type="button" data-action="checkout" class="btn-press inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50" ${t===0?`disabled`:``}>
            Zur Kasse <span aria-hidden="true">→</span>
          </button>
          ${t>0?`
          <button type="button" data-action="show-row-list" class="btn-press inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-medium text-stone-200 transition hover:bg-white/15">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            Regalübersicht
          </button>`:``}
          ${t>0&&u()?`
          <form data-action="save-list" class="flex gap-1.5">
            <input name="list-name" type="text" placeholder="Liste speichern…" maxlength="60" required
              class="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white/15 focus:outline-none" />
            <button type="submit" class="shrink-0 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium text-stone-200 transition hover:bg-white/20">
              Merken
            </button>
          </form>`:``}
        </div>
      </div>

      <!-- Scrollable items -->
      <div class="relative min-h-0 flex-1 overflow-y-auto border-t border-white/10 px-4 py-3 [scrollbar-color:rgba(255,255,255,0.15)_transparent] [scrollbar-width:thin]">
        ${e.length>0?`<div class="space-y-3">
                ${e.map(e=>`
                  <article class="border-b border-white/8 pb-3 last:border-b-0 last:pb-0">
                    <div class="flex items-start justify-between gap-2">
                      <div class="min-w-0">
                        <p class="text-sm font-medium leading-snug text-white">${e.name}</p>
                        <p class="mt-0.5 text-[0.7rem] text-stone-400">${p.format(e.price)} · ${e.unit}</p>
                      </div>
                      <p class="shrink-0 text-sm font-semibold text-emerald-300">${p.format(e.total)}</p>
                    </div>
                    <div class="mt-2 flex items-center justify-between gap-2">
                      <div class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5">
                        <button type="button" data-action="decrease" data-id="${e.id}" class="btn-press grid h-6 w-6 place-items-center rounded-full bg-white/10 text-xs text-white transition hover:bg-white/20" aria-label="Menge verringern">−</button>
                        <span class="min-w-5 text-center text-xs font-semibold text-white">${e.quantity}</span>
                        <button type="button" data-action="increase" data-id="${e.id}" class="btn-press grid h-6 w-6 place-items-center rounded-full bg-emerald-700 text-xs text-white transition hover:bg-emerald-600" aria-label="Menge erhöhen">+</button>
                      </div>
                      <button type="button" data-action="remove" data-id="${e.id}" class="text-[0.7rem] text-stone-500 transition hover:text-white">Entfernen</button>
                    </div>
                  </article>
                `).join(``)}
              </div>`:`<div class="rounded-xl border border-dashed border-white/15 px-4 py-6 text-center text-sm leading-7 text-stone-300">
                <p>Noch nichts im Korb.</p>
                <p class="mt-1 text-xs text-stone-400">Füge Produkte hinzu, um zu sehen wie der Einkauf wächst.</p>
              </div>`}
      </div>
    </div>
  `}function R(){return`
    <div class="fixed inset-0 z-50 ${_.cartDrawerOpen?``:`pointer-events-none`} lg:hidden" aria-hidden="${_.cartDrawerOpen?`false`:`true`}" role="dialog" aria-label="Warenkorb">
      <button type="button" data-action="toggle-cart" class="absolute inset-0 bg-stone-950/50 transition ${_.cartDrawerOpen?`opacity-100`:`opacity-0`}" aria-label="Warenkorb schließen" tabindex="${_.cartDrawerOpen?`0`:`-1`}"></button>
      <div class="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-4 shadow-[0_-24px_50px_-12px_rgba(28,25,23,0.25)] transition duration-300 ${_.cartDrawerOpen?`translate-y-0`:`translate-y-full`}">
        <div aria-hidden="true" class="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-300"></div>
        <div class="mb-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-stone-950">Dein Korb</p>
            <p class="text-xs text-stone-600">Mengen direkt hier anpassen</p>
          </div>
          <button type="button" data-action="toggle-cart" class="grid h-10 w-10 place-items-center rounded-full border border-stone-300 bg-white text-stone-900 transition hover:bg-stone-50" aria-label="Schließen">×</button>
        </div>
        ${L()}
      </div>
    </div>
  `}function z(){return S()===0?``:`
    <div class="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <button type="button" data-action="toggle-cart" class="flex w-full items-center justify-between gap-3 rounded-full border border-stone-300 bg-white/95 px-5 py-3 text-left shadow-[0_14px_36px_-12px_rgba(28,25,23,0.22)] backdrop-blur">
        <div class="flex items-center gap-3">
          <span aria-hidden="true" class="grid h-9 w-9 place-items-center rounded-full bg-stone-950 text-white">🛒</span>
          <div>
            <p class="text-sm font-semibold text-stone-950">Warenkorb öffnen</p>
            <p class="text-xs text-stone-600">${S()} Artikel · ${p.format(C())}</p>
          </div>
        </div>
        <span class="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">Ansehen</span>
      </button>
    </div>
  `}function B(){if(!_.rowListOpen)return``;let e=x(),t=d(),n=e.map(e=>`${e.name} × ${e.quantity}  →  Regal ${e.row}`),i=encodeURIComponent(`Meine Einkaufsliste:

`+n.join(`
`)+`

Generiert auf FoodConnectMarkt`),a=`mailto:${t?.email?encodeURIComponent(t.email):``}?subject=Meine%20Einkaufsliste%20%E2%80%93%20FoodConnectMarkt&body=${i}`;return`
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Regalübersicht">
      <button data-action="close-row-list" class="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" aria-label="Schließen"></button>
      <div class="relative z-10 w-full max-w-md rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-6 shadow-[0_-24px_60px_rgba(28,25,23,0.18)] sm:rounded-[2rem]">
        <div class="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 class="font-display text-xl font-semibold text-stone-950">Regalübersicht</h2>
            <p class="mt-0.5 text-xs text-stone-500">Wo du jeden Artikel findest</p>
          </div>
          <button data-action="close-row-list" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100" aria-label="Schließen">×</button>
        </div>
        <ul class="divide-y divide-stone-100" role="list">
          ${e.map(e=>`
            <li class="flex items-center justify-between gap-3 py-3">
              <div class="min-w-0">
                <p class="text-sm font-medium text-stone-950 truncate">${r(e.name)}</p>
                <p class="text-xs text-stone-500">× ${e.quantity}</p>
              </div>
              <span class="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Regal ${r(e.row)}
              </span>
            </li>
          `).join(``)}
        </ul>
        <a
          href="${a}"
          class="btn-press mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-400 hover:bg-stone-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
          Liste per E-Mail senden
        </a>
      </div>
    </div>`}function V(){if(!_.checkoutStep)return``;let e=d(),t=x(),n=C(),i=``;return _.checkoutStep===`confirm`&&(i=`
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
              <span class="font-medium">${p.format(e.total)}</span>
            </div>`).join(``)}
        </div>
        <div class="mt-3 border-t border-stone-200 pt-3 flex justify-between font-semibold text-stone-950">
          <span>Gesamt</span><span class="text-emerald-800">${p.format(n)}</span>
        </div>
      </div>
      <p class="mb-5 text-xs text-stone-500">Nach der Bestätigung wird deine Lieferung vorbereitet. Du erhältst eine Bestätigung per E-Mail.</p>
      <div class="flex gap-3">
        <button data-action="close-checkout" class="flex-1 rounded-full border border-stone-300 bg-white py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50">Abbrechen</button>
        <button data-action="confirm-order" class="flex-1 rounded-full bg-emerald-700 py-3 text-sm font-medium text-white transition hover:bg-emerald-600">Lieferung beauftragen</button>
      </div>`),_.checkoutStep===`loading`&&(i=`
      <div class="py-10 text-center">
        <span class="mx-auto block h-10 w-10 animate-spin rounded-full border-2 border-stone-200 border-t-emerald-700"></span>
        <p class="mt-4 text-sm text-stone-600">Lieferung wird beauftragt…</p>
      </div>`),_.checkoutStep===`success`&&(i=`
      <div class="py-6 text-center">
        <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl">✓</div>
        <h2 class="font-display text-xl font-semibold text-stone-950">Lieferung beauftragt!</h2>
        <p class="mt-2 text-sm text-stone-600">Deine Lieferung wird vorbereitet. Eine Bestätigung wurde an deine E-Mail-Adresse gesendet.</p>
        <p class="mt-1 text-xs text-stone-400">Bestellnr.: ${_.lastOrder?.id?.slice(0,8)??`—`}</p>
        <button data-action="close-checkout" class="mt-6 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">Fertig</button>
      </div>`),_.checkoutStep===`error`&&(i=`
      <div class="mb-5 flex items-center justify-between">
        <h2 class="font-display text-xl font-semibold text-stone-950">Fehler</h2>
        <button data-action="close-checkout" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100">×</button>
      </div>
      <p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">${r(_.checkoutError)}</p>
      <button data-action="close-checkout" class="mt-4 w-full rounded-full border border-stone-300 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50">Schließen</button>`),`
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <button data-action="close-checkout" class="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" aria-label="Schließen"></button>
      <div class="relative z-10 w-full max-w-md rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-6 shadow-[0_-24px_60px_rgba(28,25,23,0.18)] sm:rounded-[2rem]">
        ${i}
      </div>
    </div>`}function H(){let t=D();S(),g.innerHTML=n({activePage:`food`,hero:i({eyebrow:`Der Gemüseturm`,title:`Produkte aus unserem Vertical Farming.`,intro:`Knackig, frisch und lokal produziert. Filtere nach Kategorie oder Bestand, lege Produkte in den Korb und beauftrage deine Lieferung.`}),content:`
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
                value="${r(_.query)}"
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
              ${P()}
              <div class="h-4"></div>
            </div>

            <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-stone-600">
                <span class="font-display text-xl font-semibold text-stone-950">${t.length}</span> ${t.length===1?`Produkt`:`Produkte`} sichtbar
              </p>
            </div>

            ${I()}
          </div>

          <aside class="hidden lg:flex lg:flex-col lg:gap-4 lg:sticky lg:top-24" aria-label="Filter und Warenkorb">
            ${P()}
            ${L()}
          </aside>
        </div>
      </div>
    </section>
  `})+R()+z()+V()+B(),e(g)}function U(e){let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,value:r,id:i}=t.dataset;switch(n){case`toggle-filters`:_.filtersOpen=!_.filtersOpen,H();break;case`set-category`:_.category=r,H();break;case`set-stock`:_.stock=r,H();break;case`clear-filters`:j();break;case`add-to-cart`:O(i);break;case`increase`:k(i,(_.cart[i]??0)+1);break;case`decrease`:k(i,(_.cart[i]??0)-1);break;case`remove`:k(i,0);break;case`clear-cart`:A();break;case`toggle-cart`:_.cartDrawerOpen=!_.cartDrawerOpen,H();break;case`checkout`:if(S()===0)break;if(!d()||!u()){window.location.href=`account.html`;break}_.checkoutStep=`confirm`,_.cartDrawerOpen=!1,H();break;case`confirm-order`:{_.checkoutStep=`loading`,H();let e=x().map(({id:e,name:t,price:n,quantity:r,unit:i})=>({id:e,name:t,price:n,quantity:r,unit:i}));f(`/api/orders`,{method:`POST`,body:JSON.stringify({items:e})}).then(e=>{_.lastOrder=e.order,_.checkoutStep=`success`,A()}).catch(e=>{_.checkoutError=e.message||`Ein Fehler ist aufgetreten.`,_.checkoutStep=`error`,H()}).finally(()=>{_.checkoutStep!==`error`&&H()});break}case`close-checkout`:if(_.checkoutStep===`loading`)break;_.checkoutStep=null,_.checkoutError=``,H();break;case`show-row-list`:_.rowListOpen=!0,_.cartDrawerOpen=!1,H();break;case`close-row-list`:_.rowListOpen=!1,H();break;default:break}}function W(e){if(e.target.id!==`product-search`)return;let{selectionStart:t,selectionEnd:n}=e.target;_.query=e.target.value,H();let r=document.getElementById(`product-search`);r&&(r.focus(),r.setSelectionRange(t,n))}function G(e){e.target.closest(`[data-action="set-sort"]`)&&(_.sort=e.target.value,H())}async function K(e){let t=x().map(({id:e,name:t,price:n,quantity:r,unit:i})=>({id:e,name:t,price:n,quantity:r,unit:i}));if(!(!t.length||!e))try{await f(`/api/lists`,{method:`POST`,body:JSON.stringify({name:e,items:t})})}catch{}}function q(e){let t=e.target.closest(`[data-action="save-list"]`);if(!t)return;e.preventDefault();let n=new FormData(t).get(`list-name`)?.trim();n&&(t.reset(),K(n))}g.addEventListener(`click`,U),g.addEventListener(`input`,W),g.addEventListener(`change`,G),g.addEventListener(`submit`,q),o(g),new URLSearchParams(window.location.search).get(`cart`)===`open`&&(_.cartDrawerOpen=!0,history.replaceState(null,``,window.location.pathname)),H();