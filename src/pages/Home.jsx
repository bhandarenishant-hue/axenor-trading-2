import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, ClipboardList, Handshake, PackageCheck, Search, ShieldCheck } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import HeroSlider from '../components/HeroSlider'
import ProductCarousel from '../components/ProductCarousel'
import CategoryIcon from '../components/CategoryIcon'
import { motion } from 'motion/react'
import { FadeUp, SlideIn, Stagger, StaggerItem } from '../components/motion'
import { ease } from '../lib/animation'
import { company } from '../data/company'
import { categories, featuredProducts, products } from '../data/products'

const HERO_IMAGE = '/images/hero.jpg'

const slides = [
  {
    eyebrow: `Export-oriented B2B trading · ${company.basedIn}`,
    title: 'Connecting Markets.',
    accent: 'Building Trade.',
    text: company.about,
    primary: { label: 'Explore Products', to: '/products' },
    secondary: { label: 'Send an Inquiry', to: '/contact' },
  },
  {
    eyebrow: 'Sourcing from India',
    title: 'Sourced in India.',
    accent: 'Supplied to your market.',
    text: 'From textiles and personal care to hardware, spices and snacks, we source against your specification and coordinate everything through to shipment.',
    primary: { label: 'View Categories', to: '/products' },
    secondary: { label: 'About Axenor', to: '/about' },
  },
  {
    eyebrow: 'Start a conversation',
    title: 'Tell us what you need.',
    accent: 'We will source it.',
    text: 'Share the product, quantity and destination. We come back with sourcing options and a clear quotation.',
    primary: { label: 'Send Inquiry', to: '/contact' },
    secondary: { label: 'Browse Catalog', to: '/products' },
  },
]

const features = [
  {
    icon: Boxes,
    title: 'Wide product range',
    text: 'Five product lines spanning consumer goods, agricultural commodities and industrial hardware from a single partner.',
  },
  {
    icon: ShieldCheck,
    title: 'Sourcing against specification',
    text: 'Products are sourced to the grade, size, finish and packaging you specify, with samples where required.',
  },
  {
    icon: Handshake,
    title: 'Single point of contact',
    text: 'One team handles suppliers, quotations, packing and documentation so you deal with one contact throughout.',
  },
]

const steps = [
  { icon: Search, title: 'Share your requirement', text: 'Product, specification, quantity and destination through the inquiry form.' },
  { icon: ClipboardList, title: 'Sourcing and quotation', text: 'We source from our supplier network in India and return a quotation.' },
  { icon: PackageCheck, title: 'Order and fulfilment', text: 'Production, quality checks, packing and export documentation through to shipment.' },
]

