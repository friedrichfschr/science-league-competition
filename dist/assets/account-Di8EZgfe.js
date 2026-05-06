import{i as e,o as t,t as n,u as r}from"./shared-CXK0-Cn3.js";var i=`fcm-auth`;function a(){try{let e=JSON.parse(localStorage.getItem(i));return e?r.find(t=>t.id===e.userId)??null:null}catch{return null}}function o(e){localStorage.setItem(i,JSON.stringify({userId:e}))}function s(){localStorage.removeItem(i)}function c(e){return e===`administrator`?`<span class="inline-flex items-center rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Administrator</span>`:e===`moderator`?`<span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Moderator</span>`:`<span class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-stone-600">Mitglied</span>`}function l(e){return`<span class="grid h-20 w-20 shrink-0 place-items-center rounded-full ${e.role===`administrator`?`bg-stone-950 text-white`:e.role===`moderator`?`bg-amber-400 text-stone-950`:`bg-emerald-100 text-emerald-800`} text-2xl font-semibold" aria-hidden="true">${e.initials}</span>`}var u={error:``},d=document.querySelector(`#app`);function f(){return`
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <h2 class="font-display text-2xl font-semibold text-stone-950">Anmelden</h2>
      <p class="mt-1 text-sm text-stone-500">Nutze einen der Test-Zugänge unten oder gib Benutzername und Passwort ein.</p>

      <!-- Demo accounts -->
      <div class="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-4">
        <p class="mb-3 text-[0.65rem] font-semibold uppercase tracking-wider text-stone-500">Test-Zugänge</p>
        <div class="space-y-1">
          ${r.map(e=>`
              <button data-action="quick-login" data-id="${e.id}"
                class="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition hover:bg-white">
                <span class="flex items-center gap-2">
                  <span class="font-semibold text-stone-800">${e.username}</span>
                  <span class="font-mono text-stone-400">${e.password}</span>
                </span>
                ${e.role===`member`?``:c(e.role)}
              </button>
            `).join(``)}
        </div>
      </div>

      <!-- Login form -->
      <form id="login-form" data-action="login" class="mt-6 space-y-4" novalidate>
        ${u.error?`<p class="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-inset ring-red-200">${u.error}</p>`:``}
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
        <button type="submit" class="w-full rounded-full bg-stone-950 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">
          Anmelden
        </button>
      </form>
    </div>
  `}function p(e){return`
    <div class="mx-auto max-w-sm px-5 py-12 lg:px-6">
      <div class="rounded-[2rem] border border-stone-200 bg-white/90 p-8 text-center shadow-[var(--shadow-md)]">
        <div class="flex justify-center">
          ${l(e)}
        </div>
        <h2 class="font-display mt-5 text-2xl font-semibold text-stone-950">${e.displayName}</h2>
        <p class="mt-1 text-sm text-stone-500">@${e.username}</p>
        <div class="mt-3 flex justify-center">${c(e.role)}</div>
        <div class="mt-8 grid grid-cols-2 gap-3">
          <a href="forum.html"
            class="rounded-full border border-stone-300 py-2.5 text-center text-sm font-medium text-stone-700 transition hover:bg-stone-50">
            Zum Forum
          </a>
          <button data-action="logout"
            class="rounded-full bg-stone-950 py-2.5 text-sm font-medium text-white transition hover:bg-red-700">
            Abmelden
          </button>
        </div>
      </div>
    </div>
  `}function m(){let r=a();d.innerHTML=e({activePage:`account`,hero:``,content:r?p(r):f()}),t(d),n(d)}d.addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,id:i}=t.dataset;if(n===`logout`&&(s(),u.error=``,m()),n===`quick-login`){let e=r.find(e=>e.id===i);e&&(o(e.id),m())}}),d.addEventListener(`submit`,e=>{if(e.preventDefault(),e.target.dataset.action!==`login`)return;let t=e.target.username.value.trim().toLowerCase(),n=e.target.password.value,i=r.find(e=>e.username===t&&e.password===n);if(!i){u.error=`Ungültiger Benutzername oder Passwort.`,m(),document.getElementById(`login-username`)?.focus();return}o(i.id),u.error=``,m()}),m();