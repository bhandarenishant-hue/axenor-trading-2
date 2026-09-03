const sourceMarkets = [
  { name: "India", flag: "🇮🇳", role: "Source" },
  { name: "China", flag: "🇨🇳", role: "Source" },
];

const tradingHub = { name: "Malaysia", flag: "🇲🇾", role: "Trading Hub" };

const connectedMarkets = [
  { name: "Singapore", flag: "🇸🇬" },
  { name: "India", flag: "🇮🇳" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Turkey", flag: "🇹🇷" },
  { name: "Europe", flag: "🇪🇺" },
  { name: "Southeast Asia", flag: "🌏" },
];

export function Markets() {
  return (
    <section className="py-20 lg:py-32 bg-deep-navy relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.05]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-white/[0.07]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-teal-light text-sm tracking-[0.2em] uppercase font-medium">
            Our Reach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-4">
            International Markets
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div>
            <h3 className="text-warm-sand/50 text-xs tracking-[0.25em] uppercase mb-6 text-center lg:text-left">
              Source Markets
            </h3>
            <div className="space-y-4">
              {sourceMarkets.map((market) => (
                <div
                  key={market.name}
                  className="flex items-center gap-4 p-5 border border-white/10 hover:border-teal/30 transition-colors"
                >
                  <span className="text-3xl">{market.flag}</span>
                  <div>
                    <p className="text-white font-medium">{market.name}</p>
                    <p className="text-warm-sand/40 text-xs tracking-wide uppercase">
                      {market.role} Market
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="p-8 border-2 border-teal/30 bg-teal/5 text-center w-full max-w-xs">
              <span className="text-4xl mb-3 block">{tradingHub.flag}</span>
              <p className="text-white font-display text-xl mb-1">
                {tradingHub.name}
              </p>
              <p className="text-teal-light text-xs tracking-[0.2em] uppercase">
                {tradingHub.role}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-warm-sand/50 text-xs tracking-[0.25em] uppercase mb-6 text-center lg:text-left">
              Connected Markets
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {connectedMarkets.map((market) => (
                <div
                  key={market.name}
                  className="flex items-center gap-3 p-4 border border-white/10 hover:border-teal/20 transition-colors"
                >
                  <span className="text-xl">{market.flag}</span>
                  <span className="text-warm-sand/70 text-sm">
                    {market.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
