import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getCategory } from '../data/products'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const category = getCategory(product.category)
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_40px_-20px_rgba(11,31,51,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <ProductImage product={product} className="transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-dark">{category?.short}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">{product.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy">
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
