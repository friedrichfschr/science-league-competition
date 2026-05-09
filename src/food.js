import './style.css'
import { competitionFacts, productCategories, products } from './data.js'
import {
  bindPageSelect,
  escapeHtml,
  renderHero,
  renderPageFrame,
  setupRevealObserver,
} from './shared.js'

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
  filtersOpen: false,
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
      [product.name, product.category, product.origin, product.stockLabel]
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

function getStockDot(product) {
  const dots = {
    fresh: 'bg-emerald-500',
    ready: 'bg-sky-500',
    limited: 'bg-amber-500',
  }
  return dots[product.stockLevel] ?? 'bg-stone-400'
}

function renderFilters() {
  const activeCount = getActiveFilterCount()
  return `
    <div>
      <div class="rounded-2xl border border-stone-200 bg-white/85 p-4 shadow-[var(--shadow-sm)]">
        <div class="flex items-center gap-3">
          <button
            type="button"
            data-action="toggle-filters"
            aria-expanded="${state.filtersOpen ? 'true' : 'false'}"
            aria-controls="filter-panel"
            class="flex min-w-0 flex-1 items-center justify-between gap-3 text-left"
          >
            <span class="flex items-center gap-2">
              <span aria-hidden="true" class="grid h-7 w-7 place-items-center rounded-lg bg-stone-100 text-stone-700">⚙</span>
              <span class="text-sm font-semibold text-stone-900">Filter</span>
              ${
                activeCount > 0
                  ? `<span class="rounded-full bg-emerald-100 px-2 py-0.5 text-[0.65rem] font-bold text-emerald-800">${activeCount}</span>`
                  : ''
              }
            </span>
            <span class="text-xs font-medium text-stone-600" aria-hidden="true">${state.filtersOpen ? '−' : '+'}</span>
          </button>
          ${
            activeCount > 0
              ? `<button type="button" data-action="clear-filters" class="shrink-0 rounded-full border border-stone-300 px-3 py-1.5 text-xs font-medium text-stone-700 transition hover:border-stone-400 hover:bg-stone-50">Zurücksetzen</button>`
              : ''
          }
        </div>

        <div id="filter-panel" ${state.filtersOpen ? '' : 'hidden'}>
          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Sortierung</p>
            <select
              data-action="set-sort"
              aria-label="Sortierung"
              class="mt-3 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-2.5 text-sm text-stone-900 transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
            >
              ${SORT_OPTIONS.map(
                (option) => `<option value="${option.value}" ${state.sort === option.value ? 'selected' : ''}>${option.label}</option>`,
              ).join('')}
            </select>
          </div>

          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Kategorie</p>
            <div class="mt-3 flex flex-wrap gap-1.5 lg:flex-col">
              ${productCategories
                .map(
                  (category) => `
                    <button
                      type="button"
                      data-action="set-category"
                      data-value="${category}"
                      ${state.category === category ? 'aria-pressed="true"' : 'aria-pressed="false"'}
                      class="rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                        state.category === category
                          ? 'border-stone-950 bg-stone-950 text-white shadow-[0_8px_20px_-10px_rgba(6,95,70,0.5)]'
                          : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500 hover:bg-stone-50'
                      }"
                    >
                      ${category}
                    </button>
                  `,
                )
                .join('')}
            </div>
          </div>

          <div class="mt-5">
            <p class="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Bestand</p>
            <div class="mt-3 grid gap-1.5">
              ${STOCK_FILTERS.map(
                (filter) => `
                  <button
                    type="button"
                    data-action="set-stock"
                    data-value="${filter.value}"
                    ${state.stock === filter.value ? 'aria-pressed="true"' : 'aria-pressed="false"'}
                    class="flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-left text-xs font-medium transition ${
                      state.stock === filter.value
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                        : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500 hover:bg-stone-50'
                    }"
                  >
                    <span class="flex items-center gap-2">
                      <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full ${
                        filter.value === 'fresh'
                          ? 'bg-emerald-500'
                          : filter.value === 'ready'
                            ? 'bg-sky-500'
                            : filter.value === 'limited'
                              ? 'bg-amber-500'
                              : 'bg-stone-400'
                      }"></span>
                      ${filter.label}
                    </span>
                    ${state.stock === filter.value ? '<span aria-hidden="true">✓</span>' : ''}
                  </button>
                `,
              ).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderProductCard(product, index) {
  const quantity = state.cart[product.id] ?? 0

  return `
    <article class="reveal reveal-d${(index % 3) + 1} card-lift group flex h-full flex-col rounded-[1.5rem] border border-stone-200 bg-white/90 p-4 shadow-[var(--shadow-sm)] transition hover:border-emerald-300 hover:shadow-[var(--shadow-md)]">
      <div class="flex flex-wrap items-start justify-between gap-2">
        <span class="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-700">
          ${product.category}
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-medium ${getStockBadge(product)}">
          <span aria-hidden="true" class="h-1.5 w-1.5 rounded-full ${getStockDot(product)}"></span>
          ${product.stockLabel}
        </span>
      </div>

      <div class="mt-3 overflow-hidden rounded-[1.1rem] bg-stone-100">
        <img
          src="${product.image}"
          alt="${escapeHtml(product.name)}"
          class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div class="mt-4">
        <h3 class="font-display text-2xl font-semibold text-stone-950">${product.name}</h3>
      </div>

      <dl class="mt-4 grid grid-cols-2 gap-3 border-t border-stone-200 pt-3 text-sm">
        <div>
          <dt class="text-xs text-stone-500">Preis</dt>
          <dd class="mt-1 font-display text-lg font-semibold text-stone-950">${currency.format(product.price)}</dd>
        </div>
        <div>
          <dt class="text-xs text-stone-500">Einheit</dt>
          <dd class="mt-1 text-sm font-medium text-stone-800">${product.unit}</dd>
        </div>
        <div class="col-span-2">
          <dt class="text-xs text-stone-500">Herkunft</dt>
          <dd class="mt-1 text-sm font-medium text-stone-800">${product.origin}</dd>
        </div>
      </dl>

      <div class="mt-auto pt-5">
        ${
          quantity > 0
            ? `
              <div class="flex items-center justify-between gap-3">
                <div class="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-stone-50 p-1">
                  <button type="button" data-action="decrease" data-id="${product.id}" class="btn-press grid h-9 w-9 place-items-center rounded-full bg-white text-lg text-stone-900 transition hover:bg-stone-200" aria-label="Menge für ${escapeHtml(product.name)} verringern">−</button>
                  <span class="min-w-8 text-center text-sm font-semibold text-stone-900" aria-live="polite">${quantity}</span>
                  <button type="button" data-action="increase" data-id="${product.id}" class="btn-press grid h-9 w-9 place-items-center rounded-full bg-stone-950 text-lg text-white transition hover:bg-emerald-800" aria-label="Menge für ${escapeHtml(product.name)} erhöhen">+</button>
                </div>
                <p class="text-xs font-semibold text-emerald-800">✓ Im Korb</p>
              </div>
            `
            : `
              <button type="button" data-action="add-to-cart" data-id="${product.id}" class="btn-press inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-4 py-3 text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(6,95,70,0.5)] transition hover:bg-emerald-800">
                In den Warenkorb
                <span aria-hidden="true">+</span>
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
      <div class="rounded-2xl border border-dashed border-stone-300 bg-white/60 py-12 text-center">
        <p class="font-display text-xl font-semibold text-stone-950">Keine Produkte gefunden</p>
        <p class="mt-3 text-sm leading-7 text-stone-600">Versuche eine andere Kategorie oder lösche die aktiven Filter.</p>
        <button type="button" data-action="clear-filters" class="btn-press mt-5 inline-flex items-center rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-800">
          Filter zurücksetzen
        </button>
      </div>
    `
  }

  return `
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      ${filteredProducts.map((product, i) => renderProductCard(product, i)).join('')}
    </div>
  `
}

