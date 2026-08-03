import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";

export default function FeaturedProperties() {
  const featured = properties.slice(0, 4);

  return (
    <section className="section bg-cream-light">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="eyebrow text-gold-dark">Curated Inventory</span>
            <h2 className="mt-4 text-navy text-3xl md:text-4xl font-light leading-tight">
              Live projects,
              <span className="block italic text-gold-dark">verified and current.</span>
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-navy text-sm font-medium border-b border-gold pb-1 hover:text-gold-dark transition-colors w-fit"
          >
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <Link
              href="/properties"
              key={p.id}
              className="group block bg-white border border-navy/10 hover:border-gold/50 hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} by ${p.developer}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute top-3 left-3 bg-navy/90 text-gold text-[0.6rem] tracking-widest uppercase px-2.5 py-1 rounded-full">
                  {p.type}
                </span>
              </div>
              <div className="p-4">
                <p className="text-gold-dark text-[0.65rem] tracking-widest uppercase mb-1">{p.developer}</p>
                <h3 className="text-navy font-medium text-sm leading-snug">{p.name}</h3>
                <p className="text-navy/45 text-xs mt-1 mb-2">{p.area}</p>
                <p className="text-gold-dark text-sm font-semibold">{p.price}</p>
                <p className="text-navy/50 text-xs mt-1">Handover {p.handover}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
