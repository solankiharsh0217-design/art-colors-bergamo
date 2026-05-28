"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { SITE, STATS, SERVICES, WHY_US } from "@/lib/constants";
import {
  Phone, ArrowRight, Paintbrush, Shield, Wrench,
  DoorOpen, ShieldCheck, Palette, CreditCard, FileText,
  Award, Star, Heart, CheckCircle, ChevronRight,
} from "lucide-react";
import { Home as HomeIcon } from "lucide-react";

const serviceIconMap: Record<string, React.ReactNode> = {
  Paintbrush: <Paintbrush size={24} />,
  Home: <HomeIcon size={24} />,
  Shield: <Shield size={24} />,
  Wrench: <Wrench size={24} />,
  DoorOpen: <DoorOpen size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Palette: <Palette size={24} />,
};

const whyUsIconMap: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard size={24} />,
  FileText: <FileText size={24} />,
  Award: <Award size={24} />,
  Star: <Star size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Heart: <Heart size={24} />,
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-light/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm mb-6">
                  <CheckCircle size={14} className="text-cta" />
                  Impianchini a Bergamo dal 2001
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Pittura la tua casa con l&apos;
                  <span className="text-cta">imbianchino più votato</span>{" "}
                  di Bergamo Alta
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg text-white/70 max-w-lg mb-8 leading-relaxed">
                  Ci specializziamo in imbiancature e tinteggiature per le case di Bergamo e provincia. Oltre 23 anni di esperienza.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contatti"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cta text-white font-semibold hover:bg-cta-hover transition-colors cursor-pointer"
                  >
                    Chiedi un Preventivo
                    <ArrowRight size={18} />
                  </Link>
                  <a
                    href={SITE.phoneLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/30 text-white font-medium hover:border-white/60 hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <Phone size={18} />
                    {SITE.phone}
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Stats */}
            <div className="hidden lg:block">
              <ScrollReveal direction="right">
                <div className="grid grid-cols-1 gap-6">
                  {STATS.map((stat, i) => (
                    <div key={stat.label} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-5xl font-bold text-cta" style={{ fontFamily: "var(--font-heading)" }}>
                        {stat.number}
                      </div>
                      <div className="text-white/80 text-lg">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="lg:hidden mt-12 grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-cta" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.number}
                </div>
                <div className="text-white/60 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 sm:py-28 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">Perché scegliere noi</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                La scelta giusta per la tua casa
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="p-6 rounded-2xl bg-white border border-border card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {whyUsIconMap[item.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">I nostri servizi</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                Servizi di pittura professionale
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 80}>
                <Link href="/servizi" className="block group h-full">
                  <div className="rounded-2xl overflow-hidden border border-border bg-white card-hover h-full">
                    <div className="relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/90 text-primary flex items-center justify-center">
                        {serviceIconMap[service.icon]}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link href="/servizi" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors cursor-pointer">
                Vedi tutti i servizi <ChevronRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4 bg-cta">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Pronto a rinnovare la tua casa?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Compila il form e ricevi entro 24 ore una stima online e gratuita del lavoro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white text-cta font-semibold hover:bg-white/90 transition-colors cursor-pointer">
                Chiedi un Preventivo <ArrowRight size={18} />
              </Link>
              <a href={SITE.phoneLink} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/40 text-white font-medium hover:border-white transition-all cursor-pointer">
                <Phone size={18} /> {SITE.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="py-20 sm:py-28 px-4 bg-surface">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">Il nostro team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-12" style={{ fontFamily: "var(--font-heading)" }}>
              Esperti imbianchini a Bergamo
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Art Colors è una realtà familiare con sede a Selvino, nella provincia di Bergamo. Da anni ci dedichiamo con passione a trasformare le case di Bergamo.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <Link href="/chi-siamo" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors cursor-pointer">
              Scopri di più su di noi <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
