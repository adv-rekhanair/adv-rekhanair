"use client";

import { motion, ease, fadeUp, stagger } from "@/components/ui/motion";
import { empanelments } from "@/data/empanelments";
import { useLanguage } from "@/contexts/language-context";

function getCategoryLabel(category: string, labels: Record<string, string>): string {
  return labels[category] ?? category;
}

export function EmpanelmentsSection() {
  const { t } = useLanguage();

  const categoryLabels: Record<string, string> = {
    "Public Sector Bank": t.empanelments.publicSectorBank,
    "Non-Banking Financial Company": t.empanelments.nbfc,
    "Housing Finance Company": t.empanelments.housingFinance,
    "Real Estate Developer": t.empanelments.realEstate,
  };

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 dark:bg-gray-950">
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.55, ease }} className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
            {t.empanelments.label}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            {t.empanelments.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 dark:text-gray-400">
            {t.empanelments.subheading}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {empanelments.map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-5 dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                {item.name}
              </p>
              <p className="mt-1 text-xs font-medium tracking-wide text-gray-400 uppercase dark:text-gray-500">
                {getCategoryLabel(item.category, categoryLabels)}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
