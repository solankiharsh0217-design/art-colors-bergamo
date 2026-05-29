"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp text-white shadow-lg hover:bg-whatsapp/90 transition-all duration-200 cursor-pointer hover:scale-105"
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
