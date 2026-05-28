"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5C] transition-colors cursor-pointer"
      style={{ animation: "whatsapp-pulse 2s infinite" }}
      aria-label="Contattaci su WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
