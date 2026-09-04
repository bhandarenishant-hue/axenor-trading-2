import { Link } from 'react-router-dom'
import { getCategory, orbitProducts } from '../data/products'

// Circular product images orbiting anticlockwise around the brand mark.
// The ring rotates one way and each item counter-rotates so photos and
// labels stay upright as they travel.
export default function ProductOrbit({ items = orbitProducts, duration = 48 }) {
  const step = 360 / items.length
  return (
    <div className="orbit group relative mx-auto" aria-label="Featured products" role="group">
      {/* Guide rings */}
      <div className="absolute inset-0 rounded-full border border-dashed border-sage/40" />
      <div className="absolute inset-[22%] rounded-full border border-ivory/10" />

      {/* Centre brand mark */}
      <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ring-8 ring-forest/60">
        <img src="/brand/icon.png" alt="" aria-hidden="true" className="w-[62%]" />
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
                className="block overflow-hidden rounded-full border-[3px] border-ivory/90 bg-forest shadow-[0_16px_36px_-14px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                style={{ width: 'var(--orbit-item)', height: 'var(--orbit-item)' }}
              >
                {p.image ? (
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-widest text-sage">{p.name}</span>
                )}
              </Link>
              <span className="mt-1.5 whitespace-nowrap rounded-full border border-sage/50 bg-forest/85 px-2.5 py-0.5 font-heading text-[10px] font-bold tracking-wide text-ivory shadow-md backdrop-blur-sm sm:mt-2 sm:px-3 sm:py-1 sm:text-[11px] lg:text-xs">
                {getCategory(p.category)?.short ?? p.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
