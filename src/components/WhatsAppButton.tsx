"use client";

import { waLink } from "@/lib/siteConfig";
import { WhatsAppIcon } from "./SiteHeader";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-card hover:scale-105 transition-transform"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
