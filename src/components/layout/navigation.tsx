"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { AnimatePresence, motion, ease } from "@/components/ui/motion";
import { useLanguage } from "@/contexts/language-context";
import type { Translations } from "@/lib/translations";

const navKeys: Record<string, keyof Translations["nav"]> = {
  "/": "home",
  "/about": "about",
  "/practice-areas": "practiceAreas",
  "/contact": "contact",
};

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav aria-label="Main navigation" className="hidden md:block">
        <ul className="flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-700",
                  pathname === item.href ? "text-amber-700" : "text-gray-600 dark:text-gray-400",
                )}
              >
                {t.nav[navKeys[item.href] ?? "home"]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="flex cursor-pointer items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-amber-700 md:hidden dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-amber-500"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease }}
            className="fixed inset-x-0 top-16 z-40 border-b border-gray-200 bg-white shadow-lg md:hidden dark:border-gray-800 dark:bg-gray-950"
          >
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1 px-4 py-3">
                {siteConfig.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, ease, delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-amber-50 hover:text-amber-700",
                        pathname === item.href
                          ? "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                          : "text-gray-700 dark:text-gray-300",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {t.nav[navKeys[item.href] ?? "home"]}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
