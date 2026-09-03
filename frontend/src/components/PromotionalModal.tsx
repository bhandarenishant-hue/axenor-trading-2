"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface PromotionalModalProps {
  imageSrc: string;
  imageAlt: string;
}

export function PromotionalModal({ imageSrc, imageAlt }: PromotionalModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem("promo-dismissed", "1");
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Promotional offer"
    >
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease; }
        .animate-scale-in { animation: scale-in 0.3s ease; }
      `}</style>

      <div className="absolute inset-0 bg-deep-navy/[0.67]" />

      <div
        className="relative max-h-[80vh] w-auto max-w-[90vw] lg:max-w-[70vw] animate-scale-in rounded-sm overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/50 text-white hover:bg-black/70 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Close promotional popup"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={1000}
          className="max-h-[80vh] w-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