function renderCartContent() {
  const cartItems = getCartItems()
  const cartCount = getCartCount()
  const total = getCartTotal()

  return `
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-stone-950 via-stone-900 to-emerald-950 px-5 py-5 text-stone-50 shadow-[0_20px_50px_-18px_rgba(6,95,70,0.55)] ring-1 ring-inset ring-white/5">
      <div aria-hidden="true" class="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-500/25 blur-3xl"></div>
      <div class="relative">
        <div class="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <p class="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-300">Warenkorb</p>
            <h3 class="font-display mt-2 text-2xl font-semibold">${cartCount} ${cartCount === 1 ? 'Artikel' : 'Artikel'}</h3>
          </div>
          ${
            cartCount > 0
              ? `<button type="button" data-action="clear-cart" class="rounded-full border border-white/15 px-3 py-1.5 text-[0.7rem] font-medium text-stone-200 transition hover:border-white/30 hover:bg-white/10">Leeren</button>`
              : ''
          }
        </div>

        <div class="mt-4 space-y-4">
          ${
            cartItems.length > 0
              ? cartItems
                  .map(
                    (item) => `
                      <article class="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="font-medium text-white">${item.name}</p>
                            <p class="mt-1 text-xs text-stone-400">${currency.format(item.price)} · ${item.unit}</p>
                          </div>
                          <p class="font-display font-semibold text-emerald-300">${currency.format(item.total)}</p>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <div class="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                            <button type="button" data-action="decrease" data-id="${item.id}" class="btn-press grid h-7 w-7 place-items-center rounded-full bg-white/10 text-sm text-white transition hover:bg-white/20" aria-label="Menge verringern">−</button>
                            <span class="min-w-6 text-center text-xs font-semibold text-white">${item.quantity}</span>
                            <button type="button" data-action="increase" data-id="${item.id}" class="btn-press grid h-7 w-7 place-items-center rounded-full bg-emerald-700 text-sm text-white transition hover:bg-emerald-600" aria-label="Menge erhöhen">+</button>
                          </div>
                          <button type="button" data-action="remove" data-id="${item.id}" class="text-xs text-stone-400 transition hover:text-white">Entfernen</button>
                        </div>
                      </article>
                    `,
                  )
                  .join('')
              : `
                <div class="rounded-xl border border-dashed border-white/15 px-4 py-6 text-center text-sm leading-7 text-stone-300">
                  <p>Noch nichts im Korb.</p>
                  <p class="mt-1 text-xs text-stone-400">Füge Produkte hinzu, um zu sehen wie der Einkauf wächst.</p>
                </div>
              `
          }
        </div>

        <div class="mt-5 border-t border-white/10 pt-4">
          <div class="flex items-center justify-between text-sm text-stone-300">
            <span>Zwischensumme</span>
            <span>${currency.format(total)}</span>
          </div>
          <div class="mt-2 flex items-center justify-between">
            <span class="text-base font-semibold text-white">Gesamt</span>
            <span class="font-display text-2xl font-semibold text-emerald-300">${currency.format(total)}</span>
          </div>
          <button type="button" class="btn-press mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-50" ${cartCount === 0 ? 'disabled' : ''}>
            Demo-Checkout
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  `
}

