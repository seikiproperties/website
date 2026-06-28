import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const properties = [
  {
    name: "Sobha Hartland II",
    area: "Mohammed Bin Rashid City",
    price: "From AED 2.1M",
    tag: "Off-Plan",
    image: images.villaExterior,
  },
  {
    name: "Damac Islands Villa",
    area: "Dubailand",
    price: "From AED 3.8M",
    tag: "Off-Plan",
    image: images.villaModernWhite,
  },
  {
    name: "Emirates Hills Estate",
    area: "Emirates Hills",
    price: "AED 18.5M",
    tag: "Secondary",
    image: images.villaGoldenHour,
  },
  {
    name: "Business Bay Residence",
    area: "Business Bay",
    price: "AED 4.2M",
    tag: "Secondary",
    image: images.buildingModern,
  },
];

export default function FeaturedProperties() {
  return (
    <section className="section bg-cream-light">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="eyebrow text-gold-dark">Curated Inventory</span>
            <h2 className="mt-4 text-navy text-3xl md:text-4xl font-light leading-tight">
              Off-plan and secondary,
              <span className="block italic text-gold-dark">on equal footing.</span>
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-navy text-sm font-medium border-b border-gold pb-1 hover:text-gold-dark transition-colors w-fit"
          >
            View All Properties →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p) => (
            <Link
              href="/properties"
              key={p.name}
              className="group block bg-white border border-navy/10 hover:border-gold/50 hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} in ${p.area}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <span className="absolute top-4 left-4 bg-navy/90 text-gold text-[0.65rem] tracking-widest2 uppercase px-3 py-1.5">
                  {p.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-navy font-medium text-base">{p.name}</h3>
                <p className="text-navy/50 text-sm mt-1">{p.area}</p>
                <p className="text-gold-dark text-sm font-medium mt-3">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
