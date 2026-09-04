import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { getCategory, getSubcategory } from '../data/products'
import ProductImage from './ProductImage'

export default function ProductCard({ product }) {
  const category = getCategory(product.category)
  // Prefer the narrower label, so a saree reads "Sarees" rather than "Textiles".
  const label = (product.subcategory && getSubcategory(product.subcategory)?.short) || category?.short
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-sage/60 hover:shadow-[0_18px_40px_-20px_rgba(54,69,59,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <ProductImage product={product} className="transition-transform duration-500 group-hover:scale-[1.03]" />
        {/* Where the line is imported from. Kept small so it reads as a note
            on the photo rather than a badge competing with the product name. */}
        {product.sourceLabel && (
          <span className="absolute right-3 top-3 rounded-full bg-forest/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ivory backdrop-blur-sm">
            {product.sourceLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-dark">{label}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-forest">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">{product.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
