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
          <span className="eyebrow text-gold">Curated Inventory</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-2xl">
            Off-plan opportunities,
            <span className="block italic text-gold">sourced and vetted.</span>
          </h1>
          <p className="mt-5 text-cream/65 text-base max-w-xl leading-relaxed">
            Every listing below is a live, verified project. Prices and availability
            change with each phase — reach out and we&rsquo;ll give you current
            inventory, floor plans, and payment plan details directly.
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
              No properties match these filters — reach out and we&rsquo;ll source one for you directly.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white border border-navy/10 hover:border-gold/50 hover:shadow-card transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={`${p.name} by ${p.developer}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 bg-navy/90 text-gold text-[0.65rem] tracking-widest uppercase px-3 py-1.5 rounded-full">
                      {p.type}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="eyebrow text-gold-dark mb-1">{p.developer}</p>
                    <h3 className="text-navy font-semibold text-lg leading-snug mb-1">{p.name}</h3>
                    <p className="text-navy/50 text-sm mb-3">{p.area}</p>

                    <p className="text-navy/65 text-sm leading-relaxed mb-4 flex-1">{p.highlight}</p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5 border-t border-navy/8 pt-4">
                      <Stat label="Bedrooms" value={p.bedrooms} />
                      <Stat label="Handover" value={p.handover} />
                      <Stat label="Payment Plan" value={p.paymentPlan} />
                      <Stat label="Price" value={p.price} highlight />
                    </div>

                    <a
                      href={waLink(`Hi Seiki Properties, I'm interested in ${p.name} by ${p.developer} (${p.area}). Can you share current pricing and availability?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-capsule bg-navy hover:bg-navy-light text-cream text-sm font-medium px-6 py-3 w-full justify-center"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-navy/40 text-xs text-center mt-12 max-w-2xl mx-auto">
            Pricing and availability are subject to change at each phase release. All information is provided in good faith based on publicly available developer data. Confirm current pricing directly with us before making any investment decision.
          </p>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-[0.65rem] uppercase tracking-widest text-navy/40 mb-0.5">{label}</p>
      <p className={`text-sm font-medium ${highlight ? "text-gold-dark" : "text-navy"}`}>{value}</p>
    </div>
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
            className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
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
