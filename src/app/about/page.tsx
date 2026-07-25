import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Amit Sharma, founder of Seiki Properties — over a decade of Dubai real estate expertise serving Indian HNIs, NRIs, and business owners.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-20">
        <div className="container-x">
          <span className="eyebrow text-gold">About Seiki Properties</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-3xl">
            Built on real experience.
            <span className="block italic text-gold">
              Focused on real outcomes.
            </span>
          </h1>
          <p className="mt-6 text-cream/65 text-base md:text-lg max-w-2xl leading-relaxed">
            Seiki Properties exists because Dubai real estate rewards one thing
            above all else: deep on-ground access paired with the discipline to
            prioritise investor outcomes over transaction volume.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-cream-light">
        <div className="container-x">
          <span className="eyebrow text-gold-dark">The Founder</span>
          <h2 className="mt-4 text-navy text-2xl md:text-3xl font-light leading-tight mb-12">
            Amit Sharma
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl">
            <div>
              <div
                className="relative aspect-[5/6] overflow-hidden mb-8 border border-gold/30 bg-cream-dark"
              >
                <Image
                  src="/images/founder-amit.png"
                  alt="Portrait of Amit Sharma, Founder of Seiki Properties"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-cream-dark via-cream/40 to-transparent pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-gold-dark text-sm mb-5">
                Founder · Real Estate Advisory & Investor Relations
              </p>
              <p className="text-navy/65 text-sm leading-relaxed mb-6 italic">
                Amit brings over a decade of hands-on real estate advisory
                experience — built entirely around helping Indian HNIs, NRIs,
                and business families make the right moves in Dubai&rsquo;s market.
              </p>
              <ul className="space-y-3">
                {[
                  "11+ years advising HNIs on building and growing real estate portfolios with market-beating returns",
                  "Expertise across off-plan launches and secondary market transactions in Dubai's most sought-after communities",
                  "Trusted by Indian HNI, NRI, and business families for end-to-end investment guidance — from first call to signed deal",
                  "Direct access to top Dubai developers, brokerages, and off-market inventory that rarely reaches public listings",
                  "Specialist focus on wealth management through real estate: right market entry, structured acquisition, and planned exit",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy/70 text-sm leading-relaxed">
                    <span className="text-gold-dark mt-0.5 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-navy text-cream">
        <div className="container-x max-w-3xl">
          <span className="eyebrow text-gold">Our Philosophy</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight mb-8">
            Real estate is a strategy decision
            <span className="block italic text-gold">before it&rsquo;s a property decision.</span>
          </h2>
          <div className="space-y-5 text-cream/65 text-base leading-relaxed">
            <p>
              Most agencies sell inventory. We start from the opposite end —
              what are you actually trying to achieve, and which combination of
              asset, structure, and timing gets you there with the least
              avoidable risk.
            </p>
            <p>
              That&rsquo;s the gap we saw for Indian investors specifically: plenty
              of access to listings, very little access to someone who will
              think about the exit on day one, who understands repatriation and
              compliance concerns natively, and who brings the same rigour to a
              property decision that a well-run business would bring to a
              capital allocation decision.
            </p>
            <p>
              We deliberately work with a small number of clients at a time.
              The value we offer depends on it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
