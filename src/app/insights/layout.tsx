import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market updates, buyer guides, visa & tax explainers, and case studies for Indian investors in Dubai real estate.",
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
