import Link from "next/link";

export function PartnershipCTA() {
  return (
    <section className="py-20 lg:py-28 bg-deep-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-gold/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
          Looking for the Right Product
          <br />
          or the Right <span className="text-teal-light">Market</span>?
        </h2>
        <p className="text-warm-sand/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Tell Axenor what you need. We&apos;ll help connect you with the right
          sourcing opportunity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?type=quote"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white px-8 py-4 text-sm tracking-wide transition-colors duration-200"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact?type=supplier"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-200"
          >
            Become a Supplier
          </Link>
          <Link
            href="/contact?type=partner"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-200"
          >
            Partner With Us
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-gold/20 to-transparent" />
    </section>
  );
}
