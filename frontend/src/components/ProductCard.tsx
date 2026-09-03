import Link from "next/link";
import type { Product } from "@/lib/api";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group border border-deep-navy/8 bg-white hover:border-teal/25 hover:shadow-sm transition-all duration-300 flex flex-col"
    >
      <div className="aspect-[4/3] bg-warm-sand/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-3 bg-teal/10 rounded-sm flex items-center justify-center">
              <svg
                className="w-6 h-6 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </div>
            <p className="text-xs text-charcoal/40 font-medium">
              {product.category}
            </p>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[10px] tracking-wider uppercase bg-deep-navy text-white px-2 py-1">
            {product.sourceMarket === "india" ? "🇮🇳 India" : "🇨🇳 China"}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[10px] text-teal tracking-[0.15em] uppercase font-medium mb-2">
          {product.category}
        </p>
        <h3 className="font-display text-lg text-deep-navy group-hover:text-teal transition-colors mb-2 flex-1">
          {product.name}
        </h3>
        <p className="text-charcoal/50 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-deep-navy/5">
          <span className="text-xs text-charcoal/40">Pricing on request</span>
          <span className="text-teal text-sm font-medium group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
            View
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
