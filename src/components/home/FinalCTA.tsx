import Link from "next/link";
import { siteConfig, waLink } from "@/lib/siteConfig";
import { WhatsAppIcon } from "../SiteHeader";

export default function FinalCTA() {
  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left: copy */}
          <div className="max-w-lg">
            <h2 className="text-navy text-2xl md:text-3xl font-semibold leading-tight">
              Ready to invest smarter in Dubai?
            </h2>
            <p className="mt-3 text-navy/70 text-base leading-relaxed">
              One conversation with our team is all it takes to get clarity on
              your options, your returns, and your next move.
            </p>
          </div>

          {/* Right: CTAs — tightly grouped, no stray space */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">

            <Link
              href="/contact"
              className="btn-capsule bg-navy hover:bg-navy-light text-cream shadow-md px-10 py-4"
            >
              Book a Consultation
            </Link>

            <a
              href={waLink("Hi Seiki Properties, I'd like to know more about investing in Dubai real estate.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-capsule bg-white/25 hover:bg-white/40 text-navy gap-2 px-8 py-4"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>

            {/* Phone numbers */}
            <div className="flex flex-col justify-center gap-1 pl-2">
              <a
                href={`tel:${siteConfig.contact.dubaiPhoneHref}`}
                className="text-navy font-medium text-sm whitespace-nowrap hover:text-navy/70 transition-colors"
              >
                🇦🇪 {siteConfig.contact.dubaiPhone}
              </a>
              <a
                href={`tel:${siteConfig.contact.indiaPhoneHref}`}
                className="text-navy font-medium text-sm whitespace-nowrap hover:text-navy/70 transition-colors"
              >
                🇮🇳 {siteConfig.contact.indiaPhone}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
