import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Art Colors Bergamo | Imbianchini Professionisti con 23+ Anni di Esperienza",
  description:
    "Imbianchini a Bergamo e provincia. Specializzati in pitture di interni ed esterni con vernici Sikkens. Oltre 23 anni di esperienza. Preventivo gratuito e garanzia 5 anni.",
  keywords: [
    "imbianchino bergamo",
    "pittura interni bergamo",
    "tinteggiatura bergamo",
    "verniciatura esterni",
    "anti-muffa bergamo",
    "art colors bergamo",
    "pittore bergamo",
    "cartongesso bergamo",
  ],
  openGraph: {
    title: "Art Colors Bergamo | Imbianchini Professionisti",
    description: "Oltre 23 anni di esperienza in imbiancature e tinteggiature. Garanzia 5 anni. Preventivo gratuito.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${poppins.variable} ${openSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ fontFamily: "var(--font-body)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
