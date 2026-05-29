"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const showLight = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
            : showLight
              ? "bg-transparent py-5"
              : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.artcolorsbergamo.com/assets/images/image05.jpg"
                alt="Art Colors Bergamo Logo"
                className={`h-10 w-auto object-contain transition-all duration-500 ${
                  showLight ? "mix-blend-screen brightness-150" : ""
                }`}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
                showLight ? "text-white" : "text-primary"
              }`} style={{ fontFamily: "var(--font-heading)" }}>
                Art Colors
              </span>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors duration-500 ${
                showLight ? "text-white/50" : "text-text-muted"
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
                className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer relative group ${
                  showLight
                    ? "text-white/80 hover:text-white"
                    : "text-text-secondary hover:text-accent"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 transition-all duration-300 ${
                  showLight ? "bg-white" : "bg-accent"
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.phoneLink}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                showLight
                  ? "text-white/80 hover:text-white"
                  : "text-text-secondary hover:text-accent"
              }`}
            >
              <Phone size={14} />
              {SITE.phone}
            </a>
            <Link
              href="/contatti"
              className={`px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                showLight
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-accent text-white hover:bg-accent-hover"
              }`}
            >
              Preventivo Gratuito
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 cursor-pointer transition-colors duration-300 ${
              showLight ? "text-white" : "text-text-primary"
            }`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-primary flex flex-col items-center justify-center gap-2 animate-[fade-in_0.3s_ease-out]">
          <button onClick={() => setMobileOpen(false)} className="absolute top-5 right-5 text-white cursor-pointer p-2">
            <X size={28} />
          </button>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-white hover:text-accent-light transition-colors cursor-pointer py-3 uppercase tracking-wide"
              style={{ animationDelay: `${i * 60}ms` }}
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
