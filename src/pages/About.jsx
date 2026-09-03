import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, FileCheck2, Handshake } from 'lucide-react'
import Container from '../components/Container'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CategoryIcon from '../components/CategoryIcon'
import { company } from '../data/company'
import { categories } from '../data/products'

const pillars = [
  {
    icon: Boxes,
    title: 'Sourcing',
    text: 'We work with manufacturers and producers across India to source products against buyer specifications.',
  },
  {
    icon: FileCheck2,
    title: 'Coordination',
    text: 'We manage quotations, sampling, packing and export documentation so buyers deal with a single point of contact.',
  },
  {
    icon: Handshake,
    title: 'Long-term supply',
    text: 'Our aim is repeat, dependable supply relationships rather than one-off transactions.',
  },
]

export default function About() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <Container className="py-16 lg:py-24">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">About {company.name}</p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-forest sm:text-5xl">
              A trading partner for buyers sourcing from India.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">{company.about}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="What we do" title="Export-oriented B2B trading." />
            <p className="mt-5 leading-relaxed text-slate">
              {company.name} connects international buyers with Indian products across consumer, agricultural and industrial
              categories. We handle the sourcing and coordination on the ground so that buyers receive a clear quotation and
              a single point of contact through to shipment.
            </p>
            {company.markets.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Markets served</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {company.markets.map((m) => (
                    <li key={m} className="rounded-full border border-line bg-white px-3 py-1 text-sm text-forest">{m}</li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
          <div className="grid gap-5 lg:col-span-7">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="flex gap-5 rounded-lg border border-line bg-white p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-forest text-sage">
                  <p.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-forest">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest py-20 text-ivory lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading light eyebrow="Product lines" title="Five categories, one point of contact." />
          </Reveal>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((c, i) => (
              <Reveal key={c.slug} as="li" delay={i * 60} className="bg-forest p-6">
                <Link to={`/products?category=${c.slug}`} className="group block">
                  <CategoryIcon name={c.icon} className="h-6 w-6 text-sage" strokeWidth={1.4} />
                  <h3 className="mt-5 font-heading text-[15px] font-bold leading-snug">{c.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sage-light">
                    View <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-forest">Have a requirement in mind?</h2>
            <p className="mt-2 text-slate">Send the details and we will come back with sourcing options.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg">
            Send Inquiry <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  )
}
