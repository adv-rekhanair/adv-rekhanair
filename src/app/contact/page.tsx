import type { Metadata } from "next";
import { ContactPageContent } from "@/components/sections/contact-page-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for Rekha Nair, Advocate, enrolled with the Bar Council of Kerala.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
