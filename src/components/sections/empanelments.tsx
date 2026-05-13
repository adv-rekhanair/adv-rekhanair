"use client";

import { motion, ease, fadeUp, stagger } from "@/components/ui/motion";
import { empanelments } from "@/data/empanelments";

const visible = empanelments;

export function EmpanelmentsSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <motion.div
        className="mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.55, ease }} className="text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-amber-700 uppercase">
            Institutional Appointments
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Panel Advocate
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
            Empanelled as legal counsel by the following financial institutions.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((item) => (
            <div key={item.name} className="rounded-lg border border-gray-200 bg-gray-50 px-6 py-5">
              <p className="text-base font-semibold text-gray-900">{item.name}</p>
              <p className="mt-1 text-xs font-medium tracking-wide text-gray-400 uppercase">
                {item.category}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
