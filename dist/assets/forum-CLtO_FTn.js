import{a as e,i as t,t as n}from"./shared-Btn7WAdQ.js";import{t as r}from"./api-eHN6Hcp6.js";var i=`fcm-auth`;function a(){try{return JSON.parse(localStorage.getItem(i))?.token??null}catch{return null}}function o(){try{return JSON.parse(localStorage.getItem(i))?.user??null}catch{return null}}function s(e,t){localStorage.setItem(i,JSON.stringify({token:e,user:t}))}function c(){localStorage.removeItem(i)}async function l(e,t={}){let n=a(),i=await fetch(`${r}${e}`,{...t,headers:{"Content-Type":`application/json`,...n?{Authorization:`Bearer ${n}`}:{},...t.headers}});if(i.status===204)return null;let o=await i.json().catch(()=>({}));if(!i.ok)throw Error(o.message||`HTTP ${i.status}`);return o}function u(e){return{...e,createdAt:e.createdAt??e.created_at,commentCount:e.commentCount??e.comment_count??0,votes:e.votes??(e.score===void 0?0:Number(e.score)),userVote:e.userVote??e.my_vote??0,authorId:e.authorId??e.author_id,author:e.author??{id:e.author_id,username:e.author_username,displayName:e.author_displayName??e.author_username,role:e.author_role}}}function d(e){return{...e,createdAt:e.createdAt??e.created_at,votes:e.votes??(e.score===void 0?0:Number(e.score)),userVote:e.userVote??e.my_vote??0,author:e.author??{id:e.author_id,username:e.author_username,displayName:e.author_displayName??e.author_username,role:e.author_role}}}var f={view:`feed`,user:o(),posts:[],currentPost:null,loading:!1,error:null,showNewPost:!1,sortBy:`new`},p=document.querySelector(`#app`);function m(e){let t=(Date.now()-new Date(e))/1e3;return t<60?`Gerade eben`:t<3600?`${Math.floor(t/60)}m`:t<86400?`${Math.floor(t/3600)}h`:`${Math.floor(t/86400)}d`}function h(e){return e===`admin`?`<span class="inline-flex items-center rounded-full bg-stone-950 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-white">Admin</span>`:e===`moderator`?`<span class="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-amber-800 ring-1 ring-inset ring-amber-200">Mod</span>`:``}function g(e,t=`h-8 w-8 text-xs`){if(!e)return`<span class="grid ${t} shrink-0 place-items-center rounded-full bg-stone-200 text-stone-500 font-semibold">?</span>`;let n=(e.displayName||e.username||`?`).split(` `).map(e=>e[0]).slice(0,2).join(``).toUpperCase();return`<span class="grid ${t} shrink-0 place-items-center rounded-full ${e.role===`admin`?`bg-stone-950 text-white`:e.role===`moderator`?`bg-amber-400 text-stone-950`:`bg-emerald-100 text-emerald-800`} font-semibold" aria-hidden="true">${n}</span>`}function _(e,t,n,r){let i=!!f.user,a=n===1,o=n===-1;return`
    <div class="flex items-center gap-1">
      <button data-action="vote-${r}" data-id="${e}" data-value="1"
        ${i?``:`disabled`} aria-label="Upvote" aria-pressed="${a}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${a?`bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-300`:i?`text-stone-400 hover:bg-stone-100 hover:text-stone-700`:`cursor-not-allowed text-stone-300`}">▲</button>
      <span class="min-w-[1.75rem] text-center text-sm font-semibold tabular-nums ${t>0?`text-emerald-700`:t<0?`text-red-600`:`text-stone-500`}">${t}</span>
      <button data-action="vote-${r}" data-id="${e}" data-value="-1"
        ${i?``:`disabled`} aria-label="Downvote" aria-pressed="${o}"
        class="grid h-7 w-7 place-items-center rounded-full text-sm transition ${o?`bg-red-100 text-red-600 ring-1 ring-inset ring-red-200`:i?`text-stone-400 hover:bg-stone-100 hover:text-stone-700`:`cursor-not-allowed text-stone-300`}">▼</button>
    </div>`}function v(){return`<div class="flex justify-center py-16">
    <span class="h-8 w-8 animate-spin rounded-full border-2 border-stone-200 border-t-stone-700" aria-label="Lädt…"></span>
  </div>`}function y(e){return`<div class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">${e}</div>`}function b(e){let t=e.author,n=(e.body||``).length>160?e.body.slice(0,160)+`…`:e.body;return`
    <article class="group rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <button data-action="open-post" data-id="${e.id}" class="block w-full text-left">
        <h3 class="font-display text-lg font-semibold leading-snug text-stone-950 transition group-hover:text-emerald-800">${e.title}</h3>
        <p class="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${g(t)}
          <span class="font-medium text-stone-700">${t?.displayName??t?.username??`Unbekannt`}</span>
          ${t?h(t.role):``}
          <span>·</span><span>${m(e.createdAt)}</span>
          <span>·</span><span>💬 ${e.commentCount??0}</span>
        </p>
        <p class="mt-3 text-sm leading-6 text-stone-600">${n.replace(/\n/g,` `)}</p>
      </button>
      <div class="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
        ${_(e.id,e.votes??0,e.userVote??0,`post`)}
        <button data-action="open-post" data-id="${e.id}" class="text-xs font-medium text-stone-400 transition hover:text-emerald-700">
          ${e.commentCount??0} Kommentar${(e.commentCount??0)===1?``:`e`}
        </button>
      </div>
    </article>`}function x(e,t){let n=e.author,r=e.authorId??e.author_id,i=f.user&&(f.user.id===r||f.user.role===`admin`||f.user.role===`moderator`),a=t&&r&&r===t;return`
    <article class="flex gap-3 border-b border-stone-100 py-4 last:border-b-0" data-comment-id="${e.id}">
      ${g(n)}
      <div class="min-w-0 flex-1">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-semibold text-stone-900">${n?.displayName??n?.username??`Unbekannt`}</span>
          ${a?`<span class="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest text-emerald-800 ring-1 ring-inset ring-emerald-200">OP</span>`:``}
          ${n?h(n.role):``}
          <span class="text-xs text-stone-400">${m(e.createdAt)}</span>
          ${i?`<button data-action="delete-comment" data-id="${e.id}" class="ml-auto text-xs text-stone-400 transition hover:text-red-500">Löschen</button>`:``}
        </div>
        <p class="mt-1.5 text-sm leading-6 text-stone-700">${e.body}</p>
        <div class="mt-2">${_(e.id,e.votes??0,e.userVote??0,`comment`)}</div>
      </div>
    </article>`}function S(){if(f.loading)return`<div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">${v()}</div>`;if(f.error)return`<div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">${y(f.error)}</div>`;if(!f.currentPost)return``;let{post:e,comments:t}=f.currentPost,n=e.author,r=f.user&&(f.user.id===e.authorId||f.user.role===`admin`||f.user.role===`moderator`);return`
    <div class="mx-auto max-w-2xl px-5 py-8 lg:px-6">
      <button data-action="back-to-feed" class="mb-6 flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900">
        ← Zurück zur Übersicht
      </button>
      <article>
        <h2 class="font-display text-2xl font-semibold leading-snug text-stone-950 sm:text-3xl">${e.title}</h2>
        <div class="mt-3 flex flex-wrap items-center gap-2 text-xs text-stone-500">
          ${g(n,`h-7 w-7 text-xs`)}
          <span class="font-medium text-stone-700">${n?.displayName??n?.username??`Unbekannt`}</span>
          ${n?h(n.role):``}
          <span>·</span><span>${m(e.createdAt)}</span>
        </div>
        <p class="mt-5 whitespace-pre-line text-base leading-7 text-stone-700">${e.body}</p>
        <div class="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
          ${_(e.id,e.votes??0,e.userVote??0,`post`)}
          ${r?`<button data-action="delete-post" data-id="${e.id}" class="text-xs font-medium text-stone-400 transition hover:text-red-500">Beitrag löschen</button>`:``}
        </div>
      </article>

      <section class="mt-8" aria-labelledby="comments-heading">
        <h3 id="comments-heading" class="text-xs font-semibold uppercase tracking-wider text-stone-500">
          ${t.length} Kommentar${t.length===1?``:`e`}
        </h3>
        <div class="mt-3">
          ${t.length>0?t.map(t=>x(t,e.authorId)).join(``):`<p class="py-6 text-center text-sm text-stone-400">Noch keine Kommentare — sei der Erste!</p>`}
        </div>
        ${f.user?`
          <form id="comment-form" data-action="submit-comment" class="mt-6 flex gap-3">
            ${g(f.user,`h-8 w-8 text-xs`)}
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
    </div>`}function C(){return f.showNewPost?`
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
          ${f.postError?`<p class="text-sm text-red-600">${f.postError}</p>`:``}
          <div class="flex justify-end gap-3 pt-1">
            <button type="button" data-action="close-new-post" class="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50">Abbrechen</button>
            <button type="submit" class="rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800">Veröffentlichen</button>
          </div>
        </form>
      </div>
    </div>`:``}function w(){let e=f.posts.reduce((e,t)=>e+(t.commentCount??0),0);return`
    <aside class="hidden space-y-4 lg:block lg:sticky lg:top-24">
      ${f.user?`
        <div class="rounded-2xl border border-stone-200 bg-white/90 p-5 shadow-[var(--shadow-sm)]">
          <div class="flex items-center gap-3">
            ${g(f.user,`h-10 w-10 text-sm`)}
            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-stone-950">${f.user.displayName??f.user.username}</p>
              <p class="text-xs text-stone-500">@${f.user.username}</p>
            </div>
          </div>
          ${h(f.user.role)?`<div class="mt-3">${h(f.user.role)}</div>`:``}
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
            <p class="font-display text-xl font-semibold text-stone-950">${f.posts.length}</p>
            <p class="text-xs text-stone-500">Beiträge</p>
          </div>
          <div class="rounded-xl bg-stone-50 p-3">
            <p class="font-display text-xl font-semibold text-stone-950">${e}</p>
            <p class="text-xs text-stone-500">Kommentare</p>
          </div>
        </div>
      </div>
    </aside>`}function T(){return`
    <div class="mx-auto max-w-7xl px-5 py-8 lg:px-6">
      <div class="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 class="font-display text-2xl font-semibold text-stone-950">Forum</h2>
          <p class="mt-0.5 text-sm text-stone-500">Fragen, Ideen & Diskussionen rund um den FoodConnectMarkt</p>
        </div>
        ${f.user?`
          <button data-action="open-new-post" class="shrink-0 inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">+ Neuer Beitrag</button>
        `:`
          <a href="account.html" class="shrink-0 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-50">Anmelden</a>
        `}
      </div>
      <div class="mb-5 flex w-fit items-center gap-1 rounded-full border border-stone-200 bg-white/80 p-1">
        ${[{value:`new`,label:`Neueste`},{value:`top`,label:`Beliebteste`},{value:`hot`,label:`Meiste Antworten`}].map(e=>`
          <button data-action="set-sort" data-value="${e.value}"
            class="rounded-full px-4 py-1.5 text-xs font-medium transition ${f.sortBy===e.value?`bg-stone-950 text-white`:`text-stone-600 hover:bg-stone-100`}">
            ${e.label}
          </button>`).join(``)}
      </div>
      <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <div class="space-y-3">
          ${f.loading?v():f.error?y(f.error):f.posts.length>0?f.posts.map(b).join(``):`<div class="rounded-2xl border border-dashed border-stone-300 py-12 text-center text-sm text-stone-400">Noch keine Beiträge.</div>`}
        </div>
        ${w()}
      </div>
    </div>`}function E(){p.innerHTML=t({activePage:`forum`,hero:``,content:f.view===`post`?S():T()})+C(),e(p),n(p)}async function D(){f.loading=!0,f.error=null,E();try{let e=await l(`/api/forum/posts?sort=${f.sortBy===`hot`?`new`:f.sortBy}`),t=(e.posts??e).map(u);f.sortBy===`hot`&&(t=t.slice().sort((e,t)=>t.commentCount-e.commentCount)),f.posts=t}catch(e){f.error=e.message}finally{f.loading=!1,E()}}async function O(e){f.loading=!0,f.error=null,E();try{let t=await l(`/api/forum/posts/${e}`),n=t.post??t;f.currentPost={post:u(n),comments:(n.comments??t.comments??[]).map(d)}}catch(e){f.error=e.message}finally{f.loading=!1,E()}}async function k(){if(a())try{let e=await l(`/api/auth/me`);f.user=e.user??e,s(a(),f.user)}catch{c(),f.user=null}await D()}p.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-action]`);if(!t)return;let{action:n,id:r,value:i}=t.dataset;switch(n){case`open-post`:f.view=`post`,f.selectedPostId=r,window.scrollTo({top:0,behavior:`smooth`}),await O(r);break;case`back-to-feed`:f.view=`feed`,f.currentPost=null,E();break;case`set-sort`:f.sortBy=i,await D();break;case`open-new-post`:if(!f.user){window.location.href=`account.html`;return}f.showNewPost=!0,f.postError=null,E(),document.getElementById(`post-title`)?.focus();break;case`close-new-post`:f.showNewPost=!1,E();break;case`vote-post`:{if(!f.user)return;let e=(f.posts.find(e=>e.id===r)??f.currentPost?.post)?.userVote??0,t=parseInt(i)===e?0:parseInt(i);try{let e=await l(`/api/forum/posts/${r}/vote`,{method:`POST`,body:JSON.stringify({value:t})}),n=e==null?null:e.votes??(e.score===void 0?null:Number(e.score)),i=e==null?t:e.userVote??e.my_vote??t,a=f.posts.find(e=>e.id===r);a&&(n!==null&&(a.votes=n),a.userVote=i),f.currentPost?.post?.id===r&&(n!==null&&(f.currentPost.post.votes=n),f.currentPost.post.userVote=i)}catch{}E();break}case`vote-comment`:{if(!f.user)return;let e=f.currentPost?.comments.find(e=>e.id===r)?.userVote??0,t=parseInt(i)===e?0:parseInt(i);try{let e=await l(`/api/forum/comments/${r}/vote`,{method:`POST`,body:JSON.stringify({value:t})});if(f.currentPost){let n=f.currentPost.comments.find(e=>e.id===r);if(n){let r=e==null?null:e.votes??(e.score===void 0?null:Number(e.score));r!==null&&(n.votes=r),n.userVote=e==null?t:e.userVote??e.my_vote??t}}}catch{}E();break}case`delete-post`:if(!f.user||!confirm(`Beitrag wirklich löschen?`))return;try{await l(`/api/forum/posts/${r}`,{method:`DELETE`}),f.view=`feed`,f.currentPost=null,await D()}catch(e){alert(e.message)}break;case`delete-comment`:if(!f.user)return;try{await l(`/api/forum/comments/${r}`,{method:`DELETE`}),f.currentPost&&(f.currentPost.comments=f.currentPost.comments.filter(e=>e.id!==r))}catch(e){alert(e.message)}E();break;case`logout`:try{await l(`/api/auth/logout`,{method:`POST`})}catch{}c(),f.user=null,E();break}}),p.addEventListener(`submit`,async e=>{e.preventDefault();let{action:t}=e.target.dataset;if(f.user){if(t===`submit-post`){let t=e.target.querySelector(`#post-title`)?.value?.trim(),n=e.target.querySelector(`#post-body`)?.value?.trim();if(!t||!n)return;let r=e.target.querySelector(`[type=submit]`);r.disabled=!0;try{await l(`/api/forum/posts`,{method:`POST`,body:JSON.stringify({title:t,body:n})}),f.showNewPost=!1,f.sortBy=`new`,await D()}catch(e){f.postError=e.message,r.disabled=!1,E()}}if(t===`submit-comment`){let t=e.target.querySelector(`#comment-input`)?.value?.trim();if(!t||!f.currentPost)return;let n=e.target.querySelector(`[type=submit]`);n.disabled=!0;try{let e=await l(`/api/forum/posts/${f.currentPost.post.id}/comments`,{method:`POST`,body:JSON.stringify({body:t})});f.currentPost.comments.push(d(e.comment??e)),E(),setTimeout(()=>{document.querySelector(`[data-comment-id]:last-child`)?.scrollIntoView({behavior:`smooth`,block:`nearest`})},50)}catch(e){alert(e.message),n.disabled=!1}}}}),k();