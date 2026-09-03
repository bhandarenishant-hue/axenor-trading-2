import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Axenor Trading — request a quote, become a supplier, or partner with us for international sourcing and trade.",
};

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageContent />
    </Suspense>
  );
}
