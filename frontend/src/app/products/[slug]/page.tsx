import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { api } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";
import { InquiryForm } from "@/components/InquiryForm";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = await api.products.get(slug);
    return {
      title: product.name,
      description: product.description,
    };
  } catch {
    return { title: "Product Not Found" };
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  let product;
  try {
    product = await api.products.get(slug);
  } catch {
    notFound();
  }

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-warm-sand py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-charcoal/50">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-teal transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-charcoal/80">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="aspect-square bg-warm-sand/40 border border-deep-navy/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-teal/10 rounded-sm flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <p className="text-charcoal/30 text-sm">Product image</p>
              </div>
            </div>

            <div>
              <span className="inline-block text-[10px] tracking-wider uppercase bg-deep-navy text-white px-3 py-1 mb-4">
                {product.sourceMarket === "india" ? "🇮🇳 India" : "🇨🇳 China"}
              </span>
              <p className="text-teal text-xs tracking-[0.15em] uppercase font-medium mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-3xl lg:text-4xl text-deep-navy mb-6">
                {product.name}
              </h1>
              <p className="text-charcoal/70 text-base leading-relaxed mb-8">
                {product.description}
              </p>

              {product.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-deep-navy font-semibold text-sm uppercase tracking-wide mb-3">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {product.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-charcoal/70 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-teal mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {Object.keys(product.specifications).length > 0 && (
                <div className="mb-8">
                  <h3 className="text-deep-navy font-semibold text-sm uppercase tracking-wide mb-3">
                    Specifications
                  </h3>
                  <div className="border border-deep-navy/8 divide-y divide-deep-navy/5">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between px-4 py-3 text-sm"
                        >
                          <span className="text-charcoal/50">{key}</span>
                          <span className="text-charcoal font-medium">
                            {value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between p-5 bg-warm-sand/50 border border-deep-navy/5 mb-6">
                <div>
                  <p className="text-xs text-charcoal/40 uppercase tracking-wide">
                    Pricing
                  </p>
                  <p className="text-deep-navy font-display text-xl">
                    On Request
                  </p>
                </div>
                <Link
                  href={`/contact?type=quote&product=${encodeURIComponent(product.name)}`}
                  className="bg-teal hover:bg-teal-dark text-white px-6 py-3 text-sm tracking-wide transition-colors"
                >
                  Request Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-12 lg:py-16 bg-white border-t border-deep-navy/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-2xl text-deep-navy mb-8">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.slice(0, 3).map((rp) => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 bg-warm-sand">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl text-deep-navy mb-2 text-center">
            Inquire About This Product
          </h2>
          <p className="text-charcoal/50 text-sm text-center mb-8">
            Fill in the form below and we will get back to you.
          </p>
          <InquiryForm preselectedProduct={product.name} />
        </div>
      </section>
    </div>
  );
}
