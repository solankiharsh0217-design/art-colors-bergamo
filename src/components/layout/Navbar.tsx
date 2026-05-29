"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top trust bar */}
      <div className={`hidden lg:block transition-all duration-300 ${scrolled ? "h-0 overflow-hidden" : "h-9 bg-primary"}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={12} />
              Garanzia 5 Anni
            </span>
            <span className="w-px h-3 bg-white/20" />
            <span>Preventivo Gratuito</span>
            <span className="w-px h-3 bg-white/20" />
            <span>Vernici Sikkens Certificati</span>
          </div>
          <a href={SITE.phoneLink} className="flex items-center gap-1.5 text-xs text-white font-semibold hover:text-white/80 transition-colors cursor-pointer">
            <Phone size={11} />
            {SITE.phone}
          </a>
        </div>
      </div>

      <nav
        className={`fixed top-0 lg:top-9 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-2"
            : "bg-white py-3 lg:top-9"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.artcolorsbergamo.com/assets/images/image05.jpg"
              alt="Art Colors Bergamo Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-3/4" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneLink}
              className="flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent transition-colors cursor-pointer"
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
            <Link
              href="/contatti"
              className="px-6 py-2.5 bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors duration-200 cursor-pointer"
            >
              Preventivo Gratuito
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text-primary cursor-pointer"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-primary flex flex-col items-center justify-center gap-2 animate-[fade-in_0.2s_ease-out]">
          <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-white cursor-pointer p-2">
            <X size={28} />
          </button>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-white hover:text-accent-light transition-colors cursor-pointer py-3 uppercase tracking-wide"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a href={SITE.phoneLink} className="mt-6 flex items-center gap-2 text-white">
            <Phone size={16} />
            <span className="font-semibold">{SITE.phone}</span>
          </a>
          <Link
            href="/contatti"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-accent text-white font-semibold uppercase tracking-wider cursor-pointer"
          >
            Preventivo Gratuito
          </Link>
        </div>
      )}
    </>
  );
}
