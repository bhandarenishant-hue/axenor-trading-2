import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import ProductImage from '../components/ProductImage'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import { getCategory, getProduct, getProductsByCategory } from '../data/products'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  if (!product) return <Navigate to="/404" replace />

  const category = getCategory(product.category)
  const related = getProductsByCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="py-5">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-slate">
            <Link to="/products" className="hover:text-navy">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={`/products?category=${category.slug}`} className="hover:text-navy">{category.short}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-navy">{product.name}</span>
          </nav>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-line">
              <ProductImage product={product} iconClass="h-16 w-16" />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">{category.name}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-navy sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate">{product.description}</p>

            <ul className="mt-7 space-y-2.5">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-navy">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button to={`/contact?product=${product.slug}`} variant="primary" size="lg">
                Send Inquiry <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/products" variant="outline" size="lg">
                Back to catalog
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate">Pricing, minimum order quantities and lead times are shared on inquiry.</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-14">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold text-navy">Specifications</h2>
            <p className="mt-2 text-sm text-slate">Indicative specifications. Final details are confirmed against your requirement.</p>
          </div>
          <div className="lg:col-span-8">
            <dl className="divide-y divide-line rounded-lg border border-line">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-6">
                  <dt className="text-sm font-medium text-slate">{k}</dt>
                  <dd className="text-sm text-navy sm:col-span-2">{v}</dd>
                </div>
              ))}
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-6">
                <dt className="text-sm font-medium text-slate">Pricing</dt>
                <dd className="text-sm text-navy sm:col-span-2">On request</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-20">
          <Container>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">More in {category.short}</h2>
              <Link to={`/products?category=${category.slug}`} className="hidden items-center gap-1.5 text-sm font-medium text-navy hover:text-gold-dark sm:inline-flex">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
