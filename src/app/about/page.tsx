import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Amit Sharma and Mayur Gera — the founders of Seiki Properties. Deep real estate expertise, AI-driven marketing, and entrepreneurial rigour in one firm.",
};

const founders = [
  {
    name: "Amit Sharma",
    title: "Co-Founder · Real Estate Advisory & Investor Relations",
    photo: "/images/founder-amit.png",
    intro:
      "Amit brings over a decade of hands-on real estate advisory experience — built entirely around helping Indian HNIs, NRIs, and business families make the right moves in Dubai's market.",
    bullets: [
      "11+ years advising HNIs on building and growing real estate portfolios with market-beating returns",
      "Expertise across off-plan launches and secondary market transactions in Dubai's most sought-after communities",
      "Trusted by Indian HNI, NRI, and business families for end-to-end investment guidance — from first call to signed deal",
      "Direct access to top Dubai developers, brokerages, and off-market inventory that rarely reaches public listings",
      "Specialist focus on wealth management through real estate: right market entry, structured acquisition, and planned exit",
    ],
  },
  {
    name: "Mayur Gera",
    title: "Co-Founder · Strategy, Marketing & Growth",
    photo: "/images/founder-mayur.png",
    intro:
      "Mayur brings close to 20 years of experience spanning entrepreneurship, marketing, sales, and consulting — across Fortune 500 companies, tech startups, and real estate ventures.",
    bullets: [
      "AI-driven GTM architect: built outbound systems handling 100k+ emails/month with documented 2.5% response rates and measurable conversion impact",
      "Designed and shipped proprietary sales and marketing tools using AI — lead scoring dashboards, campaign trackers, and automated prospecting workflows",
      "Produced full rebrands, product literature overhauls, and UI/UX redesigns for B2B companies",
      "Produced the SalesCode CXO Conclave — attended by 150+ CPG CEOs, CSOs, and CIOs — delivering measurable pipeline and brand authority",
      "Brings the full marketing and exit playbook to real estate: positioning, demand generation, pipeline management, and deal close strategy",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-20">
        <div className="container-x">
          <span className="eyebrow text-gold">About Seiki Properties</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-3xl">
            Deep real estate experience.
            <span className="block italic text-gold">
              AI-driven strategy. One firm.
            </span>
          </h1>
          <p className="mt-6 text-cream/65 text-base md:text-lg max-w-2xl leading-relaxed">
            Seiki Properties was built on a belief that Dubai real estate
            rewards two things that rarely live in the same place: deep
            on-ground access and the marketing and strategic rigour of a
            well-run business. We built the firm around both.
          </p>
        </div>
      </section>

      {/* The combination */}
      <section className="section bg-cream-light">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow text-gold-dark">Why We&rsquo;re Different</span>
            <h2 className="mt-4 text-navy text-2xl md:text-3xl font-light leading-tight">
              Three capabilities. One integrated firm.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/10">
            {[
              {
                num: "01",
                title: "Core Real Estate Experience",
                copy: "11+ years of transacting, advising, and managing wealth through Dubai real estate — with the relationships and track record to match.",
              },
              {
                num: "02",
                title: "Entrepreneurship & Marketing",
                copy: "Two decades of business building, brand strategy, and revenue architecture — applied to how we position, market, and exit your investment.",
              },
              {
                num: "03",
                title: "AI-Driven Technology",
                copy: "Proprietary AI-powered tools for outreach, lead qualification, and market intelligence — giving our clients an edge that traditional brokerages don't have.",
              },
            ].map((p) => (
              <div key={p.num} className="bg-cream-light p-8">
                <span className="text-gold/50 text-sm font-medium">{p.num}</span>
                <h3 className="text-navy text-lg font-medium mt-4 mb-3">{p.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section bg-navy text-cream">
        <div className="container-x">
          <span className="eyebrow text-gold">The Founders</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight mb-14">
            Two founders. One complete advisory.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {founders.map((f) => (
              <div key={f.name}>
                <div
                  className="relative aspect-[5/6] overflow-hidden mb-8 border border-gold/30 bg-cream-dark"
                >
                  <Image
                    src={f.photo}
                    alt={`Portrait of ${f.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-navy via-navy/40 to-transparent pointer-events-none" />
                </div>
                <h2 className="text-2xl font-semibold">{f.name}</h2>
                <p className="text-gold text-sm mt-1 mb-4">{f.title}</p>
                <p className="text-cream/60 text-sm leading-relaxed mb-5 italic">
                  {f.intro}
                </p>
                <ul className="space-y-3">
                  {f.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-cream/75 text-sm leading-relaxed"
                    >
                      <span className="text-gold mt-0.5 shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-cream-light">
        <div className="container-x max-w-3xl">
          <span className="eyebrow text-gold-dark">Our Philosophy</span>
          <h2 className="mt-4 text-navy text-3xl md:text-4xl font-light leading-tight mb-8">
            Real estate is a strategy decision
            <span className="block italic text-gold-dark">before it&rsquo;s a property decision.</span>
          </h2>
          <div className="space-y-5 text-navy/65 text-base leading-relaxed">
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
