const services = [
  {
    title: "Buy-Side Advisory & Deal Sourcing",
    copy: "Curated access to opportunities matched to your goals, before they reach the open market.",
  },
  {
    title: "Off-Plan & Secondary Access",
    copy: "Equal fluency in new launches and resale — whichever path fits your strategy and timeline.",
  },
  {
    title: "Portfolio Structuring",
    copy: "Diversification across asset types and communities, built around risk and return, not inventory.",
  },
  {
    title: "Property & Asset Management",
    copy: "Hands-off ownership — tenancy, maintenance, and compliance handled on your behalf.",
  },
  {
    title: "Exit Strategy & Resale Timing",
    copy: "We plan the close from the day we plan the purchase — timed to the market, not to pressure.",
  },
];

export default function Services() {
  return (
    <section className="section bg-cream-light">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="eyebrow text-gold-dark">What We Do</span>
            <h2 className="mt-4 text-navy text-3xl md:text-4xl font-light leading-tight">
              Full-service, search to exit.
            </h2>
          </div>
          <p className="text-navy/55 text-sm max-w-sm leading-relaxed">
            We work the entire lifecycle of an investment — not just the
            transaction in the middle of it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-navy/10 bg-white p-7 hover:border-gold/50 hover:shadow-card transition-all duration-300 lg:col-span-1 md:col-span-1"
            >
              <h3 className="text-navy font-medium text-base leading-snug mb-3">
                {s.title}
              </h3>
              <p className="text-navy/55 text-sm leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
