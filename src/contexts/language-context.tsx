"use client";

import { createContext, useContext, useCallback, useSyncExternalStore } from "react";
import type { Locale, Translations } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: translations.en,
  setLocale: () => {},
});

const subscribers = new Set<() => void>();

function subscribeLocale(cb: () => void) {
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}

function getLocaleSnapshot(): Locale {
  const stored = localStorage.getItem("locale") as Locale | null;
  return stored === "en" || stored === "ml" ? stored : "en";
}

function getServerSnapshot(): Locale {
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, getLocaleSnapshot, getServerSnapshot);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem("locale", next);
    subscribers.forEach((cb) => cb());
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
