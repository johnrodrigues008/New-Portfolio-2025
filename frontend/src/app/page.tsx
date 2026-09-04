"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import AboutSection from "./components/sections/about-section";
import ContactSection from "./components/sections/contact-section";
import EducationSection from "./components/sections/education-section";
import WorkSection from "./components/sections/work-section";
import Hero from "./components/hero";
import ScrollSections from "./components/scroll-sections";
import {
  SECTION_IDS,
  useSection,
  type SectionId,
} from "./contexts/section-context";

function SectionInitializer() {
  const searchParams = useSearchParams();
  const { goToSection } = useSection();

  useEffect(() => {
    const section = searchParams.get("s");

    if (section && SECTION_IDS.includes(section as SectionId)) {
      goToSection(section as SectionId);
    }
  }, [searchParams, goToSection]);

  return null;
}

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <SectionInitializer />
      </Suspense>

      <ScrollSections>
        <Hero />
        <AboutSection />
        <WorkSection />
        <EducationSection />
        <ContactSection />
      </ScrollSections>
    </>
  );
}
