import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Axenor Trading is an international sourcing and trading company connecting suppliers across India and China with global markets.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-warm-sand py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-teal" />
              <span className="text-teal text-sm tracking-[0.2em] uppercase font-medium">
                About Axenor
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-deep-navy leading-tight mb-8">
              Connecting Markets.
              <br />
              Moving Opportunity.
            </h1>
            <p className="text-charcoal/70 text-lg lg:text-xl leading-relaxed">
              Axenor Trading is an international trading and sourcing company
              connecting reliable suppliers and manufacturers primarily across
              India and China with buyers, distributors, retailers, e-commerce
              businesses, wholesalers and B2B customers across Malaysia,
              Singapore, Southeast Asia, India, UAE, Turkey and Europe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl text-deep-navy mb-6">
                What We Do
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Axenor Trading operates as a global sourcing and trading
                  partner, not simply as an exporter or a shipping company. Our
                  core business bridges the gap between trusted manufacturers in
                  source markets and businesses seeking reliable product supply.
                </p>
                <p>
                  We handle the complexities of international sourcing,
                  procurement, and trade so our partners can focus on their
                  markets and customers.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  "Source",
                  "Trade",
                  "Connect",
                  "Deliver",
                ].map((word) => (
                  <div
                    key={word}
                    className="border border-deep-navy/8 p-5 text-center bg-white/50"
                  >
                    <span className="font-display text-xl text-deep-navy">
                      {word}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl text-deep-navy mb-6">
                Our Markets
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-teal/30 pl-6">
                  <h3 className="text-deep-navy font-semibold mb-2">
                    Source Markets
                  </h3>
                  <p className="text-charcoal/60 text-sm">
                    India and China — across textiles, fashion, food products,
                    ayurvedic and herbal care, engineering components, industrial
                    chemicals, consumer electronics, lighting, smart accessories,
                    and household products.
                  </p>
                </div>

                <div className="border-l-2 border-ocean-blue/30 pl-6">
                  <h3 className="text-deep-navy font-semibold mb-2">
                    Trading Hub
                  </h3>
                  <p className="text-charcoal/60 text-sm">
                    Malaysia — our central trading and coordination base for
                    international operations.
                  </p>
                </div>

                <div className="border-l-2 border-muted-gold/40 pl-6">
                  <h3 className="text-deep-navy font-semibold mb-2">
                    Connected Markets
                  </h3>
                  <p className="text-charcoal/60 text-sm">
                    Singapore, Southeast Asia, India, UAE, Turkey, and Europe —
                    serving retailers, distributors, wholesalers, e-commerce
                    businesses, B2B buyers, importers, and international trading
                    partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-deep-navy">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-warm-sand/60 text-lg mb-10 max-w-2xl mx-auto">
            Whether you are looking for products, suppliers, or market access —
            Axenor Trading can help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=quote"
              className="w-full sm:w-auto bg-teal hover:bg-teal-dark text-white px-8 py-4 text-sm tracking-wide transition-colors text-center"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors text-center"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
