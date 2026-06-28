export type InsightPost = {
  slug: string;
  title: string;
  category: "Market Updates" | "Buyer Guides" | "Visa & Tax" | "Case Studies";
  excerpt: string;
  date: string;
  content: string[];
};

// TODO: Replace these starter posts with real articles as you publish them.
// Each post needs a unique slug (used in the URL /insights/[slug]).
export const insightsPosts: InsightPost[] = [
  {
    slug: "golden-visa-real-estate-2026",
    title: "How the UAE Golden Visa Works for Real Estate Investors in 2026",
    category: "Visa & Tax",
    date: "June 2026",
    excerpt:
      "A practical breakdown of the investment thresholds, eligibility rules, and timelines for securing long-term residency through property in Dubai.",
    content: [
      "The UAE's Golden Visa programme remains one of the clearest structural advantages for foreign investors putting capital into Dubai real estate, offering long-term residency tied to a qualifying property investment.",
      "For most residential investors, the key threshold to understand is the minimum property value required, along with whether the property is mortgaged, under construction, or fully owned — each affects eligibility differently.",
      "We typically advise clients to plan the visa application alongside the purchase itself, since the documentation required (title deed, valuation, bank letters) is far easier to assemble at the point of transaction than after the fact.",
      "If you're evaluating a property primarily for its visa eligibility, talk to us before you commit — the right structure can make the difference between a smooth approval and a stalled one.",
    ],
  },
  {
    slug: "off-plan-vs-secondary-dubai",
    title: "Off-Plan vs. Secondary Market in Dubai: How We Help Clients Decide",
    category: "Buyer Guides",
    date: "May 2026",
    excerpt:
      "Both markets have a place in a well-built portfolio. Here's the framework we use to match the right one to your goals and timeline.",
    content: [
      "The off-plan versus secondary decision in Dubai is less about which market is 'better' and more about matching the right vehicle to your specific goals — capital appreciation, immediate yield, or a finished asset you can use personally.",
      "Off-plan typically offers more attractive entry pricing and flexible payment plans, but carries construction and delivery timeline risk that has to be underwritten carefully against the developer's track record.",
      "Secondary market properties give you a finished, inspectable asset and immediate rental income, but at a price point that reflects that certainty.",
      "In practice, most of the portfolios we build for clients use both — off-plan for growth, secondary for income — sequenced according to the client's liquidity and timeline.",
    ],
  },
  {
    slug: "nri-repatriation-rules-dubai-property",
    title: "Repatriating Rental Income and Sale Proceeds: What NRIs Should Know",
    category: "Visa & Tax",
    date: "April 2026",
    excerpt:
      "Dubai has no restrictions on repatriating funds, but the process still requires the right documentation. Here's what to prepare.",
    content: [
      "One of the most common questions we get from NRI and HNI clients is how easily rental income and eventual sale proceeds can be moved back to India, and the short answer is: there are no UAE-side restrictions on repatriation.",
      "That said, smooth transfers depend on having clean documentation — the original funding trail, the sale agreement, and No Objection Certificates where applicable — assembled from day one rather than reconstructed under time pressure later.",
      "On the Indian side, investors should also be aware of how this income and any capital gains are treated under domestic tax law and the India-UAE tax treaty, which is where we recommend working alongside a qualified CA.",
      "We are not tax advisors, and this isn't tax advice — but we make sure the documentation trail on the Dubai side is clean enough that your CA's job on the India side is straightforward.",
    ],
  },
  {
    slug: "dubai-market-outlook-h2-2026",
    title: "Dubai Real Estate Market Outlook: Second Half of 2026",
    category: "Market Updates",
    date: "June 2026",
    excerpt:
      "Supply, pricing, and absorption trends across the communities our clients ask about most.",
    content: [
      "Dubai's residential market has continued to see strong transaction volumes through the first half of 2026, with sustained demand from international buyers even as new supply has increased across several master communities.",
      "Areas with strong infrastructure backing and master-developer track records have continued to outperform on both pricing resilience and resale liquidity compared to smaller, single-project developments.",
      "For investors with a multi-year horizon, the fundamentals — population growth, tourism, business formation, and the structural tax and visa advantages — remain the more important signal than short-term pricing noise.",
      "We publish updates like this regularly; if you'd like a view tailored to a specific community or asset class, reach out and we'll walk you through it directly.",
    ],
  },
];
