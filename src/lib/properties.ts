// ============================================================================
// PROPERTIES DATA — All listings are verified off-plan projects.
// Images are representative lifestyle/architectural photography (Unsplash,
// free commercial use). Developer renders are proprietary — images here are
// illustrative of the asset class and community type only.
// Last verified: August 2026
// ============================================================================

export type Property = {
  id: string;
  name: string;
  developer: string;
  area: string;
  price: string;
  type: "Off-Plan" | "Secondary";
  category: "Apartment" | "Villa" | "Townhouse" | "Penthouse";
  bedrooms: string;
  handover: string;
  paymentPlan: string;
  highlight: string;
  image: string;
};

export const properties: Property[] = [
  {
    id: "1",
    name: "Sobha Sanctuary",
    developer: "Sobha Realty",
    area: "Dubailand (Al Yufrah 1), off Al Ain Road",
    price: "Starting from AED 3.99M",
    type: "Off-Plan",
    category: "Villa",
    bedrooms: "4–6 BR Villas & Townhouses",
    handover: "Q3 2029 onwards",
    paymentPlan: "10/50/40",
    highlight: "Sobha's largest-ever launch — 37.5M sq ft master community. Nature-led, wellness-focused with 6km lagoon, destination park, hospital, two international schools, and 60% green cover.",
    // Lush green villa community with nature — matches Sobha Sanctuary's forest/wellness theme
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "DAMAC Islands",
    developer: "DAMAC Properties",
    area: "Dubailand",
    price: "Starting from AED 2.25M",
    type: "Off-Plan",
    category: "Townhouse",
    bedrooms: "4–6 BR Townhouses & Villas",
    handover: "Q4 2028 – Q2 2029",
    paymentPlan: "75/25",
    highlight: "Record-breaking launch — AED 10.2B sold in under 24 hours. Six island-themed clusters (Maldives, Bali, Seychelles, Fiji, Hawaii, Bora Bora) with lagoons, aqua park, and jungle river.",
    // Tropical island waterfront — matches DAMAC Islands' island-paradise theme
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "The Oasis by Emaar — Palmiera",
    developer: "Emaar",
    area: "Dubailand (near Al Maktoum Airport)",
    price: "Starting from AED 8.5M",
    type: "Off-Plan",
    category: "Villa",
    bedrooms: "4–7 BR Villas & Mansions",
    handover: "Q4 2027 – Q1 2029",
    paymentPlan: "80/20",
    highlight: "Emaar's flagship ultra-luxury villa community spanning 100M sq ft with crystal lagoons, swimmable waterways, private beaches, 4 international golf courses, and 25% open green spaces.",
    // Ultra-luxury villa with pool and water — matches The Oasis waterway/lagoon theme
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Sobha Hartland II — Skyscape",
    developer: "Sobha Realty",
    area: "Mohammed Bin Rashid City (MBR City)",
    price: "Starting from AED 1.82M",
    type: "Off-Plan",
    category: "Apartment",
    bedrooms: "1–4 BR Apartments",
    handover: "Q4 2028",
    paymentPlan: "60/40",
    highlight: "High-rise living within Dubai's most established master community. Direct Burj Khalifa and Downtown views, 30% green cover, and Sobha's trademark backward-integrated self-built quality.",
    // High-rise luxury apartment tower with city view — matches Skyscape
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Ellington Highgrove",
    developer: "Ellington Properties",
    area: "Bukadra, Dubai",
    price: "Starting from AED 1.7M",
    type: "Off-Plan",
    category: "Apartment",
    bedrooms: "1–4 BR Apartments, Villas & Penthouses",
    handover: "Q4 2027",
    paymentPlan: "70/30",
    highlight: "Boutique design-led development from Dubai's most award-winning design developer. Art-inspired interiors, curated lifestyle, premium finishes — quality over quantity at every level.",
    // Design-led modern apartment interior — matches Ellington's art-design positioning
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "DAMAC Riverside",
    developer: "DAMAC Properties",
    area: "Dubai Investment Park",
    price: "Starting from AED 2.4M",
    type: "Off-Plan",
    category: "Townhouse",
    bedrooms: "4–5 BR Townhouses",
    handover: "Q4 2027 – Q1 2028",
    paymentPlan: "75/25",
    highlight: "Nature-inspired riverside community in Dubai Investment Park with scenic water views, landscaped promenades, and strong connectivity. Strong capital appreciation corridor.",
    // Riverside townhouse with greenery and water — matches DAMAC Riverside theme
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  },
];
