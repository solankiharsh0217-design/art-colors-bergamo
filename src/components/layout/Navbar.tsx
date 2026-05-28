"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Menu, X, Phone, Paintbrush } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/portfolio", label: "Lavori Recenti" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Paintbrush size={18} className="text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-text-primary" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Art Colors
              </span>
              <span className={`text-[9px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                scrolled ? "text-text-muted" : "text-white/60"
              }`}>
                Bergamo
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  scrolled
                    ? "text-text-secondary hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneLink}
              className={`flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
                scrolled ? "text-text-primary hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
            <Link
              href="/contatti"
              className="px-5 py-2.5 rounded-lg bg-cta text-white text-sm font-semibold hover:bg-cta-hover transition-colors cursor-pointer"
            >
              Preventivo Gratuito
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 cursor-pointer rounded-lg transition-colors ${
              scrolled ? "text-text-primary" : "text-white"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col animate-[fade-in_0.2s_ease-out]">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Paintbrush size={18} className="text-white" />
              </div>
              <span className="text-lg font-semibold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                Art Colors
              </span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 cursor-pointer">
              <X size={24} className="text-text-primary" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2 p-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 text-lg font-medium text-text-primary hover:text-primary hover:bg-primary/5 rounded-lg transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={SITE.phoneLink}
              className="mt-4 flex items-center gap-2 text-text-primary"
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
            <Link
              href="/contatti"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-lg bg-cta text-white font-semibold cursor-pointer"
            >
              Preventivo Gratuito
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
