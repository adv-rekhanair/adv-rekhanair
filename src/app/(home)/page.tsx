import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PracticeAreasSection } from "@/components/sections/practice-areas";
import { EmpanelmentsSection } from "@/components/sections/empanelments";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PracticeAreasSection />
      <EmpanelmentsSection />
      <ContactSection />
    </>
  );
}
