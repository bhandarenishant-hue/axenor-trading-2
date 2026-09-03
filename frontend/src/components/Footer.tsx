import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Axenor" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ],
  "Source Markets": [
    { href: "/products?source=india", label: "India Sourcing" },
    { href: "/products?source=china", label: "China Sourcing" },
  ],
  "Get Started": [
    { href: "/contact?type=quote", label: "Request a Quote" },
    { href: "/contact?type=supplier", label: "Become a Supplier" },
    { href: "/contact?type=partner", label: "Partner With Us" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-deep-navy text-warm-sand/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-sm bg-teal flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display text-lg tracking-wide leading-tight">
                  AXENOR
                </span>
                <span className="text-warm-sand/40 text-[10px] tracking-[0.25em] uppercase leading-tight">
                  Trading
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Global sourcing and import-export solutions connecting trusted
              suppliers across India and China with markets across Asia, the
              Middle East and Europe.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white text-sm font-semibold tracking-wide uppercase mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-sand/40">
            &copy; {new Date().getFullYear()} Axenor Trading. All rights
            reserved.
          </p>
          <p className="text-xs text-warm-sand/30">
            Connecting Markets. Moving Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}
