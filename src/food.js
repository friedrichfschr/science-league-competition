import './style.css'
import { competitionFacts, productCategories, products } from './data.js'
import { bindPageSelect, escapeHtml, renderHero, renderPageFrame } from './shared.js'

const STORAGE_KEY = 'foodconnect-cart-v2'

const currency = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})

const STOCK_FILTERS = [
  { value: 'Alle', label: 'Alle Bestände' },
  { value: 'fresh', label: 'Frisch geerntet' },
  { value: 'ready', label: 'Sofort verfügbar' },
  { value: 'limited', label: 'Nur kleine Menge' },
]

const SORT_OPTIONS = [
  { value: 'empfohlen', label: 'Empfohlen' },
  { value: 'preis-aufsteigend', label: 'Preis: niedrig zuerst' },
  { value: 'preis-absteigend', label: 'Preis: hoch zuerst' },
  { value: 'name-a-z', label: 'Name A–Z' },
]

const app = document.querySelector('#app')

const state = {
  query: '',
  category: 'Alle',
  stock: 'Alle',
  sort: 'empfohlen',
  cart: loadCart(),
  cartDrawerOpen: false,
}

function loadCart() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveCart() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart))
}

function getProductById(productId) {
  return products.find((product) => product.id === productId)
}

function getCartItems() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => {
      const product = getProductById(id)
      if (!product || quantity <= 0) return null

      return {
        ...product,
        quantity,
        total: product.price * quantity,
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

function getActiveFilterCount() {
  let count = 0
  if (state.query.trim()) count += 1
  if (state.category !== 'Alle') count += 1
  if (state.stock !== 'Alle') count += 1
  return count
}

function recommendationScore(product) {
  const stockWeights = {
    fresh: 3,
    ready: 2,
    limited: 1,
  }

  return stockWeights[product.stockLevel] + (product.badge === 'Heute empfohlen' ? 2 : 0)
}

function sortProducts(list) {
  switch (state.sort) {
    case 'preis-aufsteigend':
      return [...list].sort((a, b) => a.price - b.price)
    case 'preis-absteigend':
      return [...list].sort((a, b) => b.price - a.price)
    case 'name-a-z':
      return [...list].sort((a, b) => a.name.localeCompare(b.name, 'de'))
    case 'empfohlen':
    default:
      return [...list].sort((a, b) => {
        const scoreA = recommendationScore(a)
        const scoreB = recommendationScore(b)
        if (scoreB !== scoreA) return scoreB - scoreA
        return a.name.localeCompare(b.name, 'de')
      })
  }
}

function getFilteredProducts() {
  const query = state.query.trim().toLowerCase()

  const filtered = products.filter((product) => {
    const categoryMatch = state.category === 'Alle' || product.category === state.category
    const stockMatch = state.stock === 'Alle' || product.stockLevel === state.stock
    const queryMatch =
      query.length === 0 ||
      [product.name, product.description, product.category, product.origin, product.badge, ...product.tags]
        .join(' ')
        .toLowerCase()
        .includes(query)

    return categoryMatch && stockMatch && queryMatch
  })

  return sortProducts(filtered)
}

function addToCart(productId) {
  state.cart[productId] = (state.cart[productId] ?? 0) + 1
  saveCart()
  render()
}

function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    delete state.cart[productId]
  } else {
    state.cart[productId] = quantity
  }

  saveCart()
  render()
}

function clearCart() {
  state.cart = {}
  saveCart()
  render()
}

function clearFilters() {
  state.query = ''
  state.category = 'Alle'
  state.stock = 'Alle'
  state.sort = 'empfohlen'
  render()
}

function getStockBadge(product) {
  const variants = {
    fresh: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    ready: 'border-sky-200 bg-sky-50 text-sky-800',
    limited: 'border-amber-200 bg-amber-50 text-amber-800',
  }

  return variants[product.stockLevel] ?? 'border-stone-200 bg-stone-100 text-stone-700'
}

