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

export function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 py-14 text-center sm:min-h-[80vh] sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          variants={item}
          className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase"
        >
          Advocate · Kerala High Court
        </motion.p>
        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
        >
          {siteConfig.description}
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className={buttonVariants("primary")}>
            Get in Touch
          </Link>
          <Link href="/practice-areas" className={buttonVariants("secondary")}>
            Practice Areas
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
