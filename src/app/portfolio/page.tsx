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
      <section className="relative pt-32 pb-20 px-4 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-3">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              I nostri lavori recenti
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Scopri i nostri progetti completati a Bergamo e provincia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto flex gap-3">
          {(["all", "interni", "esterni"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                filter === f
                  ? "bg-primary text-white"
                  : "bg-surface text-text-secondary hover:bg-primary/5"
              }`}
            >
              {f === "all" ? "Tutti" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.alt}-${i}`} delay={Math.min(i * 60, 300)}>
                <div className="rounded-xl overflow-hidden border border-border card-hover group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-text-secondary">{img.alt}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">
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
