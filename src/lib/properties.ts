// ============================================================================
// PROPERTIES DATA — Verified live off-plan projects.
// Images sourced directly from official developer websites and authorised
// channel partner listings, used in our capacity as an authorised channel partner.
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
    area: "Al Yufrah 1, Dubailand",
    price: "Starting from AED 3.99M",
    type: "Off-Plan",
    category: "Villa",
    bedrooms: "4–6 BR Villas & Townhouses",
    handover: "Q3 2029 onwards",
    paymentPlan: "10/50/40",
    highlight: "Sobha's largest-ever launch — 37.5M sq ft master community. Nature-led, wellness-focused with 6km lagoon, destination park, hospital, two international schools, and 50,000+ trees.",
    // Official hero banner from sobharealty.com/sobha-communities/sobha-sanctuary
    image: "https://sobharealty.com/sites/default/files/styles/webp/public/2026-01/Main%20Banner%20Desktop%201440%20%20651.jpg.webp",
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
    highlight: "Guinness World Record — AED 10.2B sold in 24 hours. Six island-themed clusters (Maldives, Bali, Seychelles, Hawaii, Bora Bora, Fiji) with lagoons, aqua dome, jungle river, and hot springs spa.",
    // Official gallery image from damacproperties.com/en/communities/damac-islands-community
    image: "https://images.ctfassets.net/zoq5l15g49wj/755x20L3QpSZvXYJ8Qh1Uc/d3260a81806c784ed58ed13fc62ea38b/DAMAC_Islands-Gallery-00.jpg?fm=jpg&w=1080&q=80&fit=fill",
  },
  {
    id: "3",
    name: "The Oasis by Emaar — Palmiera",
    developer: "Emaar",
    area: "Dubailand (near Al Maktoum Airport)",
    price: "Starting from AED 8.5M",
    type: "Off-Plan",
    category: "Villa",
    bedrooms: "4–5 BR Villas & Mansions",
    handover: "Q4 2027 – Q1 2029",
    paymentPlan: "80/20",
    highlight: "Emaar's flagship ultra-luxury villa community — 100M sq ft with crystal lagoons, swimmable waterways, private beaches, 4 international golf courses, and 25% open green spaces.",
    // Official Palmiera hero image from emaar.com/en/properties/palmiera
    image: "https://uae-cms.emaar.com/uploads/371445_hero_slide_0_08dc2386f8.jpg",
  },
  {
    id: "4",
    name: "Sobha Hartland II — Skyscape",
    developer: "Sobha Realty",
    area: "Mohammed Bin Rashid City (MBR City)",
    price: "Starting from AED 1.94M",
    type: "Off-Plan",
    category: "Apartment",
    bedrooms: "1–3 BR Apartments",
    handover: "Q4 2028",
    paymentPlan: "60/40",
    highlight: "Trio of luxury towers — Altius (85 floors), Avenue, and Aura — within Sobha Hartland II. Burj Khalifa and lagoon views, 30% green cover, Sobha's backward-integrated self-built quality.",
    // Official Skyscape community image from sobharealty.com/properties-in-dubai/sobha-hartland-2/skyscape
    image: "https://sobharealty.com/sites/default/files/styles/webp/public/2024-11/Desktop_5.jpg.webp",
  },
  {
    id: "5",
    name: "The Highgrove by Ellington",
    developer: "Ellington Properties",
    area: "Meydan Horizon, MBR City",
    price: "Starting from AED 1.9M",
    type: "Off-Plan",
    category: "Apartment",
    bedrooms: "1–3 BR Apartments, Duplexes, Sky Villa & Penthouse",
    handover: "Q4 2027",
    paymentPlan: "70/30",
    highlight: "35-storey waterfront high-rise with biophilic design, crystal lagoon and Ras Al Khor wildlife sanctuary views. Ellington's signature art-led interiors and curated amenities across multiple podium floors.",
    // Official Ellington Highgrove render sourced via authorised channel partner listing
    image: "https://off-planproperties.ae/wp-content/uploads/2024/10/the-Highgrove-by-Ellington-Meydan.jpg",
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
    highlight: "Nature-inspired riverside community with essential-oils lake, malibu cove, wellness pavilions, floating sports, and an island restaurant. Strong capital appreciation corridor.",
    // Official gallery image from damacproperties.com/en/communities/damac-riverside
    image: "https://images.ctfassets.net/zoq5l15g49wj/2RJ8qgMPFdsVqWlg6cbB9v/b065f78efae32c307f6ab2c44829b587/DAMAC_Riverside-Gallery-00.jpg?fm=jpg&w=1080&q=80&fit=fill",
  },
];