function renderCartDrawer() {
  return `
    <div class="fixed inset-0 z-50 ${state.cartDrawerOpen ? '' : 'pointer-events-none'} lg:hidden" aria-hidden="${state.cartDrawerOpen ? 'false' : 'true'}" role="dialog" aria-label="Warenkorb">
      <button type="button" data-action="toggle-cart" class="absolute inset-0 bg-stone-950/50 transition ${state.cartDrawerOpen ? 'opacity-100' : 'opacity-0'}" aria-label="Warenkorb schließen" tabindex="${state.cartDrawerOpen ? '0' : '-1'}"></button>
      <div class="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[2rem] border border-stone-200 bg-[rgba(247,244,238,0.98)] p-4 shadow-[0_-24px_50px_-12px_rgba(28,25,23,0.25)] transition duration-300 ${
        state.cartDrawerOpen ? 'translate-y-0' : 'translate-y-full'
      }">
        <div aria-hidden="true" class="mx-auto mb-4 h-1 w-10 rounded-full bg-stone-300"></div>
        <div class="mb-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-stone-950">Dein Korb</p>
            <p class="text-xs text-stone-600">Mengen direkt hier anpassen</p>
          </div>
          <button type="button" data-action="toggle-cart" class="grid h-10 w-10 place-items-center rounded-full border border-stone-300 bg-white text-stone-900 transition hover:bg-stone-50" aria-label="Schließen">×</button>
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
      <button type="button" data-action="toggle-cart" class="flex w-full items-center justify-between gap-3 rounded-full border border-stone-300 bg-white/95 px-5 py-3 text-left shadow-[0_14px_36px_-12px_rgba(28,25,23,0.22)] backdrop-blur">
        <div class="flex items-center gap-3">
          <span aria-hidden="true" class="grid h-9 w-9 place-items-center rounded-full bg-stone-950 text-white">🛒</span>
          <div>
            <p class="text-sm font-semibold text-stone-950">Warenkorb öffnen</p>
            <p class="text-xs text-stone-600">${getCartCount()} Artikel · ${currency.format(getCartTotal())}</p>
          </div>
        </div>
        <span class="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">Ansehen</span>
      </button>
    </div>
  `
}

