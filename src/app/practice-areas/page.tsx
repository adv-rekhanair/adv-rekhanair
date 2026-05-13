import type { Metadata } from "next";
import { practiceAreas } from "@/data/practice-areas";
import { cardVariants } from "@/components/ui/card";
import { FadeUp, StaggerList, StaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore Rekha Nair's areas of legal expertise including civil litigation, family law, property disputes, legal scrutiny, constitutional matters, cases under SARFAESE act and High Court writ petitions.",
};

export default function PracticeAreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <FadeUp className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
          Expertise
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Practice Areas</h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Areas of legal practice before courts and tribunals in Kerala.
        </p>
      </FadeUp>

      <StaggerList className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map((area) => (
          <StaggerItem key={area.id} className={cardVariants("hover", "p-7")}>
            <span className="text-4xl" role="img" aria-label={area.title}>
              {area.icon}
            </span>
            <h2 className="mt-5 text-lg font-semibold text-gray-900">{area.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{area.description}</p>
          </StaggerItem>
        ))}
      </StaggerList>
    </div>
  );
}
