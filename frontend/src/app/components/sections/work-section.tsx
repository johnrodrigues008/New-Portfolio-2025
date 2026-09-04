"use client";

import Link from "next/link";

import { useTranslations } from "../../i18n";

const PROJECT_LINKS = [
  { key: "gupeAdmin" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
  { key: "devReceitas" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
  { key: "cardapioOnline" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
  { key: "portfolio" as const, preview: "#", github: "https://github.com/johnrodrigues009" },
] as const;

export default function WorkSection() {
  const t = useTranslations();

  return (
    <div
      className="section-content flex min-h-full flex-col justify-center px-5 py-10 sm:px-8 md:px-12 lg:px-8 xl:px-10"
      style={{ backgroundColor: "#ECE7C1", color: "#1A1A18" }}
    >
      <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[32rem] lg:mx-0 lg:max-w-[700px]">
        <h2 className="mb-4 font-grandslang text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
          {t.work.title}
        </h2>

        <p className="mb-8 text-sm leading-6 tracking-[1px] lg:text-[15px]">
          {t.work.intro}
        </p>

        <ul className="space-y-8">
          {PROJECT_LINKS.map(({ key, preview, github }) => {
            const project = t.work.projects[key];

            return (
              <li
                key={key}
                className="border-b border-[#1A1A18]/20 pb-8 last:border-b-0 last:pb-0"
              >
                <h3 className="mb-2 text-lg font-bold tracking-[1px] lg:text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-6 tracking-[1px] lg:text-[15px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={preview}
                    className="inline-block border-2 border-[#1A1A18] px-4 py-2 text-xs font-bold tracking-[1px] transition hover:bg-[#1A1A18] hover:text-[#ECE7C1]"
                  >
                    {t.work.preview}
                  </Link>
                  <Link
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-2 border-transparent bg-[#1A1A18] px-4 py-2 text-xs font-bold tracking-[1px] text-[#ECE7C1] transition hover:border-[#1A1A18] hover:bg-transparent hover:text-[#1A1A18]"
                  >
                    {t.work.github}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-xs tracking-[2px] uppercase opacity-70">
          {t.work.scrollDown}
        </p>
      </div>
    </div>
  );
}
