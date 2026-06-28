import Image from "next/image";
import type { Metadata } from "next";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the founders of Seiki Properties — a decade of Dubai real estate expertise paired with two decades of global business strategy.",
};

const founders = [
  {
    name: "Founder One", // TODO: replace with real name
    title: "Co-Founder · Dubai Market & Investor Relations",
    photo: images.founderPlaceholder1,
    bio: [
      "Based full-time in Dubai for over a decade, Founder One has built one of the most well-connected networks in the city's real estate circles — spanning developers, brokerages, and the off-market relationships that rarely surface in public listings.",
      "His focus has always been the same: guiding Indian HNIs, NRIs, and business owners of Indian origin into the right real estate decisions, primarily across residential assets, with a clear eye on long-term value rather than short-term inventory.",
      "Clients work with him because he treats every transaction the way he'd want a friend or family member's capital treated — with patience, scrutiny, and total transparency about risk.",
    ],
  },
  {
    name: "Founder Two", // TODO: replace with real name
    title: "Co-Founder · Strategy & Exit Planning",
    photo: images.founderPlaceholder2,
    bio: [
      "Founder Two spent close to twenty years across Fortune 500 companies and his own ventures, working in senior business and marketing leadership roles before turning his attention to real estate.",
      "That background shapes how Seiki operates: every recommendation is built on a strategist's framework, not a salesperson's pitch — what is the right opportunity for this specific goal, and what does a good exit actually look like when the time comes.",
      "He believes the best real estate advice looks a lot like good business advice: clear-eyed about risk, honest about timelines, and focused on the outcome rather than the transaction.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-cream pt-40 pb-20">
        <div className="container-x">
          <span className="eyebrow text-gold">About Seiki Properties</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight max-w-3xl">
            Built by two people who think about real estate
            <span className="block italic text-gold">very differently — on purpose.</span>
          </h1>
          <p className="mt-6 text-cream/65 text-base md:text-lg max-w-2xl leading-relaxed">
            Seiki Properties exists because Dubai real estate rewards two things
            that rarely live in the same place: deep local access, and the
            discipline of a strategist. We built the firm around both.
          </p>
        </div>
      </section>

      <section className="section bg-cream-light">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {founders.map((f) => (
              <div key={f.name}>
                <div className="relative aspect-[5/6] overflow-hidden mb-8 border border-navy/10">
                  <Image
                    src={f.photo}
                    alt={`Portrait of ${f.name}, ${f.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <h2 className="text-navy text-2xl font-medium">{f.name}</h2>
                <p className="text-gold-dark text-sm mt-1 mb-5">{f.title}</p>
                <div className="space-y-4">
                  {f.bio.map((para, i) => (
                    <p key={i} className="text-navy/65 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy text-cream">
        <div className="container-x max-w-3xl">
          <span className="eyebrow text-gold">Our Philosophy</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight mb-8">
            Real estate is a strategy decision before it&rsquo;s a property decision.
          </h2>
          <div className="space-y-5 text-cream/65 text-base leading-relaxed">
            <p>
              Most agencies sell inventory. We start from the opposite end —
              what are you actually trying to achieve, and which combination of
              asset, structure, and timing gets you there with the least
              avoidable risk.
            </p>
            <p>
              That&rsquo;s the gap we saw for Indian investors specifically: plenty
              of access to listings, very little access to someone who will
              think about the exit on day one, who understands repatriation and
              compliance concerns natively, and who brings the same rigor to a
              property decision that a well-run business would bring to a
              capital allocation decision.
            </p>
            <p>
              We deliberately work with a small number of clients at a time.
              The value we offer depends on it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
