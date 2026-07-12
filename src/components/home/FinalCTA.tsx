import Link from "next/link";
import { siteConfig, waLink } from "@/lib/siteConfig";
import { WhatsAppIcon } from "../SiteHeader";

export default function FinalCTA() {
  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="container-x flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

        {/* Left: copy */}
        <div className="max-w-xl">
          <h2 className="text-navy text-2xl md:text-3xl font-semibold leading-tight">
            Ready to invest smarter in Dubai?
          </h2>
          <p className="mt-3 text-navy/70 text-base leading-relaxed">
            One conversation with our team is all it takes to get clarity on
            your options, your returns, and your next move.
          </p>
        </div>

        {/* Right: CTAs */}
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center gap-4 xl:gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-cream font-medium text-sm tracking-wide px-8 py-4 rounded-full transition-colors whitespace-nowrap shadow-md"
          >
            Book a Consultation
          </Link>

          <a
            href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/35 text-navy font-medium text-sm px-8 py-4 rounded-full transition-colors whitespace-nowrap"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp Us
          </a>

          {/* Phone numbers — each on one line */}
          <div className="flex flex-col gap-1.5 text-navy/80 text-sm">
            <a href={`tel:${siteConfig.contact.dubaiPhoneHref}`} className="hover:text-navy transition-colors whitespace-nowrap font-medium">
              🇦🇪 {siteConfig.contact.dubaiPhone}
            </a>
            <a href={`tel:${siteConfig.contact.indiaPhoneHref}`} className="hover:text-navy transition-colors whitespace-nowrap font-medium">
              🇮🇳 {siteConfig.contact.indiaPhone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
