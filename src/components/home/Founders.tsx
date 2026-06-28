import Image from "next/image";
import { images } from "@/lib/images";

const founders = [
  {
    name: "Founder One", // TODO: replace with real name
    title: "Co-Founder · Dubai Market & Investor Relations",
    photo: images.founderPlaceholder1,
    bio: "Over a decade based full-time in Dubai, with deep, direct relationships across the city's developers, brokerages, and off-market circles. Specialist in guiding Indian HNIs, NRIs, and business owners into residential real estate and adjacent asset classes — translating local access into long-term investment outcomes.",
  },
  {
    name: "Founder Two", // TODO: replace with real name
    title: "Co-Founder · Strategy & Exit Planning",
    photo: images.founderPlaceholder2,
    bio: "Twenty years across Fortune 500 companies and his own ventures, in business and marketing leadership roles. Brings a strategist's lens to real estate — helping clients find the right opportunity and, just as importantly, engineering the exit that protects and compounds their return.",
  },
];

export default function Founders() {
  return (
    <section className="section bg-navy text-cream">
      <div className="container-x">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow text-gold">Meet The Founders</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
            Local access. Global strategy.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {founders.map((f) => (
            <div key={f.name} className="group">
              <div className="relative aspect-[5/6] overflow-hidden mb-6 border border-gold/20">
                <Image
                  src={f.photo}
                  alt={`Portrait of ${f.name}, ${f.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-medium">{f.name}</h3>
              <p className="text-gold text-sm mt-1 mb-4">{f.title}</p>
              <p className="text-cream/65 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
