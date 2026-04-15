import './style.css'
import { competitionFacts, marketFeatures, productCategories, products, services, timeline } from './data.js'

const currency = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})

const app = document.querySelector('#app')

const initialCart = loadCart()

const state = {
  query: '',
  category: 'Alle',
  cart: initialCart,
}

function loadCart() {
  try {
    const raw = window.localStorage.getItem('foodconnect-cart')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveCart() {
  window.localStorage.setItem('foodconnect-cart', JSON.stringify(state.cart))
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase()

  return products.filter((product) => {
    const matchesCategory = state.category === 'Alle' || product.category === state.category
    const matchesQuery =
      query.length === 0 ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query))

    return matchesCategory && matchesQuery
  })
}

function getCartItems() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => {
      const product = products.find((item) => item.id === id)
      if (!product || quantity <= 0) return null
      return {
        ...product,
        quantity,
        total: quantity * product.price,
      }
    })
    .filter(Boolean)
}

function getCartCount() {
  return Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0)
}

function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0)
}

function addToCart(productId) {
  state.cart[productId] = (state.cart[productId] ?? 0) + 1
  saveCart()
  render()
}

function updateQuantity(productId, nextQuantity) {
  if (nextQuantity <= 0) {
    delete state.cart[productId]
  } else {
    state.cart[productId] = nextQuantity
  }

  saveCart()
  render()
}

function clearCart() {
  state.cart = {}
  saveCart()
  render()
}

