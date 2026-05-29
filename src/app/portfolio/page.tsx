"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"all" | "interni" | "esterni">("all");

  const filtered = filter === "all"
    ? PORTFOLIO_IMAGES
    : PORTFOLIO_IMAGES.filter((img) => img.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold text-accent-light tracking-[0.2em] uppercase mb-3">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              I nostri lavori recenti
            </h1>
            <div className="w-16 h-1 bg-accent mb-5" />
            <p className="text-lg text-white/60 max-w-2xl">
              Scopri i nostri progetti completati a Bergamo e provincia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 px-4 bg-surface-alt border-b border-border">
        <div className="max-w-6xl mx-auto flex gap-2">
          {(["all", "interni", "esterni"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                filter === f
                  ? "bg-accent text-white"
                  : "bg-white text-text-secondary hover:bg-accent/5 border border-border"
              }`}
            >
              {f === "all" ? "Tutti" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.alt}-${i}`} delay={Math.min(i * 60, 300)}>
                <div className="overflow-hidden border border-border card-hover group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">{img.alt}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-text-secondary mb-2">{img.alt}</p>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold capitalize">
                      {img.category}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
