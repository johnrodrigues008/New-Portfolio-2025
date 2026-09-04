"use client";

import { useTranslations } from "../../i18n";

export default function AboutSection() {
  const t = useTranslations();

  return (
    <div className="section-content flex min-h-full flex-col justify-center px-5 py-10 sm:px-8 md:px-12 lg:px-8 xl:px-10">
      <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[32rem] lg:mx-0 lg:max-w-[700px]">
        <h2 className="mb-6 font-grandslang text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
          {t.about.title}
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-xs font-bold tracking-[2px] uppercase">
              {t.about.introTitle}
            </h3>
            <p className="mb-3 text-sm leading-6 tracking-[1px] lg:text-[15px]">
              {t.about.introLead}
            </p>
            <p className="text-sm leading-6 tracking-[1px] lg:text-[15px]">
              {t.about.intro1}
            </p>
            <p className="mt-3 text-sm leading-6 tracking-[1px] lg:text-[15px]">
              {t.about.intro2}
            </p>
            <p className="mt-3 text-sm leading-6 tracking-[1px] lg:text-[15px]">
              {t.about.intro3}
            </p>
            <p className="mt-3 text-sm leading-6 tracking-[1px] lg:text-[15px]">
              {t.about.intro4}
            </p>
          </div>

          <blockquote className="border-l-2 border-[#C2BE9F] pl-4">
            <h3 className="mb-2 text-xs font-bold tracking-[2px] uppercase">
              {t.about.quoteTitle}
            </h3>
            <p className="text-sm italic leading-6 tracking-[1px] lg:text-[15px]">
              {t.about.quote}
            </p>
            <p className="mt-2 text-xs leading-5 tracking-[1px] opacity-80">
              {t.about.quoteNote}
            </p>
          </blockquote>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[2px]">
              {t.about.experience}
            </h3>
            <ul className="space-y-6">
              {t.about.experienceEntries.map((entry) => (
                <li key={`${entry.company}-${entry.period}`}>
                  <p className="text-sm font-bold tracking-[1px] lg:text-[15px]">
                    {entry.role}
                  </p>
                  <p className="text-sm tracking-[1px] opacity-90 lg:text-[15px]">
                    {entry.company} · {entry.location}
                  </p>
                  <p className="mb-2 text-xs tracking-[1px] opacity-70">
                    {entry.period}
                  </p>
                  <ul className="list-disc space-y-1 pl-4 text-sm leading-6 tracking-[1px] lg:text-[15px]">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[2px]">
              {t.about.skills}
            </h3>
            <ul className="space-y-3">
              {t.about.skillsGroups.map((group) => (
                <li key={group.category}>
                  <p className="text-sm font-bold tracking-[1px] lg:text-[15px]">
                    {group.category}
                  </p>
                  <p className="text-sm leading-6 tracking-[1px] opacity-90 lg:text-[15px]">
                    {group.items}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-bold tracking-[2px]">
              {t.about.kudos}
            </h3>
            <p className="text-sm leading-6 tracking-[1px] lg:text-[15px]">
              {t.about.kudosText}
            </p>
            <p className="mt-6 font-grandslang text-3xl leading-[0.9] sm:text-4xl">
              {t.about.thankYou}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
