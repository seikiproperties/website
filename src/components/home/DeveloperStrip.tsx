import Image from "next/image";

const developers = [
  { id: "sobha",     name: "Sobha Realty",         file: "sobha.png" },
  { id: "damac",     name: "DAMAC",                file: "damac.png" },
  { id: "emaar",     name: "Emaar",                file: "emaar.png" },
  { id: "nakheel",   name: "Nakheel",              file: "nakheel.png" },
  { id: "aldar",     name: "Aldar",                file: "aldar.png" },
  { id: "imtiaz",    name: "Imtiaz Developments",  file: "imtiaz.png" },
  { id: "ellington", name: "Ellington Properties", file: "ellington.png" },
  { id: "binghatti", name: "Binghatti",            file: "binghatti.png" },
];

// Quadruple so the loop is seamless — animation moves exactly 25% = one full set
const quadrupled = [...developers, ...developers, ...developers, ...developers];

export default function DeveloperStrip() {
  return (
    <section className="bg-cream-light border-y border-navy/5 py-10 overflow-hidden">
      <div className="container-x mb-8">
        <p className="text-center text-navy/40 eyebrow">
          Across Dubai&rsquo;s Leading Developments
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="developer-marquee flex items-center w-max">
          {quadrupled.map(({ id, name, file }, i) => (
            <div
              key={`${id}-${i}`}
              className="shrink-0 flex items-center justify-center px-4"
              style={{ width: "90vw", maxWidth: "440px" }}
            >
              <Image
                src={`/images/developers/${file}`}
                alt={name}
                width={300}
                height={120}
                className="w-full h-auto object-contain opacity-60 hover:opacity-90 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream-light to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream-light to-transparent z-10" />
      </div>
    </section>
  );
}
