import type { Metadata } from "next";
import { AboutPageContent } from "@/components/sections/about-page-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background and qualifications of Rekha Nair, Advocate, enrolled with the Bar Council of Kerala.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
