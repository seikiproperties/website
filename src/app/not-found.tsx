import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy text-cream pt-20">
      <div className="container-x text-center max-w-lg">
        <span className="eyebrow text-gold">404</span>
        <h1 className="mt-4 text-3xl md:text-4xl font-light">
          This page doesn&rsquo;t exist — but the right property might.
        </h1>
        <p className="mt-4 text-cream/60 text-sm">
          Let&rsquo;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-medium text-sm tracking-wide px-7 py-3.5 rounded-sm transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