function renderHero() {
  return `
    <section class="relative overflow-hidden px-6 pt-10 pb-20 sm:pt-14 sm:pb-24">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_24%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(240,253,244,0.78)_100%)]"></div>
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">${competitionFacts.season}</p>
          <h1 class="mt-5 max-w-[12ch] text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            ${competitionFacts.title} von bre-delicious
          </h1>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            ${competitionFacts.subtitle}
          </p>
          <p class="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            ${competitionFacts.description}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#produkte" class="rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700">
              Gemüse entdecken
            </a>
            <a href="#angebote" class="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">
              Soziale Angebote ansehen
            </a>
            <a href="${competitionFacts.links.competition}" target="_blank" rel="noreferrer" class="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-800 transition hover:bg-emerald-100">
              Wettbewerb ansehen
            </a>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            ${competitionFacts.highlights
              .map(
                (highlight) => `
                  <div class="rounded-2xl border border-white/70 bg-white/75 px-4 py-4 text-sm text-slate-700 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                    ${highlight}
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:col-span-2">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">Unser Konzept</p>
            <h2 class="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Ein Markt, der mehr kann als verkaufen.</h2>
            <p class="mt-4 max-w-2xl text-slate-600">
              Wir denken den FoodConnectMarkt als urbanen Ort für frisches Gemüse, Bildung, Begegnung und praktische Nachhaltigkeit.
            </p>
          </div>
          <div class="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-6 shadow-[0_20px_50px_rgba(16,185,129,0.10)]">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">Vertical Farming</p>
            <p class="mt-4 text-3xl font-semibold text-slate-950">Frisch vor Ort</p>
            <p class="mt-4 text-sm leading-7 text-slate-600">
              Gemüse wächst direkt im Markt und wird ohne lange Lieferwege angeboten.
            </p>
          </div>
          <div class="rounded-[2rem] border border-sky-100 bg-sky-50 p-6 shadow-[0_20px_50px_rgba(14,165,233,0.10)]">
            <p class="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Community</p>
            <p class="mt-4 text-3xl font-semibold text-slate-950">Lernen & Treffen</p>
            <p class="mt-4 text-sm leading-7 text-slate-600">
              Kochkurse, Nachhilfe und mietbare Räume machen den Markt zum sozialen Mittelpunkt.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderFeatures() {
  return `
    <section id="idee" class="px-6 py-12 sm:py-16">
      <div class="mx-auto max-w-7xl rounded-[2.2rem] border border-white/70 bg-white/80 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-9">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">Warum dieser Markt?</p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              FoodConnectMarkt heißt: Anbau, Verkauf und Gemeinschaft greifen ineinander.
            </h2>
            <p class="mt-5 text-base leading-8 text-slate-600">
              Die Science League fordert einen Ort, an dem Technik, Nachhaltigkeit und soziales Leben sichtbar zusammenspielen. Genau das übersetzen wir in eine moderne Verkaufswebsite für Gemüse mit Zusatzangeboten für Bildung und Teilhabe.
            </p>
          </div>
          <div class="grid gap-4 md:grid-cols-3">
            ${marketFeatures
              .map(
                (feature) => `
                  <article class="rounded-[1.75rem] border border-slate-200/70 bg-slate-50/90 p-5">
                    <h3 class="text-lg font-semibold text-slate-950">${feature.title}</h3>
                    <p class="mt-3 text-sm leading-7 text-slate-600">${feature.text}</p>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </section>
  `
}

function renderProducts() {
  const filteredProducts = getFilteredProducts()

  return `
    <section id="produkte" class="px-6 py-12 sm:py-16">
      <div class="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1fr_21rem]">
        <div>
          <div class="flex flex-col gap-5 rounded-[2.2rem] border border-white/70 bg-white/82 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">Gemüseverkauf</p>
                <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Produktsuche mit Warenkorb</h2>
                <p class="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  Suche nach frischem Gemüse, Kräutern und urban angebauten Produkten. Der Warenkorb zeigt direkt, wie ein digitaler Verkaufsprozess im FoodConnectMarkt aussehen kann.
                </p>
              </div>
              <div class="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                ${filteredProducts.length} Produkte gefunden
              </div>
            </div>

            <div class="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
              <label class="block">
                <span class="mb-2 block text-sm font-medium text-slate-700">Produkte suchen</span>
                <input
                  id="product-search"
                  type="search"
                  value="${escapeHtml(state.query)}"
                  placeholder="z. B. Salat, Basilikum oder knackig"
                  class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                />
              </label>
              <div class="flex flex-wrap gap-2">
                ${productCategories
                  .map((category) => {
                    const activeClasses = 'border-emerald-600 bg-emerald-600 text-white'
                    const inactiveClasses = 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    return `
                      <button
                        type="button"
                        data-category="${category}"
                        class="rounded-full border px-4 py-2 text-sm font-medium transition ${state.category === category ? activeClasses : inactiveClasses}"
                      >
                        ${category}
                      </button>
                    `
                  })
                  .join('')}
              </div>
            </div>
          </div>

          <div class="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            ${
              filteredProducts.length > 0
                ? filteredProducts
                    .map(
                      (product) => `
                        <article class="flex h-full flex-col rounded-[1.9rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
                          <div class="rounded-[1.5rem] bg-gradient-to-br from-emerald-100 via-lime-50 to-white p-5">
                            <div class="flex items-start justify-between gap-4">
                              <span class="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">${product.category}</span>
                              <span class="rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs text-slate-600">${product.stock}</span>
                            </div>
                            <h3 class="mt-5 text-2xl font-semibold text-slate-950">${product.name}</h3>
                            <p class="mt-3 text-sm leading-7 text-slate-600">${product.description}</p>
                          </div>

                          <div class="mt-5 flex flex-1 flex-col">
                            <div class="flex items-end justify-between gap-4">
                              <div>
                                <p class="text-2xl font-semibold text-slate-950">${currency.format(product.price)}</p>
                                <p class="mt-1 text-sm text-slate-500">${product.unit}</p>
                              </div>
                              <button
                                type="button"
                                data-add-to-cart="${product.id}"
                                class="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
                              >
                                In den Warenkorb
                              </button>
                            </div>
                            <div class="mt-4 flex flex-wrap gap-2">
                              ${product.tags
                                .map(
                                  (tag) => `
                                    <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">${tag}</span>
                                  `,
                                )
                                .join('')}
                            </div>
                          </div>
                        </article>
                      `,
                    )
                    .join('')
                : `
                  <div class="md:col-span-2 xl:col-span-3 rounded-[1.9rem] border border-dashed border-slate-300 bg-white/70 p-8 text-center text-slate-600">
                    Keine Produkte gefunden. Versuche einen anderen Suchbegriff oder eine andere Kategorie.
                  </div>
                `
            }
          </div>
        </div>

        ${renderCart()}
      </div>
    </section>
  `
}

function renderCart() {
  const cartItems = getCartItems()
  const cartCount = getCartCount()
  const total = getCartTotal()

  return `
    <aside class="xl:sticky xl:top-6 xl:self-start">
      <div class="rounded-[2rem] border border-slate-200/70 bg-slate-950 p-6 text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">Warenkorb</p>
            <h3 class="mt-3 text-2xl font-semibold">${cartCount} Artikel</h3>
          </div>
          <button
            type="button"
            data-clear-cart
            class="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/8"
          >
            Leeren
          </button>
        </div>

        <div class="mt-6 space-y-3">
          ${
            cartItems.length > 0
              ? cartItems
                  .map(
                    (item) => `
                      <div class="rounded-[1.5rem] bg-white/8 p-4">
                        <div class="flex items-start justify-between gap-4">
                          <div>
                            <p class="font-medium text-white">${item.name}</p>
                            <p class="mt-1 text-sm text-slate-300">${currency.format(item.price)} · ${item.unit}</p>
                          </div>
                          <p class="font-semibold text-emerald-300">${currency.format(item.total)}</p>
                        </div>
                        <div class="mt-4 flex items-center justify-between">
                          <div class="inline-flex items-center gap-2 rounded-full bg-white/8 p-1">
                            <button type="button" data-decrease="${item.id}" class="grid h-8 w-8 place-items-center rounded-full bg-white/12 text-white transition hover:bg-white/20">−</button>
                            <span class="min-w-8 text-center text-sm font-medium">${item.quantity}</span>
                            <button type="button" data-increase="${item.id}" class="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white transition hover:bg-emerald-400">+</button>
                          </div>
                          <button type="button" data-remove="${item.id}" class="text-sm text-slate-300 transition hover:text-white">Entfernen</button>
                        </div>
                      </div>
                    `,
                  )
                  .join('')
              : `
                <div class="rounded-[1.5rem] border border-dashed border-white/15 px-4 py-6 text-sm leading-7 text-slate-300">
                  Noch nichts im Warenkorb. Wähle Produkte aus dem FoodConnectMarkt aus.
                </div>
              `
          }
        </div>

        <div class="mt-6 rounded-[1.5rem] bg-white/8 p-4">
          <div class="flex items-center justify-between text-sm text-slate-300">
            <span>Zwischensumme</span>
            <span>${currency.format(total)}</span>
          </div>
          <div class="mt-2 flex items-center justify-between text-lg font-semibold text-white">
            <span>Gesamt</span>
            <span>${currency.format(total)}</span>
          </div>
          <button type="button" class="mt-4 w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-400">
            Demo-Checkout starten
          </button>
        </div>
      </div>
    </aside>
  `
}

function renderServices() {
  return `
    <section id="angebote" class="px-6 py-12 sm:py-16">
      <div class="mx-auto max-w-7xl rounded-[2.2rem] border border-white/70 bg-white/82 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8">
        <div class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700">Angebote & Gemeinschaft</p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Mehr als ein Gemüsemarkt</h2>
          <p class="mt-4 text-base leading-8 text-slate-600">
            Unser FoodConnectMarkt denkt Verkauf, Bildung und soziales Leben zusammen. Neben dem Gemüseangebot entstehen Räume für Austausch, Lernen und gemeinsames Erleben.
          </p>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          ${services
            .map(
              (service) => `
                <article class="rounded-[1.8rem] border border-slate-200/70 bg-slate-50/80 p-5">
                  <span class="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">${service.badge}</span>
                  <h3 class="mt-4 text-xl font-semibold text-slate-950">${service.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-600">${service.text}</p>
                  <ul class="mt-5 space-y-2 text-sm text-slate-600">
                    ${service.details.map((detail) => `<li>• ${detail}</li>`).join('')}
                  </ul>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderCompetition() {
  return `
    <section id="wettbewerb" class="px-6 py-12 sm:py-16">
      <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div class="rounded-[2rem] border border-sky-100 bg-sky-50/80 p-7 shadow-[0_20px_50px_rgba(14,165,233,0.08)]">
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">Science League</p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight text-slate-950">Unser Wettbewerbsrahmen</h2>
          <p class="mt-4 text-base leading-8 text-slate-600">
            Die Science League 2025/2026 stellt den FoodConnectMarkt als smarten Ort für Anbau, Verkauf und Gemeinschaft in den Mittelpunkt. Unser Konzept übersetzt diese Idee in eine überzeugende Markt- und Webpräsenz.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <a href="${competitionFacts.links.competition}" target="_blank" rel="noreferrer" class="rounded-full bg-sky-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-sky-700">
              Science League Seite
            </a>
            <a href="${competitionFacts.links.team}" target="_blank" rel="noreferrer" class="rounded-full border border-sky-200 bg-white px-4 py-3 text-sm font-medium text-sky-900 transition hover:bg-sky-50">
              Teamseite bre-delicious
            </a>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          ${timeline
            .map(
              (item, index) => `
                <article class="rounded-[1.8rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
                  <p class="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">0${index + 1}</p>
                  <h3 class="mt-4 text-xl font-semibold text-slate-950">${item.title}</h3>
                  <p class="mt-3 text-sm leading-7 text-slate-600">${item.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `
}

function renderFooter() {
  return `
    <footer id="kontakt" class="px-6 pb-10 pt-12 sm:pb-14">
      <div class="mx-auto grid max-w-7xl gap-6 rounded-[2.2rem] border border-slate-200/70 bg-slate-950 px-7 py-8 text-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.18)] lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">bre-delicious</p>
          <h2 class="mt-4 text-3xl font-semibold">FoodConnectMarkt für die Science League 2025/2026</h2>
          <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Eine Verkaufswebsite für Gemüse mit Warenkorb, Bildungsangeboten und sozialen Räumen — inspiriert vom FoodConnectMarkt-Wettbewerb und unserem Teamkonzept rund um Vertical Farming und urbane Versorgung.
          </p>
        </div>
        <div class="grid gap-2 text-sm text-slate-300">
          <a href="#produkte" class="transition hover:text-white">Produkte</a>
          <a href="#angebote" class="transition hover:text-white">Angebote</a>
          <a href="#wettbewerb" class="transition hover:text-white">Wettbewerb</a>
        </div>
      </div>
    </footer>
  `
}

function render() {
  app.innerHTML = `
    <div class="min-h-screen text-slate-900 antialiased">
      <header class="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" class="flex items-center gap-3">
            <div class="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald-400 via-lime-300 to-sky-300 text-sm font-semibold text-slate-950">FC</div>
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">bre-delicious</p>
              <p class="text-sm text-slate-500">FoodConnectMarkt</p>
            </div>
          </a>

          <nav class="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#idee" class="transition hover:text-slate-950">Konzept</a>
            <a href="#produkte" class="transition hover:text-slate-950">Produkte</a>
            <a href="#angebote" class="transition hover:text-slate-950">Angebote</a>
            <a href="#wettbewerb" class="transition hover:text-slate-950">Wettbewerb</a>
          </nav>

          <a href="#produkte" class="rounded-full bg-slate-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700">
            Warenkorb (${getCartCount()})
          </a>
        </div>
      </header>

      <main id="top">
        ${renderHero()}
        ${renderFeatures()}
        ${renderProducts()}
        ${renderServices()}
        ${renderCompetition()}
      </main>

      ${renderFooter()}
    </div>
  `

  bindEvents()
}

function bindEvents() {
  const searchInput = document.querySelector('#product-search')
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      state.query = event.target.value
      render()
    })
  }

  document.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => {
      state.category = button.dataset.category
      render()
    })
  })

  document.querySelectorAll('[data-add-to-cart]').forEach((button) => {
    button.addEventListener('click', () => {
      addToCart(button.dataset.addToCart)
    })
  })

  document.querySelectorAll('[data-increase]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.increase
      updateQuantity(id, (state.cart[id] ?? 0) + 1)
    })
  })

  document.querySelectorAll('[data-decrease]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.decrease
      updateQuantity(id, (state.cart[id] ?? 0) - 1)
    })
  })

  document.querySelectorAll('[data-remove]').forEach((button) => {
    button.addEventListener('click', () => {
      updateQuantity(button.dataset.remove, 0)
    })
  })

  document.querySelectorAll('[data-clear-cart]').forEach((button) => {
    button.addEventListener('click', () => {
      clearCart()
    })
  })
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

render()
