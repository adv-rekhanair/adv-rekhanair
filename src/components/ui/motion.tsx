"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export { motion, AnimatePresence };

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const viewportOpts = { once: true, margin: "-50px" } as const;
const transition = { duration: 0.55, ease };

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      variants={fadeUp}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerListProps {
  children: ReactNode;
  className?: string;
}

export function StaggerList({ children, className }: StaggerListProps) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={viewportOpts}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.li variants={fadeUp} transition={transition} className={className}>
      {children}
    </motion.li>
  );
}
