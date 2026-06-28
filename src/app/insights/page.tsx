"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { insightsPosts } from "@/lib/insights";

const categories = ["All", "Market Updates", "Buyer Guides", "Visa & Tax", "Case Studies"] as const;

export default function InsightsPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return insightsPosts;
    return insightsPosts.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-16">
        <div className="container-x">
          <span className="eyebrow text-gold">Insights</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-2xl">
            Market intelligence,
            <span className="block italic text-gold">written for investors.</span>
          </h1>
        </div>
      </section>

      <section className="bg-cream-light border-b border-navy/10">
        <div className="container-x py-5 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
                active === c
                  ? "bg-navy text-cream border-navy"
                  : "border-navy/20 text-navy/60 hover:border-gold hover:text-gold-dark"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="section bg-cream-light pt-12">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`} className="group block">
                <span className="eyebrow text-gold-dark">{post.category}</span>
                <h2 className="mt-3 text-navy text-xl font-medium leading-snug group-hover:text-gold-dark transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-navy/55 text-sm leading-relaxed">{post.excerpt}</p>
                <p className="mt-4 text-navy/40 text-xs">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