function render() {
  const filteredProducts = getFilteredProducts()
  const cartCount = getCartCount()

  const hero = renderHero({
    eyebrow: 'Der Gemüseturm',
    title: 'Produkte aus unserem Vertical Farming.',
    intro:
      'Knackig, frisch und lokal produziert. Filtere nach Kategorie oder Bestand, lege Produkte in den Korb und sieh den Einkauf live wachsen.',
  })

  const content = `
    <section class="px-5 pb-12 lg:px-6 lg:pb-20" aria-labelledby="products-heading">
      <div class="mx-auto max-w-7xl">
        <div class="rounded-2xl border border-stone-200 bg-white/80 p-4 shadow-[var(--shadow-sm)]">
          <label class="block">
            <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Produkte durchsuchen</span>
            <div class="relative">
              <span aria-hidden="true" class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">🔍</span>
              <input
                id="product-search"
                type="search"
                value="${escapeHtml(state.query)}"
                placeholder="z. B. Salat, Basilikum, regional oder frisch"
                aria-label="Produkte durchsuchen"
                class="w-full rounded-xl border border-stone-300 bg-stone-50 py-3 pl-11 pr-4 text-stone-900 transition placeholder:text-stone-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </div>
          </label>
        </div>

        <h2 id="products-heading" class="sr-only">Produktübersicht</h2>

        <div class="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div>
            <div class="lg:hidden">
              ${renderFilters()}
              <div class="h-4"></div>
            </div>

            <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-sm text-stone-600">
                <span class="font-display text-xl font-semibold text-stone-950">${filteredProducts.length}</span> ${filteredProducts.length === 1 ? 'Produkt' : 'Produkte'} sichtbar
              </p>
              <a href="${competitionFacts.links.team}" target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 text-sm font-medium text-emerald-800 transition hover:text-emerald-900">
                Teamprofil
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            ${renderProductsList()}
          </div>

          <aside class="hidden lg:flex lg:flex-col lg:gap-4 lg:sticky lg:top-24" aria-label="Filter und Warenkorb">
            ${renderFilters()}
            ${renderCartContent()}
          </aside>
        </div>
      </div>
    </section>
  `

  app.innerHTML =
    renderPageFrame({
      activePage: 'food',
      hero,
      content,
    }) +
    renderCartDrawer() +
    renderMobileCartBar()

  setupRevealObserver(app)
}

function handleClick(event) {
  const target = event.target.closest('[data-action]')
  if (!target) return

  const { action, value, id } = target.dataset

  switch (action) {
    case 'toggle-filters':
      state.filtersOpen = !state.filtersOpen
      render()
      break
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
  if (event.target.closest('[data-action="set-sort"]')) {
    state.sort = event.target.value
    render()
  }
}

app.addEventListener('click', handleClick)
app.addEventListener('input', handleInput)
app.addEventListener('change', handleChange)

bindPageSelect(app)
render()
