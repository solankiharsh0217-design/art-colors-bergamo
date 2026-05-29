"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, SERVICES, WHY_US, TESTIMONIALS, TRUST_BADGES } from "@/lib/constants";
import {
  Phone, ArrowRight, Paintbrush, Shield, Wrench,
  DoorOpen, ShieldCheck, Palette, CreditCard, FileText,
  Award, Star, Heart, ChevronRight, Home as HomeIcon,
  Clock, Quote,
} from "lucide-react";

const serviceIconMap: Record<string, React.ReactNode> = {
  Paintbrush: <Paintbrush size={24} strokeWidth={2} />,
  Home: <HomeIcon size={24} strokeWidth={2} />,
  Shield: <Shield size={24} strokeWidth={2} />,
  Wrench: <Wrench size={24} strokeWidth={2} />,
  DoorOpen: <DoorOpen size={24} strokeWidth={2} />,
  ShieldCheck: <ShieldCheck size={24} strokeWidth={2} />,
  Palette: <Palette size={24} strokeWidth={2} />,
};

const whyUsIconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard size={22} strokeWidth={2} />,
  FileText: <FileText size={22} strokeWidth={2} />,
  Award: <Award size={22} strokeWidth={2} />,
  Star: <Star size={22} strokeWidth={2} />,
  ShieldCheck: <ShieldCheck size={22} strokeWidth={2} />,
  Heart: <Heart size={22} strokeWidth={2} />,
};

const badgeIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={14} />,
  FileText: <FileText size={14} />,
  Award: <Award size={14} />,
  Clock: <Clock size={14} />,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < rating ? "text-star fill-star" : "text-gray-300"} />
      ))}
    </div>
  );
}

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ===== EDITORIAL HERO ===== */}
      <section className={`hero-editorial ${heroLoaded ? "loaded" : ""}`}>
        {/* Background Image */}
        <div
          className="hero-editorial-bg"
          style={{
            backgroundImage: `url(https://www.artcolorsbergamo.com/assets/images/image08.jpg)`,
          }}
        />
        <div className="hero-editorial-overlay" />

        {/* Content */}
        <div className="hero-editorial-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Trust badges floating */}
            <div className={`reveal-hero ${heroLoaded ? "visible" : ""} reveal-hero-delay-1 mb-8`}>
              <div className="flex flex-wrap gap-2">
                {TRUST_BADGES.map((badge) => (
                  <span key={badge.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold">
                    {badgeIconMap[badge.icon]}
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Main headline */}
            <div className={`reveal-hero ${heroLoaded ? "visible" : ""} reveal-hero-delay-2`}>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Imbianchini
                <br />
                <span className="text-white/40">a Bergamo</span>
              </h1>
            </div>

            {/* Accent line */}
            <div className={`editorial-line ${heroLoaded ? "visible" : ""} w-24 h-1 bg-accent mb-6`} />

            {/* Subheadline */}
            <div className={`reveal-hero ${heroLoaded ? "visible" : ""} reveal-hero-delay-3`}>
              <p className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
                Oltre 23 anni di esperienza. Vernici Sikkens di alta qualità.
                <br className="hidden sm:block" />
                Garanzia 5 anni su ogni lavoro esterno.
              </p>
            </div>

            {/* CTAs */}
            <div className={`reveal-hero ${heroLoaded ? "visible" : ""} reveal-hero-delay-4`}>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contatti"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-primary font-bold hover:bg-white/90 transition-all duration-300 cursor-pointer"
                >
                  Richiedi Preventivo Gratuito
                  <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a
                  href={SITE.phoneLink}
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 border-2 border-white/30 text-white font-bold hover:border-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <Phone size={18} strokeWidth={2.5} />
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Social proof */}
            <div className={`reveal-hero ${heroLoaded ? "visible" : ""} reveal-hero-delay-5`}>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white">
                      {["M", "L", "A", "G"][i - 1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={12} className="text-star fill-star" />
                    ))}
                    <span className="font-bold text-white ml-1">5.0</span>
                  </div>
                  <span className="text-white/50">da 200+ recensioni Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`reveal-hero ${heroLoaded ? "visible" : ""} reveal-hero-delay-5 absolute bottom-6 left-1/2 -translate-x-1/2 z-10`}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-semibold">Scorri</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-white/50 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-4 bg-primary overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 whitespace-nowrap">
              {["Pittura Interni", "Pittura Esterni", "Anti-Muffa", "Cartongesso", "Restauro", "Consulenza Colori", "23+ Anni", "5 Stelle Google"].map((text) => (
                <span key={`${i}-${text}`} className="text-sm font-bold text-white/70 flex items-center gap-4 uppercase tracking-widest">
                  {text}
                  <span className="w-1.5 h-1.5 bg-accent rotate-45" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">Perché scegliere noi</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                La scelta <span className="text-accent">giusta</span>
              </h2>
              <div className="divider-accent mt-5" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="p-7 bg-surface border border-border card-hover h-full group">
                  <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {whyUsIconMap[item.icon]}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section-padding px-4 bg-surface-alt">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">I nostri servizi</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  Cosa <span className="text-accent">facciamo</span>
                </h2>
                <div className="divider-accent mt-5" />
              </div>
              <Link href="/servizi" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all cursor-pointer">
                Tutti i servizi <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 100}>
                <Link href="/servizi" className="block group h-full">
                  <div className="border border-border bg-white overflow-hidden h-full card-hover">
                    <div className="relative h-52 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 w-11 h-11 bg-white text-accent flex items-center justify-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {serviceIconMap[service.icon]}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">Testimonianze</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                I nostri clienti ci <span className="text-accent">raccontano</span>
              </h2>
              <div className="divider-accent mt-5 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 100}>
                <div className="p-7 bg-surface border border-border h-full flex flex-col card-hover">
                  <div className="flex items-center gap-1 mb-4">
                    <Quote size={20} className="text-accent/20" />
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <p className="text-sm text-text-secondary leading-relaxed mt-4 mb-5 flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="pt-5 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-primary">{testimonial.name}</p>
                        <p className="text-xs text-text-muted">{testimonial.location}</p>
                      </div>
                      <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BIG CTA ===== */}
      <section className="section-padding px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pronto a rinnovare<br />la tua casa?
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto text-lg">
              Compila il form e ricevi entro 24 ore una stima online e gratuita del lavoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary font-bold hover:bg-white/90 transition-all duration-300 cursor-pointer">
                Preventivo Gratuito <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
              <a href={SITE.phoneLink} className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/30 text-white font-bold hover:border-white transition-all duration-300 cursor-pointer">
                <Phone size={18} strokeWidth={2.5} /> {SITE.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TEAM PREVIEW ===== */}
      <section className="section-padding px-4 bg-surface-alt">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">Il nostro team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Gli esperti imbianchini
              </h2>
              <div className="divider-accent mx-auto mb-6" />
              <p className="text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed">
                Art Colors è una realtà familiare con sede a Selvino. Da anni ci dedichiamo con passione a trasformare le case di Bergamo.
              </p>
              <Link href="/chi-siamo" className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold hover:bg-primary-light transition-all duration-300 cursor-pointer">
                Scopri di più <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
