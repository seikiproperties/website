import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { images } from "@/lib/images";

// ----------------------------------------------------------------------------
// Instagram strip — 2 rows of 3, with a View Profile CTA.
//
// LIVE FEED NOTE: Instagram requires OAuth authentication to pull live posts
// via their API. For a live feed, sign up at snapwidget.com or elfsight.com,
// connect your @seiki.properties account, and replace the grid below with
// their embed snippet. The show/hide toggle in siteConfig.ts keeps working.
//
// The images below are placeholder stock photos — replace with actual
// screenshots of your best posts by adding them to /public/images/instagram/
// and updating the array below.
// ----------------------------------------------------------------------------

const instagramPosts = [
  { src: images.heroSkyline,       alt: "Dubai skyline" },
  { src: images.villaExterior,     alt: "Luxury villa" },
  { src: images.marina,            alt: "Dubai Marina" },
  { src: images.villaGoldenHour,   alt: "Golden hour property" },
  { src: images.buildingModern,    alt: "Modern development" },
  { src: images.villaModernWhite,  alt: "Premium residence" },
];

export default function InstagramStrip() {
  if (!siteConfig.showInstagramStrip) return null;

  return (
    <section className="bg-cream-light py-16 border-y border-navy/5">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow text-gold-dark">Follow Us</span>
            <h3 className="mt-2 text-navy text-2xl md:text-3xl font-light">
              @seiki.properties
            </h3>
            <p className="mt-1 text-navy/50 text-sm">
              Market insights, property showcases &amp; Dubai investment updates
            </p>
          </div>
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-navy/20 hover:border-gold hover:text-gold-dark text-navy text-sm font-medium px-6 py-3 rounded-sm transition-colors w-fit"
          >
            <InstagramIcon className="w-4 h-4" />
            View Profile
          </a>
        </div>

        {/* 2 rows × 3 columns grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => (
            <a
              key={i}
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group block"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href={siteConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-navy/20 text-navy text-sm font-medium px-6 py-3 rounded-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            View Profile
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
