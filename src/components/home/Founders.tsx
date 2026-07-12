import Image from "next/image";

const founders = [
  {
    name: "Amit Sharma",
    title: "Co-Founder · Real Estate Advisory & Investor Relations",
    photo: "/images/founder-amit.png",
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
    bullets: [
      "~20 years across entrepreneurship, marketing, sales and consulting — Fortune 500 companies, tech startups, and real estate",
      "AI-driven GTM architect: built systems managing 100k+ outbound touchpoints/month with measurable conversion impact",
      "Designed and shipped proprietary sales and marketing tools using AI — including lead scoring dashboards and campaign trackers",
      "Produced high-impact brand and positioning work for companies including full rebrands, product literature, and UI/UX overhauls",
      "Brings the full marketing and exit playbook to real estate — from positioning and demand gen to pipeline and deal close",
    ],
  },
];

export default function Founders() {
  return (
    <section className="section bg-navy text-cream">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-gold">Meet The Founders</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            The complete package —
            <span className="block italic text-gold">experience, strategy, and technology.</span>
          </h2>
          <p className="mt-4 text-cream/60 text-sm leading-relaxed max-w-xl">
            Deep real estate expertise. AI-driven marketing and growth systems.
            Entrepreneurial rigour. Three capabilities, one firm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {founders.map((f) => (
            <div key={f.name}>
              <div className="relative aspect-[5/6] overflow-hidden mb-6 border border-gold/20">
                <Image
                  src={f.photo}
                  alt={`Portrait of ${f.name}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="text-gold text-sm mt-1 mb-5">{f.title}</p>
              <ul className="space-y-2">
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
