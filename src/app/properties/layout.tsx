import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse curated off-plan and secondary market properties across Dubai, matched to your investment goals.",
};

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
