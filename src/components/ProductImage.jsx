import { getCategory } from '../data/products'
import CategoryIcon from './CategoryIcon'

// Renders real photography when `product.image` is set; otherwise a restrained
// branded placeholder so the layout reads correctly before photos are supplied.
export default function ProductImage({ product, className = '', iconClass = 'h-10 w-10' }) {
  const category = getCategory(product.category)

  if (product.image) {
    return (
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-navy ${className}`}
      role="img"
      aria-label={`${product.name} placeholder image`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#f8f7f4 1px, transparent 1px), linear-gradient(90deg, #f8f7f4 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-gold/20" />
      <div className="absolute -bottom-14 -left-14 h-48 w-48 rounded-full border border-gold/15" />
      <div className="relative flex flex-col items-center gap-3 text-gold">
        <CategoryIcon name={category?.icon} className={iconClass} strokeWidth={1.2} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/50">{category?.short}</span>
      </div>
    </div>
  )
}
