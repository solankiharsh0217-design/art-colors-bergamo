"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import {
  Paintbrush, Shield, Wrench, DoorOpen, ShieldCheck, Palette, CheckCircle, ArrowRight,
} from "lucide-react";
import { Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const serviceIconMap: Record<string, React.ReactNode> = {
  Paintbrush: <Paintbrush size={28} />,
  Home: <HomeIcon size={28} />,
  Shield: <Shield size={28} />,
  Wrench: <Wrench size={28} />,
  DoorOpen: <DoorOpen size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  Palette: <Palette size={28} />,
};

export default function ServiziPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-3">I nostri servizi</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Servizi di pittura e tinteggiatura
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Cerchi un imbianchino a Bergamo per rinnovare la tua casa? Specializzati in imbiancature e tinteggiature per interni ed esterni.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 50}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {serviceIconMap[service.icon]}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {["Professionali esperti", "Materiali di alta qualità", "Garanzia sul lavoro"].map((point) => (
                      <div key={point} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle size={16} className="text-success shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} rounded-2xl overflow-hidden shadow-lg`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.title} className="w-full h-72 sm:h-80 object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Hai bisogno di un preventivo?
            </h2>
            <p className="text-text-secondary mb-8">Preventivi gratuiti per tutti i nostri servizi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-cta text-white font-semibold hover:bg-cta-hover transition-colors cursor-pointer">
                Preventivo Gratuito <ArrowRight size={18} />
              </Link>
              <a href={SITE.phoneLink} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all cursor-pointer">
                Chiama Ora
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
