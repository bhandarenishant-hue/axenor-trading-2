import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from './ProductCard'

const AUTOPLAY_DELAY = 3500

export default function ProductCarousel({ products }) {
  const reduce = useReducedMotion()

  // Created once via a lazy initialiser, so a re-render can never spin up a
  // second timer. Autoplay pauses itself on hover, on pointer interaction and
  // on keyboard focus, and resumes when the interaction ends.
  const [autoplay] = useState(() =>
    Autoplay({
      delay: AUTOPLAY_DELAY,
      playOnInit: false, // started below, once we know the motion preference
      stopOnInteraction: false, // a swipe pauses and restarts rather than stopping for good
      // Hover pausing is handled with explicit React handlers below rather than
      // the plugin's own mouse tracking, which misses the case where the
      // pointer is already inside the carousel as it initialises.
      stopOnMouseEnter: false,
      stopOnFocusIn: true,
    }),
  )

  const [emblaRef, embla] = useEmblaCarousel(
    // `duration` is Embla's tween scalar, not milliseconds. Measured in the
    // browser, 16 lands around 650ms, which reads as premium without dragging.
    { align: 'start', loop: true, duration: 16, skipSnaps: false },
    [autoplay],
  )
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

  // Honour reduced motion: manual arrows still work, nothing moves on its own.
  useEffect(() => {
    if (!embla) return
    if (reduce) autoplay.stop()
    else autoplay.play()
  }, [embla, autoplay, reduce])

  // An arrow click moves immediately and restarts the full interval, so the
  // next automatic slide is never cut short. `stop` then `play` is used rather
  // than `reset`, which only re-arms a timer that is already running.
  const scroll = useCallback(
    (direction) => {
      if (!embla) return
      if (direction === 'prev') embla.scrollPrev()
      else embla.scrollNext()
      if (reduce) return
      autoplay.stop()
      autoplay.play()
    },
    [embla, autoplay, reduce],
  )

  // Looping keeps both directions available; the guards only matter when there
  // are too few products to fill the track.
  const canPrev = embla ? embla.canScrollPrev() : false
  const canNext = embla ? embla.canScrollNext() : true

  const arrow =
    'flex h-11 w-11 items-center justify-center rounded-full border border-forest/20 text-forest transition-all duration-200 hover:border-forest hover:bg-forest hover:text-ivory hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100 disabled:hover:border-forest/20 disabled:hover:bg-transparent disabled:hover:text-forest'

  // Pointer over the products pauses the rotation so nothing moves while
  // someone is reading or aiming at a card; leaving resumes it.
  const pause = useCallback(() => autoplay.stop(), [autoplay])
  const resume = useCallback(() => {
    if (!reduce) autoplay.play()
  }, [autoplay, reduce])

  return (
    <div onMouseEnter={pause} onMouseLeave={resume}>
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
        <button type="button" className={arrow} onClick={() => scroll('prev')} disabled={!canPrev} aria-label="Previous products">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" className={arrow} onClick={() => scroll('next')} disabled={!canNext} aria-label="Next products">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