function CategoryTile({ category, large = false }) {
  const count = products.filter((p) => p.category === category.slug).length
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className={`group relative block overflow-hidden rounded-xl bg-forest ${large ? 'aspect-[4/5] sm:aspect-auto sm:h-full' : 'aspect-[4/3]'}`}
    >
      {category.image ? (
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-sage">
          <CategoryIcon name={category.icon} className="h-12 w-12" strokeWidth={1.2} />
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(54,69,59,0)_35%,rgba(54,69,59,0.85)_100%)] transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-sage px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-forest shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)]">
          <CategoryIcon name={category.icon} className="h-3.5 w-3.5" strokeWidth={2} />
          {category.short}
        </span>
        <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-ivory sm:text-xl">{category.name}</h3>
        <p className="mt-1 text-xs text-ivory/70">{count} products · View range</p>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <HeroSlider slides={slides} image={HERO_IMAGE} />

      {/* Why Axenor */}
      <section className="relative z-10 -mt-10 pb-20 lg:pb-24">
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-3">
            {features.map((f) => (
              <StaggerItem key={f.title} className="flex gap-5 rounded-xl border border-line bg-white p-7 shadow-[0_24px_50px_-30px_rgba(54,69,59,0.35)]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-forest text-sage">
                  <f.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-forest">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{f.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* About statement */}
      <section className="overflow-hidden border-y border-line bg-white py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <SlideIn from="left" className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">About {company.name}</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-forest sm:text-5xl lg:text-6xl">
              Connecting
              <br />
              Markets.
              <br />
              <span className="text-sage-dark">Building Trade.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">{company.about}</p>
            <p className="mt-4 max-w-lg leading-relaxed text-slate">
              We connect international buyers with Indian products across consumer, agricultural and industrial categories,
              handling the sourcing and coordination on the ground so you receive a clear quotation and a single point of
              contact through to shipment.
            </p>
            <Button to="/about" variant="outline" size="lg" className="mt-8">
              More about us <ArrowRight className="h-4 w-4" />
            </Button>
          </SlideIn>
          <SlideIn from="right" delay={0.1} className="lg:col-span-6">
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <img src={HERO_IMAGE} alt="Container ship, cargo aircraft and Axenor Trading truck at a port" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
              <FadeUp delay={0.35} className="absolute -bottom-6 -left-4 rounded-lg border border-sage/40 bg-forest p-5 text-ivory shadow-xl sm:-left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">Sourcing origin</p>
                <p className="mt-1 font-heading text-2xl font-bold">{company.sourcingOrigin}</p>
              </FadeUp>
            </div>
          </SlideIn>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-20 lg:py-24">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Product Categories"
              title="Five product lines, one partner."
              description="Explore the categories we source and supply from India."
            />
          </FadeUp>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <StaggerItem className="sm:row-span-2">
              <CategoryTile category={categories[0]} large />
            </StaggerItem>
            {categories.slice(1).map((c) => (
              <StaggerItem key={c.slug}>
                <CategoryTile category={c} />
              </StaggerItem>
            ))}
            <StaggerItem>
              <Link
                to="/contact"
                className="flex aspect-[4/3] flex-col justify-between rounded-xl border border-dashed border-sage/60 bg-white p-6 transition-colors hover:bg-ivory-dark"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Not listed?</p>
                <div>
                  <h3 className="font-heading text-lg font-bold leading-snug text-forest">Looking for something else from India?</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
                    Send an inquiry <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* Featured products carousel */}
      <section className="border-y border-line bg-white py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <FadeUp>
              <SectionHeading eyebrow="Featured Products" title="A selection from the catalog." />
            </FadeUp>
            <FadeUp delay={0.1}>
              <Button to="/products" variant="ghost" className="px-0">
                View full catalog <ArrowRight className="h-4 w-4" />
              </Button>
            </FadeUp>
          </div>
          <FadeUp delay={0.15} className="mt-12">
            <ProductCarousel products={featuredProducts} />
          </FadeUp>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-forest py-20 text-ivory lg:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              light
              align="center"
              eyebrow="How We Work"
              title="From inquiry to shipment."
              description="A straightforward process designed for international buyers sourcing from India."
            />
          </FadeUp>
          <div className="relative mt-16">
            <motion.div
              aria-hidden="true"
              className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px origin-left bg-sage/50 md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease, delay: 0.3 }}
            />
            <Stagger gap={0.18} className="grid gap-10 md:grid-cols-3">
              {steps.map((s, i) => (
                <StaggerItem key={s.title} className="flex flex-col items-center text-center">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-sage bg-forest text-sage">
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-sage font-heading text-[11px] font-bold text-forest">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/65">{s.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative isolate overflow-hidden py-24 lg:py-32">
        <img src={HERO_IMAGE} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_70%]" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-forest/85" />
        <Container className="text-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">Get in touch</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-ivory sm:text-5xl">
              Ready to discuss your requirement?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ivory/75">
              Send us the product, quantity and destination. We will respond with sourcing options and a quotation.
            </p>
            <Button to="/contact" variant="sage" size="lg" className="mt-9">
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
