import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { api, type Product } from "@/lib/api";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Axenor Trading's product catalogue — textiles, chemicals, electronics, hardware, spices and more sourced from India and China.",
};

export default async function ProductsPage() {
  let products: Product[] = [];
  let categories: string[] = [];

  try {
    const res = await api.products.list({ limit: 100 });
    products = res.data;
    categories = [...new Set(products.map((p) => p.category))];
  } catch {
    // API may not be available during build
  }

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-warm-sand py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal" />
            <span className="text-teal text-sm tracking-[0.2em] uppercase font-medium">
              Product Catalogue
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-deep-navy mb-4">
            Our Products
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            Browse our range of products sourced from trusted manufacturers
            across India and China. All pricing is available on request.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProductGrid initialProducts={products} categories={categories} />
        </div>
      </section>
    </div>
  );
}
