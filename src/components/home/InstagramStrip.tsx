import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { images } from "@/lib/images";

// ----------------------------------------------------------------------------
// To hide this section instantly (e.g. if the feed breaks), set
// `showInstagramStrip: false` in /src/lib/siteConfig.ts — no code changes,
// no redeploy of other sections needed.
//
// This currently renders a static placeholder grid using stock imagery.
// To wire up a LIVE Instagram feed later, swap the placeholder grid below
// for an embed from a provider like SnapWidget, Elfsight, or the Instagram
// Graph API — the on/off toggle and layout wrapper will keep working as-is.
// ----------------------------------------------------------------------------

const placeholderPosts = [
  images.heroSkyline,
  images.marina,
  images.villaExterior,
  images.villaGoldenHour,
  images.buildingModern,
  images.villaModernWhite,
];

export default function InstagramStrip() {
  if (!siteConfig.showInstagramStrip) return null;

  return (
    <section className="bg-cream-light py-16 border-y border-navy/5">
      <div className="container-x">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="eyebrow text-gold-dark">Follow Along</span>
            <h3 className="mt-2 text-navy text-xl md:text-2xl font-light">
              {siteConfig.social.instagramHandle} on Instagram
            </h3>
          </div>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy text-sm font-medium border-b border-gold pb-1 hover:text-gold-dark transition-colors hidden sm:block"
          >
            View Profile →
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {placeholderPosts.map((src, i) => (
            <a
              key={i}
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={src}
                alt="Seiki Properties Instagram post"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
