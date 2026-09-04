"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/img/logo.jpeg";
import { useLocale, useTranslations } from "../i18n";
import { useSection } from "../contexts/section-context";

export default function Hero() {
  const t = useTranslations();
  const { locale } = useLocale();
  const { navigateToSection } = useSection();

  const resumePath = locale === "en" ? t.resume.en : t.resume.pt;

  return (
    <section
      aria-labelledby="hero-title"
      className="hero flex h-full w-full flex-col justify-center px-4 lg:max-w-[700px] lg:px-8"
    >
      <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[32rem] lg:mx-0 lg:max-w-none">
        <div className="mt-8 mb-5 flex justify-center pb-2 sm:mb-6 sm:pb-3 lg:mt-0 lg:mb-0 lg:pb-8">
          <Image
            src={Logo}
            alt={t.hero.imageAlt}
            width={350}
            height={350}
            sizes="(max-width: 640px) 168px, (max-width: 1023px) 220px, (max-width: 1280px) 240px, (max-width: 1536px) 300px, 350px"
            priority
            className="
              h-[168px] w-[168px] rounded-full object-cover
              sm:h-[200px] sm:w-[200px]
              md:h-[220px] md:w-[220px]
              lg:h-[240px] lg:w-[240px]
              xl:h-[240px] xl:w-[240px]
              2xl:h-[350px] 2xl:w-[350px]
            "
          />
        </div>

        <div className="text-center lg:text-left">
          <h1
            id="hero-title"
            className="
              mb-3 text-xl font-bold tracking-[2px]
              sm:mb-4 sm:text-2xl
              md:text-[1.65rem]
              lg:mb-7 lg:text-[20px] lg:tracking-[2px]
            "
          >
            JOHN RODRIGUES
          </h1>

          <p className="mb-4 text-xs leading-6 tracking-[1px] sm:mb-5 sm:text-sm sm:tracking-[1.5px] lg:mb-0 lg:text-[15px] lg:tracking-[1px]">
            {t.hero.role}
          </p>

          <p className="mt-4 hidden text-sm leading-6 tracking-[1px] lg:block lg:mb-0 lg:text-[15px]">
            {t.hero.bio2}
          </p>

          <div className="flex flex-col items-center gap-0 lg:mt-6 lg:flex-row lg:justify-start lg:gap-2">
            <Link
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="mt-4 mr-0 w-full max-w-[350px] border-2 border-transparent bg-[#C2BE9F] px-6 py-3 text-center font-bold text-[#1A1A18] transition hover:border-[#C2BE9F] hover:bg-[#1A1A18] hover:text-[#C2BE9F] lg:mr-4 lg:mb-0 lg:w-[200px] lg:rounded-bl-2xl"
            >
              {t.hero.downloadCv}
            </Link>

            <button
              type="button"
              onClick={() => navigateToSection("about")}
              className="
                mt-4 mr-0 w-full max-w-[350px]
                border-2 border-transparent
                bg-[#C2BE9F]
                px-6 py-3
                font-bold
                text-[#1A1A18]
                cursor-pointer
                transition
                hover:border-[#C2BE9F]
                hover:bg-[#1A1A18]
                hover:text-[#C2BE9F]
                rounded-b-2xl
                lg:rounded-br-2xl
                lg:rounded-bl-none
                lg:mr-4
                lg:w-[200px]
              "
            >
              {t.hero.viewExperience}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
