"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM, SITE } from "@/lib/constants";
import { CheckCircle, Award, Users, Clock } from "lucide-react";
import Link from "next/link";

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-3">Chi siamo</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Art Colors di Steven Magoni
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Una realtà familiare con sede a Selvino, nella provincia di Bergamo. Da anni ci dedichiamo con passione a trasformare le case.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                La nostra storia
              </h2>
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
                { icon: <Clock size={24} />, num: "23+", label: "Anni di esperienza" },
                { icon: <CheckCircle size={24} />, num: "2000+", label: "Progetti completati" },
                { icon: <Award size={24} />, num: "5/5", label: "Stelle su Google" },
                { icon: <Users size={24} />, num: "100%", label: "Clienti soddisfatti" },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-xl bg-surface border border-border text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>{stat.num}</div>
                  <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28 px-4 bg-surface">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary tracking-wider uppercase mb-3">Il nostro team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                Gli esperti imbianchini
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {TEAM.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden bg-white border border-border card-hover text-center">
                  <div className="relative h-64 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                I nostri valori
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Qualità", desc: "Utilizziamo solo materiali di prima qualità, come le vernici Sikkens, per garantire risultati duraturi." },
              { title: "Affidabilità", desc: "Paghi il lavoro completo solo quando è finito e sei soddisfatto. Preventivi sempre gratuiti." },
              { title: "Passione", desc: "Ogni progetto è trattato con cura e dedizione, perché crediamo che la pittura sia un'arte." },
            ].map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 100}>
                <div className="p-6 rounded-2xl border border-border bg-white text-center card-hover h-full">
                  <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: "var(--font-heading)" }}>{val.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
