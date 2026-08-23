"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { dictionaries, type Dictionary } from "./dictionaries";
import { persistLocale, resolveInitialLocale } from "./detect";
import { HTML_LANG, type Locale } from "./types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Dictionary;
  isReady: boolean;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const resolved = resolveInitialLocale();
    setLocaleState(resolved);
    document.documentElement.lang = HTML_LANG[resolved];
    setIsReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
    document.documentElement.lang = HTML_LANG[next];
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      messages: dictionaries[locale],
      isReady,
    }),
    [locale, setLocale, isReady]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}

export function useTranslations() {
  const { messages } = useLocale();
  return messages;
}
