// ============================================================================
// SITE CONFIG — edit this file to update contact details, developer list,
// Instagram handle, and other site-wide content without touching components.
// ============================================================================

export const siteConfig = {
  brand: {
    name: "Seiki Properties",
    tagline: "Dubai Real Estate Advisory for Indian Investors",
  },

  contact: {
    dubaiPhone: "+971 56 899 1112",
    dubaiPhoneHref: "+971568991112",
    indiaPhone: "+91 99999 11112",
    indiaPhoneHref: "+919999911112",
    whatsappNumber: "971568991112", // Dubai number — digits only, country code, no +
    email: "hello@seikiproperties.com",
    officeAddress: "Business Bay, Dubai, United Arab Emirates",
  },

  social: {
    instagramHandle: "@seikiproperties", // TODO: confirm real handle
    instagramUrl: "https://instagram.com/seikiproperties",
    linkedinUrl: "https://linkedin.com/company/seikiproperties",
  },

  // Toggle this to instantly hide the Instagram strip on the homepage
  // if the embed breaks or the feed isn't loading correctly.
  showInstagramStrip: true,

  // Developers actually worked with
  developersWorkedWith: ["Sobha", "DAMAC"],

  // Wider Dubai market landscape — editorial context only, no implied partnership.
  developersMarketLandscape: [
    "Emaar",
    "Nakheel",
    "Aldar",
    "Binghatti",
    "Meraas",
    "Ellington",
    "Azizi",
    "Select Group",
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Properties", href: "/properties" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}
