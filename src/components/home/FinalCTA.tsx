import Link from "next/link";
import { siteConfig, waLink } from "@/lib/siteConfig";
import { WhatsAppIcon } from "../SiteHeader";

export default function FinalCTA() {
  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="container-x flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
        <div className="max-w-xl">
          <h2 className="text-navy text-2xl md:text-3xl font-light leading-tight">
            Let&rsquo;s talk about what you&rsquo;re trying to build.
          </h2>
          <p className="mt-3 text-navy/70 text-sm leading-relaxed">
            One conversation is usually enough to know if we&rsquo;re the right fit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-cream font-medium text-sm tracking-wide px-8 py-4 rounded-sm transition-colors"
          >
            Book a Consultation
          </Link>
          <a
            href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy font-medium text-sm hover:underline"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp Us
          </a>
          <div className="flex flex-col text-navy/80 text-sm gap-0.5">
            <a href={`tel:${siteConfig.contact.dubaiPhoneHref}`} className="hover:underline">
              Dubai: {siteConfig.contact.dubaiPhone}
            </a>
            <a href={`tel:${siteConfig.contact.indiaPhoneHref}`} className="hover:underline">
              India: {siteConfig.contact.indiaPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
