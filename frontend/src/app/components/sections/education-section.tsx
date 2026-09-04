"use client";

import { useTranslations } from "../../i18n";

export default function EducationSection() {
  const t = useTranslations();

  return (
    <div className="section-content flex min-h-full flex-col justify-center px-5 py-10 sm:px-8 md:px-12 lg:px-8 xl:px-10">
      <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[32rem] lg:mx-0 lg:max-w-[700px]">
        <h2 className="mb-4 font-grandslang text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
          {t.education.title}
        </h2>

        <p className="mb-8 text-sm leading-6 tracking-[1px] lg:text-[15px]">
          {t.education.intro}
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[2px]">
              {t.education.degreesTitle}
            </h3>
            <ul className="space-y-4">
              {t.education.degrees.map((degree) => (
                <li key={`${degree.institution}-${degree.program}`}>
                  <p className="text-sm font-bold tracking-[1px] lg:text-[15px]">
                    {degree.institution}
                  </p>
                  <p className="text-sm leading-6 tracking-[1px] lg:text-[15px]">
                    {degree.program}
                  </p>
                  <p className="text-xs tracking-[1px] opacity-70">
                    {degree.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[2px]">
              {t.education.certificationsTitle}
            </h3>
            <ul className="space-y-3">
              {t.education.certifications.map((cert) => (
                <li key={`${cert.name}-${cert.year}`}>
                  <p className="text-sm font-bold tracking-[1px] lg:text-[15px]">
                    {cert.name}
                  </p>
                  <p className="text-sm tracking-[1px] opacity-90 lg:text-[15px]">
                    {cert.provider} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold tracking-[2px]">
              {t.education.languagesTitle}
            </h3>
            <ul className="space-y-2">
              {t.education.languages.map((language) => (
                <li
                  key={language}
                  className="text-sm tracking-[1px] lg:text-[15px]"
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
