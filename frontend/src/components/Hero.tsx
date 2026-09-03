"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const markets = [
  { name: "India", flag: "🇮🇳", x: 62, y: 38 },
  { name: "China", flag: "🇨🇳", x: 72, y: 32 },
  { name: "Malaysia", flag: "🇲🇾", x: 70, y: 52 },
  { name: "Singapore", flag: "🇸🇬", x: 71, y: 56 },
  { name: "UAE", flag: "🇦🇪", x: 54, y: 38 },
  { name: "Turkey", flag: "🇹🇷", x: 46, y: 30 },
  { name: "Europe", flag: "🇪🇺", x: 38, y: 24 },
];

const tradeRoutes = [
  { from: { x: 62, y: 38 }, to: { x: 70, y: 52 } },
  { from: { x: 62, y: 38 }, to: { x: 54, y: 38 } },
  { from: { x: 72, y: 32 }, to: { x: 71, y: 56 } },
  { from: { x: 72, y: 32 }, to: { x: 70, y: 52 } },
  { from: { x: 70, y: 52 }, to: { x: 54, y: 38 } },
  { from: { x: 70, y: 52 }, to: { x: 46, y: 30 } },
  { from: { x: 70, y: 52 }, to: { x: 38, y: 24 } },
  { from: { x: 62, y: 38 }, to: { x: 46, y: 30 } },
  { from: { x: 62, y: 38 }, to: { x: 38, y: 24 } },
];

export function Hero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll(".trade-route");
    paths?.forEach((path, i) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
      el.style.animation = `drawRoute 2s ${0.3 + i * 0.15}s ease forwards`;
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-warm-sand flex items-center overflow-hidden pt-16 lg:pt-20">
      <style>{`
        @keyframes drawRoute {
          to { stroke-dashoffset: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.6; r: 3; }
          50% { opacity: 1; r: 5; }
        }
        .market-dot { animation: pulse-dot 3s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-deep-navy) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-teal" />
              <span className="text-teal text-sm tracking-[0.2em] uppercase font-medium">
                International Trade & Sourcing
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-deep-navy leading-[1.1] mb-6">
              Connecting
              <br />
              Markets.
              <br />
              <span className="text-teal">Moving</span>
              <br />
              Opportunity.
            </h1>

            <p className="text-charcoal/70 text-lg lg:text-xl leading-relaxed max-w-lg mb-10">
              Global sourcing and import-export solutions connecting trusted
              suppliers across India and China with markets across Asia, the
              Middle East and Europe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white px-8 py-4 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                Explore Products
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/contact?type=partner"
                className="inline-flex items-center justify-center border border-deep-navy/30 text-deep-navy hover:bg-deep-navy hover:text-white px-8 py-4 text-sm tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-navy"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <svg
              ref={svgRef}
              viewBox="0 0 100 70"
              className="w-full h-auto"
              aria-label="Axenor global trade network map showing connections between India, China, Malaysia, Singapore, UAE, Turkey, and Europe"
            >
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0F766E" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx="65" cy="40" r="25" fill="url(#glow)" />

              {tradeRoutes.map((route, i) => {
                const midX = (route.from.x + route.to.x) / 2;
                const midY =
                  (route.from.y + route.to.y) / 2 -
                  Math.abs(route.from.x - route.to.x) * 0.15;
                return (
                  <path
                    key={i}
                    className="trade-route"
                    d={`M ${route.from.x} ${route.from.y} Q ${midX} ${midY} ${route.to.x} ${route.to.y}`}
                    fill="none"
                    stroke="#0F766E"
                    strokeWidth="0.3"
                    strokeOpacity="0.5"
                  />
                );
              })}

              {markets.map((market, i) => (
                <g key={market.name}>
                  <circle
                    className="market-dot"
                    cx={market.x}
                    cy={market.y}
                    r="3"
                    fill="#0F766E"
                    fillOpacity="0.2"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <circle
                    cx={market.x}
                    cy={market.y}
                    r="1.5"
                    fill="#0F766E"
                  />
                  <text
                    x={market.x}
                    y={market.y - 4}
                    textAnchor="middle"
                    fontSize="2.5"
                    fill="#0B1F33"
                    fontWeight="500"
                    fontFamily="system-ui"
                  >
                    {market.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-muted-gold/30 to-transparent" />
    </section>
  );
}
