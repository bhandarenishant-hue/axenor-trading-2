const sourceMarkets = [
  {
    country: "India",
    flag: "🇮🇳",
    products: "Textiles • Fashion • Food • Herbal Products • Hardware",
  },
  {
    country: "China",
    flag: "🇨🇳",
    products:
      "Chemicals • Electronics • Lighting • Smart Products • Household",
  },
];

const destinationMarkets = [
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Southeast Asia", flag: "🌏" },
  { name: "India", flag: "🇮🇳" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Europe", flag: "🇪🇺" },
];

export function GlobalTradeNetwork() {
  return (
    <section className="py-20 lg:py-32 bg-deep-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block text-teal-light text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Global Network
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            From Source Markets
            <br />
            to <span className="text-teal-light">Global Markets</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-4 items-stretch">
          <div className="space-y-6">
            <h3 className="text-warm-sand/50 text-xs tracking-[0.25em] uppercase text-center lg:text-left mb-2">
              Source Markets
            </h3>
            {sourceMarkets.map((market) => (
              <div
                key={market.country}
                className="border border-white/10 p-6 lg:p-8 relative group hover:border-teal/30 transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-teal/50" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{market.flag}</span>
                  <h4 className="text-white font-display text-xl">
                    {market.country}
                  </h4>
                </div>
                <p className="text-warm-sand/60 text-sm leading-relaxed">
                  {market.products}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center py-8 lg:py-0">
            <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent to-muted-gold/40" />
            <div className="lg:hidden h-px w-24 bg-gradient-to-r from-transparent to-muted-gold/40" />

            <svg
              className="w-5 h-5 text-muted-gold/60 my-3 rotate-90 lg:rotate-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>

            <div className="border border-teal/40 p-6 lg:p-8 text-center bg-teal/5 w-full max-w-xs">
              <div className="w-12 h-12 mx-auto mb-4 rounded-sm bg-teal/20 flex items-center justify-center">
                <span className="text-teal-light font-display font-bold text-xl">
                  A
                </span>
              </div>
              <h4 className="text-white font-display text-lg mb-2">
                Axenor Trading
              </h4>
              <p className="text-warm-sand/50 text-xs tracking-wide">
                Sourcing • Procurement
                <br />
                Import • Export • Distribution
              </p>
            </div>

            <svg
              className="w-5 h-5 text-muted-gold/60 my-3 rotate-90 lg:rotate-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>

            <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-muted-gold/40 to-transparent" />
            <div className="lg:hidden h-px w-24 bg-gradient-to-r from-muted-gold/40 to-transparent" />
          </div>

          <div>
            <h3 className="text-warm-sand/50 text-xs tracking-[0.25em] uppercase text-center lg:text-left mb-6">
              Global Markets
            </h3>
            <div className="border border-white/10 p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-4">
                {destinationMarkets.map((market) => (
                  <div
                    key={market.name}
                    className="flex items-center gap-2 text-warm-sand/70 text-sm"
                  >
                    <span>{market.flag}</span>
                    <span>{market.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
