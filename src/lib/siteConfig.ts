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
    // TODO: Replace with real numbers
    dubaiPhone: "+971 50 000 0000",
    dubaiPhoneHref: "+971500000000",
    indiaPhone: "+91 90000 00000",
    indiaPhoneHref: "+919000000000",
    whatsappNumber: "971500000000", // digits only, country code, no +
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

  // Developers actually worked with — shown as "Developers We've Transacted With"
  // TODO: confirm and edit this list before launch.
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
