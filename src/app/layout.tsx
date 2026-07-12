import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seikiproperties.com"),
  title: {
    default: "Seiki Properties | Dubai Real Estate Advisory for Indian Investors",
    template: "%s | Seiki Properties",
  },
  description:
    "Seiki Properties is a full-service Dubai real estate advisory built for Indian HNIs, NRIs, and business owners — from search to acquisition to exit.",
  keywords: [
    "Dubai real estate",
    "NRI investment Dubai",
    "Indian HNI Dubai property",
    "Dubai off-plan property",
    "Dubai real estate advisory",
  ],
  openGraph: {
    title: "Seiki Properties | Dubai Real Estate Advisory for Indian Investors",
    description:
      "Full-service Dubai real estate advisory for Indian HNIs, NRIs, and business owners — search to exit.",
    url: "https://seikiproperties.com",
    siteName: "Seiki Properties",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://seikiproperties.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seiki Properties — Dubai Real Estate Advisory for Indian Investors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seiki Properties | Dubai Real Estate Advisory",
    description: "Full-service Dubai real estate advisory for Indian HNIs and NRIs — search to exit.",
    images: ["https://seikiproperties.com/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
