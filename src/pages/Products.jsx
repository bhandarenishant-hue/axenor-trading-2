import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Search, X } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import CategoryIcon from '../components/CategoryIcon'
import {
  categories,
  getCategory,
  getSource,
  getSubcategoriesByCategory,
  getSubcategory,
  products,
  sources,
  subcategories,
} from '../data/products'

function SubcategoryTile({ subcategory, count }) {
  return (
    <Link
      to={`/products?category=${subcategory.category}&sub=${subcategory.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-forest"
    >
      {subcategory.image && (
        <img
          src={subcategory.image}
          alt={subcategory.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(54,69,59,0)_35%,rgba(54,69,59,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="inline-flex items-center gap-2 rounded-full bg-sage px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-forest">
          {subcategory.short}
        </span>
        <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-ivory">{subcategory.name}</h3>
        <p className="mt-1 text-xs text-ivory/70">
          {count} {count === 1 ? 'type' : 'types'} · View range
        </p>
      </div>
    </Link>
  )
}

export default function Products() {
  const [params, setParams] = useSearchParams()
  const sub = params.get('sub') || ''
  const query = params.get('q') || ''
  const source = params.get('source') || ''
  const activeSub = getSubcategory(sub)
  const activeSource = getSource(source)
  const sourceCountry = activeSource?.country

  // A subcategory implies its parent category, even if the URL omits it.
  const category = activeSub ? activeSub.category : params.get('category') || ''
  const activeCategory = getCategory(category)
  const searching = query.trim().length > 0

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    // Changing category drops any subcategory that belonged to the old one.
    if (key === 'category') next.delete('sub')
    setParams(next, { replace: true })
  }

  // Count products in a group under the sourcing origin currently selected.
  const countIn = (predicate) =>
    products.filter((p) => predicate(p) && (!sourceCountry || p.sourceCountry === sourceCountry)).length

  // A subcategory tile is only useful if it still holds something once the
  // source filter is applied.
  const childSubs = category
    ? getSubcategoriesByCategory(category).filter((s) => countIn((p) => p.subcategory === s.slug) > 0)
    : []

  // Tiles are only a navigation aid, so they stay out of the way while searching
  // or once the visitor has already stepped into a subcategory.
  const showTiles = !searching && !activeSub && childSubs.length > 0

  // The catalog is small enough that filtering on every render costs nothing.
  const q = query.trim().toLowerCase()
  const filtered = products.filter((p) => {
    if (sourceCountry && p.sourceCountry !== sourceCountry) return false
    if (sub && p.subcategory !== sub) return false
    if (!sub && category && p.category !== category) return false
    // In a category view the subcategory tiles stand in for their products,
    // so those products are not repeated in the grid below.
    if (!sub && !q && category && showTiles && p.subcategory) return false
    if (!q) return true
    const haystack = [p.name, p.summary, p.description, ...p.highlights, ...Object.values(p.specs)]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })

  const heading = activeSub
    ? activeSub.name
    : activeCategory
      ? activeCategory.name
      : activeSource
        ? activeSource.filterLabel
        : 'All products'
  const blurb = activeSub
    ? activeSub.description
    : activeCategory
      ? activeCategory.description
      : activeSource
        ? `Product lines we source from suppliers in ${activeSource.country} and import for the Malaysian market.`
        : 'Product lines we source from international suppliers and import for the Malaysian market. Open any product to view details and send an inquiry.'

  const chip = (isActive) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'border-forest bg-forest text-ivory'
        : 'border-line bg-white text-slate hover:border-forest hover:text-forest'
    }`

  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="py-14 lg:py-20">
          {activeSub ? (
            <Link
              to={`/products?category=${activeSub.category}`}
              className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate transition-colors hover:text-forest"
            >
              <ArrowLeft className="h-4 w-4" />
              {getCategory(activeSub.category)?.name}
            </Link>
          ) : (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Catalog</p>
          )}
          <h1 className="text-4xl font-extrabold leading-tight text-forest sm:text-5xl">{heading}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">{blurb}</p>
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          {/* Sourcing origin, filtered independently of category */}
          <div className="mb-5 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by sourcing origin">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Origin</span>
            <button
              type="button"
              onClick={() => setParam('source', '')}
              aria-pressed={!source}
              className={chip(!source)}
            >
              All Products
            </button>
            {sources.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setParam('source', s.slug)}
                aria-pressed={source === s.slug}
                className={`${chip(source === s.slug)} inline-flex items-center gap-2`}
              >
                <span
                  aria-hidden="true"
                  className={`text-[10px] font-bold tracking-[0.08em] ${source === s.slug ? 'text-sage-light' : 'text-sage-dark'}`}
                >
                  {s.code}
                </span>
                {s.filterLabel}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              <button type="button" onClick={() => setParam('category', '')} aria-pressed={!category} className={chip(!category)}>
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setParam('category', c.slug)}
                  aria-pressed={category === c.slug}
                  className={chip(category === c.slug)}
                >
                  {c.short}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
              <input
                type="search"
                value={query}
                onChange={(e) => setParam('q', e.target.value)}
                placeholder="Search products"
                aria-label="Search products"
                className="w-full rounded-md border border-line bg-white py-2.5 pl-10 pr-10 text-sm text-forest placeholder:text-slate/60 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/30"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setParam('q', '')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-slate hover:text-forest"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Second-level chips, shown once a subcategory is open */}
          {activeSub && childSubs.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by type">
              <button type="button" onClick={() => setParam('sub', '')} className={chip(false)}>
                All in {getCategory(activeSub.category)?.short}
              </button>
              {childSubs.map((s) => (
                <button key={s.slug} type="button" onClick={() => setParam('sub', s.slug)} className={chip(sub === s.slug)}>
                  {s.short}
                </button>
              ))}
            </div>
          )}

          {/* Subcategory tiles */}
          {showTiles && (
            <div className="mt-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Browse by type</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {childSubs.map((s, i) => (
                  <Reveal key={s.slug} delay={i * 60}>
                    <SubcategoryTile subcategory={s} count={countIn((p) => p.subcategory === s.slug)} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* With tiles showing, a zero count means every product sits in a group,
              so the count line would just read "0 products" out of context. */}
          {!(showTiles && filtered.length === 0) && (
            <p className={`text-sm text-slate ${showTiles ? 'mt-12' : 'mt-8'}`} aria-live="polite">
              {showTiles && <span className="mr-1 text-forest">Also in {activeCategory?.short}:</span>}
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              {query && (
                <>
                  {' '}
                  for “<span className="text-forest">{query}</span>”
                </>
              )}
            </p>
          )}

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 5) * 50}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            !showTiles && (
              <div className="mt-6 rounded-lg border border-dashed border-line bg-white p-12 text-center">
                {/* A category with nothing catalogued yet is not a failed search. */}
                {activeCategory && !searching ? (
                  <>
                    <h2 className="text-lg font-bold text-forest">
                      {activeSource
                        ? `No ${activeCategory.name.toLowerCase()} listed from ${activeSource.country} yet.`
                        : `We source ${activeCategory.name.toLowerCase()} to order.`}
                    </h2>
                    <p className="mx-auto mt-2 max-w-md text-sm text-slate">
                      {activeSource
                        ? 'Clear the origin filter to see this category from our other sourcing markets, or tell us what you need.'
                        : 'This range is not catalogued yet. Tell us the specification, quantity and timeline, and we will come back with sourcing options.'}
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <Button to="/contact" variant="primary">
                        Discuss your sourcing needs <ArrowRight className="h-4 w-4" />
                      </Button>
                      <button
                        type="button"
                        onClick={() => setParams({}, { replace: true })}
                        className="rounded-md border border-forest/25 px-5 py-2.5 text-sm font-medium text-forest hover:bg-forest hover:text-ivory"
                      >
                        View all products
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-lg font-bold text-forest">No products match your search.</h2>
                    <p className="mt-2 text-sm text-slate">
                      Try a different term, clear the filters, or send an inquiry describing what you need.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setParams({}, { replace: true })}
                        className="rounded-md border border-forest/25 px-5 py-2.5 text-sm font-medium text-forest hover:bg-forest hover:text-ivory"
                      >
                        Clear filters
                      </button>
                    </div>
                  </>
                )}
              </div>
            )
          )}

          {/* Cross-link to grouped ranges from the unfiltered view */}
          {!category && !searching && subcategories.length > 0 && (
            <div className="mt-16 rounded-xl border border-line bg-white p-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Grouped ranges</h2>
              <p className="mt-2 text-sm text-slate">
                Some product lines are grouped by type. Open a group to see every variant.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {subcategories.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/products?category=${s.category}&sub=${s.slug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-forest transition-colors hover:border-forest hover:bg-forest hover:text-ivory"
                  >
                    <CategoryIcon name={getCategory(s.category)?.icon} className="h-4 w-4" />
                    {s.name}
                    <span className="text-xs opacity-60">
                      {products.filter((p) => p.subcategory === s.slug).length}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
