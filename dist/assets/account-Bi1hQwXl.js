import{i as e,o as t,t as n}from"./shared-CDCOEyWj.js";import{t as r}from"./api-CAqj1E_R.js";var i=`fcm-auth`;function a(){try{return JSON.parse(localStorage.getItem(i))?.token??null}catch{return null}}function o(){try{return JSON.parse(localStorage.getItem(i))?.user??null}catch{return null}}function s(e,t){localStorage.setItem(i,JSON.stringify({token:e,user:t}))}function c(){localStorage.removeItem(i)}async function l(e,t={}){let n=a(),i=await fetch(`${r}${e}`,{...t,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{},...t.headers}});if(i.status===204)return null;let o=await i.json().catch(()=>({}));if(!i.ok)throw Error(o.message||`HTTP ${i.status}`);return o}function u(e){return e===`administrator`?`<span class="inline-flex items-center rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Administrator</span>`:e===`moderator`?`<span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Moderator</span>`:`<span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-stone-600">Mitglied</span>`}function d(e){let t=(e.displayName||e.username||`?`).split(` `).map(e=>e[0]).slice(0,2).join(``).toUpperCase();return`<span class="grid h-20 w-20 place-items-center rounded-full ${e.role===`administrator`?`bg-stone-950 text-white`:e.role===`moderator`?`bg-amber-400 text-stone-950`:`bg-emerald-100 text-emerald-800`} text-2xl font-semibold" aria-hidden="true">${t}</span>`}function f(){return`w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100`}function p(){return`mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500`}var m={user:o(),tab:`login`,loading:!1,error:``},h=document.querySelector(`#app`);function g(){return`
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
        <label for="f-username" class="${p()}">Benutzername</label>
        <input id="f-username" name="username" type="text" required autocomplete="username" placeholder="benutzername" class="${f()}" />
      </div>
      <div>
        <label for="f-password" class="${p()}">Passwort</label>
        <input id="f-password" name="password" type="password" required autocomplete="current-password" placeholder="••••••••" class="${f()}" />
      </div>
      <button type="submit" ${m.loading?`disabled`:``}
        class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
        ${m.loading?`Wird angemeldet…`:`Anmelden`}
      </button>
    </form>`}function y(){return`
    <form id="auth-form" data-action="register" class="mt-6 space-y-4" novalidate>
      ${_()}
      <div>
        <label for="f-displayname" class="${p()}">Name</label>
        <input id="f-displayname" name="displayName" type="text" required autocomplete="name" placeholder="Dein angezeigter Name" class="${f()}" />
      </div>
      <div>
        <label for="f-username" class="${p()}">Benutzername</label>
        <input id="f-username" name="username" type="text" required autocomplete="username" placeholder="benutzername" class="${f()}" />
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
    </form>`}function b(){return`
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <h2 class="font-display text-2xl font-semibold text-stone-950">Konto</h2>
      <p class="mt-1 text-sm text-stone-500">
        ${m.tab===`login`?`Melde dich mit deinen Zugangsdaten an.`:`Erstelle ein neues Konto.`}
      </p>
      ${g()}
      ${m.tab===`login`?v():y()}
    </div>`}function x(e){return`
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <div class="rounded-[2rem] border border-stone-200 bg-white/90 p-8 text-center shadow-[var(--shadow-md)]">
        <div class="flex justify-center">${d(e)}</div>
        <h2 class="font-display mt-5 text-2xl font-semibold text-stone-950">${e.displayName??e.username}</h2>
        <p class="mt-1 text-sm text-stone-500">@${e.username}</p>
        <div class="mt-3 flex justify-center">${u(e.role)}</div>
        <div class="mt-8 grid grid-cols-2 gap-3">
          <a href="forum.html" class="rounded-full border border-stone-300 py-2.5 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-50">Zum Forum</a>
          <button data-action="logout" class="rounded-full bg-stone-950 py-2.5 text-sm font-medium text-white transition hover:bg-red-700">Abmelden</button>
        </div>
      </div>
    </div>`}function S(){h.innerHTML=e({activePage:`account`,hero:``,content:m.user?x(m.user):b()}),t(h),n(h)}async function C(){if(a())try{let e=await l(`/api/auth/me`);m.user=e.user??e,s(a(),m.user)}catch{c(),m.user=null}S()}h.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,value:r}=t.dataset;if(n===`set-tab`&&(m.tab=r,m.error=``,S(),document.getElementById(`f-username`)?.focus()),n===`logout`){try{await l(`/api/auth/logout`,{method:`POST`})}catch{}c(),m.user=null,m.error=``,S()}}),h.addEventListener(`submit`,async e=>{e.preventDefault();let{action:t}=e.target.dataset;if(![`login`,`register`].includes(t))return;let n=new FormData(e.target);m.loading=!0,m.error=``,S();try{if(t===`login`){let e=await l(`/api/auth/login`,{method:`POST`,body:JSON.stringify({username:n.get(`username`).trim(),password:n.get(`password`)})});s(e.token,e.user),m.user=e.user}if(t===`register`){let e=n.get(`password`);if(e!==n.get(`password2`)){m.error=`Die Passwörter stimmen nicht überein.`,m.loading=!1,S();return}let t=await l(`/api/auth/register`,{method:`POST`,body:JSON.stringify({username:n.get(`username`).trim(),displayName:n.get(`displayName`).trim(),password:e})});s(t.token,t.user),m.user=t.user}}catch(e){m.error=e.message||`Ein Fehler ist aufgetreten.`}finally{m.loading=!1,S()}}),C();