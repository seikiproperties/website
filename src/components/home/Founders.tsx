import Image from "next/image";

export default function Founders() {
  return (
    <section className="section bg-navy text-cream">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-gold">Meet The Founder</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            Deep expertise, built over
            <span className="block italic text-gold">more than a decade.</span>
          </h2>
          <p className="mt-4 text-cream/60 text-sm leading-relaxed max-w-xl">
            Real estate advisory built on genuine on-ground experience, trusted
            relationships, and a single-minded focus on investor outcomes.
          </p>
        </div>

        {/* Full-width two-column layout — photo left, bio right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 bg-cream-dark">
            <Image
              src="/images/founder-amit.png"
              alt="Portrait of Amit Sharma, Founder of Seiki Properties"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-navy via-navy/40 to-transparent pointer-events-none" />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Amit Sharma</h3>
            <p className="text-gold text-sm mt-2 mb-6">
              Founder · Real Estate Advisory & Investor Relations
            </p>
            <p className="text-cream/60 text-sm leading-relaxed mb-8 italic">
              Amit brings over a decade of hands-on real estate advisory
              experience — built entirely around helping Indian HNIs, NRIs, and
              business families make the right moves in Dubai&rsquo;s market.
            </p>
            <ul className="space-y-3">
              {[
                "11+ years advising HNIs on building and growing real estate portfolios with market-beating returns",
                "Deep expertise in off-plan and secondary market transactions across Dubai's key communities",
                "Trusted by Indian HNIs, NRIs, and business families for end-to-end investment guidance",
                "Direct relationships with top Dubai developers, brokerages, and off-market deal networks",
                "Specialist in wealth management through real estate — from market entry to profitable exit",
              ].map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-cream/70 text-sm leading-relaxed">
                  <span className="text-gold mt-1 shrink-0">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
