import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, Handshake, MapPin, Ship } from 'lucide-react'
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
    text: 'We work with established suppliers across Asia, particularly in India and China, to source products against the specifications our clients set.',
  },
  {
    icon: Ship,
    title: 'Import',
    text: 'We coordinate international sourcing and import operations so that stock arrives ready for the Malaysian market.',
  },
  {
    icon: Handshake,
    title: 'Distribution',
    text: 'We supply retailers, e-commerce platforms and B2B clients, aiming for dependable repeat supply rather than one-off transactions.',
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
              A Malaysian trading and import-export company.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">{company.about}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate">{company.aboutSecondary}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="What we do" title="Sourcing, import and distribution." />
            <p className="mt-5 leading-relaxed text-slate">
              {company.name} connects international suppliers with businesses in Malaysia. We source products abroad,
              import them, and distribute them to retailers, e-commerce platforms and B2B clients, so our clients deal
              with one partner rather than a chain of intermediaries. We do not manufacture: our role is sourcing and
              supply.
            </p>
            {company.experience && (
              <p className="mt-4 leading-relaxed text-slate">{company.experience.statement}</p>
            )}

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Sourcing markets</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {company.sourcingMarkets.map((m) => (
                  <li key={m.name} className="rounded-full border border-line bg-white px-3 py-1 text-sm text-forest">
                    {m.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">Serving</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[company.basedIn, 'Southeast Asia'].map((place) => (
                  <li
                    key={place}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-sm text-forest"
                  >
                    <MapPin className="h-3.5 w-3.5 text-sage-dark" />
                    {place}
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Registry details, shown only once they exist in company.js */}
      {company.registration && (
        <section className="border-b border-line py-20">
          <Container className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <SectionHeading eyebrow="Company information" title="Registered details." />
              <p className="mt-5 text-sm leading-relaxed text-slate">
                As recorded with the {company.registration.authority}.
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-8">
              <dl className="divide-y divide-line rounded-lg border border-line bg-white">
                {[
                  ['Registered name', company.legalName],
                  ['Company number', company.registration.formerNumber
                    ? `${company.registration.number} (${company.registration.formerNumber})`
                    : company.registration.number],
                  ['Incorporated', company.registration.incorporated],
                  ['Entity type', company.registration.type],
                  ['Nature of business', company.registration.natureOfBusiness],
                  ['Country of incorporation', company.registration.country],
                ]
                  .filter(([, value]) => value)
                  .map(([label, value]) => (
                    <div key={label} className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-6">
                      <dt className="text-sm font-medium text-slate">{label}</dt>
                      <dd className="text-sm text-forest sm:col-span-2">{value}</dd>
                    </div>
                  ))}
                {company.contact.registeredAddress && (
                  <div className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-6">
                    <dt className="text-sm font-medium text-slate">Registered office</dt>
                    <dd className="text-sm text-forest sm:col-span-2">
                      {company.contact.registeredAddress.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="py-20">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-forest">Have a sourcing requirement?</h2>
            <p className="mt-2 text-slate">Send the details and we will come back with sourcing options.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg">
            Discuss Your Sourcing Needs <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  )
}
