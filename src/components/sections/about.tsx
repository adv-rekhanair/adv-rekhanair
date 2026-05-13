"use client";

import { Card } from "@/components/ui/card";
import { motion, ease, fadeUp, stagger } from "@/components/ui/motion";
import { useLanguage } from "@/contexts/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.yearsLabel, value: "20+" },
    { label: t.about.areasLabel, value: "4" },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease }}
              className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase"
            >
              {t.about.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100"
            >
              {t.about.heading}
            </motion.h2>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.55, ease }}
              className="mt-6 space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400"
            >
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
            </motion.div>
          </motion.div>

          <motion.dl
            className="grid grid-cols-1 content-start gap-4 sm:grid-cols-3 lg:grid-cols-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} transition={{ duration: 0.55, ease }}>
                <Card variant="white">
                  <dt className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</dt>
                  <dd className="mt-1 text-3xl font-bold text-amber-700">{stat.value}</dd>
                </Card>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
