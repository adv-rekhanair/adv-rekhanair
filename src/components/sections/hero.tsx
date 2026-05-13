"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { motion, ease } from "@/components/ui/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const credentials = [
  { label: "Enrolled", value: "Bar Council of Kerala" },
  { label: "Principal Court", value: "Kerala High Court" },
  { label: "Years in Practice", value: "10+" },
  { label: "Areas of Practice", value: "Civil · Family · Criminal" },
];

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p
            variants={item}
            className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase"
          >
            Advocate · Kerala High Court
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            {siteConfig.description}
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className={buttonVariants("primary")}>
              Get in Touch
            </Link>
            <Link href="/practice-areas" className={buttonVariants("secondary")}>
              Practice Areas
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <p className="mb-6 text-xs font-semibold tracking-widest text-amber-700 uppercase">
              Professional Profile
            </p>
            <dl className="divide-y divide-gray-100">
              {credentials.map((c) => (
                <div key={c.label} className="flex flex-col gap-0.5 py-4 first:pt-0 last:pb-0">
                  <dt className="text-xs font-medium tracking-wide text-gray-400 uppercase">
                    {c.label}
                  </dt>
                  <dd className="text-base font-semibold text-gray-800">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
