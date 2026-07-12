import Link from "next/link";
import { siteConfig, waLink } from "@/lib/siteConfig";
import ContactForm from "./ContactForm";
import { WhatsAppIcon } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="container-x section">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20">
          {/* Left: brand + details */}
          <div>
            <span className="text-2xl font-light tracking-wide">
              Seiki<span className="text-gold font-medium"> Properties</span>
            </span>
            <p className="mt-4 text-cream/60 text-sm leading-relaxed max-w-sm">
              A full-service Dubai real estate advisory for Indian HNIs, NRIs, and
              business owners — from the first search to a confident exit.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <a href={`tel:${siteConfig.contact.dubaiPhoneHref}`} className="flex items-start gap-4 text-cream/80 hover:text-gold transition-colors">
                <span className="eyebrow text-gold/80 w-24 shrink-0 pt-0.5">Dubai</span>
                <span>{siteConfig.contact.dubaiPhone}</span>
              </a>
              <a href={`tel:${siteConfig.contact.indiaPhoneHref}`} className="flex items-start gap-4 text-cream/80 hover:text-gold transition-colors">
                <span className="eyebrow text-gold/80 w-24 shrink-0 pt-0.5">India</span>
                <span>{siteConfig.contact.indiaPhone}</span>
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-4 text-cream/80 hover:text-gold transition-colors">
                <span className="eyebrow text-gold/80 w-24 shrink-0 pt-0.5">Email</span>
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>
              <a
                href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-cream/80 hover:text-gold transition-colors"
              >
                <span className="eyebrow text-gold/80 w-24 shrink-0 pt-0.5">WhatsApp</span>
                <span>Chat with us</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href={siteConfig.social.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <LinkedInIcon className="w-[18px] h-[18px]" />
              </a>
            </div>

            <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/50">
              {siteConfig.nav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: contact form */}
          <div>
            <span className="eyebrow text-gold/80">Get In Touch</span>
            <h3 className="mt-2 text-xl font-light mb-6">
              Tell us what you&rsquo;re looking to achieve.
            </h3>
            <ContactForm variant="dark" />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/40">
          <p>
            Seiki Properties operates in compliance with RERA and Dubai Land
            Department (DLD) regulations. All property information is subject to
            developer terms and availability.
          </p>
          <p className="whitespace-nowrap">
            &copy; {new Date().getFullYear()} Seiki Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.84v1.71h.05c.53-.96 1.83-1.98 3.78-1.98 4.04 0 4.78 2.5 4.78 5.76V21h-4v-5.85c0-1.4-.03-3.2-1.97-3.2-1.97 0-2.27 1.5-2.27 3.1V21h-4V9Z" />
    </svg>
  );
}
