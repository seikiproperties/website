import { developerLogos } from "./DeveloperLogos";

export default function DeveloperStrip() {
  const doubled = [...developerLogos, ...developerLogos];

  return (
    <section className="bg-cream-light border-y border-navy/5 py-10 overflow-hidden">
      <div className="container-x mb-8">
        <p className="text-center text-navy/40 eyebrow">
          Across Dubai&rsquo;s Leading Developments
        </p>
      </div>
      <div className="relative">
        <div className="marquee-track items-center gap-16 px-8">
          {doubled.map(({ id, Logo }, i) => (
            <div
              key={`${id}-${i}`}
              className="shrink-0 text-navy/30 hover:text-navy/55 transition-colors flex items-center h-10"
            >
              <Logo className="h-7 w-auto" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-cream-light to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-cream-light to-transparent" />
      </div>
    </section>
  );
}
