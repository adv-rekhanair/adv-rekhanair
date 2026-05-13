"use client";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { motion, ease, fadeUp, stagger } from "@/components/ui/motion";

export function ContactSection() {
  return (
    <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        className="mx-auto max-w-3xl text-center"
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
          Get in Touch
        </motion.p>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.55, ease }}
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Contact Information
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55, ease }}
          className="mx-auto mt-4 max-w-xl text-base text-gray-600"
        >
          Contact details are provided below for general enquiries. All communications are treated
          with strict professional confidentiality.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className={buttonVariants(
              "primary",
              "flex w-full items-center justify-center gap-2 sm:w-auto",
            )}
          >
            Email
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className={buttonVariants(
              "secondary",
              "flex w-full items-center justify-center gap-2 sm:w-auto",
            )}
          >
            {siteConfig.phone}
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.55, ease }}
          className="mx-auto mt-8 max-w-md rounded-lg border border-gray-200 bg-white px-6 py-4 text-sm text-gray-500"
        >
          {siteConfig.address}
        </motion.p>
      </motion.div>
    </section>
  );
}
