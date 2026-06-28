const pillars = [
  {
    title: "On-Ground Expertise",
    copy: "Dubai-based, over a decade deep, with direct relationships across the city's leading developers and brokerages.",
  },
  {
    title: "Strategic Exit Planning",
    copy: "We don't just source property. We plan the full lifecycle — acquisition, management, and the exit that protects your return.",
  },
  {
    title: "Built for Indian Investors",
    copy: "Fluent in the questions that matter to NRIs and HNIs — repatriation, tax treaties, compliance, and cross-border structuring.",
  },
  {
    title: "Business-Grade Rigor",
    copy: "Two decades of Fortune 500 and entrepreneurial strategy applied to every real estate decision we help you make.",
  },
];

export default function WhySeiki() {
  return (
    <section className="section bg-cream-light">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-gold-dark">Why Seiki</span>
          <h2 className="mt-4 text-navy text-3xl md:text-4xl font-light leading-tight">
            Two ways of seeing Dubai,
            <span className="block italic text-gold-dark">working as one desk.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/10">
          {pillars.map((p, i) => (
            <div key={p.title} className="bg-cream-light p-8 flex flex-col">
              <span className="text-gold/50 text-sm font-medium mb-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-navy text-lg font-medium mb-3">{p.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
