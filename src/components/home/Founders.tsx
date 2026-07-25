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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-2xl">
          <div>
            <div className="relative aspect-[5/6] overflow-hidden mb-6 border border-gold/30 bg-cream-dark">
              <Image
                src="/images/founder-amit.png"
                alt="Portrait of Amit Sharma"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-navy via-navy/40 to-transparent pointer-events-none" />
            </div>
            <h3 className="text-xl font-semibold">Amit Sharma</h3>
            <p className="text-gold text-sm mt-1 mb-5">Founder · Real Estate Advisory & Investor Relations</p>
            <ul className="space-y-2">
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
