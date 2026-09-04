import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Globe2,
  MapPin,
  MonitorSmartphone,
  PackageSearch,
  Ship,
  ShieldCheck,
  Store,
  Truck,
} from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import HeroSlider from '../components/HeroSlider'
import ProductCarousel from '../components/ProductCarousel'
import CategoryIcon from '../components/CategoryIcon'
import SupplyChainFlow from '../components/SupplyChainFlow'
import SourcingNetwork from '../components/SourcingNetwork'
import { motion } from 'motion/react'
import { FadeUp, SlideIn, Stagger, StaggerItem } from '../components/motion'
import { ease } from '../lib/animation'
import { company } from '../data/company'
import { categories, featuredProducts, products } from '../data/products'

const HERO_IMAGE = '/images/hero.jpg'

const slides = [
  {
    eyebrow: company.positioning,
    title: 'Global Sourcing.',
    accent: 'Local Reach.',
    text: company.intro,
    primary: { label: 'Explore Our Products', to: '/products' },
    secondary: { label: 'Partner With Axenor', to: '/contact' },
  },
  {
    eyebrow: 'Sourcing across Asia',
    title: 'From India and China.',
    accent: 'Into the Malaysian market.',
    text: 'We source textiles, garments, consumer goods, home accessories and electronics from trusted international suppliers, then handle the import into Malaysia.',
    primary: { label: 'Discuss Your Sourcing Needs', to: '/contact' },
    secondary: { label: 'About Axenor', to: '/about' },
  },
  {
    eyebrow: 'Import and distribution',
    title: 'Supplying retailers,',
    accent: 'e-commerce and B2B.',
    text: `From our ${company.headquarters} base we distribute imported ranges to businesses across ${company.serviceArea}.`,
    primary: { label: 'Contact Our Team', to: '/contact' },
    secondary: { label: 'Explore Our Products', to: '/products' },
  },
]

const features = [
  {
    icon: Globe2,
    title: 'Global sourcing',
    text: 'We source from established suppliers across Asia, with particularly strong sourcing relationships in India and China.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable supply',
    text: 'One team coordinates sourcing, import and onward delivery, so stock arrives against the specification you agreed.',
  },
  {
    icon: MapPin,
    title: 'Local reach',
    text: `A ${company.hub.city} base means local support for retailers, e-commerce sellers and B2B buyers across ${company.serviceArea}.`,
  },
]

const steps = [
  {
    icon: PackageSearch,
    title: 'Source',
    text: 'We source quality products from trusted suppliers across Asia, particularly India and China.',
  },
  {
    icon: Ship,
    title: 'Import',
    text: 'We coordinate international sourcing and import operations to bring products into the Malaysian market.',
  },
  {
    icon: Truck,
    title: 'Distribute',
    text: `We supply imported products to retailers, e-commerce platforms and B2B clients across ${company.serviceArea}.`,
  },
]

