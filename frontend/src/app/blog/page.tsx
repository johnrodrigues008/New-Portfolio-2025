"use client";

import Footer from "../components/footer";
import { useTranslations } from "../i18n";

export default function Shop() {
  const t = useTranslations();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen" style={{ backgroundColor: '#1A1A18' }}>
      <Footer />
      
      <main className="flex flex-col lg:flex-row w-full flex-1 lg:justify-center lg:items-center lg:gap-12 xl:gap-20 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="w-full">
          <h1 className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">{t.blog.title}</h1>
        </div>
      </main>
    </div>
  );
}
