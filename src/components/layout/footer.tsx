"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/contexts/language-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import type { Translations } from "@/lib/translations";

const navKeys: Record<string, keyof Translations["nav"]> = {
  "/": "home",
  "/about": "about",
  "/practice-areas": "practiceAreas",
  "/contact": "contact",
};

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-amber-700">{t.footer.advocate}</p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{siteConfig.address}</p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              {t.footer.quickLinks}
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-amber-700 dark:text-gray-400 dark:hover:text-amber-500"
                  >
                    {t.nav[navKeys[item.href] ?? "home"]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider text-gray-900 uppercase dark:text-gray-100">
              {t.footer.contact}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber-700">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-amber-700">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone2}`} className="hover:text-amber-700">
                  {siteConfig.phone2}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-400">
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
            {siteConfig.social.whatsapp && (
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-xs text-gray-400 transition-colors hover:text-amber-700"
              >
                WhatsApp
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-xs text-gray-400 transition-colors hover:text-amber-700"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
