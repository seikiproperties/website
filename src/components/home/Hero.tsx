import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-navy-deep">
      <Image
        src={images.heroSkyline}
        alt="Burj Khalifa and the Downtown Dubai skyline at sunset"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="absolute inset-0 bg-navy-radial" />

      <div className="relative z-10 container-x pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow text-gold">Seiki Properties · Dubai</span>
          <h1 className="mt-5 text-cream font-light leading-[1.08] text-[2.6rem] md:text-[3.6rem] lg:text-[4.4rem]">
            Real estate guidance for those who
            <span className="block text-gold font-light italic">
              think in decades, not deals.
            </span>
          </h1>
          <p className="mt-6 text-cream/75 text-base md:text-lg max-w-xl leading-relaxed">
            A full-service Dubai advisory for Indian HNIs, NRIs, and business
            owners — built on a decade of on-ground access and the strategic
            rigor of global business. From the first search to a confident exit.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn-capsule bg-gold hover:bg-gold-light text-navy font-medium px-10 py-4 shadow-gold"
            >
              Book a Consultation
            </Link>
            <Link
              href="/properties"
              className="btn-capsule border border-cream/30 hover:border-gold hover:text-gold text-cream px-10 py-4"
            >
              Explore Properties
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl border-t border-cream/15 pt-8">
          <TrustStat value="11+" label="Years in real estate advisory" />
          <TrustStat value="20+" label="Years in business & marketing" />
          <TrustStat value="RERA" label="Registered & DLD compliant" />
          <TrustStat value="AI" label="Powered outreach & exit strategy" />
        </div>
      </div>
    </section>
  );
}

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-gold text-2xl md:text-3xl font-light">{value}</p>
      <p className="text-cream/55 text-xs mt-1 leading-snug">{label}</p>
    </div>
  );
}
