const steps = [
  { title: "Discovery Call", copy: "We understand your goals, timeline, and the outcome you're investing toward." },
  { title: "Curated Shortlist", copy: "A focused set of opportunities matched to your brief — not a broad inventory dump." },
  { title: "Due Diligence & Negotiation", copy: "We verify, compare, and negotiate on your behalf, with full transparency." },
  { title: "Transaction & Handover", copy: "Paperwork, payment plans, and registration — managed end to end." },
  { title: "Ongoing Management & Exit", copy: "We stay engaged after handover, and plan the exit before the market asks us to." },
];

export default function Process() {
  return (
    <section className="section bg-navy text-cream">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow text-gold">How We Work</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            One relationship, the whole journey.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="flex items-center gap-4 md:block">
                <span className="text-gold/40 text-3xl font-light shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="hidden md:block h-px bg-gold/20 mt-4 mb-5" />
              </div>
              <h3 className="text-base font-medium mt-3 md:mt-0">{s.title}</h3>
              <p className="text-cream/55 text-sm mt-2 leading-relaxed">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
