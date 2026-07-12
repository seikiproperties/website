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
          className="btn-capsule mt-8 bg-gold hover:bg-gold-light text-navy font-medium px-10 py-4"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
