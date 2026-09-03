import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import ProductOrbit from './ProductOrbit'
import { ease } from '../lib/animation'

const INTERVAL = 6500

export default function HeroSlider({ slides, image }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const paused = useRef(false)
  const reduce = useReducedMotion()

  const go = useCallback(
    (next) => {
      setDirection(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1)
      setIndex((next + slides.length) % slides.length)
    },
    [index, slides.length],
  )

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        setDirection(1)
        setIndex((i) => (i + 1) % slides.length)
      }
    }, INTERVAL)
    return () => clearInterval(id)
  }, [slides.length])

  const slide = slides[index]

  const textVariants = {
    enter: (d) => (reduce ? { opacity: 0 } : { opacity: 0, x: -60 * d }),
    center: { opacity: 1, x: 0 },
    exit: (d) => (reduce ? { opacity: 0 } : { opacity: 0, x: 40 * d }),
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-forest text-ivory"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {/* Background */}
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
      />
      <div className="absolute inset-0 -z-10 bg-forest/60" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(54,69,59,0.92)_0%,rgba(54,69,59,0.7)_45%,rgba(54,69,59,0.25)_100%)]" />

      <Container className="relative flex min-h-[560px] flex-col justify-center py-20 lg:min-h-[680px] lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.65, ease }}
              >
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sage/60 bg-forest/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sage-light backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {slide.eyebrow}
                </p>
                <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.75rem]">
                  {slide.title}
                  {slide.accent && (
                    <>
                      <br />
                      <span className="text-sage-light">{slide.accent}</span>
                    </>
                  )}
                </h1>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/80">{slide.text}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button to={slide.primary.to} variant="sage" size="lg">
                    {slide.primary.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  {slide.secondary && (
                    <Button
                      to={slide.secondary.to}
                      variant="inverse"
                      size="lg"
                      className="bg-transparent text-ivory ring-1 ring-ivory/40 hover:bg-ivory hover:text-forest"
                    >
                      {slide.secondary.label}
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <ProductOrbit />
          </div>
        </div>

        {/* Controls */}
        <div className="mt-14 flex items-center justify-between">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-sage' : 'w-4 bg-ivory/35 hover:bg-ivory/60'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-sage hover:bg-sage hover:text-forest"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-sage hover:bg-sage hover:text-forest"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
