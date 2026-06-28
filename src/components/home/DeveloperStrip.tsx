import { siteConfig } from "@/lib/siteConfig";

export default function DeveloperStrip() {
  const logos = [...siteConfig.developersMarketLandscape, ...siteConfig.developersWorkedWith];
  const doubled = [...logos, ...logos];

  return (
    <section className="bg-cream-light border-y border-navy/5 py-10 overflow-hidden">
      <div className="container-x mb-6">
        <p className="text-center text-navy/40 eyebrow">
          Across Dubai&rsquo;s Leading Developments
        </p>
      </div>
      <div className="relative">
        <div className="marquee-track gap-16 px-8">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-navy/35 text-xl md:text-2xl font-medium tracking-wide whitespace-nowrap shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-light to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-light to-transparent" />
      </div>
    </section>
  );
}
