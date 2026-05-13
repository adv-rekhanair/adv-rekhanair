import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";
import type { PracticeAreaIcon } from "@/types";
import { cardVariants } from "@/components/ui/card";
import {
  ScalesIcon,
  FamilyIcon,
  PropertyIcon,
  ShieldIcon,
  ClipboardIcon,
  ScrollIcon,
} from "@/components/ui/icons";

const iconMap: Record<PracticeAreaIcon, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  scales: ScalesIcon,
  family: FamilyIcon,
  property: PropertyIcon,
  shield: ShieldIcon,
  clipboard: ClipboardIcon,
  scroll: ScrollIcon,
};

export function PracticeAreasSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
            Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Practice Areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Areas of legal practice before courts and tribunals in Kerala.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => {
            const Icon = iconMap[area.icon];
            return (
              <li key={area.id} className={cardVariants("hover")}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50">
                  <Icon className="text-amber-600" width={24} height={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{area.description}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center text-sm font-semibold text-amber-700 hover:underline"
          >
            View all practice areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
