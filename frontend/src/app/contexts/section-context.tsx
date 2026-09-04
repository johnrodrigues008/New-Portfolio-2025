"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { useTransition } from "./transition-context";

export const SECTION_IDS = [
  "home",
  "about",
  "work",
  "education",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

const TRANSITION_MS = 1200;

type SectionContextValue = {
  activeSection: SectionId;
  activeIndex: number;
  isTransitioning: boolean;
  navigateToSection: (section: SectionId) => void;
  goToSection: (section: SectionId) => void;
  goToNext: () => void;
  goToPrev: () => void;
};

const SectionContext = createContext<SectionContextValue | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { startTransition } = useTransition();

  const activeIndex = SECTION_IDS.indexOf(activeSection);

  const goToSection = useCallback((section: SectionId) => {
    setActiveSection(section);
  }, []);

  const navigateToSection = useCallback(
    (section: SectionId) => {
      if (section === activeSection || isTransitioning) return;

      setIsTransitioning(true);
      startTransition();

      window.setTimeout(() => {
        setActiveSection(section);

        const url = section === "home" ? "/" : `/?s=${section}`;
        window.history.replaceState(null, "", url);

        window.setTimeout(() => {
          setIsTransitioning(false);
        }, TRANSITION_MS);
      }, TRANSITION_MS / 2);
    },
    [activeSection, isTransitioning, startTransition]
  );

  const goToNext = useCallback(() => {
    const index = SECTION_IDS.indexOf(activeSection);
    if (index < SECTION_IDS.length - 1) {
      navigateToSection(SECTION_IDS[index + 1]);
    }
  }, [activeSection, navigateToSection]);

  const goToPrev = useCallback(() => {
    const index = SECTION_IDS.indexOf(activeSection);
    if (index > 0) {
      navigateToSection(SECTION_IDS[index - 1]);
    }
  }, [activeSection, navigateToSection]);

  const value = useMemo(
    () => ({
      activeSection,
      activeIndex,
      isTransitioning,
      navigateToSection,
      goToSection,
      goToNext,
      goToPrev,
    }),
    [
      activeSection,
      activeIndex,
      isTransitioning,
      navigateToSection,
      goToSection,
      goToNext,
      goToPrev,
    ]
  );

  return (
    <SectionContext.Provider value={value}>{children}</SectionContext.Provider>
  );
}

export function useSection() {
  const context = useContext(SectionContext);

  if (!context) {
    throw new Error("useSection must be used within SectionProvider");
  }

  return context;
}
