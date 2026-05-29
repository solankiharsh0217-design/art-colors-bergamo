"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE, TRUST_BADGES } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck, FileText, Award } from "lucide-react";

const badgeIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={14} />,
  FileText: <FileText size={14} />,
  Award: <Award size={14} />,
  Clock: <Clock size={14} />,
};

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase mb-2">Contatti</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Richiedi un preventivo
            </h1>
            <div className="divider-accent mb-4" />
            <p className="text-lg text-text-secondary max-w-2xl">
              Compila il form e ricevi entro 24 ore una stima online e gratuita del lavoro.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-4 px-4 bg-surface-alt border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {TRUST_BADGES.map((badge) => (
            <span key={badge.label} className="trust-badge bg-surface-alt">
              {badgeIconMap[badge.icon]}
              {badge.label}
            </span>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {submitted ? (
                <div className="p-10 bg-success/5 border border-success/20 text-center">
                  <CheckCircle size={48} className="text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    Grazie!
                  </h3>
                  <p className="text-text-secondary">
                    Sarai ricontattato/a entro 24 ore con una stima del lavoro da fare.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Nome e Cognome</label>
                      <input type="text" required className="w-full px-4 py-3 border border-border bg-white text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-200" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Telefono</label>
                      <input type="tel" required className="w-full px-4 py-3 border border-border bg-white text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-200" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-1.5">Email</label>
                    <input type="email" required className="w-full px-4 py-3 border border-border bg-white text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-200" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Tipo di proprietà</label>
                      <select className="w-full px-4 py-3 border border-border bg-white text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-200">
                        <option>Villa</option>
                        <option>Appartamento</option>
                        <option>Condominio</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary mb-1.5">Cosa vorresti dipingere?</label>
                      <select className="w-full px-4 py-3 border border-border bg-white text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-200">
                        <option>Interni</option>
                        <option>Esterni</option>
                        <option>Entrambi</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-1.5">Messaggio</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-border bg-white text-text-primary focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all duration-200 resize-none" placeholder="Descrivi il tuo progetto..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold hover:bg-accent-hover transition-colors duration-200 cursor-pointer">
                    <Send size={16} /> Invia Richiesta
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Info */}
          <div className="lg:col-span-2">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  Informazioni di contatto
                </h3>
                <div className="space-y-3">
                  <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 bg-surface-alt border border-border hover:border-accent/30 transition-colors duration-200 cursor-pointer">
                    <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-primary text-sm">Indirizzo</p>
                      <p className="text-sm text-text-secondary">{SITE.address}</p>
                    </div>
                  </a>
                  <a href={SITE.phoneLink} className="flex items-start gap-3 p-4 bg-surface-alt border border-border hover:border-accent/30 transition-colors duration-200 cursor-pointer">
                    <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-primary text-sm">Telefono</p>
                      <p className="text-sm text-text-secondary">{SITE.phone}</p>
                    </div>
                  </a>
                  <a href={SITE.emailLink} className="flex items-start gap-3 p-4 bg-surface-alt border border-border hover:border-accent/30 transition-colors duration-200 cursor-pointer">
                    <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-primary text-sm">Email</p>
                      <p className="text-sm text-text-secondary">{SITE.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-4 bg-surface-alt border border-border">
                    <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-primary text-sm">Orari</p>
                      <p className="text-sm text-text-secondary">{SITE.hours.weekdays}</p>
                      <p className="text-sm text-text-secondary">{SITE.hours.saturday}</p>
                      <p className="text-sm text-text-secondary">{SITE.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Quick contact */}
                <div className="p-4 bg-primary text-white">
                  <p className="text-sm font-semibold mb-2">Hai bisogno di una risposta rapida?</p>
                  <p className="text-xs text-white/60 mb-3">Chiamaci direttamente o scrivici su WhatsApp.</p>
                  <div className="flex gap-2">
                    <a href={SITE.phoneLink} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-primary text-sm font-semibold hover:bg-white/90 transition-colors cursor-pointer">
                      <Phone size={14} /> Chiama
                    </a>
                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-whatsapp text-white text-sm font-semibold hover:bg-whatsapp/90 transition-colors cursor-pointer">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
