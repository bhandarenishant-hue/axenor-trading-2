import { ArrowDown, Globe2 } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { FadeUp, Stagger, StaggerItem } from './motion'
import { company } from '../data/company'

// Country codes rather than flag emoji: Windows renders flag emoji as plain
// letter pairs, which would look broken on the most common visitor platform.
function Marker({ code, className = '' }) {
  if (!code) {
    return (
      <span className={`flex h-12 w-12 items-center justify-center rounded-lg border border-sage/40 text-sage ${className}`}>
        <Globe2 className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
      </span>
    )
  }
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-lg border border-sage/40 font-heading text-base font-extrabold tracking-[0.08em] text-sage ${className}`}
    >
      {code}
    </span>
  )
}

export default function SourcingNetwork() {
  const { sourcingMarkets, hub } = company

  return (
    <section className="bg-forest py-20 text-ivory lg:py-28">
      <Container>
        <FadeUp>
          <SectionHeading
            light
            align="center"
            eyebrow="Global Sourcing Network"
            title="Sourced across Asia, imported into Malaysia."
            description="We source from trusted suppliers across Asia, with strong sourcing relationships in India and China, enabling us to bring quality products into the Malaysian market."
          />
        </FadeUp>

        {/* Supplier markets */}
        <Stagger gap={0.14} className="mt-14 grid gap-5 sm:grid-cols-3">
          {sourcingMarkets.map((m) => (
            <StaggerItem
              key={m.name}
              className="rounded-xl border border-ivory/12 bg-forest-light/40 p-6 text-center transition-colors hover:border-sage/50"
            >
              <Marker code={m.code} className="mx-auto" />
              <h3 className="mt-4 font-heading text-lg font-bold">{m.name}</h3>
              <p className="mt-1 text-sm text-ivory/65">{m.note}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Flow into the hub */}
        <FadeUp delay={0.15} className="flex justify-center py-7">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sage/50 text-sage">
            <ArrowDown className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </span>
        </FadeUp>

        {/* Destination hub */}
        <FadeUp delay={0.2}>
          <div className="flex flex-col items-center gap-5 rounded-xl border border-sage/40 bg-sage/10 p-8 text-center sm:flex-row sm:text-left">
            <Marker code={hub.code} className="shrink-0 border-sage/60" />
            <div className="sm:flex-1">
              <h3 className="font-heading text-xl font-bold">
                {hub.name} · {hub.city}
              </h3>
              <p className="mt-1 text-sm text-ivory/75">{hub.note}</p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ivory/65">
              From here we distribute to businesses across {company.serviceArea}.
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
