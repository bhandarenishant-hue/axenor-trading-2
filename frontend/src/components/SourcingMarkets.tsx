import Link from "next/link";

const indiaCategories = [
  {
    title: "Textiles & Indian Fashion",
    items: ["Cotton Bedsheets", "Sarees", "Ethnic Wear", "T-shirts", "Towels"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: "Ayurvedic & Herbal Care",
    items: ["Natural Soaps", "Herbal Hair Oils", "Face Packs"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Engineering & Hardware",
    items: ["Nuts", "Bolts", "Screws", "Valves", "Electrical Fittings", "Brass Hardware"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1.5 1.5 0 010-2.12l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 002.12 0l.88-.88a1.5 1.5 0 012.12 0l.88.88a1.5 1.5 0 010 2.12l-5.1 5.1a1.414 1.414 0 01-2 0z" />
      </svg>
    ),
  },
  {
    title: "Spices & Pulses",
    items: ["Turmeric", "Chillies", "Lentils", "Rice"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
      </svg>
    ),
  },
  {
    title: "Pre-packaged Snacks",
    items: ["Processed Indian Snacks", "Biscuits", "Sealed Retail-packaged Products"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
];

const chinaCategories = [
  {
    title: "Industrial & Specialty Chemicals",
    items: [
      "Citric Acid — Anhydrous / Monohydrate",
      "Calcium Chloride — Pellets / Flakes",
      "Titanium Dioxide — TiO₂ Pigment",
      "SLES 70%",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Consumer Electronics & Smart Accessories",
    items: [
      "TWS Wireless Earbuds",
      "Bluetooth Headsets",
      "Power Banks — 10,000–20,000 mAh",
      "GaN Fast Chargers",
      "USB-C Cables",
      "Smart Fitness Bands",
      "Smartwatches",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Lighting, Smart Decor & Household",
    items: [
      "Smart RGB LED Strip Lights",
      "Solar Garden & Flood Lights",
      "Acrylic Organizers",
      "Electric Mini Food Choppers",
      "Kitchen Gadgets",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

function CategoryCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="border border-deep-navy/10 p-6 hover:border-teal/30 hover:shadow-sm transition-all duration-300 bg-white/50">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-sm bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
          {icon}
        </div>
        <div>
          <h4 className="text-deep-navy font-semibold text-base mb-3">
            {title}
          </h4>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="text-xs text-charcoal/60 bg-warm-sand/40 px-2.5 py-1 rounded-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SourcingMarkets() {
  return (
    <section className="py-20 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-teal text-sm tracking-[0.2em] uppercase font-medium">
                  India Sourcing
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-deep-navy mb-4">
                Sourced from India
              </h2>
              <p className="text-charcoal/60 mb-8 max-w-md">
                Textiles, fashion, ayurvedic products, engineering components,
                spices and pre-packaged food from trusted Indian manufacturers.
              </p>
              <div className="space-y-4">
                {indiaCategories.map((cat) => (
                  <CategoryCard key={cat.title} {...cat} />
                ))}
              </div>
              <Link
                href="/products?source=india"
                className="inline-flex items-center gap-2 text-teal text-sm font-medium mt-6 hover:text-teal-dark transition-colors"
              >
                View India Products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇨🇳</span>
                <span className="text-teal text-sm tracking-[0.2em] uppercase font-medium">
                  China Sourcing
                </span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl text-deep-navy mb-4">
                Sourced from China
              </h2>
              <p className="text-charcoal/60 mb-8 max-w-md">
                Industrial chemicals, consumer electronics, smart accessories,
                lighting and household products from reliable Chinese suppliers.
              </p>
              <div className="space-y-4">
                {chinaCategories.map((cat) => (
                  <CategoryCard key={cat.title} {...cat} />
                ))}
              </div>
              <Link
                href="/products?source=china"
                className="inline-flex items-center gap-2 text-teal text-sm font-medium mt-6 hover:text-teal-dark transition-colors"
              >
                View China Products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
