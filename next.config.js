/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Unsplash — stock photography
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      // Sobha Realty — official developer imagery
      { protocol: "https", hostname: "sobharealty.com" },
      // DAMAC Properties — official developer imagery (Contentful CDN)
      { protocol: "https", hostname: "images.ctfassets.net" },
      // Emaar Properties — official developer imagery
      { protocol: "https", hostname: "uae-cms.emaar.com" },
      { protocol: "https", hostname: "www.emaar.com" },
      // Ellington — via authorised channel partner listing
      { protocol: "https", hostname: "off-planproperties.ae" },
    ],
  },
};

module.exports = nextConfig;
