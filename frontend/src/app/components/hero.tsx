"use client";

import Image from "next/image";
import Logo from "../../../public/img/logo.jpeg";
import { useTranslations } from "../i18n";

export default function Hero() {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="hero-title"
      className="hero w-full lg:flex lg:h-full lg:items-end lg:justify-center"
    >
      <div
        className="
          mx-auto w-full max-w-[22rem]
          sm:max-w-[26rem]
          md:max-w-[32rem]
          lg:mx-0 lg:max-w-[26rem]
          xl:max-w-[40rem]
          2xl:max-w-[40rem]
        "
      >
        <div className="mb-5 flex justify-center pb-2 sm:mb-6 sm:pb-3 lg:mb-0 lg:justify-center lg:pb-8">
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

          <p
            className="
              mb-4 text-xs leading-6 tracking-[1px]
              sm:mb-5 sm:text-sm sm:tracking-[1.5px]
              lg:mb-7 lg:text-[15px] lg:tracking-[1px]
            "
          >
            {t.hero.role}
          </p>

          <p className="text-sm leading-6 tracking-[1px] lg:text-[15px]">
            {t.hero.bio1}
          </p>

          {/* Second bio — desktop composition only */}
          <p className="mt-4 hidden text-sm leading-6 tracking-[1px] lg:block lg:text-[15px]">
            {t.hero.bio2}
          </p>
        </div>
      </div>
    </section>
  );
}
