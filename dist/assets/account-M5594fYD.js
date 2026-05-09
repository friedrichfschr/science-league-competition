import{i as e,o as t,t as n}from"./shared-BhdyquUf.js";var r=`https://api.bredelicious.de`,i=`fcm-auth`;function a(){try{return JSON.parse(localStorage.getItem(i))?.token??null}catch{return null}}function o(){try{return JSON.parse(localStorage.getItem(i))?.user??null}catch{return null}}function s(e,t){localStorage.setItem(i,JSON.stringify({token:e,user:t}))}function c(){localStorage.removeItem(i)}async function l(e,t={}){let n=a(),i=await fetch(`${r}${e}`,{...t,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{},...t.headers}});if(i.status===204)return null;let o=await i.json().catch(()=>({}));if(!i.ok)throw Error(o.message||`HTTP ${i.status}`);return o}function u(e){return e===`administrator`?`<span class="inline-flex items-center rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Administrator</span>`:e===`moderator`?`<span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Moderator</span>`:`<span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-stone-600">Mitglied</span>`}function d(e){let t=(e.displayName||e.username||`?`).split(` `).map(e=>e[0]).slice(0,2).join(``).toUpperCase();return`<span class="grid h-20 w-20 shrink-0 place-items-center rounded-full ${e.role===`administrator`?`bg-stone-950 text-white`:e.role===`moderator`?`bg-amber-400 text-stone-950`:`bg-emerald-100 text-emerald-800`} text-2xl font-semibold" aria-hidden="true">${t}</span>`}var f={user:o(),loading:!1,error:``},p=document.querySelector(`#app`);function m(){return`
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <h2 class="font-display text-2xl font-semibold text-stone-950">Anmelden</h2>
      <p class="mt-1 text-sm text-stone-500">Melde dich mit deinen Zugangsdaten an.</p>
      <form id="login-form" data-action="login" class="mt-8 space-y-4" novalidate>
        ${f.error?`<p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">${f.error}</p>`:``}
        <div>
          <label for="login-username" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Benutzername</label>
          <input id="login-username" name="username" type="text" required autocomplete="username" placeholder="benutzername"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
        </div>
        <div>
          <label for="login-password" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Passwort</label>
          <input id="login-password" name="password" type="password" required autocomplete="current-password" placeholder="••••••••"
            class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
        </div>
        <button type="submit" ${f.loading?`disabled`:``}
          class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:opacity-60">
          ${f.loading?`Wird angemeldet…`:`Anmelden`}
        </button>
      </form>
    </div>`}function h(e){return`
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
    </div>`}function g(){p.innerHTML=e({activePage:`account`,hero:``,content:f.user?h(f.user):m()}),t(p),n(p)}async function _(){if(a())try{let e=await l(`/api/auth/me`);f.user=e.user??e,s(a(),f.user)}catch{c(),f.user=null}g()}p.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-action]`);if(t&&t.dataset.action===`logout`){try{await l(`/api/auth/logout`,{method:`POST`})}catch{}c(),f.user=null,f.error=``,g()}}),p.addEventListener(`submit`,async e=>{if(e.preventDefault(),e.target.dataset.action!==`login`)return;let t=e.target.username.value.trim(),n=e.target.password.value;f.loading=!0,f.error=``,g();try{let e=await l(`/api/auth/login`,{method:`POST`,body:JSON.stringify({username:t,password:n})});s(e.token,e.user),f.user=e.user,f.error=``}catch(e){f.error=e.message||`Ungültiger Benutzername oder Passwort.`}finally{f.loading=!1,g()}}),_();