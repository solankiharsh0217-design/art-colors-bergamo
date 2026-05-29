"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { SITE, STATS, SERVICES, WHY_US, TESTIMONIALS, TRUST_BADGES } from "@/lib/constants";
import {
  Phone, ArrowRight, Paintbrush, Shield, Wrench,
  DoorOpen, ShieldCheck, Palette, CreditCard, FileText,
  Award, Star, Heart, ChevronRight, Home as HomeIcon,
  CheckCircle, Clock, Quote,
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
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15,23,42,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Main Content */}
            <div>
              <ScrollReveal>
                <div className="flex flex-wrap gap-2 mb-6">
                  {TRUST_BADGES.map((badge) => (
                    <span key={badge.label} className="trust-badge">
                      {badgeIconMap[badge.icon]}
                      {badge.label}
                    </span>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-[1.1] mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Imbianchini a Bergamo
                  <span className="block text-accent mt-1">con Garanzia 5 Anni</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
                  Oltre 23 anni di esperienza in imbiancature e tinteggiature di interni ed esterni. Vernici Sikkens di alta qualità. Preventivo gratuito.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href="/contatti"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold hover:bg-accent-hover transition-colors duration-200 cursor-pointer"
                  >
                    Richiedi Preventivo Gratuito
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                  <a
                    href={SITE.phoneLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-border text-text-primary font-semibold hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    <Phone size={16} strokeWidth={2.5} />
                    {SITE.phone}
                  </a>
                </div>
              </ScrollReveal>

              {/* Social proof inline */}
              <ScrollReveal delay={400}>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-surface-alt border-2 border-white flex items-center justify-center text-xs font-bold text-accent">
                        {["M", "L", "A", "G"][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-star fill-star" />
                      <Star size={12} className="text-star fill-star" />
                      <Star size={12} className="text-star fill-star" />
                      <Star size={12} className="text-star fill-star" />
                      <Star size={12} className="text-star fill-star" />
                      <span className="font-semibold text-text-primary ml-1">5.0</span>
                    </div>
                    <span>da 200+ recensioni Google</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Stats + Image placeholder */}
            <div className="lg:order-first">
              <ScrollReveal direction="right">
                <div className="relative">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {STATS.map((stat) => {
                      const numPart = stat.number.replace(/\D/g, "");
                      const suffixPart = stat.number.replace(/[0-9]/g, "");
                      return (
                        <div
                          key={stat.label}
                          className="p-5 bg-surface-alt border border-border text-center card-hover"
                        >
                          <div
                            className="text-3xl font-bold text-accent mb-1"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            <CountUp end={parseInt(numPart)} suffix={suffixPart} />
                          </div>
                          <div className="text-xs text-text-muted font-medium uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Trust strip */}
                  <div className="mt-4 p-4 bg-primary flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <ShieldCheck size={18} />
                      <span className="text-sm font-semibold">Garanzia 5 Anni su Verniciatura Esterna</span>
                    </div>
                    <CheckCircle size={16} className="text-success" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-3 bg-surface-alt border-y border-border overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 whitespace-nowrap">
              {["Pittura Interni", "Pittura Esterni", "Anti-Muffa", "Cartongesso", "Restauro", "Consulenza Colori", "23+ Anni", "5 Stelle Google"].map((text) => (
                <span key={`${i}-${text}`} className="text-sm font-semibold text-text-muted flex items-center gap-4">
                  {text}
                  <span className="w-1.5 h-1.5 bg-accent/40 rotate-45" />
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
            <div className="mb-12">
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">Perché scegliere noi</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                La scelta <span className="text-accent">giusta</span>
              </h2>
              <div className="divider-accent mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="p-6 bg-surface border border-border card-hover h-full group">
                  <div className="w-11 h-11 bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    {whyUsIconMap[item.icon]}
                  </div>
                  <h3 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
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
            <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">I nostri servizi</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  Cosa <span className="text-accent">facciamo</span>
                </h2>
                <div className="divider-accent mt-4" />
              </div>
              <Link href="/servizi" className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:gap-2.5 transition-all cursor-pointer">
                Tutti i servizi <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 80}>
                <Link href="/servizi" className="block group h-full">
                  <div className="border border-border bg-white overflow-hidden h-full card-hover">
                    <div className="relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 bg-white text-accent flex items-center justify-center shadow-sm">
                        {serviceIconMap[service.icon]}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-200" style={{ fontFamily: "var(--font-heading)" }}>
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
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">Testimonianze</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                I nostri clienti ci <span className="text-accent">raccontano</span>
              </h2>
              <div className="divider-accent mt-4 mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 80}>
                <div className="p-6 bg-surface border border-border h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    <Quote size={16} className="text-accent/30" />
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <p className="text-sm text-text-secondary leading-relaxed mt-3 mb-4 flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-xs text-text-muted">{testimonial.location}</p>
                      </div>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1">
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pronto a rinnovare<br />la tua casa?
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto text-lg">
              Compila il form e ricevi entro 24 ore una stima online e gratuita del lavoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary font-semibold hover:bg-white/90 transition-colors duration-200 cursor-pointer">
                Preventivo Gratuito <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a href={SITE.phoneLink} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white font-semibold hover:border-white transition-colors duration-200 cursor-pointer">
                <Phone size={16} strokeWidth={2.5} /> {SITE.phone}
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
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">Il nostro team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Gli esperti imbianchini
              </h2>
              <div className="divider-accent mx-auto mb-6" />
              <p className="text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
                Art Colors è una realtà familiare con sede a Selvino. Da anni ci dedichiamo con passione a trasformare le case di Bergamo.
              </p>
              <Link href="/chi-siamo" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold hover:bg-primary-light transition-colors duration-200 cursor-pointer">
                Scopri di più <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
