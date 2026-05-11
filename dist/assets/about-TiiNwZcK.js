import{a as e,i as t,o as n,r,t as i,u as a}from"./shared-BoB6n-5K.js";import{t as o}from"./api-CAqj1E_R.js";var s=`${o}/api/newsletter/subscribe`,c=document.querySelector(`#app`),l=`
  <p class="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-emerald-300">Unser Ansatz</p>
  <h2 class="font-display mt-4 text-2xl font-semibold tracking-tight">Drei Ideen. Ein Gebäude.</h2>
  <ul class="mt-6 space-y-1" role="list">
    ${a.map((e,t)=>`
          <li class="flex items-start gap-3 border-b border-white/10 py-3.5 last:border-b-0">
            <span class="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-[0.7rem] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">${t+1}</span>
            <span class="text-sm leading-6 text-stone-200">${e}</span>
          </li>
        `).join(``)}
  </ul>
`;c.innerHTML=t({activePage:`about`,hero:r({eyebrow:n.season,title:`Städte brauchen Lebensmittel. Wir produzieren sie vor Ort.`,intro:`Bis 2050 leben 68 % der Weltbevölkerung in Städten — bei immer weniger landwirtschaftlicher Fläche und enormen Transportemissionen. Der FoodConnectMarkt zeigt einen anderen Weg.`,supportingCard:l}),content:`
  <section class="px-5 py-12 lg:px-6 lg:py-20" aria-labelledby="newsletter-heading">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-6">

        <!-- Newsletter signup -->
        <article class="reveal relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 p-8 shadow-[0_30px_80px_-20px_rgba(6,95,70,0.5)] ring-1 ring-inset ring-white/5 sm:p-10">
          <div aria-hidden="true" class="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div aria-hidden="true" class="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl"></div>
          <div class="relative">
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-emerald-300">Newsletter</p>
            <h2 id="newsletter-heading" class="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Bleib auf dem Laufenden.
            </h2>
            <p class="mt-5 text-base leading-8 text-stone-300">
              Trag dich ein und erhalte Neuigkeiten rund um urbane Lebensmittelproduktion, den Fortschritt unseres Modells und Veranstaltungen des FoodConnectMarkts.
            </p>

            <form id="newsletter-form" novalidate class="mt-8" aria-label="Newsletter-Anmeldung">
              <div id="newsletter-idle">
                <label for="newsletter-email" class="block text-sm font-medium text-stone-300">
                  E-Mail-Adresse
                </label>
                <div class="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    placeholder="du@beispiel.de"
                    class="min-w-0 flex-1 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm text-white placeholder:text-stone-500 transition focus:border-emerald-400 focus:bg-white/12 focus:ring-2 focus:ring-emerald-400/40"
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit"
                    class="btn-press inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span id="newsletter-btn-label">Anmelden</span>
                    <span id="newsletter-spinner" class="hidden h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true"></span>
                  </button>
                </div>
                <p id="newsletter-error" class="mt-3 hidden text-sm text-red-300" role="alert" aria-live="polite"></p>
                <p class="mt-4 text-xs leading-5 text-stone-500">
                  Kein Spam. Jederzeit abbestellbar. Du erhältst zuerst eine Bestätigungs-E-Mail.
                </p>
              </div>

              <div id="newsletter-success" class="hidden">
                <div class="flex items-start gap-4">
                  <span aria-hidden="true" class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-xl text-emerald-300">✓</span>
                  <div>
                    <p class="font-semibold text-white">Fast geschafft!</p>
                    <p class="mt-1 text-sm leading-7 text-stone-300">
                      Wir haben dir eine Bestätigungs-E-Mail geschickt. Bitte klicke auf den Link darin, um deine Anmeldung abzuschließen.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            <div class="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              <a
                href="${n.links.competition}"
                target="_blank"
                rel="noreferrer"
                class="btn-press inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-stone-300 transition hover:border-white/30 hover:text-white"
              >
                Science League ↗
              </a>
              <a
                href="${n.links.team}"
                target="_blank"
                rel="noreferrer"
                class="btn-press inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-stone-300 transition hover:border-white/30 hover:text-white"
              >
                Teamprofil ↗
              </a>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>
`}),i(c),e(c),u(),f();function u(){let e=document.getElementById(`newsletter-form`);e&&e.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.getElementById(`newsletter-email`),n=document.getElementById(`newsletter-submit`),r=document.getElementById(`newsletter-btn-label`),i=document.getElementById(`newsletter-spinner`),a=document.getElementById(`newsletter-error`),o=document.getElementById(`newsletter-idle`),c=document.getElementById(`newsletter-success`),l=t.value.trim();if(!l||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l)){a.textContent=`Bitte gib eine gültige E-Mail-Adresse ein.`,a.classList.remove(`hidden`),t.focus();return}a.classList.add(`hidden`),n.disabled=!0,r.textContent=`Wird gesendet…`,i.classList.remove(`hidden`);try{let e=await fetch(s,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:l})}),t=await e.json().catch(()=>({}));if(e.status===409){a.textContent=t.message||`Diese E-Mail-Adresse ist bereits angemeldet.`,a.classList.remove(`hidden`),n.disabled=!1,r.textContent=`Anmelden`,i.classList.add(`hidden`);return}if(!e.ok)throw Error(t.message||`Etwas ist schiefgelaufen. Bitte versuche es erneut.`);o.classList.add(`hidden`),c.classList.remove(`hidden`)}catch(e){a.textContent=e.message===`Failed to fetch`?`Verbindung zum Server fehlgeschlagen. Bitte versuche es später erneut.`:e.message||`Etwas ist schiefgelaufen. Bitte versuche es erneut.`,a.classList.remove(`hidden`),n.disabled=!1,r.textContent=`Anmelden`,i.classList.add(`hidden`)}})}function d(e,t=`success`){let n=document.getElementById(`nl-toast`);n&&n.remove();let r=document.createElement(`div`);r.id=`nl-toast`,r.setAttribute(`role`,`status`),r.setAttribute(`aria-live`,`polite`),r.style.cssText=`
    position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%) translateY(8px);
    z-index:60;display:inline-flex;align-items:center;gap:0.75rem;
    border-radius:999px;padding:0.75rem 1.25rem;
    font-size:0.875rem;font-weight:500;box-shadow:0 8px 24px rgba(0,0,0,0.18);
    background:${t===`success`?`#065f46`:`#7f1d1d`};color:#fff;
    transition:opacity 400ms,transform 400ms;opacity:0;
  `,r.textContent=e,document.body.appendChild(r),requestAnimationFrame(()=>{r.style.opacity=`1`,r.style.transform=`translateX(-50%) translateY(0)`}),setTimeout(()=>{r.style.opacity=`0`,r.style.transform=`translateX(-50%) translateY(8px)`,setTimeout(()=>r.remove(),400)},5e3)}function f(){let e=new URLSearchParams(window.location.search).get(`newsletter`);if(e===`confirmed`){d(`🌱 Deine Anmeldung ist bestätigt. Willkommen!`,`success`);let e=window.location.pathname;window.history.replaceState({},``,e)}else e===`unsubscribed`&&(d(`Du wurdest erfolgreich abgemeldet.`,`info`),window.history.replaceState({},``,window.location.pathname))}