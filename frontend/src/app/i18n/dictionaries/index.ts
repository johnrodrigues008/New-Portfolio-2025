import type { Locale } from "../types";
import type { Dictionary } from "./en";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  pt,
  es,
};

export type { Dictionary };
export { en, es, pt };
