import { ArrowDown, ArrowRight, Building2, Globe2, Ship, Store } from 'lucide-react'
import { Stagger, StaggerItem } from './motion'
import { company } from '../data/company'

// The business model in four steps: suppliers abroad, sourcing and import,
// the Malaysian hub, then distribution. Content is driven by company.js so the
// sourcing markets and customer types stay in one place.
const steps = [
  {
    icon: Globe2,
    label: 'Suppliers',
    title: 'International suppliers',
    detail: company.sourcingMarkets.map((m) => m.name).join(' · '),
  },
  {
    icon: Ship,
    label: 'Sourcing & import',
    title: 'Sourced and imported',
    detail: 'Coordinated into the Malaysian market',
  },
  {
    icon: Building2,
    label: company.hub.name,
    title: company.hub.city,
    detail: company.hub.note,
  },
  {
    icon: Store,
    label: 'Distribution',
    title: 'Delivered to businesses',
    detail: company.customers.map((c) => c.title).join(' · '),
  },
]

export default function SupplyChainFlow({ className = '' }) {
  return (
    <div className={`rounded-xl border border-line bg-white p-7 shadow-[0_24px_50px_-30px_rgba(54,69,59,0.35)] sm:p-9 ${className}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-dark">How the business works</h2>
        <p className="text-xs text-slate">Sourcing to distribution</p>
      </div>

      <Stagger gap={0.14} className="mt-7 grid gap-6 md:grid-cols-4 md:gap-8">
        {steps.map((s, i) => (
          <StaggerItem key={s.title} className="relative">
            {/* Connector: sideways between columns, downward when stacked */}
            {i > 0 && (
              <>
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -left-6 top-4 hidden h-4 w-4 text-sage md:block"
                  strokeWidth={2}
                />
                <ArrowDown aria-hidden="true" className="mx-auto mb-4 h-4 w-4 text-sage md:hidden" strokeWidth={2} />
              </>
            )}

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest text-sage">
                <s.icon className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-dark">
                {s.label}
              </span>
            </div>
            <h3 className="mt-4 font-heading text-base font-bold leading-snug text-forest">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate">{s.detail}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}
