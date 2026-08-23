export { LocaleProvider, useLocale, useTranslations } from "./locale-context";
export {
  detectBrowserLocale,
  isLocale,
  persistLocale,
  resolveInitialLocale,
} from "./detect";
export {
  HTML_LANG,
  LANGUAGE_TO_LOCALE,
  LOCALES,
  LOCALE_TO_LANGUAGE,
  STORAGE_KEY,
  type LanguageCode,
  type Locale,
} from "./types";
export { dictionaries, type Dictionary } from "./dictionaries";
