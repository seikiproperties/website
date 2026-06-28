import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insightsPosts } from "@/lib/insights";
import { waLink } from "@/lib/siteConfig";

export function generateStaticParams() {
  return insightsPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = insightsPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const found = insightsPosts.find((p) => p.slug === params.slug);
  if (!found) {
    notFound();
  }
  const post = found!;

  const related = insightsPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-16">
        <div className="container-x max-w-3xl">
          <Link href="/insights" className="text-gold text-sm hover:underline">
            ← All Insights
          </Link>
          <span className="eyebrow text-gold block mt-6">{post.category}</span>
          <h1 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-cream/50 text-sm">{post.date}</p>
        </div>
      </section>

      <section className="section bg-cream-light">
        <div className="container-x max-w-3xl">
          <div className="space-y-6">
            {post.content.map((para, i) => (
              <p key={i} className="text-navy/75 text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-14 border-t border-navy/10 pt-10">
            <p className="text-navy text-lg font-medium mb-4">
              Have a specific question about this?
            </p>
            <a
              href={waLink(`Hi Seiki Properties, I read "${post.title}" and had a question.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-medium text-sm tracking-wide px-7 py-3.5 rounded-sm transition-colors"
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-navy text-cream py-16">
          <div className="container-x">
            <span className="eyebrow text-gold">Keep Reading</span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link key={p.slug} href={`/insights/${p.slug}`} className="group block">
                  <span className="eyebrow text-gold/70">{p.category}</span>
                  <h3 className="mt-2 text-lg font-medium group-hover:text-gold transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
