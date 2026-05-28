import Link from "next/link";
import { SITE, SERVICES } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.artcolorsbergamo.com/assets/images/image05.jpg"
                alt="Art Colors Bergamo Logo"
                className="h-10 w-auto object-contain mix-blend-screen"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Imbianchini a Bergamo e provincia. Oltre 23 anni di esperienza in imbiancature e tinteggiature.
            </p>
            <p className="text-xs text-white/40 mt-3">P.IVA: {SITE.piva}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/40 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Servizi
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href="/servizi" className="text-sm text-white/60 hover:text-white transition-colors font-medium cursor-pointer">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/40 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Contatti
            </h4>
            <div className="space-y-3 text-sm text-white/60">
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors cursor-pointer">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                {SITE.address}
              </a>
              <a href={SITE.phoneLink} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Phone size={14} className="shrink-0" />
                {SITE.phone}
              </a>
              <a href={SITE.emailLink} className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                <Mail size={14} className="shrink-0" />
                {SITE.email}
              </a>
            </div>
            <div className="flex gap-2 mt-4">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-primary transition-colors cursor-pointer" aria-label="Facebook">
                <FacebookIcon size={14} />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-primary transition-colors cursor-pointer" aria-label="Instagram">
                <InstagramIcon size={14} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/40 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Orari
            </h4>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <div>
                  <p>{SITE.hours.weekdays}</p>
                  <p>{SITE.hours.saturday}</p>
                  <p>{SITE.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {SITE.fullName}. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="https://www.iubenda.com/privacy-policy/70521593" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/70521593/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