function renderFilters() {
  return `
    <aside class="rounded-[1.75rem] border border-stone-200 bg-stone-50 px-5 py-5">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-sm font-semibold text-stone-950">Filter</p>
          <p class="mt-1 text-sm text-stone-600">${getActiveFilterCount()} aktiv</p>
        </div>
        <button type="button" data-action="clear-filters" class="text-sm font-medium text-stone-600 transition hover:text-stone-950">Zurücksetzen</button>
      </div>

      <div class="mt-6">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Kategorie</p>
        <div class="mt-3 flex flex-wrap gap-2 lg:flex-col">
          ${productCategories
            .map(
              (category) => `
                <button
                  type="button"
                  data-action="set-category"
                  data-value="${category}"
                  class="rounded-full border px-4 py-2 text-sm font-medium transition ${
                    state.category === category
                      ? 'border-stone-950 bg-stone-950 text-white'
                      : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100'
                  }"
                >
                  ${category}
                </button>
              `,
            )
            .join('')}
        </div>
      </div>

      <div class="mt-6">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">Bestand</p>
        <div class="mt-3 grid gap-2">
          ${STOCK_FILTERS
            .map(
              (filter) => `
                <button
                  type="button"
                  data-action="set-stock"
                  data-value="${filter.value}"
                  class="flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    state.stock === filter.value
                      ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                      : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100'
                  }"
                >
                  <span>${filter.label}</span>
                  <span class="text-xs uppercase tracking-[0.2em]">${filter.value === 'Alle' ? 'ALL' : filter.value}</span>
                </button>
              `,
            )
            .join('')}
        </div>
      </div>
    </aside>
  `
}

function renderProductCard(product) {
  const quantity = state.cart[product.id] ?? 0

  return `
    <article class="flex h-full flex-col rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-[0_14px_34px_rgba(41,37,36,0.05)] transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-[0_20px_44px_rgba(41,37,36,0.08)]">
      <div class="flex items-start justify-between gap-3">
        <span class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700">
          ${product.category}
        </span>
        <span class="rounded-full border px-3 py-1 text-xs font-medium ${getStockBadge(product)}">
          ${product.stockLabel}
        </span>
      </div>

      <div class="mt-5">
        <p class="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-800">${product.badge}</p>
        <h3 class="mt-2 text-2xl font-semibold text-stone-950">${product.name}</h3>
        <p class="mt-3 text-sm leading-7 text-stone-600">${product.description}</p>
      </div>

      <dl class="mt-5 grid grid-cols-2 gap-3 rounded-[1.4rem] border border-stone-200 bg-stone-50 px-4 py-4 text-sm">
        <div>
          <dt class="text-stone-500">Preis</dt>
          <dd class="mt-1 font-semibold text-stone-950">${currency.format(product.price)}</dd>
        </div>
        <div>
          <dt class="text-stone-500">Einheit</dt>
          <dd class="mt-1 font-medium text-stone-800">${product.unit}</dd>
        </div>
        <div class="col-span-2">
          <dt class="text-stone-500">Herkunft</dt>
          <dd class="mt-1 font-medium text-stone-800">${product.origin}</dd>
        </div>
      </dl>

      <div class="mt-5 flex flex-wrap gap-2">
        ${product.tags
          .map(
            (tag) => `
              <span class="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                ${tag}
              </span>
            `,
          )
          .join('')}
      </div>

      <div class="mt-auto pt-6">
        ${
          quantity > 0
            ? `
              <div class="flex items-center justify-between gap-3">
                <div class="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-50 px-2 py-2">
                  <button type="button" data-action="decrease" data-id="${product.id}" class="grid h-8 w-8 place-items-center rounded-full bg-white text-lg text-stone-900 transition hover:bg-stone-200" aria-label="Menge verringern">−</button>
                  <span class="min-w-7 text-center text-sm font-semibold text-stone-900">${quantity}</span>
                  <button type="button" data-action="increase" data-id="${product.id}" class="grid h-8 w-8 place-items-center rounded-full bg-stone-950 text-lg text-white transition hover:bg-emerald-800" aria-label="Menge erhöhen">+</button>
                </div>
                <p class="text-sm font-medium text-emerald-800">Im Warenkorb</p>
              </div>
            `
            : `
              <button type="button" data-action="add-to-cart" data-id="${product.id}" class="inline-flex w-full items-center justify-center rounded-full bg-stone-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-800">
                In den Warenkorb
              </button>
            `
        }
      </div>
    </article>
  `
}

function renderProductsList() {
  const filteredProducts = getFilteredProducts()

  if (filteredProducts.length === 0) {
    return `
      <div class="rounded-[1.75rem] border border-dashed border-stone-300 bg-stone-50 px-6 py-10 text-center">
        <p class="text-lg font-semibold text-stone-950">Keine Produkte gefunden</p>
        <p class="mt-3 text-sm leading-7 text-stone-600">Versuche eine andere Kategorie oder lösche die aktiven Filter.</p>
      </div>
    `
  }

  return `
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      ${filteredProducts.map((product) => renderProductCard(product)).join('')}
    </div>
  `
}

