import Image from "next/image";
import { images } from "@/lib/images";

const advantages = [
  { stat: "0%", label: "Personal income tax" },
  { stat: "0%", label: "Capital gains tax" },
  { stat: "10yr", label: "Golden Visa eligibility on qualifying investment" },
  { stat: "100%", label: "Freehold ownership in designated zones" },
  { stat: "AED", label: "Currency pegged to USD since 1997" },
  { stat: "5–8%", label: "Typical gross rental yields" },
];

export default function WhyDubai() {
  return (
    <section className="section bg-navy text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <Image
          src={images.skylineNight}
          alt="Dubai skyline illuminated at night"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-gold">Why Dubai</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            The structural case is as strong
            <span className="block italic text-gold">as the skyline.</span>
          </h2>
          <p className="mt-5 text-cream/65 text-base leading-relaxed">
            Beyond the lifestyle, Dubai offers some of the most investor-friendly
            structural advantages of any global market — which is why it
            consistently draws long-term capital from Indian families and
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl">
          {advantages.map((a) => (
            <div key={a.label} className="border-l border-gold/30 pl-5">
              <p className="text-gold text-2xl md:text-3xl font-light">{a.stat}</p>
              <p className="text-cream/60 text-sm mt-2 leading-snug">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
