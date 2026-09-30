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
        </div>
      </section>
      <section className="section bg-cream-light">
        <div className="container-x max-w-2xl">
          <h2 className="text-navy text-xl font-medium mb-8">Reach us directly</h2>
          <div className="space-y-6">
            <a href={`tel:${siteConfig.contact.dubaiPhoneHref}`} className="flex items-start gap-4 group">
              <span className="eyebrow text-gold-dark w-24 shrink-0 pt-0.5">Dubai</span>
              <span className="text-navy text-sm group-hover:text-gold-dark transition-colors">{siteConfig.contact.dubaiPhone}</span>
            </a>
            <a href={`tel:${siteConfig.contact.indiaPhoneHref}`} className="flex items-start gap-4 group">
              <span className="eyebrow text-gold-dark w-24 shrink-0 pt-0.5">India</span>
              <span className="text-navy text-sm group-hover:text-gold-dark transition-colors">{siteConfig.contact.indiaPhone}</span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-4 group">
              <span className="eyebrow text-gold-dark w-24 shrink-0 pt-0.5">Email</span>
              <span className="text-navy text-sm group-hover:text-gold-dark transition-colors break-all">{siteConfig.contact.email}</span>
            </a>
            <a href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <span className="eyebrow text-gold-dark w-24 shrink-0 pt-0.5">WhatsApp</span>
              <span className="text-navy text-sm group-hover:text-gold-dark transition-colors flex items-center gap-2"><WhatsAppIcon className="w-4 h-4" />Chat with us instantly</span>
            </a>
          </div>
          <div className="mt-10 pt-8 border-t border-navy/10 space-y-6">
            <div><p className="eyebrow text-gold-dark mb-2">Office</p><p className="text-navy/65 text-sm leading-relaxed">{siteConfig.contact.officeAddress}</p></div>
            <div><p className="eyebrow text-gold-dark mb-2">Response Time</p><p className="text-navy/65 text-sm leading-relaxed">Within one business day by email or form. Usually within the hour on WhatsApp during Dubai business hours (9am–7pm GST).</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