function renderCartContent() {
  const cartItems = getCartItems()
  const cartCount = getCartCount()
  const total = getCartTotal()

  return `
    <div class="rounded-[1.75rem] border border-stone-200 bg-stone-950 px-5 py-5 text-stone-50 shadow-[0_18px_50px_rgba(28,25,23,0.18)]">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Warenkorb</p>
          <h3 class="mt-3 text-2xl font-semibold">${cartCount} Artikel</h3>
        </div>
        <button type="button" data-action="clear-cart" class="rounded-full border border-white/15 px-3 py-2 text-xs font-medium text-stone-200 transition hover:border-white/30 hover:bg-white/10">
          Leeren
        </button>
      </div>

      <div class="mt-5 space-y-3">
        ${
          cartItems.length > 0
            ? cartItems
                .map(
                  (item) => `
                    <article class="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                      <div class="flex items-start justify-between gap-3">
                        <div>
                          <p class="font-medium text-white">${item.name}</p>
                          <p class="mt-1 text-sm text-stone-300">${currency.format(item.price)} · ${item.unit}</p>
                        </div>
                        <p class="font-semibold text-emerald-300">${currency.format(item.total)}</p>
                      </div>
                      <div class="mt-4 flex items-center justify-between gap-3">
                        <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2">
                          <button type="button" data-action="decrease" data-id="${item.id}" class="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-lg text-white transition hover:bg-white/20">−</button>
                          <span class="min-w-7 text-center text-sm font-semibold text-white">${item.quantity}</span>
                          <button type="button" data-action="increase" data-id="${item.id}" class="grid h-8 w-8 place-items-center rounded-full bg-emerald-800 text-lg text-white transition hover:bg-emerald-700">+</button>
                        </div>
                        <button type="button" data-action="remove" data-id="${item.id}" class="text-sm text-stone-300 transition hover:text-white">Entfernen</button>
                      </div>
                    </article>
                  `,
                )
                .join('')
            : `
              <div class="rounded-[1.35rem] border border-dashed border-white/15 px-4 py-6 text-sm leading-7 text-stone-300">
                Noch nichts im Warenkorb. Wähle Produkte aus dem Food-Bereich aus.
              </div>
            `
        }
      </div>

      <div class="mt-5 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
        <div class="flex items-center justify-between text-sm text-stone-300">
          <span>Zwischensumme</span>
          <span>${currency.format(total)}</span>
        </div>
        <div class="mt-2 flex items-center justify-between text-lg font-semibold text-white">
          <span>Gesamt</span>
          <span>${currency.format(total)}</span>
        </div>
        <button type="button" class="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-800 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-700">
          Demo-Checkout starten
        </button>
      </div>
    </div>
  `
}

function renderCartDrawer() {
  return `
    <div class="fixed inset-0 z-50 ${state.cartDrawerOpen ? '' : 'pointer-events-none'} lg:hidden" aria-hidden="${state.cartDrawerOpen ? 'false' : 'true'}">
      <button type="button" data-action="toggle-cart" class="absolute inset-0 bg-stone-950/35 transition ${state.cartDrawerOpen ? 'opacity-100' : 'opacity-0'}" aria-label="Warenkorb schließen"></button>
      <div class="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[2rem] border border-stone-200 bg-[rgba(249,247,242,0.98)] p-4 shadow-[0_-18px_40px_rgba(28,25,23,0.18)] transition duration-200 ${
        state.cartDrawerOpen ? 'translate-y-0' : 'translate-y-full'
      }">
        <div class="mb-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-stone-950">Mobiler Warenkorb</p>
            <p class="text-sm text-stone-600">Mengen direkt hier anpassen</p>
          </div>
          <button type="button" data-action="toggle-cart" class="grid h-10 w-10 place-items-center rounded-full border border-stone-300 bg-white text-stone-900">×</button>
        </div>
        ${renderCartContent()}
      </div>
    </div>
  `
}

function renderMobileCartBar() {
  if (getCartCount() === 0) return ''

  return `
    <div class="fixed inset-x-4 bottom-4 z-40 lg:hidden">
      <button type="button" data-action="toggle-cart" class="flex w-full items-center justify-between rounded-full border border-stone-300 bg-white px-5 py-3 text-left shadow-[0_12px_30px_rgba(41,37,36,0.12)]">
        <div>
          <p class="text-sm font-semibold text-stone-950">Warenkorb öffnen</p>
          <p class="text-sm text-stone-600">${getCartCount()} Artikel · ${currency.format(getCartTotal())}</p>
        </div>
        <span class="rounded-full bg-stone-950 px-3 py-1 text-sm font-medium text-white">Ansehen</span>
      </button>
    </div>
  `
}

