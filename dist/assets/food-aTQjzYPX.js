import{i as e,l as t,n,r,s as i,t as a,u as o}from"./shared-Ccctz4G3.js";var s=`foodconnect-cart-v2`,c=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`}),l=[{value:`Alle`,label:`Alle Bestände`},{value:`fresh`,label:`Frisch geerntet`},{value:`ready`,label:`Sofort verfügbar`},{value:`limited`,label:`Nur kleine Menge`}],u=[{value:`empfohlen`,label:`Empfohlen`},{value:`preis-aufsteigend`,label:`Preis: niedrig zuerst`},{value:`preis-absteigend`,label:`Preis: hoch zuerst`},{value:`name-a-z`,label:`Name A–Z`}],d=document.querySelector(`#app`),f={query:``,category:`Alle`,stock:`Alle`,sort:`empfohlen`,cart:p(),cartDrawerOpen:!1,filtersOpen:!1};function p(){try{let e=window.localStorage.getItem(s);return e?JSON.parse(e):{}}catch{return{}}}function m(){window.localStorage.setItem(s,JSON.stringify(f.cart))}function h(e){return o.find(t=>t.id===e)}function g(){return Object.entries(f.cart).map(([e,t])=>{let n=h(e);return!n||t<=0?null:{...n,quantity:t,total:n.price*t}}).filter(Boolean)}function _(){return Object.values(f.cart).reduce((e,t)=>e+t,0)}function v(){return g().reduce((e,t)=>e+t.total,0)}function y(){let e=0;return f.query.trim()&&(e+=1),f.category!==`Alle`&&(e+=1),f.stock!==`Alle`&&(e+=1),e}function b(e){return{fresh:3,ready:2,limited:1}[e.stockLevel]+(e.badge===`Heute empfohlen`?2:0)}function x(e){switch(f.sort){case`preis-aufsteigend`:return[...e].sort((e,t)=>e.price-t.price);case`preis-absteigend`:return[...e].sort((e,t)=>t.price-e.price);case`name-a-z`:return[...e].sort((e,t)=>e.name.localeCompare(t.name,`de`));default:return[...e].sort((e,t)=>{let n=b(e),r=b(t);return r===n?e.name.localeCompare(t.name,`de`):r-n})}}function S(){let e=f.query.trim().toLowerCase();return x(o.filter(t=>{let n=f.category===`Alle`||t.category===f.category,r=f.stock===`Alle`||t.stockLevel===f.stock,i=e.length===0||[t.name,t.category,t.origin,t.stockLabel].join(` `).toLowerCase().includes(e);return n&&r&&i}))}function C(e){f.cart[e]=(f.cart[e]??0)+1,m(),P()}function w(e,t){t<=0?delete f.cart[e]:f.cart[e]=t,m(),P()}function T(){f.cart={},m(),P()}function E(){f.query=``,f.category=`Alle`,f.stock=`Alle`,f.sort=`empfohlen`,P()}function D(e){return{fresh:`border-emerald-200 bg-emerald-50 text-emerald-800`,ready:`border-sky-200 bg-sky-50 text-sky-800`,limited:`border-amber-200 bg-amber-50 text-amber-800`}[e.stockLevel]??`border-stone-200 bg-stone-100 text-stone-700`}function O(){return`
    <aside class="lg:sticky lg:top-24">
      <div class="py-2">
        <div class="rounded-2xl border border-stone-300 bg-white px-4 py-3">
          <div class="flex items-center gap-3">
            <button
              type="button"
              data-action="toggle-filters"
              aria-expanded="${f.filtersOpen?`true`:`false`}"
              class="flex min-w-0 flex-1 items-center justify-between gap-3 text-left transition"
            >
              <p class="text-sm font-medium text-stone-900">Filter</p>
              <span class="text-sm font-medium text-stone-700">${f.filtersOpen?`Schließen`:`Öffnen`}</span>
            </button>
            ${y()>0?`<button type="button" data-action="clear-filters" class="shrink-0 rounded-full border border-stone-300 px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50">Zurücksetzen</button>`:``}
          </div>

          ${f.filtersOpen?`
                <div class="mt-5 pt-1">
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Sortierung</p>
                  <select id="sort-select" class="mt-3 w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100">
                    ${u.map(e=>`<option value="${e.value}" ${f.sort===e.value?`selected`:``}>${e.label}</option>`).join(``)}
                  </select>
                </div>

                <div class="mt-5 pt-1">
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Kategorie</p>
                  <div class="mt-3 flex flex-wrap gap-2 lg:flex-col">
                    ${t.map(e=>`
                          <button
                            type="button"
                            data-action="set-category"
                            data-value="${e}"
                            class="rounded-full border px-4 py-2 text-sm font-medium transition ${f.category===e?`border-stone-950 bg-stone-950 text-white`:`border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100`}"
                          >
                            ${e}
                          </button>
                        `).join(``)}
                  </div>
                </div>

                <div class="mt-5 pt-1">
                  <p class="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Bestand</p>
                  <div class="mt-3 grid gap-2">
                    ${l.map(e=>`
                          <button
                            type="button"
                            data-action="set-stock"
                            data-value="${e.value}"
                            class="flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${f.stock===e.value?`border-emerald-300 bg-emerald-50 text-emerald-900`:`border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100`}"
                          >
                            <span>${e.label}</span>
                            <span class="text-xs uppercase tracking-[0.2em]">${e.value===`Alle`?`ALL`:e.value}</span>
                          </button>
                        `).join(``)}
                  </div>
                </div>
              `:``}
        </div>
      </div>
    </aside>
  `}function k(e){let t=f.cart[e.id]??0;return`
    <article class="flex h-full flex-col rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-[0_10px_30px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-[0_16px_40px_rgba(41,37,36,0.08)]">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <span class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
          ${e.category}
        </span>
        <span class="rounded-full border px-3 py-1 text-xs font-medium ${D(e)}">
          ${e.stockLabel}
        </span>
      </div>

      <div class="mt-3 overflow-hidden rounded-[1.1rem] bg-stone-100">
        <img src="${e.image}" alt="${e.name}" class="aspect-[4/3] w-full object-cover" loading="lazy" />
      </div>

      <div class="mt-3">
        <h3 class="text-2xl font-semibold text-stone-950">${e.name}</h3>
      </div>

      <dl class="mt-4 grid grid-cols-2 gap-3 border-t border-stone-200 pt-3 text-sm">
        <div>
          <dt class="text-stone-500">Preis</dt>
          <dd class="mt-1 font-semibold text-stone-950">${c.format(e.price)}</dd>
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

      <div class="mt-auto pt-5">
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
              <button type="button" data-action="add-to-cart" data-id="${e.id}" class="inline-flex w-full items-center justify-center rounded-full bg-stone-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">
                In den Warenkorb
              </button>
            `}
      </div>
    </article>
  `}function A(){let e=S();return e.length===0?`
      <div class="border-y border-dashed border-stone-300 py-10 text-center">
        <p class="text-lg font-semibold text-stone-950">Keine Produkte gefunden</p>
        <p class="mt-3 text-sm leading-7 text-stone-600">Versuche eine andere Kategorie oder lösche die aktiven Filter.</p>
      </div>
    `:`
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      ${e.map(e=>k(e)).join(``)}
    </div>
  `}function j(){let e=g(),t=_(),n=v();return`
    <div class="bg-stone-950 px-5 py-5 text-stone-50 shadow-[0_18px_50px_rgba(28,25,23,0.18)]">
      <div class="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Warenkorb</p>
          <h3 class="mt-3 text-2xl font-semibold">${t} Artikel</h3>
        </div>
        <button type="button" data-action="clear-cart" class="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-stone-200 transition hover:border-white/30 hover:bg-white/10">
          Leeren
        </button>
      </div>

      <div class="mt-5 space-y-4">
        ${e.length>0?e.map(e=>`
                    <article class="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <p class="font-medium text-white">${e.name}</p>
                          <p class="mt-1 text-sm text-stone-300">${c.format(e.price)} · ${e.unit}</p>
                        </div>
                        <p class="font-semibold text-emerald-300">${c.format(e.total)}</p>
                      </div>
                      <div class="mt-4 flex items-center justify-between gap-3">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2">
                          <button type="button" data-action="decrease" data-id="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20">−</button>
                          <span class="min-w-7 text-center text-sm font-semibold text-white">${e.quantity}</span>
                          <button type="button" data-action="increase" data-id="${e.id}" class="grid h-8 w-8 place-items-center rounded-full bg-emerald-800 text-lg text-white transition hover:bg-emerald-700">+</button>
                        </div>
                        <button type="button" data-action="remove" data-id="${e.id}" class="text-sm text-stone-300 transition hover:text-white">Entfernen</button>
                      </div>
                    </article>
                  `).join(``):`
              <div class="border border-dashed border-white/15 px-4 py-6 text-sm leading-7 text-stone-300">
                Noch nichts im Warenkorb.
              </div>
            `}
      </div>

      <div class="mt-5 border-t border-white/10 pt-4">
        <div class="flex items-center justify-between text-sm text-stone-300">
          <span>Zwischensumme</span>
          <span>${c.format(n)}</span>
        </div>
        <div class="mt-2 flex items-center justify-between text-lg font-semibold text-white">
          <span>Gesamt</span>
          <span>${c.format(n)}</span>
        </div>
        <button type="button" class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700">
          Demo-Checkout starten
        </button>
      </div>
    </div>
  `}function M(){return`
    <div class="fixed inset-0 z-50 ${f.cartDrawerOpen?``:`pointer-events-none`} lg:hidden" aria-hidden="${f.cartDrawerOpen?`false`:`true`}">
      <button type="button" data-action="toggle-cart" class="absolute inset-0 bg-stone-950/35 transition ${f.cartDrawerOpen?`opacity-100`:`opacity-0`}" aria-label="Warenkorb schließen"></button>
      <div class="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[2rem] border border-stone-200 bg-[rgba(249,247,242,0.98)] p-4 shadow-[0_-18px_40px_rgba(28,25,23,0.18)] transition duration-200 ${f.cartDrawerOpen?`translate-y-0`:`translate-y-full`}">
        <div class="mb-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-stone-950">Mobiler Warenkorb</p>
            <p class="text-sm text-stone-600">Mengen direkt hier anpassen</p>
          </div>
          <button type="button" data-action="toggle-cart" class="grid h-10 w-10 place-items-center rounded-full border border-stone-300 bg-white text-stone-900">×</button>
        </div>
        ${j()}
      </div>
    </div>
  `}function N(){return _()===0?``:`
    <div class="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <button type="button" data-action="toggle-cart" class="flex w-full items-center justify-between rounded-full border border-stone-300 bg-white px-5 py-3 text-left shadow-[0_12px_30px_rgba(41,37,36,0.12)]">
        <div>
          <p class="text-sm font-semibold text-stone-950">Warenkorb öffnen</p>
          <p class="text-sm text-stone-600">${_()} Artikel · ${c.format(v())}</p>
        </div>
        <span class="rounded-full bg-stone-950 px-3 py-1 text-sm font-medium text-white">Ansehen</span>
      </button>
    </div>
  `}function P(){let t=S();d.innerHTML=e({activePage:`food`,hero:r({title:`Produkte`}),content:`
    <section class="px-5 py-6 lg:px-6 lg:py-8">
      <div class="mx-auto max-w-7xl">
        <div class="pb-3">
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-stone-700">Produkte suchen</span>
            <input
              id="product-search"
              type="search"
              value="${n(f.query)}"
              placeholder="z. B. Salat, Basilikum, regional oder frisch"
              class="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            />
          </label>
        </div>

        <div class="mt-5 grid gap-5 lg:grid-cols-[17rem_minmax(0,1fr)_20rem] lg:items-start">
          ${O()}

          <div>
            <div class="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-stone-600">${t.length} Produkte sichtbar</p>
              <a href="${i.links.team}" target="_blank" rel="noreferrer" class="text-sm font-medium text-emerald-800 transition hover:text-emerald-900">Teamprofil</a>
            </div>
            ${A()}
          </div>

          <aside class="hidden lg:block lg:sticky lg:top-24">
            ${j()}
          </aside>
        </div>
      </div>
    </section>
  `})+M()+N()}function F(e){let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,value:r,id:i}=t.dataset;switch(n){case`toggle-filters`:f.filtersOpen=!f.filtersOpen,P();break;case`set-category`:f.category=r,P();break;case`set-stock`:f.stock=r,P();break;case`clear-filters`:E();break;case`add-to-cart`:C(i);break;case`increase`:w(i,(f.cart[i]??0)+1);break;case`decrease`:w(i,(f.cart[i]??0)-1);break;case`remove`:w(i,0);break;case`clear-cart`:T();break;case`toggle-cart`:f.cartDrawerOpen=!f.cartDrawerOpen,P();break;default:break}}function I(e){e.target.id===`product-search`&&(f.query=e.target.value,P())}function L(e){e.target.id===`sort-select`&&(f.sort=e.target.value,P())}d.addEventListener(`click`,F),d.addEventListener(`input`,I),d.addEventListener(`change`,L),a(d),P();