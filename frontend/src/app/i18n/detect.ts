import {
  LOCALES,
  STORAGE_KEY,
  type Locale,
} from "./types";

export function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Maps browser language (e.g. pt-BR, es-MX) to a supported locale. */
export function detectBrowserLocale(
  language = typeof navigator !== "undefined" ? navigator.language : "en"
): Locale {
  const normalized = language.toLowerCase();

  if (normalized.startsWith("pt")) return "pt";
  if (normalized.startsWith("es")) return "es";
  return "en";
}

/** Preference order: saved choice → browser language → English. */
export function resolveInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access errors (private mode, etc.)
  }

  return detectBrowserLocale(navigator.language);
}

export function persistLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage access errors
  }
}
