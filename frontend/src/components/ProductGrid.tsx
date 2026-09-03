"use client";

import { useState, useEffect, useCallback } from "react";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/api";

interface ProductGridProps {
  initialProducts: Product[];
  categories: string[];
}

export function ProductGrid({ initialProducts, categories }: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [filtered, setFiltered] = useState(initialProducts);

  const filterProducts = useCallback(() => {
    let result = initialProducts;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }
    if (selectedSource) {
      result = result.filter((p) => p.sourceMarket === selectedSource);
    }
    setFiltered(result);
  }, [initialProducts, search, selectedCategory, selectedSource]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    if (source === "india" || source === "china") {
      setSelectedSource(source);
    }
  }, []);

  return (
    <div>
      <div className="mb-10 space-y-4">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 border border-deep-navy/10 bg-white text-charcoal placeholder:text-charcoal/30 text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedSource("")}
            className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
              selectedSource === ""
                ? "bg-deep-navy text-white border-deep-navy"
                : "border-deep-navy/15 text-charcoal/60 hover:border-deep-navy/30"
            }`}
          >
            All Sources
          </button>
          <button
            onClick={() => setSelectedSource("india")}
            className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
              selectedSource === "india"
                ? "bg-deep-navy text-white border-deep-navy"
                : "border-deep-navy/15 text-charcoal/60 hover:border-deep-navy/30"
            }`}
          >
            🇮🇳 India
          </button>
          <button
            onClick={() => setSelectedSource("china")}
            className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
              selectedSource === "china"
                ? "bg-deep-navy text-white border-deep-navy"
                : "border-deep-navy/15 text-charcoal/60 hover:border-deep-navy/30"
            }`}
          >
            🇨🇳 China
          </button>

          <div className="w-px bg-deep-navy/10 mx-1" />

          <button
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
              selectedCategory === ""
                ? "bg-teal text-white border-teal"
                : "border-deep-navy/15 text-charcoal/60 hover:border-deep-navy/30"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? "" : cat)
              }
              className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
                selectedCategory === cat
                  ? "bg-teal text-white border-teal"
                  : "border-deep-navy/15 text-charcoal/60 hover:border-deep-navy/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-charcoal/40 text-lg mb-2">No products found</p>
          <p className="text-charcoal/30 text-sm">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <>
          <p className="text-charcoal/40 text-sm mb-6">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
