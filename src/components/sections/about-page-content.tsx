"use client";

import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { FadeUp } from "@/components/ui/motion";
import { empanelments } from "@/data/empanelments";
import { useLanguage } from "@/contexts/language-context";

export function AboutPageContent() {
  const { t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    "Public Sector Bank": t.empanelments.publicSectorBank,
    "Non-Banking Financial Company": t.empanelments.nbfc,
    "Housing Finance Company": t.empanelments.housingFinance,
    "Real Estate Developer": t.empanelments.realEstate,
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <FadeUp>
        <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
          {t.aboutPage.label}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {t.aboutPage.heading}
        </h1>
        <p className="mt-2 text-lg text-amber-700">{t.aboutPage.role}</p>
      </FadeUp>

      <FadeUp
        delay={0.1}
        className="mt-10 space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-400"
      >
        <p>{t.aboutPage.body1}</p>
        <p>{t.aboutPage.body2}</p>
        <p>{t.aboutPage.body3}</p>
      </FadeUp>

      <FadeUp delay={0.2} className="mt-12">
        <Card className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {t.aboutPage.qualificationsHeading}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>{t.aboutPage.qual1}</li>
            <li>
              {t.aboutPage.qual2} ({siteConfig.barCouncilNo})
            </li>
            <li>{t.aboutPage.qual3}</li>
          </ul>
        </Card>
      </FadeUp>

      <FadeUp delay={0.3} className="mt-8">
        <Card className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {t.aboutPage.panelHeading}
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t.aboutPage.panelSubheading}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {empanelments.map((item) => (
              <div
                key={item.name}
                className="rounded-md border border-gray-100 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-gray-900"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs font-medium tracking-wide text-gray-400 uppercase dark:text-gray-500">
                  {categoryLabels[item.category] ?? item.category}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </FadeUp>
    </div>
  );
}
