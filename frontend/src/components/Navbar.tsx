"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-deep-navy/95 backdrop-blur-md shadow-lg"
          : "bg-deep-navy"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm bg-teal flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">
                A
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-display text-lg tracking-wide leading-tight">
                AXENOR
              </span>
              <span className="text-warm-sand/60 text-[10px] tracking-[0.25em] uppercase leading-tight">
                Trading
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-warm-sand/80 hover:text-white px-4 py-2 text-sm tracking-wide transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?type=quote"
              className="ml-4 bg-teal hover:bg-teal-dark text-white px-5 py-2 text-sm tracking-wide transition-colors duration-200"
            >
              Request a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-deep-navy border-t border-white/10">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-warm-sand/80 hover:text-white py-3 text-base tracking-wide border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact?type=quote"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 bg-teal text-white text-center py-3 text-sm tracking-wide"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
