"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { TEAM } from "@/lib/constants";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">Chi siamo</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Art Colors di Steven Magoni
            </h1>
            <div className="divider-accent mb-4" />
            <p className="text-lg text-text-secondary max-w-2xl">
              Una realtà familiare con sede a Selvino, nella provincia di Bergamo. Da anni ci dedichiamo con passione a trasformare le case.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                La nostra storia
              </h2>
              <div className="divider-accent" />
              <p className="text-text-secondary leading-relaxed">
                Art Colors è nata dalla passione di Steven Magoni per la pittura e le trasformazioni degli spazi. Con oltre 23 anni di esperienza nel settore, abbiamo costruito la nostra reputazione sulla qualità del lavoro e sulla soddisfazione dei clienti.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Ogni progetto è per noi un&apos;opportunità per dimostrare la nostra dedizione ai dettagli e l&apos;uso di materiali di prima qualità. Utilizziamo esclusivamente vernici Sikkens, tra le più resistenti e durature sul mercato.
              </p>
              <p className="text-text-secondary leading-relaxed">
                La nostra missione è semplice: rendere la verniciatura della tua casa il più semplice possibile, dalla proposta iniziale al sopralluogo finale, garantendo risultati che superano le aspettative.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Clock size={22} />, num: 23, suffix: "+", label: "Anni di esperienza" },
                { icon: <CheckCircle size={22} />, num: 2000, suffix: "+", label: "Progetti completati" },
                { icon: <Award size={22} />, num: 5, suffix: "/5", label: "Stelle su Google" },
                { icon: <Users size={22} />, num: 100, suffix: "%", label: "Clienti soddisfatti" },
              ].map((stat) => (
                <div key={stat.label} className="p-5 bg-surface-alt border border-border text-center card-hover">
                  <div className="w-10 h-10 bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-accent" style={{ fontFamily: "var(--font-heading)" }}>
                    <CountUp end={stat.num} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding px-4 bg-surface-alt">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">Il nostro team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Gli esperti imbianchini
              </h2>
              <div className="divider-accent mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="overflow-hidden bg-white border border-border card-hover text-center">
                  <div className="relative h-64 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold mb-2">{member.role}</p>
                    <p className="text-sm text-text-secondary">{member.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                I nostri valori
              </h2>
              <div className="divider-accent mx-auto" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Qualità", desc: "Utilizziamo solo materiali di prima qualità, come le vernici Sikkens, per garantire risultati duraturi." },
              { title: "Affidabilità", desc: "Paghi il lavoro completo solo quando è finito e sei soddisfatto. Preventivi sempre gratuiti." },
              { title: "Passione", desc: "Ogni progetto è trattato con cura e dedizione, perché crediamo che la pittura sia un'arte." },
            ].map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 100}>
                <div className="p-6 border border-border bg-surface-alt text-center card-hover h-full">
                  <h3 className="text-xl font-bold text-accent mb-3" style={{ fontFamily: "var(--font-heading)" }}>{val.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-4 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Vuoi lavorare con noi?
            </h2>
            <p className="text-white/60 mb-6">Contattaci per un preventivo gratuito o per qualsiasi informazione.</p>
            <Link href="/contatti" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-semibold hover:bg-white/90 transition-colors duration-200 cursor-pointer">
              Contattaci Ora
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
