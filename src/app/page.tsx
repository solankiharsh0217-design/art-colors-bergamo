"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, STATS, SERVICES, WHY_US } from "@/lib/constants";
import {
  Phone, ArrowRight, Paintbrush, Shield, Wrench,
  DoorOpen, ShieldCheck, Palette, CreditCard, FileText,
  Award, Star, Heart, CheckCircle, ChevronRight, Home as HomeIcon,
} from "lucide-react";

const serviceIconMap: Record<string, React.ReactNode> = {
  Paintbrush: <Paintbrush size={28} strokeWidth={2.5} />,
  Home: <HomeIcon size={28} strokeWidth={2.5} />,
  Shield: <Shield size={28} strokeWidth={2.5} />,
  Wrench: <Wrench size={28} strokeWidth={2.5} />,
  DoorOpen: <DoorOpen size={28} strokeWidth={2.5} />,
  ShieldCheck: <ShieldCheck size={28} strokeWidth={2.5} />,
  Palette: <Palette size={28} strokeWidth={2.5} />,
};

const whyUsIconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard size={24} strokeWidth={2.5} />,
  FileText: <FileText size={24} strokeWidth={2.5} />,
  Award: <Award size={24} strokeWidth={2.5} />,
  Star: <Star size={24} strokeWidth={2.5} />,
  ShieldCheck: <ShieldCheck size={24} strokeWidth={2.5} />,
  Heart: <Heart size={24} strokeWidth={2.5} />,
};

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
        {/* Paint splatter background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cta/10 rounded-full blur-[150px]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Content */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-extrabold uppercase tracking-widest mb-6 brutal-shadow">
                  <CheckCircle size={14} strokeWidth={3} />
                  Bergamo&apos;s #1 Rated Painter
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.95] mb-6 uppercase"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Pittura
                  <span className="block text-primary">la tua</span>
                  <span className="block text-cta">casa</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-white/60 max-w-md mb-8 leading-relaxed font-medium">
                  Imbianchini a Bergamo e provincia. Oltre 23 anni di esperienza in imbiancature e tinteggiature di interni ed esterni.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contatti"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-extrabold uppercase tracking-wider text-sm hover:bg-primary-dark transition-all brutal-shadow-primary cursor-pointer"
                  >
                    Chiedi un Preventivo
                    <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={SITE.phoneLink}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:border-white hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <Phone size={18} strokeWidth={2.5} />
                    {SITE.phone}
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="right">
                <div className="space-y-4">
                  {STATS.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-6 p-5 bg-white/5 border border-white/10 backdrop-blur-sm"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div
                        className="text-5xl sm:text-6xl font-extrabold text-cta shrink-0"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-white/70 font-bold uppercase tracking-wider text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-bold">Scorri</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-4 bg-primary overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 whitespace-nowrap">
              {["Pittura Interni", "Pittura Esterni", "Anti-Muffa", "Cartongesso", "Restauro", "Consulenza Colori", "23+ Anni", "5 Stelle Google"].map((text) => (
                <span key={`${i}-${text}`} className="text-white font-extrabold uppercase tracking-widest text-sm flex items-center gap-4">
                  {text}
                  <span className="w-2 h-2 bg-white/40 rotate-45" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-24 sm:py-32 px-4 bg-surface-alt">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-3">Perché scegliere noi</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary uppercase leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
                La scelta<br />
                <span className="text-primary">giusta</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="p-6 bg-white border-2 border-foreground/10 card-hover h-full group">
                  <div className="w-12 h-12 bg-primary text-white flex items-center justify-center mb-4 group-hover:bg-foreground transition-colors">
                    {whyUsIconMap[item.icon]}
                  </div>
                  <h3 className="text-lg font-extrabold text-text-primary mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
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
      <section className="py-24 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <p className="text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-3">I nostri servizi</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary uppercase leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
                  Cosa<br />
                  <span className="text-primary">facciamo</span>
                </h2>
              </div>
              <Link href="/servizi" className="inline-flex items-center gap-2 text-primary font-extrabold uppercase tracking-wider text-sm hover:gap-3 transition-all cursor-pointer">
                Tutti i servizi <ChevronRight size={18} strokeWidth={3} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 80}>
                <Link href="/servizi" className="block group h-full">
                  <div className="border-2 border-foreground/10 bg-white overflow-hidden h-full card-hover">
                    <div className="relative h-52 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 w-12 h-12 bg-primary text-white flex items-center justify-center">
                        {serviceIconMap[service.icon]}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-extrabold text-text-primary mb-2 uppercase tracking-wide group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
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

      {/* ===== BIG CTA ===== */}
      <section className="py-24 sm:py-32 px-4 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%)`,
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase leading-[0.95] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pronto a<br />
              <span className="text-cta">rinnovare</span>?
            </h2>
            <p className="text-white/70 mb-10 max-w-lg mx-auto text-lg font-medium">
              Compila il form e ricevi entro 24 ore una stima online e gratuita del lavoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-primary font-extrabold uppercase tracking-wider text-sm hover:bg-white/90 transition-all brutal-shadow cursor-pointer">
                Preventivo Gratuito <ArrowRight size={18} strokeWidth={3} />
              </Link>
              <a href={SITE.phoneLink} className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-white/40 text-white font-bold uppercase tracking-wider text-sm hover:border-white transition-all cursor-pointer">
                <Phone size={18} strokeWidth={2.5} /> {SITE.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-24 sm:py-32 px-4 bg-surface-alt">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-extrabold text-primary tracking-[0.3em] uppercase mb-3">Il nostro team</p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-text-primary uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                Gli esperti
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="text-center">
              <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                Art Colors è una realtà familiare con sede a Selvino. Da anni ci dedichiamo con passione a trasformare le case di Bergamo.
              </p>
              <Link href="/chi-siamo" className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-white font-extrabold uppercase tracking-wider text-sm hover:bg-foreground/80 transition-colors brutal-shadow cursor-pointer">
                Scopri di più <ArrowRight size={18} strokeWidth={3} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
