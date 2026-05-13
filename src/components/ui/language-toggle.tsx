"use client";

import { useLanguage } from "@/contexts/language-context";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "ml" : "en")}
      aria-label={locale === "en" ? "Switch to Malayalam" : "Switch to English"}
      className="rounded-md px-2 py-1 text-xs font-semibold tracking-wide text-gray-600 transition-colors hover:bg-gray-100 hover:text-amber-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-amber-500"
    >
      {locale === "en" ? "മല" : "EN"}
    </button>
  );
}
