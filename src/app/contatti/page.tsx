"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-3">Contatti</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Richiedi un preventivo
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Compila il form e ricevi entro 24 ore una stima online e gratuita del lavoro.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {submitted ? (
                <div className="p-10 rounded-2xl bg-success/5 border border-success/20 text-center">
                  <CheckCircle size={48} className="text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
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
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Nome e Cognome</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Telefono</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Email</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Tipo di proprietà</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                        <option>Villa</option>
                        <option>Appartamento</option>
                        <option>Condominio</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Cosa vorresti dipingere?</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                        <option>Interni</option>
                        <option>Esterni</option>
                        <option>Entrambi</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Messaggio</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Descrivi il tuo progetto..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-cta text-white font-semibold hover:bg-cta-hover transition-colors cursor-pointer">
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
                <h3 className="text-xl font-bold text-text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  Informazioni di contatto
                </h3>
                <div className="space-y-4">
                  <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Indirizzo</p>
                      <p className="text-sm text-text-secondary">{SITE.address}</p>
                    </div>
                  </a>
                  <a href={SITE.phoneLink} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Telefono</p>
                      <p className="text-sm text-text-secondary">{SITE.phone}</p>
                    </div>
                  </a>
                  <a href={SITE.emailLink} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Email</p>
                      <p className="text-sm text-text-secondary">{SITE.email}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border">
                    <Clock size={20} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">Orari</p>
                      <p className="text-sm text-text-secondary">{SITE.hours.weekdays}</p>
                      <p className="text-sm text-text-secondary">{SITE.hours.saturday}</p>
                      <p className="text-sm text-text-secondary">{SITE.hours.sunday}</p>
                    </div>
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
