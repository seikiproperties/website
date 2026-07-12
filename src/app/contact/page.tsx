import type { Metadata } from "next";
import { siteConfig, waLink } from "@/lib/siteConfig";
import ContactForm from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Seiki Properties — WhatsApp, call our Dubai or India lines, or send us your investment brief.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-16">
        <div className="container-x">
          <span className="eyebrow text-gold">Contact</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-2xl">
            One conversation is usually
            <span className="block italic text-gold">enough to know.</span>
          </h1>
          <p className="mt-5 text-cream/65 text-base max-w-xl leading-relaxed">
            Tell us what you&rsquo;re trying to achieve and we&rsquo;ll respond within
            one business day — sooner on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section bg-cream-light">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14">

          {/* Left: direct contact details */}
          <div>
            <h2 className="text-navy text-xl font-medium mb-8">Reach us directly</h2>

            <div className="space-y-6">
              <ContactRow
                label="Dubai"
                value={siteConfig.contact.dubaiPhone}
                href={`tel:${siteConfig.contact.dubaiPhoneHref}`}
              />
              <ContactRow
                label="India"
                value={siteConfig.contact.indiaPhone}
                href={`tel:${siteConfig.contact.indiaPhoneHref}`}
              />
              <ContactRow
                label="Email"
                value={siteConfig.contact.email}
                href={`mailto:${siteConfig.contact.email}`}
              />
              {/* WhatsApp row — same structure as ContactRow but with icon */}
              <a
                href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <span className="eyebrow text-gold-dark w-24 shrink-0 pt-0.5">WhatsApp</span>
                <span className="text-navy text-sm group-hover:text-gold-dark transition-colors flex items-center gap-2">
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  Chat with us instantly
                </span>
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-navy/10 space-y-6">
              <div>
                <p className="eyebrow text-gold-dark mb-2">Office</p>
                <p className="text-navy/65 text-sm leading-relaxed">
                  {siteConfig.contact.officeAddress}
                </p>
              </div>
              <div>
                <p className="eyebrow text-gold-dark mb-2">Response Time</p>
                <p className="text-navy/65 text-sm leading-relaxed">
                  Within one business day by email or form. Usually within the
                  hour on WhatsApp during Dubai business hours (9am–7pm GST).
                </p>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="bg-white border border-navy/10 p-8 md:p-10">
            <h2 className="text-navy text-xl font-medium mb-1">
              Tell us about your investment
            </h2>
            <p className="text-navy/50 text-sm mb-7">
              The more context you give us, the more useful our first call will be.
            </p>
            <ContactForm variant="light" extended />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex items-start gap-4 group">
      <span className="eyebrow text-gold-dark w-24 shrink-0 pt-0.5">{label}</span>
      <span className="text-navy text-sm group-hover:text-gold-dark transition-colors break-all">
        {value}
      </span>
    </a>
  );
}
