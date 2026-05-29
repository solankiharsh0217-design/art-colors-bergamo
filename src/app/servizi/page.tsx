"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES, SITE } from "@/lib/constants";
import {
  Paintbrush, Shield, Wrench, DoorOpen, ShieldCheck, Palette, CheckCircle, ArrowRight,
} from "lucide-react";
import { Home as HomeIcon } from "lucide-react";
import Link from "next/link";

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
      <section className="relative pt-32 pb-16 px-4 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">I nostri servizi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Servizi di pittura e tinteggiatura
            </h1>
            <div className="divider-accent mb-4" />
            <p className="text-lg text-text-secondary max-w-2xl">
              Cerchi un imbianchino a Bergamo per rinnovare la tua casa? Specializzati in imbiancature e tinteggiature per interni ed esterni.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 50}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center mb-4">
                    {serviceIconMap[service.icon]}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    {service.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-5">{service.longDescription}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                        <CheckCircle size={14} className="text-success shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/contatti" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all cursor-pointer">
                    Richiedi preventivo <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} overflow-hidden border border-border`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.title} className="w-full h-72 sm:h-80 object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-4 bg-surface-alt border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Hai bisogno di un preventivo?
            </h2>
            <p className="text-text-secondary mb-6">Preventivi gratuiti per tutti i nostri servizi. Contattaci oggi stesso.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold hover:bg-accent-hover transition-colors duration-200 cursor-pointer">
                Preventivo Gratuito <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneLink} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-border text-text-primary font-semibold hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer">
                Chiama Ora
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
