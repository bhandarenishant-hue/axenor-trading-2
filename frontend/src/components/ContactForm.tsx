"use client";

import { useState } from "react";
import { api } from "@/lib/api";

interface ContactFormProps {
  defaultSubject?: string;
}

export function ContactForm({ defaultSubject }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await api.contact.create({
        name: data.get("name") as string,
        email: data.get("email") as string,
        phone: (data.get("phone") as string) || undefined,
        company: (data.get("company") as string) || undefined,
        subject: data.get("subject") as string,
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
          Message Sent
        </h3>
        <p className="text-charcoal/60 text-sm">
          Thank you for reaching out. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ct-name" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Name *
          </label>
          <input
            id="ct-name"
            name="name"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="ct-email" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Email *
          </label>
          <input
            id="ct-email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ct-phone" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Phone
          </label>
          <input
            id="ct-phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="ct-company" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
            Company
          </label>
          <input
            id="ct-company"
            name="company"
            className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ct-subject" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
          Subject *
        </label>
        <input
          id="ct-subject"
          name="subject"
          required
          defaultValue={defaultSubject || ""}
          className="w-full px-4 py-3 border border-deep-navy/10 bg-white text-charcoal text-sm focus:outline-none focus:border-teal/40 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="ct-message" className="block text-xs text-charcoal/60 uppercase tracking-wide mb-1.5">
          Message *
        </label>
        <textarea
          id="ct-message"
          name="message"
          required
          rows={5}
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
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
