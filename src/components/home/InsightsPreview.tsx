import Link from "next/link";
import { insightsPosts } from "@/lib/insights";

export default function InsightsPreview() {
  const preview = insightsPosts.slice(0, 3);

  return (
    <section className="section bg-cream-light">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="eyebrow text-gold-dark">Insights</span>
            <h2 className="mt-4 text-navy text-3xl md:text-4xl font-light leading-tight">
              Market intelligence,
              <span className="block italic text-gold-dark">written for investors.</span>
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-navy text-sm font-medium border-b border-gold pb-1 hover:text-gold-dark transition-colors w-fit"
          >
            View All Insights →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preview.map((post) => (
            <Link href={`/insights/${post.slug}`} key={post.slug} className="group block">
              <span className="eyebrow text-gold-dark">{post.category}</span>
              <h3 className="mt-3 text-navy text-lg font-medium leading-snug group-hover:text-gold-dark transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-navy/55 text-sm leading-relaxed">{post.excerpt}</p>
              <p className="mt-4 text-navy/40 text-xs">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
