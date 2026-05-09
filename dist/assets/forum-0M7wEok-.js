import{i as e,o as t,t as n}from"./shared-M4tnExme.js";import{t as r}from"./api-CAqj1E_R.js";var i=`fcm-auth`;function a(){try{return JSON.parse(localStorage.getItem(i))?.token??null}catch{return null}}function o(){try{return JSON.parse(localStorage.getItem(i))?.user??null}catch{return null}}function s(e,t){localStorage.setItem(i,JSON.stringify({token:e,user:t}))}function c(){localStorage.removeItem(i)}async function l(e,t={}){let n=a(),i=await fetch(`${r}${e}`,{...t,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{},...t.headers}});if(i.status===204)return null;let o=await i.json().catch(()=>({}));if(!i.ok)throw Error(o.message||`HTTP ${i.status}`);return o}var u={view:`feed`,user:o(),posts:[],currentPost:null,loading:!1,error:null,showNewPost:!1,sortBy:`new`},d=document.querySelector(`#app`);function f(e){let t=(Date.now()-new Date(e))/1e3;return t<60?`Gerade eben`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}function p(e){return e===`administrator`?`<span class="inline-flex items-center rounded-full bg-stone-950 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-white">Admin</span>`:e===`moderator`?`<span class="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Mod</span>`:``}function m(e,t=`h-8 w-8 text-xs`){if(!e)return`<span class="grid ${t} shrink-0 place-items-center rounded-full bg-stone-200 text-stone-500 font-semibold">?</span>`;let n=(e.displayName||e.username||`?`).split(` `).map(e=>e[0]).slice(0,2).join(``).toUpperCase();return`<span class="grid ${t} shrink-0 place-items-center rounded-full ${e.role===`administrator`?`bg-stone-950 text-white`:e.role===`moderator`?`bg-amber-400 text-stone-950`:`bg-emerald-100 text-emerald-800`} font-semibold" aria-hidden="true">${n}</span>`}function h(e,t,n,r){let i=!!u.user,a=n===1,o=n===-1;return`
    <div class="flex items-center gap-1">
      <button data-action="vote-${r}" data-id="${e}" data-value="1"
        ${i?``:`disabled`} aria-label="Upvote" aria-pressed="${a}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${a?`bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300`:i?`text-stone-400 hover:bg-stone-100 hover:text-stone-700`:`cursor-not-allowed text-stone-300`}">▲</button>
      <span class="min-w-[1.75rem] text-center text-sm font-semibold tabular-nums ${t>0?`text-emerald-700`:t<0?`text-red-600`:`text-stone-500`}">${t}</span>
      <button data-action="vote-${r}" data-id="${e}" data-value="-1"
        ${i?``:`disabled`} aria-label="Downvote" aria-pressed="${o}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${o?`bg-red-100 text-red-600 ring-1 ring-inset ring-red-200`:i?`text-stone-400 hover:bg-stone-100 hover:text-stone-700`:`cursor-not-allowed text-stone-300`}">▼</button>
    </div>`}function g(){return`<div class="flex justify-center py-16">
    <span class="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-stone-700" aria-label="Lädt…"></span>
  </div>`}function _(e){return`<div class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">${e}</div>`}function v(e){let t=e.author,n=(e.body||``).length>160?e.body.slice(0,160)+`…`:e.body;return`
    <article class="group rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <button data-action="open-post" data-id="${e.id}" class="block w-full text-left">
        <h3 class="font-display text-lg font-semibold leading-snug text-stone-950 transition group-hover:text-emerald-800">${e.title}</h3>
        <p class="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${m(t)}
          <span class="font-medium text-stone-700">${t?.displayName??t?.username??`Unbekannt`}</span>
          ${t?p(t.role):``}
          <span>·</span><span>${f(e.createdAt)}</span>
          <span>·</span><span>💬 ${e.commentCount??0}</span>
        </p>
        <p class="mt-3 text-sm leading-6 text-stone-600">${n.replace(/\n/g,` `)}</p>
      </button>
      <div class="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
        ${h(e.id,e.votes??0,e.userVote??0,`post`)}
        <button data-action="open-post" data-id="${e.id}" class="text-xs font-medium text-stone-400 transition hover:text-emerald-700">
          ${e.commentCount??0} Kommentar${(e.commentCount??0)===1?``:`e`}
        </button>
      </div>
    </article>`}function y(e){let t=e.author,n=u.user&&(u.user.id===e.authorId||u.user.role===`administrator`||u.user.role===`moderator`);return`
    <article class="flex gap-3 border-b border-stone-100 py-4 last:border-b-0" data-comment-id="${e.id}">
      ${m(t)}
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-semibold text-stone-900">${t?.displayName??t?.username??`Unbekannt`}</span>
          ${t?p(t.role):``}
          <span class="text-xs text-stone-400">${f(e.createdAt)}</span>
          ${n?`<button data-action="delete-comment" data-id="${e.id}" class="ml-auto text-xs text-stone-400 transition hover:text-red-500">Löschen</button>`:``}
        </div>
        <p class="mt-1.5 text-sm leading-6 text-stone-700">${e.body}</p>
        <div class="mt-2">${h(e.id,e.votes??0,e.userVote??0,`comment`)}</div>
      </div>
    </article>`}function b(){if(u.loading)return`<div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">${g()}</div>`;if(u.error)return`<div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">${_(u.error)}</div>`;if(!u.currentPost)return``;let{post:e,comments:t}=u.currentPost,n=e.author,r=u.user&&(u.user.id===e.authorId||u.user.role===`administrator`||u.user.role===`moderator`);return`
    <div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">
      <button data-action="back-to-feed" class="mb-6 flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900">
        ← Zurück zur Übersicht
      </button>
      <article>
        <h2 class="font-display text-2xl font-semibold leading-snug text-stone-950 sm:text-3xl">${e.title}</h2>
        <div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${m(n,`h-7 w-7 text-xs`)}
          <span class="font-medium text-stone-700">${n?.displayName??n?.username??`Unbekannt`}</span>
          ${n?p(n.role):``}
          <span>·</span><span>${f(e.createdAt)}</span>
        </div>
        <p class="mt-5 whitespace-pre-line text-base leading-7 text-stone-700">${e.body}</p>
        <div class="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
          ${h(e.id,e.votes??0,e.userVote??0,`post`)}
          ${r?`<button data-action="delete-post" data-id="${e.id}" class="text-xs font-medium text-stone-400 transition hover:text-red-500">Beitrag löschen</button>`:``}
        </div>
      </article>

      <section class="mt-8" aria-labelledby="comments-heading">
        <h3 id="comments-heading" class="text-xs font-semibold uppercase tracking-wider text-stone-500">
          ${t.length} Kommentar${t.length===1?``:`e`}
        </h3>
        <div class="mt-3">
          ${t.length>0?t.map(y).join(``):`<p class="py-6 text-center text-sm text-stone-400">Noch keine Kommentare — sei der Erste!</p>`}
        </div>
        ${u.user?`
          <form id="comment-form" data-action="submit-comment" class="mt-6 flex gap-3">
            ${m(u.user,`h-8 w-8 text-xs`)}
            <div class="min-w-0 flex-1">
              <textarea id="comment-input" placeholder="Kommentar schreiben…" rows="3"
                class="w-full resize-none rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"></textarea>
              <div class="mt-2 flex justify-end">
                <button type="submit" class="rounded-full bg-stone-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-emerald-800">Senden</button>
              </div>
            </div>
          </form>
        `:`
          <div class="mt-6 rounded-2xl border border-dashed border-stone-300 p-5 text-center">
            <p class="text-sm text-stone-600"><a href="account.html" class="font-medium text-emerald-700 hover:underline">Anmelden</a>, um zu kommentieren.</p>
          </div>
        `}
      </section>
    </div>`}function x(){return u.showNewPost?`
    <div class="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true">
      <button data-action="close-new-post" class="absolute inset-0 bg-stone-950/40 backdrop-blur-sm" aria-label="Schließen"></button>
      <div class="relative z-10 w-full max-w-lg rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-6 shadow-[0_-24px_60px_rgba(28,25,23,0.18)] sm:rounded-[2rem]">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="font-display text-xl font-semibold text-stone-950">Neuer Beitrag</h2>
          <button data-action="close-new-post" class="grid h-9 w-9 place-items-center rounded-full border border-stone-300 bg-white text-stone-700 hover:bg-stone-100">×</button>
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
          ${u.postError?`<p class="text-sm text-red-600">${u.postError}</p>`:``}
          <div class="flex justify-end gap-3 pt-1">
            <button type="button" data-action="close-new-post" class="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50">Abbrechen</button>
            <button type="submit" class="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800">Veröffentlichen</button>
          </div>
        </form>
      </div>
    </div>`:``}function S(){let e=u.posts.reduce((e,t)=>e+(t.commentCount??0),0);return`
    <aside class="hidden space-y-4 lg:block lg:sticky lg:top-24">
      ${u.user?`
        <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
          <div class="flex items-center gap-3">
            ${m(u.user,`h-10 w-10 text-sm`)}
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-stone-950">${u.user.displayName??u.user.username}</p>
              <p class="text-xs text-stone-500">@${u.user.username}</p>
            </div>
          </div>
          ${p(u.user.role)?`<div class="mt-3">${p(u.user.role)}</div>`:``}
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
            <p class="font-display text-xl font-semibold text-stone-950">${u.posts.length}</p>
            <p class="text-xs text-stone-500">Beiträge</p>
          </div>
          <div class="rounded-xl bg-stone-50 p-3">
            <p class="font-display text-xl font-semibold text-stone-950">${e}</p>
            <p class="text-xs text-stone-500">Kommentare</p>
          </div>
        </div>
      </div>
    </aside>`}function C(){return`
    <div class="mx-auto max-w-7xl px-5 py-8 lg:px-6">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 class="font-display text-2xl font-semibold text-stone-950">Forum</h2>
          <p class="mt-0.5 text-sm text-stone-500">Fragen, Ideen & Diskussionen rund um den FoodConnectMarkt</p>
        </div>
        ${u.user?`
          <button data-action="open-new-post" class="shrink-0 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">+ Neuer Beitrag</button>
        `:`
          <a href="account.html" class="shrink-0 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50">Anmelden</a>
        `}
      </div>
      <div class="mb-5 flex w-fit items-center gap-1 rounded-full border border-stone-200 bg-white/80 p-1">
        ${[{value:`new`,label:`Neueste`},{value:`top`,label:`Beliebteste`},{value:`hot`,label:`Meiste Antworten`}].map(e=>`
          <button data-action="set-sort" data-value="${e.value}"
            class="rounded-full px-4 py-1.5 text-xs font-medium transition ${u.sortBy===e.value?`bg-stone-950 text-white`:`text-stone-600 hover:bg-stone-100`}">
            ${e.label}
          </button>`).join(``)}
      </div>
      <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div class="space-y-3">
          ${u.loading?g():u.error?_(u.error):u.posts.length>0?u.posts.map(v).join(``):`<div class="rounded-2xl border border-dashed border-stone-300 py-12 text-center text-sm text-stone-400">Noch keine Beiträge.</div>`}
        </div>
        ${S()}
      </div>
    </div>`}function w(){d.innerHTML=e({activePage:`forum`,hero:``,content:u.view===`post`?b():C()})+x(),t(d),n(d)}async function T(){u.loading=!0,u.error=null,w();try{let e=await l(`/api/forum/posts?sort=${u.sortBy}`);u.posts=e.posts??e}catch(e){u.error=e.message}finally{u.loading=!1,w()}}async function E(e){u.loading=!0,u.error=null,w();try{let t=await l(`/api/forum/posts/${e}`);u.currentPost={post:t.post??t,comments:t.comments??[]}}catch(e){u.error=e.message}finally{u.loading=!1,w()}}async function D(){if(a())try{let e=await l(`/api/auth/me`);u.user=e.user??e,s(a(),u.user)}catch{c(),u.user=null}await T()}d.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,id:r,value:i}=t.dataset;switch(n){case`open-post`:u.view=`post`,u.selectedPostId=r,window.scrollTo({top:0,behavior:`smooth`}),await E(r);break;case`back-to-feed`:u.view=`feed`,u.currentPost=null,w();break;case`set-sort`:u.sortBy=i,await T();break;case`open-new-post`:if(!u.user){window.location.href=`account.html`;return}u.showNewPost=!0,u.postError=null,w(),document.getElementById(`post-title`)?.focus();break;case`close-new-post`:u.showNewPost=!1,w();break;case`vote-post`:{if(!u.user)return;let e=parseInt(i);try{let t=await l(`/api/forum/posts/${r}/vote`,{method:`POST`,body:JSON.stringify({value:e})}),n=u.posts.find(e=>e.id===r);n&&(n.votes=t.votes??n.votes,n.userVote=t.userVote??e),u.currentPost?.post?.id===r&&(u.currentPost.post.votes=t.votes??u.currentPost.post.votes,u.currentPost.post.userVote=t.userVote??e)}catch{}w();break}case`vote-comment`:{if(!u.user)return;let e=parseInt(i);try{let t=await l(`/api/forum/comments/${r}/vote`,{method:`POST`,body:JSON.stringify({value:e})});if(u.currentPost){let n=u.currentPost.comments.find(e=>e.id===r);n&&(n.votes=t.votes??n.votes,n.userVote=t.userVote??e)}}catch{}w();break}case`delete-post`:if(!u.user||!confirm(`Beitrag wirklich löschen?`))return;try{await l(`/api/forum/posts/${r}`,{method:`DELETE`}),u.view=`feed`,u.currentPost=null,await T()}catch(e){alert(e.message)}break;case`delete-comment`:if(!u.user)return;try{await l(`/api/forum/comments/${r}`,{method:`DELETE`}),u.currentPost&&(u.currentPost.comments=u.currentPost.comments.filter(e=>e.id!==r))}catch(e){alert(e.message)}w();break;case`logout`:try{await l(`/api/auth/logout`,{method:`POST`})}catch{}c(),u.user=null,w();break}}),d.addEventListener(`submit`,async e=>{e.preventDefault();let{action:t}=e.target.dataset;if(u.user){if(t===`submit-post`){let t=e.target.querySelector(`#post-title`)?.value?.trim(),n=e.target.querySelector(`#post-body`)?.value?.trim();if(!t||!n)return;let r=e.target.querySelector(`[type=submit]`);r.disabled=!0;try{await l(`/api/forum/posts`,{method:`POST`,body:JSON.stringify({title:t,body:n})}),u.showNewPost=!1,u.sortBy=`new`,await T()}catch(e){u.postError=e.message,r.disabled=!1,w()}}if(t===`submit-comment`){let t=e.target.querySelector(`#comment-input`)?.value?.trim();if(!t||!u.currentPost)return;let n=e.target.querySelector(`[type=submit]`);n.disabled=!0;try{let e=await l(`/api/forum/posts/${u.currentPost.post.id}/comments`,{method:`POST`,body:JSON.stringify({body:t})});u.currentPost.comments.push(e.comment??e),w(),setTimeout(()=>{document.querySelector(`[data-comment-id]:last-child`)?.scrollIntoView({behavior:`smooth`,block:`nearest`})},50)}catch(e){alert(e.message),n.disabled=!1}}}}),D();