import type { Metadata } from "next";
import { PracticeAreasPageContent } from "@/components/sections/practice-areas-page-content";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore Rekha Nair's areas of legal expertise including civil litigation, family law, property disputes, legal scrutiny, constitutional matters, cases under SARFAESE act and High Court writ petitions.",
};

export default function PracticeAreasPage() {
  return <PracticeAreasPageContent />;
}
