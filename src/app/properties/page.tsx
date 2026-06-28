"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { properties } from "@/lib/properties";
import { waLink } from "@/lib/siteConfig";

const typeFilters = ["All", "Off-Plan", "Secondary"] as const;
const categoryFilters = ["All", "Apartment", "Villa", "Townhouse", "Penthouse"] as const;

export default function PropertiesPage() {
  const [type, setType] = useState<(typeof typeFilters)[number]>("All");
  const [category, setCategory] = useState<(typeof categoryFilters)[number]>("All");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const typeMatch = type === "All" || p.type === type;
      const categoryMatch = category === "All" || p.category === category;
      return typeMatch && categoryMatch;
    });
  }, [type, category]);

  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-16">
        <div className="container-x">
          <span className="eyebrow text-gold">Properties</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-2xl">
            Off-plan and secondary,
            <span className="block italic text-gold">curated, not crowded.</span>
          </h1>
          <p className="mt-5 text-cream/65 text-base max-w-xl leading-relaxed">
            Every listing below is illustrative of the kind of inventory we work
            with. Reach out and we&rsquo;ll match you to live opportunities aligned
            with your goals.
          </p>
        </div>
      </section>

      <section className="bg-cream-light border-b border-navy/10 sticky top-[68px] z-30">
        <div className="container-x py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <FilterGroup label="Type" options={typeFilters} active={type} onChange={setType} />
          <FilterGroup label="Property" options={categoryFilters} active={category} onChange={setCategory} />
        </div>
      </section>

      <section className="section bg-cream-light pt-10">
        <div className="container-x">
          {filtered.length === 0 ? (
            <p className="text-navy/50 text-sm py-20 text-center">
              No properties match these filters yet — reach out and we&rsquo;ll
              source one for you directly.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white border border-navy/10 hover:border-gold/50 hover:shadow-card transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.name} in ${p.area}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 bg-navy/90 text-gold text-[0.65rem] tracking-widest2 uppercase px-3 py-1.5">
                      {p.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-navy font-medium text-lg">{p.name}</h3>
                    <p className="text-navy/50 text-sm mt-1">{p.area} · {p.category}</p>
                    <div className="flex items-center justify-between mt-5">
                      <p className="text-gold-dark font-medium text-sm">{p.price}</p>
                      <a
                        href={waLink(`Hi Seiki Properties, I'm interested in ${p.name} (${p.area}).`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy text-xs font-medium border-b border-gold pb-0.5 hover:text-gold-dark transition-colors"
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: readonly T[];
  active: T;
  onChange: (val: T) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-navy/40 text-xs eyebrow shrink-0">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
              active === opt
                ? "bg-navy text-cream border-navy"
                : "border-navy/20 text-navy/60 hover:border-gold hover:text-gold-dark"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
