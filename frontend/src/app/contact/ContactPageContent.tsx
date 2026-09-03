"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { SupplierForm } from "@/components/SupplierForm";
import { ContactForm } from "@/components/ContactForm";

type FormType = "quote" | "supplier" | "partner" | "general";

const tabs: { key: FormType; label: string }[] = [
  { key: "quote", label: "Request a Quote" },
  { key: "supplier", label: "Become a Supplier" },
  { key: "partner", label: "Partner With Us" },
  { key: "general", label: "General Inquiry" },
];

export function ContactPageContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<FormType>("quote");
  const [preselectedProduct, setPreselectedProduct] = useState("");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "quote" || type === "supplier" || type === "partner") {
      setActiveTab(type);
    }
    const product = searchParams.get("product");
    if (product) {
      setPreselectedProduct(product);
    }
  }, [searchParams]);

  return (
    <div className="pt-20 lg:pt-24">
      <section className="bg-warm-sand py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-teal" />
            <span className="text-teal text-sm tracking-[0.2em] uppercase font-medium">
              Get In Touch
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl text-deep-navy mb-4">
            Contact Axenor
          </h1>
          <p className="text-charcoal/60 text-lg max-w-2xl">
            Whether you&apos;re looking for products, want to supply, or
            explore a partnership — we&apos;d like to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-off-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 text-sm tracking-wide border transition-colors ${
                  activeTab === tab.key
                    ? "bg-deep-navy text-white border-deep-navy"
                    : "border-deep-navy/15 text-charcoal/60 hover:border-deep-navy/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "quote" && (
            <div>
              <h2 className="font-display text-2xl text-deep-navy mb-2">
                Request a Quote
              </h2>
              <p className="text-charcoal/50 text-sm mb-8">
                Tell us what you need and we will provide a competitive quote.
              </p>
              <InquiryForm preselectedProduct={preselectedProduct} />
            </div>
          )}

          {activeTab === "supplier" && (
            <div>
              <h2 className="font-display text-2xl text-deep-navy mb-2">
                Become a Supplier
              </h2>
              <p className="text-charcoal/50 text-sm mb-8">
                Join our network of trusted suppliers and manufacturers.
              </p>
              <SupplierForm />
            </div>
          )}

          {activeTab === "partner" && (
            <div>
              <h2 className="font-display text-2xl text-deep-navy mb-2">
                Partner With Us
              </h2>
              <p className="text-charcoal/50 text-sm mb-8">
                Explore partnership opportunities with Axenor Trading.
              </p>
              <ContactForm defaultSubject="Partnership Inquiry" />
            </div>
          )}

          {activeTab === "general" && (
            <div>
              <h2 className="font-display text-2xl text-deep-navy mb-2">
                General Inquiry
              </h2>
              <p className="text-charcoal/50 text-sm mb-8">
                Have a question? Send us a message.
              </p>
              <ContactForm />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
