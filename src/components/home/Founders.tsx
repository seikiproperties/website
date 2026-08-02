import Image from "next/image";

const founders = [
  {
    name: "Amit Sharma",
    title: "Co-Founder · Real Estate Advisory & Investor Relations",
    photo: "/images/founder-amit.png",
    intro: "Amit brings over a decade of hands-on real estate advisory experience — built entirely around helping Indian HNIs, NRIs, and business families make the right moves in Dubai's market.",
    bullets: [
      "11+ years advising HNIs on building and growing real estate portfolios with market-beating returns",
      "Deep expertise in off-plan and secondary market transactions across Dubai's key communities",
      "Trusted by Indian HNIs, NRIs, and business families for end-to-end investment guidance",
      "Direct relationships with top Dubai developers, brokerages, and off-market deal networks",
      "Specialist in wealth management through real estate — from market entry to profitable exit",
    ],
  },
  {
    name: "Mayur Gera",
    title: "Co-Founder · Strategy, Marketing & Growth",
    photo: "/images/founder-mayur.png",
    intro: "Mayur brings close to 20 years of experience spanning entrepreneurship, marketing, sales, and consulting — across Fortune 500 companies, tech startups, and real estate ventures.",
    bullets: [
      "~20 years across entrepreneurship, marketing, sales and consulting — Fortune 500, tech startups, and real estate",
      "AI-driven GTM architect: built systems managing 100k+ outbound touchpoints/month with documented conversion impact",
      "Designed and shipped proprietary AI-powered tools — lead scoring dashboards, campaign trackers, automated workflows",
      "Produced high-impact brand and positioning work including full rebrands, product literature, and UI/UX overhauls",
      "Brings the full marketing and exit playbook to real estate — from positioning and demand gen to deal close",
    ],
  },
];

export default function Founders() {
  return (
    <section className="section bg-navy text-cream">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-gold">Meet The Co-Founders</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            The complete package —
            <span className="block italic text-gold">experience, strategy, and technology.</span>
          </h2>
          <p className="mt-4 text-cream/60 text-sm leading-relaxed max-w-xl">
            Deep real estate expertise. AI-driven marketing and growth systems. Entrepreneurial rigour. Three capabilities, one advisory firm.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {founders.map((f) => (
            <div key={f.name}>
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/30 bg-cream-dark mb-8">
                <Image src={f.photo} alt={"Portrait of " + f.name} fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-navy via-navy/40 to-transparent pointer-events-none" />
              </div>
              <h3 className="text-2xl font-semibold">{f.name}</h3>
              <p className="text-gold text-sm mt-2 mb-4">{f.title}</p>
              <p className="text-cream/60 text-sm leading-relaxed mb-6 italic">{f.intro}</p>
              <ul className="space-y-3">
                {f.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-cream/70 text-sm leading-relaxed">
                    <span className="text-gold mt-1 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
