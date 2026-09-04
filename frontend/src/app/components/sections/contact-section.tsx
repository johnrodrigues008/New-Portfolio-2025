"use client";

import Image from "next/image";
import Link from "next/link";

import Linkedin from "../../../../public/img/linkedin.svg";
import Behance from "../../../../public/img/behance.svg";
import Threads from "../../../../public/img/threads.svg";
import { useTranslations } from "../../i18n";

export default function ContactSection() {
  const t = useTranslations();

  return (
    <div
      className="section-content flex min-h-full flex-col justify-center px-5 py-10 sm:px-8 md:px-12 lg:px-8 xl:px-10"
      style={{ backgroundColor: "#ECE7C1", color: "#1A1A18" }}
    >
      <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:max-w-[32rem] lg:mx-0 lg:max-w-[700px]">
        <h2 className="mb-2 font-grandslang text-4xl leading-[0.9] sm:text-5xl lg:text-6xl">
          {t.contact.title}
        </h2>

        <p className="mb-2 font-grandslang text-3xl leading-[0.9] sm:text-4xl">
          {t.contact.hello}
        </p>

        <p className="mb-8 text-sm leading-6 tracking-[1px] lg:text-[15px]">
          {t.contact.intro}
        </p>

        <address className="space-y-3 not-italic">
          <p>
            <Link
              href="mailto:johnrodrigues008@gmail.com"
              className="text-sm tracking-[1px] underline-offset-4 transition hover:underline lg:text-[15px]"
            >
              {t.contact.email}
            </Link>
          </p>
          <p>
            <Link
              href="tel:+5561991803216"
              className="text-sm tracking-[1px] underline-offset-4 transition hover:underline lg:text-[15px]"
            >
              {t.contact.phone}
            </Link>
          </p>
          <p className="text-sm tracking-[1px] lg:text-[15px]">
            {t.contact.location}
          </p>
        </address>

        <div className="mt-8">
          <p className="mb-4 text-xs font-bold tracking-[2px] uppercase">
            {t.contact.internet}
          </p>
          <div className="flex items-center gap-4 lg:hidden">
            <Link
              href="https://www.linkedin.com/in/johnrodrigues009/"
              aria-label="LinkedIn"
              className="transition-opacity hover:opacity-70"
            >
              <Image src={Linkedin} alt="" width={24} height={24} />
            </Link>
            <Link
              href="https://www.behance.net/johnrodrigues008"
              aria-label="Behance"
              className="transition-opacity hover:opacity-70"
            >
              <Image src={Behance} alt="" width={24} height={24} />
            </Link>
            <Link
              href="https://www.threads.net"
              aria-label="Threads"
              className="transition-opacity hover:opacity-70"
            >
              <Image src={Threads} alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