const customerIcons = [Store, MonitorSmartphone, Building2]

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
        <p className="mt-1 text-xs text-ivory/70">
          {count > 0 ? `${count} ${count === 1 ? 'product' : 'products'} · View range` : 'Sourced to order · Enquire'}
        </p>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <HeroSlider slides={slides} image={HERO_IMAGE} />

      {/* Business model, bridging the hero into the story below */}
      <section className="relative z-10 -mt-12 pb-20 lg:pb-24">
        <Container>
          <FadeUp>
            <SupplyChainFlow />
          </FadeUp>
        </Container>
      </section>

      {/* About */}
      <section className="overflow-hidden border-y border-line bg-white py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <SlideIn from="left" className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">About {company.name}</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] text-forest sm:text-5xl">
              A Malaysian trading and
              <br />
              <span className="text-sage-dark">import-export company.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">{company.about}</p>
            <p className="mt-4 max-w-lg leading-relaxed text-slate">{company.aboutSecondary}</p>
            <Button to="/about" variant="outline" size="lg" className="mt-8">
              More about us <ArrowRight className="h-4 w-4" />
            </Button>
          </SlideIn>
          <SlideIn from="right" delay={0.1} className="lg:col-span-6">
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={HERO_IMAGE}
                  alt="Container ship, cargo aircraft and an Axenor Trading container at a port"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <FadeUp delay={0.35} className="absolute -bottom-6 -left-4 rounded-lg border border-sage/40 bg-forest p-5 text-ivory shadow-xl sm:-left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">Headquarters</p>
                <p className="mt-1 font-heading text-2xl font-bold">{company.hub.city}</p>
                <p className="text-sm text-ivory/70">{company.basedIn}</p>
              </FadeUp>
            </div>
          </SlideIn>
        </Container>
      </section>

      {/* Product categories */}
      <section className="py-20 lg:py-24">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Products We Source"
              title="Five product lines, one supply partner."
              description="Sourced from trusted international suppliers and imported for the Malaysian market."
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
                  <h3 className="font-heading text-lg font-bold leading-snug text-forest">
                    Looking for something we do not list?
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
                    Discuss your sourcing needs <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      {/* Featured products */}
      <section className="border-y border-line bg-white py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <FadeUp>
              <SectionHeading eyebrow="From the Catalogue" title="A selection of what we source." />
            </FadeUp>
            <FadeUp delay={0.1}>
              <Button to="/products" variant="ghost" className="px-0">
                View full catalogue <ArrowRight className="h-4 w-4" />
              </Button>
            </FadeUp>
          </div>
          <FadeUp delay={0.15} className="mt-12">
            <ProductCarousel products={featuredProducts} />
          </FadeUp>
        </Container>
      </section>

      {/* Global sourcing network */}
      <SourcingNetwork />

      {/* How we work */}
      <section className="py-20 lg:py-28">
        <Container>
          <FadeUp>
            <SectionHeading
              align="center"
              eyebrow="How We Work"
              title="Source. Import. Distribute."
              description="Three stages that take a product from an overseas supplier to a business in Malaysia."
            />
          </FadeUp>
          <div className="relative mt-16">
            <motion.div
              aria-hidden="true"
              className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px origin-left bg-sage md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease, delay: 0.3 }}
            />
            <Stagger gap={0.18} className="grid gap-10 md:grid-cols-3">
              {steps.map((s, i) => (
                <StaggerItem key={s.title} className="flex flex-col items-center text-center">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-sage bg-ivory text-sage-dark">
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-forest font-heading text-[11px] font-bold text-ivory">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-forest">{s.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate">{s.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* Who we supply */}
      <section className="border-y border-line bg-white py-20 lg:py-24">
        <Container>
          <FadeUp>
            <SectionHeading
              eyebrow="Who We Supply"
              title="Built for businesses that resell."
              description={`We supply businesses across ${company.serviceArea}.`}
            />
          </FadeUp>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {company.customers.map((c, i) => {
              const Icon = customerIcons[i] ?? Store
              return (
                <StaggerItem key={c.title} className="rounded-xl border border-line bg-ivory p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest text-sage">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-forest">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{c.text}</p>
                </StaggerItem>
              )
            })}
          </Stagger>
          <FadeUp delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Serving</span>
            {[company.basedIn, 'Southeast Asia'].map((place) => (
              <span
                key={place}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-forest"
              >
                <MapPin className="h-3.5 w-3.5 text-sage-dark" />
                {place}
              </span>
            ))}
          </FadeUp>
        </Container>
      </section>

      {/* Why Axenor */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <FadeUp>
              <SectionHeading eyebrow="Why Axenor" title="Global sourcing, reliable supply, local reach." />
            </FadeUp>
            {company.experience && (
              <FadeUp delay={0.1}>
                <div className="flex items-center gap-5 rounded-xl border border-sage/50 bg-forest p-6 text-ivory lg:min-w-[22rem]">
                  <span className="font-heading text-5xl font-extrabold leading-none text-sage-light">
                    {company.experience.years}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-light">
                      {company.experience.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ivory/75">{company.experience.statement}</p>
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((f) => (
              <StaggerItem
                key={f.title}
                className="flex gap-5 rounded-xl border border-line bg-white p-7 shadow-[0_24px_50px_-30px_rgba(54,69,59,0.35)]"
              >
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
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">{company.commitment}</p>
          </FadeUp>
        </Container>
      </section>

      {/* CTA band */}
      <section className="relative isolate overflow-hidden py-24 lg:py-32">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_70%]"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-forest/85" />
        <Container className="text-center">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-light">Get in touch</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight text-ivory sm:text-5xl">
              Discuss your sourcing needs.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ivory/75">
              Tell us the product, quantity and timeline. We will come back with sourcing options and a quotation.
            </p>
            <Button to="/contact" variant="sage" size="lg" className="mt-9">
              Partner With Axenor <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeUp>
        </Container>
      </section>
    </>
  )
}
