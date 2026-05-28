import type { Metadata } from "next";
import { Syne, Manrope, Abril_Fatface } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const abril = Abril_Fatface({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Art Colors Bergamo | Imbianchini Profesionisti",
  description:
    "Imbianchini a Bergamo e provincia. Specializzati in pitture di interni ed esterni. Oltre 23 anni di esperienza. Preventivo gratuito.",
  keywords: [
    "imbianchino bergamo",
    "pittura interni bergamo",
    "tinteggiatura bergamo",
    "verniciatura esterni",
    "anti-muffa bergamo",
    "art colors",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${syne.variable} ${manrope.variable} ${abril.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
