"use client";

import { practiceAreas } from "@/data/practice-areas";
import { cardVariants } from "@/components/ui/card";
import { FadeUp, StaggerList, StaggerItem } from "@/components/ui/motion";
import { useLanguage } from "@/contexts/language-context";
import type { PracticeAreaIcon } from "@/types";
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

export function PracticeAreasPageContent() {
  const { t } = useLanguage();
  const items = t.practiceAreaItems as Record<string, { title: string; description: string }>;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <FadeUp className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
          {t.practiceAreasPage.label}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t.practiceAreasPage.heading}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {t.practiceAreasPage.subheading}
        </p>
      </FadeUp>

      <StaggerList className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map((area) => {
          const Icon = iconMap[area.icon];
          const translated = items[area.id] ?? { title: area.title, description: area.description };
          return (
            <StaggerItem key={area.id} className={cardVariants("hover", "p-7")}>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50">
                <Icon className="text-amber-600" width={24} height={24} />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {translated.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {translated.description}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerList>
    </div>
  );
}
