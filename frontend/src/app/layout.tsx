import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Axenor Trading | Global Import, Export & Sourcing",
    template: "%s | Axenor Trading",
  },
  description:
    "Axenor Trading connects trusted suppliers across India and China with businesses and markets across Malaysia, Singapore, Southeast Asia, UAE, Turkey and Europe.",
  keywords: [
    "import export",
    "international trading",
    "sourcing",
    "India suppliers",
    "China suppliers",
    "B2B trading",
    "wholesale",
    "distribution",
    "Axenor Trading",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Axenor Trading",
    title: "Axenor Trading | Global Import, Export & Sourcing",
    description:
      "Axenor Trading connects trusted suppliers across India and China with businesses and markets across Malaysia, Singapore, Southeast Asia, UAE, Turkey and Europe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
