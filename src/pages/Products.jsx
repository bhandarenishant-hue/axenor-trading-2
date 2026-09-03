import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import Container from '../components/Container'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { categories, products } from '../data/products'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') || ''
  const query = params.get('q') || ''

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      if (category && p.category !== category) return false
      if (!q) return true
      const haystack = [p.name, p.summary, p.description, ...p.highlights, ...Object.values(p.specs)].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [category, query])

  const activeCategory = categories.find((c) => c.slug === category)

  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="py-14 lg:py-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Catalog</p>
          <h1 className="text-4xl font-extrabold leading-tight text-forest sm:text-5xl">
            {activeCategory ? activeCategory.name : 'All products'}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            {activeCategory
              ? activeCategory.description
              : 'Browse our product lines sourced from India. Open any product to view details and send an inquiry.'}
          </p>
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              <button
                type="button"
                onClick={() => setParam('category', '')}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  !category ? 'border-forest bg-forest text-ivory' : 'border-line bg-white text-slate hover:border-forest hover:text-forest'
                }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setParam('category', c.slug)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    category === c.slug ? 'border-forest bg-forest text-ivory' : 'border-line bg-white text-slate hover:border-forest hover:text-forest'
                  }`}
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

          <p className="mt-8 text-sm text-slate" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            {query && (
              <>
                {' '}for “<span className="text-forest">{query}</span>”
              </>
            )}
          </p>

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 5) * 50}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-line bg-white p-12 text-center">
              <h2 className="text-lg font-bold text-forest">No products match your search.</h2>
              <p className="mt-2 text-sm text-slate">Try a different term, clear the filters, or send an inquiry describing what you need.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setParams({}, { replace: true })}
                  className="rounded-md border border-forest/25 px-5 py-2.5 text-sm font-medium text-forest hover:bg-forest hover:text-ivory"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
