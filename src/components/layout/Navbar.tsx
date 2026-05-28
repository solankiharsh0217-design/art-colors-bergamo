"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/portfolio", label: "Lavori" },
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
            ? "bg-white/95 backdrop-blur-md border-b-2 border-foreground/10 py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.artcolorsbergamo.com/assets/images/image05.jpg"
              alt="Art Colors Bergamo Logo"
              className={`h-10 w-auto object-contain transition-all duration-300 ${scrolled ? "brightness-100" : "brightness-0 invert"}`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border-b-2 border-transparent ${
                  scrolled
                    ? "text-text-primary hover:text-primary hover:border-primary"
                    : "text-white hover:text-white/80 hover:border-white"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneLink}
              className={`flex items-center gap-2 text-sm font-bold transition-colors cursor-pointer ${
                scrolled ? "text-text-primary hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
            <Link
              href="/contatti"
              className="px-6 py-2.5 bg-primary text-white text-sm font-extrabold uppercase tracking-wider hover:bg-primary-dark transition-colors brutal-shadow cursor-pointer"
            >
              Preventivo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 cursor-pointer ${scrolled ? "text-text-primary" : "text-white"}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-foreground flex flex-col items-center justify-center gap-2 animate-[fade-in_0.2s_ease-out]">
          <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-white cursor-pointer">
            <X size={28} />
          </button>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-extrabold text-white hover:text-primary transition-colors cursor-pointer uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)", animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a href={SITE.phoneLink} className="mt-6 flex items-center gap-2 text-white">
            <Phone size={18} />
            <span className="font-bold">{SITE.phone}</span>
          </a>
          <Link
            href="/contatti"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-primary text-white font-extrabold uppercase tracking-wider cursor-pointer"
          >
            Preventivo Gratuito
          </Link>
        </div>
      )}
    </>
  );
}
