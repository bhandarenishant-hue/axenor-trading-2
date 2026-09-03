"use client";

import { useState } from "react";
import { api } from "@/lib/api";

interface InquiryFormProps {
  preselectedProduct?: string;
}

export function InquiryForm({ preselectedProduct }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await api.inquiries.create({
        name: data.get("name") as string,
        company: data.get("company") as string,
        email: data.get("email") as string,
        phone: data.get("phone") as string,
        country: data.get("country") as string,
        product: data.get("product") as string,
        quantity: data.get("quantity") as string,
        message: data.get("message") as string,
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
          Inquiry Submitted
        </h3>
        <p className="text-charcoal/60 text-sm">
          Thank you for your inquiry. We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="inq-name" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Name *
          </label>
          <input
            id="inq-name"
            name="name"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="inq-company" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Company *
          </label>
          <input
            id="inq-company"
            name="company"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="inq-email" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Email *
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="inq-phone" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Phone *
          </label>
          <input
            id="inq-phone"
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="inq-country" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Country *
          </label>
          <input
            id="inq-country"
            name="country"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="inq-quantity" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Quantity
          </label>
          <input
            id="inq-quantity"
            name="quantity"
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inq-product" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
          Product
        </label>
        <input
          id="inq-product"
          name="product"
          defaultValue={preselectedProduct || ""}
          className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="inq-message" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
          Message *
        </label>
        <textarea
          id="inq-message"
          name="message"
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
        {status === "sending" ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
