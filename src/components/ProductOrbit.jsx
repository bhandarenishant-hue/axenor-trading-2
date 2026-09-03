import { Link } from 'react-router-dom'
import { featuredProducts, getCategory } from '../data/products'
import CargoContainer from './CargoContainer'

// Circular product images orbiting anticlockwise around the brand icon.
// The ring rotates one way and each item counter-rotates so photos stay upright.
export default function ProductOrbit({ items = featuredProducts.slice(0, 6), duration = 48 }) {
  const step = 360 / items.length
  return (
    <div className="orbit group relative mx-auto" aria-label="Featured products" role="group">
      {/* Guide rings */}
      <div className="absolute inset-0 rounded-full border border-dashed border-gold/40" />
      <div className="absolute inset-[22%] rounded-full border border-cream/10" />

      {/* Centre: tilted cargo container carrying the site logo */}
      <div className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2 -rotate-6 drop-shadow-[0_24px_30px_rgba(0,0,0,0.6)]">
        <CargoContainer className="w-full" />
      </div>

      {/* Rotating ring */}
      <div className="orbit-ring absolute inset-0" style={{ animationDuration: `${duration}s` }}>
        {items.map((p, i) => (
          <div
            key={p.slug}
            className="orbit-item absolute left-1/2 top-1/2"
            style={{ transform: `translate(-50%, -50%) rotate(${i * step}deg) translateX(var(--orbit-radius)) rotate(${-i * step}deg)` }}
          >
            <div className="orbit-counter flex flex-col items-center" style={{ animationDuration: `${duration}s` }}>
              <Link
                to={`/products/${p.slug}`}
                title={p.name}
                className="block overflow-hidden rounded-full border-[3px] border-cream/90 bg-navy shadow-[0_16px_36px_-14px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                style={{ width: 'var(--orbit-item)', height: 'var(--orbit-item)' }}
              >
                {p.image ? (
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-widest text-gold">{p.name}</span>
                )}
              </Link>
              <span className="mt-2 whitespace-nowrap rounded-full border border-gold/50 bg-navy/80 px-3 py-1 font-heading text-[11px] font-bold tracking-wide text-cream shadow-md backdrop-blur-sm sm:text-xs">
                {getCategory(p.category)?.short ?? p.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
