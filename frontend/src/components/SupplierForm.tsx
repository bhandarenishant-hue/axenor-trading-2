"use client";

import { useState } from "react";
import { api } from "@/lib/api";

export function SupplierForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await api.suppliers.create({
        companyName: data.get("companyName") as string,
        contactPerson: data.get("contactPerson") as string,
        email: data.get("email") as string,
        phone: data.get("phone") as string,
        country: data.get("country") as string,
        productCategories: (data.get("productCategories") as string).split(",").map(s => s.trim()).filter(Boolean),
        description: data.get("description") as string,
        website: (data.get("website") as string) || undefined,
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12 border border-teal/20 bg-teal/5">
        <svg
          className="w-12 h-12 text-teal mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="font-display text-xl text-deep-navy mb-2">
          Application Submitted
        </h3>
        <p className="text-charcoal/60 text-sm">
          Thank you for your interest. We will review your application and be in
          touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sup-company" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Company Name *
          </label>
          <input
            id="sup-company"
            name="companyName"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="sup-contact" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Contact Person *
          </label>
          <input
            id="sup-contact"
            name="contactPerson"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sup-email" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Email *
          </label>
          <input
            id="sup-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="sup-phone" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Phone *
          </label>
          <input
            id="sup-phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="sup-country" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Country *
          </label>
          <input
            id="sup-country"
            name="country"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="sup-website" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Website
          </label>
          <input
            id="sup-website"
            name="website"
            type="url"
            placeholder="https://"
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors placeholder:text-charcoal/25"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sup-categories" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
          Product Categories *
        </label>
        <input
          id="sup-categories"
          name="productCategories"
          required
          placeholder="e.g. Textiles, Electronics, Chemicals"
          className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors placeholder:text-charcoal/25"
        />
      </div>

      <div>
        <label htmlFor="sup-description" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
          Tell us about your business *
        </label>
        <textarea
          id="sup-description"
          name="description"
          required
          rows={4}
          className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-teal hover:bg-teal-dark text-white py-4 text-sm tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Submitting..." : "Submit Supplier Application"}
      </button>
    </form>
  );
}
