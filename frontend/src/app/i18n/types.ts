export const LOCALES = ["pt", "en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export type LanguageCode = "PT" | "EN" | "ES";

export const LOCALE_TO_LANGUAGE: Record<Locale, LanguageCode> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export const LANGUAGE_TO_LOCALE: Record<LanguageCode, Locale> = {
  PT: "pt",
  EN: "en",
  ES: "es",
};

export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export const STORAGE_KEY = "portfolio-locale";
