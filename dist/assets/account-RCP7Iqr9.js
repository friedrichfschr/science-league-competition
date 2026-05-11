import{a as e,i as t,t as n}from"./shared-DBLgZ_BI.js";import{t as r}from"./api-eHN6Hcp6.js";var i=`fcm-auth`;function a(){try{return JSON.parse(localStorage.getItem(i))?.token??null}catch{return null}}function o(){try{return JSON.parse(localStorage.getItem(i))?.user??null}catch{return null}}function s(e,t){localStorage.setItem(i,JSON.stringify({token:e,user:t}))}function c(){localStorage.removeItem(i)}async function l(e,t={}){let n=a(),i=await fetch(`${r}${e}`,{...t,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{},...t.headers}});if(i.status===204)return null;let o=await i.json().catch(()=>({}));if(!i.ok)throw Error(o.message||`HTTP ${i.status}`);return o}function u(e){return e===`admin`?`<span class="inline-flex items-center rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Administrator</span>`:e===`moderator`?`<span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Moderator</span>`:`<span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-stone-600">Mitglied</span>`}function d(e){let t=(e.displayName||e.username||`?`).split(` `).map(e=>e[0]).slice(0,2).join(``).toUpperCase();return`<span class="grid h-20 w-20 place-items-center rounded-full ${e.role===`admin`?`bg-stone-950 text-white`:e.role===`moderator`?`bg-amber-400 text-stone-950`:`bg-emerald-100 text-emerald-800`} text-2xl font-semibold" aria-hidden="true">${t}</span>`}function f(){return`w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100`}function p(){return`mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500`}var m={user:o(),tab:`login`,loading:!1,error:``,registered:!1,resetSent:!1,savedLists:[],savedListsLoading:!1,savedListsError:``},h=document.querySelector(`#app`);function g(){return m.tab===`forgot`?``:`
    <div class="mt-6 flex rounded-full border border-stone-200 bg-stone-100 p-1">
      <button data-action="set-tab" data-value="login"
        class="flex-1 rounded-full py-2 text-sm font-medium transition ${m.tab===`login`?`bg-white text-stone-950 shadow-sm`:`text-stone-500 hover:text-stone-700`}">
        Anmelden
      </button>
      <button data-action="set-tab" data-value="register"
        class="flex-1 rounded-full py-2 text-sm font-medium transition ${m.tab===`register`?`bg-white text-stone-950 shadow-sm`:`text-stone-500 hover:text-stone-700`}">
        Registrieren
      </button>
    </div>`}function _(){return m.error?`<p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">${m.error}</p>`:``}function v(){return`
    <form id="auth-form" data-action="login" class="mt-6 space-y-4" novalidate>
      ${_()}
      <div>
        <label for="f-email" class="${p()}">E-Mail</label>
        <input id="f-email" name="email" type="email" required autocomplete="email" placeholder="deine@email.de" class="${f()}" />
      </div>
      <div>
        <label for="f-password" class="${p()}">Passwort</label>
        <input id="f-password" name="password" type="password" required autocomplete="current-password" placeholder="••••••••" class="${f()}" />
      </div>
      <button type="submit" ${m.loading?`disabled`:``}
        class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
        ${m.loading?`Wird angemeldet…`:`Anmelden`}
      </button>
      <p class="text-center text-xs text-stone-400">
        <button type="button" data-action="set-tab" data-value="forgot" class="text-stone-500 underline-offset-2 hover:underline">
          Passwort vergessen?
        </button>
      </p>
    </form>`}function y(){return m.resetSent?`
      <div class="mt-6 space-y-4">
        <div class="rounded-xl bg-emerald-50 px-4 py-5 text-center ring-1 ring-inset ring-emerald-200">
          <p class="text-sm font-semibold text-emerald-800">E-Mail gesendet</p>
          <p class="mt-1 text-sm text-emerald-700">Falls ein Konto mit dieser Adresse existiert, wurde eine E-Mail zum Zurücksetzen des Passworts gesendet.</p>
        </div>
        <button type="button" data-action="set-tab" data-value="login"
          class="w-full rounded-full border border-stone-300 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
          Zurück zum Login
        </button>
      </div>`:`
    <div class="mt-6 space-y-4">
      <button type="button" data-action="set-tab" data-value="login"
        class="flex items-center gap-1.5 text-xs font-medium text-stone-500 transition hover:text-stone-900">
        ← Zurück zum Login
      </button>
      <h3 class="font-display text-lg font-semibold text-stone-950">Passwort zurücksetzen</h3>
      <p class="text-sm text-stone-500">Gib deine E-Mail-Adresse ein. Falls ein Konto existiert, erhältst du einen Link zum Zurücksetzen.</p>
      ${_()}
      <form id="auth-form" data-action="forgot" novalidate>
        <div class="space-y-4">
          <div>
            <label for="f-email" class="${p()}">E-Mail</label>
            <input id="f-email" name="email" type="email" required autocomplete="email" placeholder="deine@email.de" class="${f()}" />
          </div>
          <button type="submit" ${m.loading?`disabled`:``}
            class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
            ${m.loading?`Wird gesendet…`:`Reset-Link anfordern`}
          </button>
        </div>
      </form>
    </div>`}function b(){return m.registered?`
      <div class="mt-6 rounded-xl bg-emerald-50 px-4 py-5 text-center ring-1 ring-inset ring-emerald-200">
        <p class="text-sm font-semibold text-emerald-800">Konto erstellt!</p>
        <p class="mt-1 text-sm text-emerald-700">Bitte bestätige deine E-Mail-Adresse, um dich anmelden zu können.</p>
      </div>`:`
    <form id="auth-form" data-action="register" class="mt-6 space-y-4" novalidate>
      ${_()}
      <div>
        <label for="f-username" class="${p()}">Benutzername</label>
        <input id="f-username" name="username" type="text" required autocomplete="username" placeholder="benutzername" class="${f()}" />
      </div>
      <div>
        <label for="f-email" class="${p()}">E-Mail</label>
        <input id="f-email" name="email" type="email" required autocomplete="email" placeholder="deine@email.de" class="${f()}" />
      </div>
      <div>
        <label for="f-password" class="${p()}">Passwort</label>
        <input id="f-password" name="password" type="password" required autocomplete="new-password" placeholder="••••••••" class="${f()}" />
      </div>
      <div>
        <label for="f-password2" class="${p()}">Passwort bestätigen</label>
        <input id="f-password2" name="password2" type="password" required autocomplete="new-password" placeholder="••••••••" class="${f()}" />
      </div>
      <button type="submit" ${m.loading?`disabled`:``}
        class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
        ${m.loading?`Wird registriert…`:`Konto erstellen`}
      </button>
    </form>`}function x(){return`
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <h2 class="font-display text-2xl font-semibold text-stone-950">Konto</h2>
      <p class="mt-1 text-sm text-stone-500">
        ${m.tab===`login`?`Melde dich mit deinen Zugangsdaten an.`:`Erstelle ein neues Konto.`}
      </p>
      ${g()}
      ${m.tab===`login`?v():m.tab===`register`?b():y()}
    </div>`}function S(){let e=new Intl.DateTimeFormat(`de-DE`,{day:`2-digit`,month:`2-digit`,year:`2-digit`}),t=m.savedLists;return`
    <div class="mt-6 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-[var(--shadow-md)]">
      <h3 class="font-display text-lg font-semibold text-stone-950">Einkaufslisten</h3>
      <p class="mt-1 text-xs text-stone-500">Gespeicherte Körbe — per Klick in den Shop laden.</p>

      ${m.savedListsError?`<p class="mt-3 rounded-xl bg-red-50 px-4 py-2.5 text-xs text-red-700 ring-1 ring-inset ring-red-200">${m.savedListsError}</p>`:``}

      ${m.savedListsLoading?`<p class="mt-4 text-center text-xs text-stone-400">Laden…</p>`:t.length===0?`<p class="mt-4 text-center text-xs text-stone-400">Noch keine gespeicherten Listen.</p>`:`<div class="mt-4 space-y-2">
              ${t.map(t=>{let n=typeof t.items==`string`?JSON.parse(t.items):t.items,r=n.reduce((e,t)=>e+(t.quantity||1),0),i=n.reduce((e,t)=>e+(t.price||0)*(t.quantity||1),0),a=new Intl.NumberFormat(`de-DE`,{style:`currency`,currency:`EUR`});return`
                  <div class="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3">
                    <div class="min-w-0 flex-1">
                      <p class="truncate text-sm font-semibold text-stone-950">${t.name}</p>
                      <p class="mt-0.5 text-xs text-stone-500">${r} Artikel · ${a.format(i)} · ${e.format(new Date(t.created_at))}</p>
                    </div>
                    <div class="flex shrink-0 gap-1.5">
                      <button type="button" data-action="load-list" data-list='${JSON.stringify(t)}'
                        class="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 transition hover:bg-emerald-100">
                        Laden
                      </button>
                      <button type="button" data-action="delete-list" data-id="${t.id}"
                        aria-label="Liste löschen"
                        class="grid h-8 w-8 place-items-center rounded-full border border-stone-300 bg-white text-stone-400 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600">
                        ×
                      </button>
                    </div>
                  </div>`}).join(``)}
            </div>`}

      <p class="mt-4 text-center text-xs text-stone-400">Listen im <a href="food.html" class="font-medium text-emerald-700 underline-offset-2 hover:underline">Food-Shop</a> aus dem Warenkorb speichern.</p>
    </div>`}function C(e){return`
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <div class="rounded-[2rem] border border-stone-200 bg-white/90 p-8 text-center shadow-[var(--shadow-md)]">
        <div class="flex justify-center">${d(e)}</div>
        <h2 class="font-display mt-5 text-2xl font-semibold text-stone-950">${e.displayName??e.username??e.email}</h2>
        <p class="mt-1 text-sm text-stone-500">${e.email}</p>
        <div class="mt-3 flex justify-center">${u(e.role)}</div>
        <div class="mt-8 grid grid-cols-2 gap-3">
          <a href="forum.html" class="rounded-full border border-stone-300 py-2.5 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-50">Zum Forum</a>
          <button data-action="logout" class="rounded-full bg-stone-950 py-2.5 text-sm font-medium text-white transition hover:bg-red-700">Abmelden</button>
        </div>
        <div class="mt-3">
          <button data-action="delete-account" class="w-full rounded-full border border-red-200 py-2.5 text-sm font-medium text-red-600 transition hover:border-red-400 hover:bg-red-50">Konto löschen</button>
        </div>
      </div>
      ${S()}
    </div>`}function w(){h.innerHTML=t({activePage:`account`,hero:``,content:m.user?C(m.user):x()}),e(h),n(h)}async function T(){if(a()){m.savedListsLoading=!0,w();try{m.savedLists=(await l(`/api/lists`)).lists??[],m.savedListsError=``}catch(e){m.savedListsError=e.message||`Fehler beim Laden der Listen.`}finally{m.savedListsLoading=!1,w()}}}async function E(e){try{await l(`/api/lists/${e}`,{method:`DELETE`}),m.savedLists=m.savedLists.filter(t=>t.id!==e),m.savedListsError=``}catch(e){m.savedListsError=e.message||`Löschen fehlgeschlagen.`}w()}function D(e){try{let t=typeof e==`string`?JSON.parse(e):e,n=typeof t.items==`string`?JSON.parse(t.items):t.items,r={};for(let e of n)e.id&&e.quantity>0&&(r[e.id]=e.quantity);localStorage.setItem(`foodconnect-cart-v2`,JSON.stringify(r)),window.location.href=`food.html?cart=open`}catch{m.savedListsError=`Liste konnte nicht geladen werden.`,w()}}async function O(){if(a())try{let e=await l(`/api/auth/me`);m.user=e.user??e,s(a(),m.user)}catch{c(),m.user=null}w(),m.user&&T()}h.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,value:r}=t.dataset;if(n===`set-tab`&&(m.tab=r,m.error=``,m.registered=!1,m.resetSent=!1,w(),document.getElementById(`f-username`)?.focus()),n===`logout`){try{await l(`/api/auth/logout`,{method:`POST`})}catch{}c(),m.user=null,m.error=``,w()}if(n===`load-list`){D(t.dataset.list);return}if(n===`delete-list`){E(t.dataset.id);return}if(n===`delete-account`){if(!confirm(`Konto wirklich löschen? Alle deine Beiträge und Daten werden dauerhaft entfernt. Dies kann nicht rückgängig gemacht werden.`))return;try{await l(`/api/auth/me`,{method:`DELETE`}),c(),m.user=null,m.error=``,m.tab=`login`,w()}catch(e){m.error=e.message||`Konto konnte nicht gelöscht werden.`,w()}}}),h.addEventListener(`submit`,async e=>{e.preventDefault();let{action:t}=e.target.dataset;if(![`login`,`register`,`forgot`].includes(t))return;let n=new FormData(e.target);m.loading=!0,m.error=``,w();try{if(t===`login`){let e=await l(`/api/auth/login`,{method:`POST`,body:JSON.stringify({email:n.get(`email`).trim(),password:n.get(`password`)})});s(e.token,e.user),m.user=e.user}if(t===`register`){let e=n.get(`password`);if(e!==n.get(`password2`)){m.error=`Die Passwörter stimmen nicht überein.`,m.loading=!1,w();return}await l(`/api/auth/register`,{method:`POST`,body:JSON.stringify({username:n.get(`username`).trim(),email:n.get(`email`).trim(),password:e})}),m.registered=!0}t===`forgot`&&(await l(`/api/auth/forgot-password`,{method:`POST`,body:JSON.stringify({email:n.get(`email`).trim()})}),m.resetSent=!0)}catch(e){if(t===`forgot`){m.resetSent=!0,m.error=``;return}m.error=e.message||`Ein Fehler ist aufgetreten.`}finally{m.loading=!1,w()}}),O();