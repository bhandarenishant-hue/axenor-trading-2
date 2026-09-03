const steps = [
  {
    number: "01",
    title: "Source",
    description:
      "Identify reliable manufacturers and suppliers across India and China.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Select",
    description:
      "Evaluate products based on quality, pricing, demand and suitability.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Trade",
    description:
      "Coordinate procurement and international commercial requirements.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Connect",
    description:
      "Connect products with distributors, retailers, e-commerce businesses and B2B buyers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.07a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757" />
      </svg>
    ),
  },
];

export function HowWeWork() {
  return (
    <section className="py-20 lg:py-32 bg-warm-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal text-sm tracking-[0.2em] uppercase font-medium">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-deep-navy mt-4">
            How Axenor Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t border-dashed border-deep-navy/15" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 border border-deep-navy/10 bg-white/60 mb-6 relative group-hover:border-teal/30 transition-colors duration-300">
                  <div className="text-teal">{step.icon}</div>
                  <span className="absolute -top-3 -right-3 w-7 h-7 bg-deep-navy text-white text-xs flex items-center justify-center font-medium">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl text-deep-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
