import Image from "next/image";

const developers = [
  { id: "sobha",      name: "Sobha Realty",        file: "sobha.png" },
  { id: "damac",      name: "DAMAC",               file: "damac.png" },
  { id: "emaar",      name: "Emaar",               file: "emaar.png" },
  { id: "nakheel",    name: "Nakheel",             file: "nakheel.png" },
  { id: "aldar",      name: "Aldar",               file: "aldar.png" },
  { id: "imtiaz",     name: "Imtiaz Developments", file: "imtiaz.png" },
  { id: "ellington",  name: "Ellington Properties",file: "ellington.png" },
  { id: "binghatti",  name: "Binghatti",           file: "binghatti.png" },
];

const doubled = [...developers, ...developers];

export default function DeveloperStrip() {
  return (
    <section className="bg-cream-light border-y border-navy/5 py-12 overflow-hidden">
      <div className="container-x mb-10">
        <p className="text-center text-navy/40 eyebrow">
          Across Dubai&rsquo;s Leading Developments
        </p>
      </div>
      <div className="relative">
        <div className="marquee-track items-center gap-20 px-12">
          {doubled.map(({ id, name, file }, i) => (
            <div
              key={`${id}-${i}`}
              className="shrink-0 flex items-center justify-center h-24 w-56"
            >
              <Image
                src={`/images/developers/${file}`}
                alt={name}
                width={220}
                height={90}
                className="h-20 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity grayscale"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-cream-light to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-cream-light to-transparent" />
      </div>
    </section>
  );
}
