import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'

export default function ProductCarousel({ products }) {
  const [emblaRef, embla] = useEmblaCarousel({ align: 'start', loop: false, skipSnaps: false })
  const [, setTick] = useState(0)

  // Re-render on slide changes so the arrow states below stay current.
  useEffect(() => {
    if (!embla) return
    const bump = () => setTick((t) => t + 1)
    embla.on('select', bump)
    embla.on('reInit', bump)
    return () => {
      embla.off('select', bump)
      embla.off('reInit', bump)
    }
  }, [embla])

  const canPrev = embla ? embla.canScrollPrev() : false
  const canNext = embla ? embla.canScrollNext() : true

  const arrow =
    'flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-cream disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-navy/20 disabled:hover:bg-transparent disabled:hover:text-navy'

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-6 flex touch-pan-y">
          {products.map((p) => (
            <div key={p.slug} className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/3">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-2">
        <button type="button" className={arrow} onClick={() => embla?.scrollPrev()} disabled={!canPrev} aria-label="Previous products">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" className={arrow} onClick={() => embla?.scrollNext()} disabled={!canNext} aria-label="Next products">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
