import type { Metadata } from "next";
import { siteConfig, waLink } from "@/lib/siteConfig";
import { WhatsAppIcon } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Seiki Properties — WhatsApp, call our Dubai or India lines, or send us your investment brief." };

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-16">
        <div className="container-x">
          <span className="eyebrow text-gold">Contact</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-2xl">One conversation is usually<span className="block italic text-gold">enough to know.</span></h1>
          <p className="mt-5 text-cream/65 text-base max-w-xl leading-relaxed">Tell us what you&rsquo;re trying to achieve and we&rsquo;ll respond within one business day — sooner on WhatsApp.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <a href={`tel:${siteConfig.contact.dubaiPhoneHref}`} className="btn-capsule bg-gold hover:bg-gold-light text-navy font-medium px-8 py-4">🇦🇪 {siteConfig.contact.dubaiPhone}</a>
            <a href={`tel:${siteConfig.contact.indiaPhoneHref}`} className="btn-capsule border border-cream/30 hover:border-gold hover:text-gold text-cream px-8 py-4">🇮🇳 {siteConfig.contact.indiaPhone}</a>
            <a href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")} target="_blank" rel="noopener noreferrer" className="btn-capsule border border-cream/30 hover:border-gold hover:text-gold text-cream gap-2 px-8 py-4"><WhatsAppIcon className="w-5 h-5" />WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