function render() {
  const filteredProducts = getFilteredProducts()

  const hero = renderHero({
    eyebrow: 'Food & Einkauf',
    title: 'Eine eigene Food-Seite für Suche, Filter und vertraute Shop-Muster.',
    intro:
      'Der Einkaufsbereich ist aus der langen Gesamtseite herausgelöst und bekommt jetzt eine eigene, klar fokussierte Seite. So wirken Produkte, Filter und Warenkorb wesentlich geordneter.',
    actions: [
      { href: 'index.html', label: 'Zurück zu Über uns' },
      { href: 'soziales.html', label: 'Soziales ansehen' },
    ],
    supportingCard: `
      <p class="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">Food</p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight">Weniger Ablenkung, mehr Einkaufsklarheit.</h2>
      <div class="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div class="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200">${filteredProducts.length} Produkte im aktuellen Suchergebnis</div>
        <div class="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200">${getCartCount()} Artikel im Warenkorb</div>
        <div class="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-stone-200">Klar sichtbare Preise, Herkunft, Bestand und CTAs</div>
      </div>
    `,
  })

  const content = `
    <section class="px-5 py-8 lg:px-6 lg:py-12">
      <div class="mx-auto max-w-7xl">
        <div class="rounded-[2rem] border border-stone-200 bg-white px-4 py-4 shadow-[0_18px_50px_rgba(41,37,36,0.05)] lg:px-6 lg:py-6">
          <div class="grid gap-4 border-b border-stone-200 pb-5 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end">
            <label class="block">
              <span class="mb-2 block text-sm font-medium text-stone-700">Produkte suchen</span>
              <input
                id="product-search"
                type="search"
                value="${escapeHtml(state.query)}"
                placeholder="z. B. Salat, Basilikum, regional oder frisch"
                class="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm font-medium text-stone-700">Sortieren</span>
              <select id="sort-select" class="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100">
                ${SORT_OPTIONS.map((option) => `<option value="${option.value}" ${state.sort === option.value ? 'selected' : ''}>${option.label}</option>`).join('')}
              </select>
            </label>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-2 text-sm text-stone-600">
            <span class="font-medium text-stone-800">Aktive Auswahl:</span>
            ${state.category !== 'Alle' ? `<span class="rounded-full bg-stone-100 px-3 py-1">Kategorie: ${state.category}</span>` : ''}
            ${state.stock !== 'Alle' ? `<span class="rounded-full bg-stone-100 px-3 py-1">Bestand: ${STOCK_FILTERS.find((filter) => filter.value === state.stock)?.label}</span>` : ''}
            ${state.query.trim() ? `<span class="rounded-full bg-stone-100 px-3 py-1">Suche: „${escapeHtml(state.query.trim())}“</span>` : ''}
            ${getActiveFilterCount() === 0 ? '<span class="rounded-full bg-emerald-50 px-3 py-1 text-emerald-800">Keine Filter aktiv</span>' : ''}
          </div>

          <div class="mt-6 grid gap-6 lg:grid-cols-[17rem_minmax(0,1fr)_20rem]">
            ${renderFilters()}

            <div>
              <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm text-stone-600">${filteredProducts.length} Produkte sichtbar · klare Preis-, Kategorie- und Bestandsanzeige</p>
                <a href="${competitionFacts.links.team}" target="_blank" rel="noreferrer" class="text-sm font-medium text-emerald-800 transition hover:text-emerald-900">Zum Teamprofil</a>
              </div>
              ${renderProductsList()}
            </div>

            <aside class="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              ${renderCartContent()}
            </aside>
          </div>
        </div>
      </div>
    </section>
  `

  app.innerHTML = renderPageFrame({
    activePage: 'food',
    hero,
    content,
  }) + renderCartDrawer() + renderMobileCartBar()
}

function handleClick(event) {
  const target = event.target.closest('[data-action]')
  if (!target) return

  const { action, value, id } = target.dataset

  switch (action) {
    case 'set-category':
      state.category = value
      render()
      break
    case 'set-stock':
      state.stock = value
      render()
      break
    case 'clear-filters':
      clearFilters()
      break
    case 'add-to-cart':
      addToCart(id)
      break
    case 'increase':
      updateQuantity(id, (state.cart[id] ?? 0) + 1)
      break
    case 'decrease':
      updateQuantity(id, (state.cart[id] ?? 0) - 1)
      break
    case 'remove':
      updateQuantity(id, 0)
      break
    case 'clear-cart':
      clearCart()
      break
    case 'toggle-cart':
      state.cartDrawerOpen = !state.cartDrawerOpen
      render()
      break
    default:
      break
  }
}

function handleInput(event) {
  if (event.target.id !== 'product-search') return
  state.query = event.target.value
  render()
}

function handleChange(event) {
  if (event.target.id === 'sort-select') {
    state.sort = event.target.value
    render()
  }
}

app.addEventListener('click', handleClick)
app.addEventListener('input', handleInput)
app.addEventListener('change', handleChange)

bindPageSelect(app)
render()
