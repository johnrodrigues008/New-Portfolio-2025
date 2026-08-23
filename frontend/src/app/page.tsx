"use client";

import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useTranslations } from "./i18n";

export default function Home() {
  const t = useTranslations();

  return (
    <div
      className="relative flex min-h-dvh flex-col overflow-x-hidden lg:h-dvh lg:flex-row-reverse lg:overflow-hidden"
      style={{ backgroundColor: "#1A1A18" }}
    >
      {/* Desktop: right column — mega nav */}
      <Navbar />

      {/* Mobile: stacked under header · Desktop: left content column */}
      <main className="flex flex-1 flex-col justify-center px-5 pb-14 pt-2 sm:px-8 sm:pb-16 sm:pt-4 md:px-12 lg:min-w-0 lg:items-center lg:justify-end lg:px-8 lg:pb-20 lg:pl-[120px] lg:pt-0 xl:pb-2 xl:pl-[105px] 2xl:pb-28">
        <Hero />
      </main>

      {/* Desktop only: fixed social rail */}
      <footer className="hidden lg:block" aria-label={t.footer.socialLabel}>
        <Footer />
      </footer>
    </div>
  );
}
