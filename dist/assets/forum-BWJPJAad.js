import{i as e,l as t,o as n,t as r,u as i}from"./shared-CXK0-Cn3.js";var a=`fcm-auth`;function o(){try{let e=JSON.parse(localStorage.getItem(a));return e?i.find(t=>t.id===e.userId)??null:null}catch{return null}}var s=t.map(e=>({...e,comments:e.comments.map(e=>({...e}))})),c=s.length+1,l=s.flatMap(e=>e.comments).length+1,u={view:`feed`,selectedPostId:null,showNewPost:!1,sortBy:`hot`,newComment:``},d=document.querySelector(`#app`);function f(e){return i.find(t=>t.id===e)}function p(e){let t=(Date.now()-new Date(e))/1e3;return t<60?`Gerade eben`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}function m(e){return e===`administrator`?`<span class="inline-flex items-center rounded-full bg-stone-950 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-white">Admin</span>`:e===`moderator`?`<span class="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Mod</span>`:``}function h(e,t=`h-8 w-8 text-xs`){return`<span class="grid ${t} shrink-0 place-items-center rounded-full ${e.role===`administrator`?`bg-stone-950 text-white`:e.role===`moderator`?`bg-amber-400 text-stone-950`:`bg-emerald-100 text-emerald-800`} font-semibold" aria-hidden="true">${e.initials}</span>`}function g(){switch(u.sortBy){case`new`:return[...s].sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt));case`top`:return[...s].sort((e,t)=>t.votes-e.votes);default:{let e=e=>e.votes/((Date.now()-new Date(e.createdAt))/36e5+2)**1.5;return[...s].sort((t,n)=>e(n)-e(t))}}}function _(e,t,n,r){let i=!!o(),a=n===1,s=n===-1;return`
    <div class="flex items-center gap-1">
      <button
        data-action="vote-${r}" data-id="${e}" data-value="1"
        ${i?``:`disabled`}
        aria-label="Upvote" aria-pressed="${a}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${a?`bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300`:i?`text-stone-400 hover:bg-stone-100 hover:text-stone-700`:`cursor-not-allowed text-stone-300`}"
      >▲</button>
      <span class="min-w-[1.75rem] text-center text-sm font-semibold tabular-nums ${t>0?`text-emerald-700`:t<0?`text-red-600`:`text-stone-500`}">${t}</span>
      <button
        data-action="vote-${r}" data-id="${e}" data-value="-1"
        ${i?``:`disabled`}
        aria-label="Downvote" aria-pressed="${s}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${s?`bg-red-100 text-red-600 ring-1 ring-inset ring-red-200`:i?`text-stone-400 hover:bg-stone-100 hover:text-stone-700`:`cursor-not-allowed text-stone-300`}"
      >▼</button>
    </div>
  `}function v(e){let t=f(e.authorId);if(!t)return``;let n=e.body.length>160?e.body.slice(0,160)+`…`:e.body;return`
    <article class="group rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <button data-action="open-post" data-id="${e.id}" class="block w-full text-left">
        <h3 class="font-display text-lg font-semibold leading-snug text-stone-950 transition group-hover:text-emerald-800">${e.title}</h3>
        <p class="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${h(t)}
          <span class="font-medium text-stone-700">${t.displayName}</span>
          ${m(t.role)}
          <span>·</span><span>${p(e.createdAt)}</span>
          <span>·</span><span>💬 ${e.comments.length}</span>
        </p>
        <p class="mt-3 text-sm leading-6 text-stone-600">${n.replace(/\n/g,` `)}</p>
      </button>
      <div class="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
        ${_(e.id,e.votes,e.userVote??0,`post`)}
        <button data-action="open-post" data-id="${e.id}" class="text-xs font-medium text-stone-400 transition hover:text-emerald-700">
          ${e.comments.length} Kommentar${e.comments.length===1?``:`e`}
        </button>
      </div>
    </article>
  `}function y(e){let t=f(e.authorId);if(!t)return``;let n=o(),r=n&&(n.id===e.authorId||n.role===`administrator`||n.role===`moderator`);return`
    <article class="flex gap-3 border-b border-stone-100 py-4 last:border-b-0" data-comment-id="${e.id}">
      ${h(t)}
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-semibold text-stone-900">${t.displayName}</span>
          ${m(t.role)}
          <span class="text-xs text-stone-400">${p(e.createdAt)}</span>
          ${r?`<button data-action="delete-comment" data-id="${e.id}" class="ml-auto text-xs text-stone-400 transition hover:text-red-500">Löschen</button>`:``}
        </div>
        <p class="mt-1.5 text-sm leading-6 text-stone-700">${e.body}</p>
        <div class="mt-2">${_(e.id,e.votes,e.userVote??0,`comment`)}</div>
      </div>
    </article>
  `}function b(){let e=s.find(e=>e.id===u.selectedPostId);if(!e)return`<p class="p-8 text-stone-500">Beitrag nicht gefunden.</p>`;let t=f(e.authorId),n=o(),r=n&&(n.id===e.authorId||n.role===`administrator`||n.role===`moderator`);return`
    <div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">
      <button data-action="back-to-feed" class="mb-6 flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900">
        ← Zurück zur Übersicht
      </button>

      <article>
        <h2 class="font-display text-2xl font-semibold leading-snug text-stone-950 sm:text-3xl">${e.title}</h2>
        <div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${t?h(t,`h-7 w-7 text-xs`):``}
          <span class="font-medium text-stone-700">${t?.displayName??`Unbekannt`}</span>
          ${t?m(t.role):``}
          <span>·</span><span>${p(e.createdAt)}</span>
        </div>
        <p class="mt-5 whitespace-pre-line text-base leading-7 text-stone-700">${e.body}</p>
        <div class="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
          ${_(e.id,e.votes,e.userVote??0,`post`)}
          ${r?`<button data-action="delete-post" data-id="${e.id}" class="text-xs font-medium text-stone-400 transition hover:text-red-500">Beitrag löschen</button>`:``}
        </div>
      </article>

      <section class="mt-8" aria-labelledby="comments-heading">
        <h3 id="comments-heading" class="text-xs font-semibold uppercase tracking-wider text-stone-500">
          ${e.comments.length} Kommentar${e.comments.length===1?``:`e`}
        </h3>
        <div class="mt-3">
          ${e.comments.length>0?e.comments.map(y).join(``):`<p class="py-6 text-center text-sm text-stone-400">Noch keine Kommentare — sei der Erste!</p>`}
        </div>

        ${n?`
          <form id="comment-form" data-action="submit-comment" class="mt-6 flex gap-3">
            ${h(n,`h-8 w-8 text-xs`)}
            <div class="min-w-0 flex-1">
              <textarea
                id="comment-input"
                placeholder="Kommentar schreiben…"
                rows="3"
                class="w-full resize-none rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
              ></textarea>
              <div class="mt-2 flex justify-end">
                <button type="submit" class="rounded-full bg-stone-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-800">
                  Senden
                </button>
              </div>
            </div>
          </form>
        `:`
          <div class="mt-6 rounded-2xl border border-dashed border-stone-300 p-5 text-center">
            <p class="text-sm text-stone-600">
              <a href="account.html" class="font-medium text-emerald-700 hover:underline">Anmelden</a>, um zu kommentieren.
            </p>
          </div>
        `}
      </section>
    </div>
  `}function x(){return u.showNewPost?`
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Neuer Beitrag">
      <button data-action="close-new-post" class="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" aria-label="Schließen"></button>
      <div class="relative z-10 w-full max-w-lg rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-6 shadow-[0_-24px_60px_rgba(28,25,23,0.18)] sm:rounded-[2rem] sm:shadow-[0_24px_60px_rgba(28,25,23,0.18)]">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-display text-xl font-semibold text-stone-950">Neuer Beitrag</h2>
          <button data-action="close-new-post" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 transition hover:bg-stone-100" aria-label="Schließen">×</button>
        </div>
        <form id="new-post-form" data-action="submit-post" class="space-y-4">
          <div>
            <label for="post-title" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Titel</label>
            <input id="post-title" name="title" type="text" required placeholder="Worüber möchtest du sprechen?"
              class="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100" />
          </div>
          <div>
            <label for="post-body" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-stone-500">Inhalt</label>
            <textarea id="post-body" name="body" required rows="5" placeholder="Beschreibe deine Frage oder Idee…"
              class="w-full resize-none rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"></textarea>
          </div>
          <div class="flex justify-end gap-3 pt-1">
            <button type="button" data-action="close-new-post"
              class="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
              Abbrechen
            </button>
            <button type="submit"
              class="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
              Veröffentlichen
            </button>
          </div>
        </form>
      </div>
    </div>
  `:``}function S(){let e=o(),t=s.flatMap(e=>e.comments).length;return`
    <aside class="hidden space-y-4 lg:block lg:sticky lg:top-24">
      ${e?`
        <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
          <div class="flex items-center gap-3">
            ${h(e,`h-10 w-10 text-sm`)}
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-stone-950">${e.displayName}</p>
              <p class="text-xs text-stone-500">@${e.username}</p>
            </div>
          </div>
          ${m(e.role)?`<div class="mt-3">${m(e.role)}</div>`:``}
          <div class="mt-4 grid grid-cols-2 gap-2">
            <a href="account.html" class="rounded-full border border-stone-300 py-2 text-center text-xs font-medium text-stone-700 transition hover:bg-stone-50">Profil</a>
            <button data-action="logout" class="rounded-full border border-stone-300 py-2 text-xs font-medium text-stone-700 transition hover:border-red-300 hover:text-red-600">Abmelden</button>
          </div>
        </div>
      `:`
        <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
          <p class="text-sm font-semibold text-stone-950">Mitmachen</p>
          <p class="mt-1.5 text-xs leading-5 text-stone-500">Melde dich an, um Beiträge zu erstellen, zu kommentieren und zu voten.</p>
          <a href="account.html" class="mt-4 block rounded-full bg-stone-950 py-2.5 text-center text-sm font-medium text-white transition hover:bg-emerald-800">Anmelden</a>
        </div>
      `}

      <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
        <p class="text-xs font-semibold uppercase tracking-wider text-stone-500">Über das Forum</p>
        <p class="mt-2 text-xs leading-5 text-stone-600">Stelle Fragen, teile Ideen zur urbanen Landwirtschaft und diskutiere mit der Community.</p>
        <div class="mt-4 grid grid-cols-2 gap-3 text-center">
          <div class="rounded-xl bg-stone-50 p-3">
            <p class="font-display text-xl font-semibold text-stone-950">${s.length}</p>
            <p class="text-xs text-stone-500">Beiträge</p>
          </div>
          <div class="rounded-xl bg-stone-50 p-3">
            <p class="font-display text-xl font-semibold text-stone-950">${t}</p>
            <p class="text-xs text-stone-500">Kommentare</p>
          </div>
        </div>
      </div>
    </aside>
  `}function C(){let e=o(),t=g();return`
    <div class="mx-auto max-w-7xl px-5 py-8 lg:px-6">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 class="font-display text-2xl font-semibold text-stone-950">Forum</h2>
          <p class="mt-0.5 text-sm text-stone-500">Fragen, Ideen & Diskussionen rund um den FoodConnectMarkt</p>
        </div>
        ${e?`
          <button data-action="open-new-post"
            class="shrink-0 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
            + Neuer Beitrag
          </button>
        `:`
          <a href="account.html"
            class="shrink-0 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50">
            Anmelden
          </a>
        `}
      </div>

      <div class="mb-5 flex w-fit items-center gap-1 rounded-full border border-stone-200 bg-white/80 p-1">
        ${[{value:`hot`,label:`🔥 Beliebt`},{value:`new`,label:`✨ Neu`},{value:`top`,label:`⭐ Top`}].map(e=>`
              <button data-action="set-sort" data-value="${e.value}"
                class="rounded-full px-4 py-1.5 text-xs font-medium transition ${u.sortBy===e.value?`bg-stone-950 text-white`:`text-stone-600 hover:bg-stone-100`}">
                ${e.label}
              </button>
            `).join(``)}
      </div>

      <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div class="space-y-3">
          ${t.length>0?t.map(v).join(``):`<div class="rounded-2xl border border-dashed border-stone-300 py-12 text-center text-sm text-stone-400">Noch keine Beiträge.</div>`}
        </div>
        ${S()}
      </div>
    </div>
  `}function w(){d.innerHTML=e({activePage:`forum`,hero:``,content:u.view===`post`?b():C()})+x(),n(d),r(d)}d.addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,id:r,value:i}=t.dataset;switch(n){case`open-post`:u.view=`post`,u.selectedPostId=r,window.scrollTo({top:0,behavior:`smooth`}),w();break;case`back-to-feed`:u.view=`feed`,u.selectedPostId=null,w();break;case`set-sort`:u.sortBy=i,w();break;case`open-new-post`:if(!o()){window.location.href=`account.html`;return}u.showNewPost=!0,w(),document.getElementById(`post-title`)?.focus();break;case`close-new-post`:u.showNewPost=!1,w();break;case`vote-post`:{if(!o())return;let e=s.find(e=>e.id===r);if(!e)return;let t=parseInt(i),n=e.userVote??0;e.votes+=t===n?-t:t-n,e.userVote=t===n?0:t,w();break}case`vote-comment`:if(!o())return;for(let e of s){let t=e.comments.find(e=>e.id===r);if(t){let e=parseInt(i),n=t.userVote??0;t.votes+=e===n?-e:e-n,t.userVote=e===n?0:e;break}}w();break;case`delete-post`:{let e=o();if(!e)return;let t=s.find(e=>e.id===r);if(!t||e.id!==t.authorId&&e.role!==`administrator`&&e.role!==`moderator`||!confirm(`Beitrag wirklich löschen?`))return;s=s.filter(e=>e.id!==r),u.view=`feed`,u.selectedPostId=null,w();break}case`delete-comment`:{let e=o();if(!e)return;for(let t of s){let n=t.comments.findIndex(e=>e.id===r);if(n!==-1){let r=t.comments[n];if(e.id!==r.authorId&&e.role!==`administrator`&&e.role!==`moderator`)return;t.comments.splice(n,1);break}}w();break}case`logout`:localStorage.removeItem(a),w();break}}),d.addEventListener(`submit`,e=>{e.preventDefault();let{action:t}=e.target.dataset,n=o();if(n){if(t===`submit-post`){let t=e.target.querySelector(`#post-title`)?.value?.trim(),r=e.target.querySelector(`#post-body`)?.value?.trim();if(!t||!r)return;s.unshift({id:`p${c++}`,authorId:n.id,title:t,body:r,createdAt:new Date().toISOString(),votes:0,userVote:0,comments:[]}),u.showNewPost=!1,u.sortBy=`new`,w()}if(t===`submit-comment`){let t=e.target.querySelector(`#comment-input`)?.value?.trim();if(!t)return;let r=s.find(e=>e.id===u.selectedPostId);if(!r)return;r.comments.push({id:`c${l++}`,postId:r.id,authorId:n.id,body:t,createdAt:new Date().toISOString(),votes:0,userVote:0}),w(),setTimeout(()=>{document.querySelector(`[data-comment-id]:last-child`)?.scrollIntoView({behavior:`smooth`,block:`nearest`})},50)}}}),w();