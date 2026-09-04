"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

import { useSection } from "../contexts/section-context";
import { useTranslations } from "../i18n";

import Linkedin from "../../../public/img/linkedin.svg";
import Behance from "../../../public/img/behance.svg";
import Threads from "../../../public/img/threads.svg";

type FooterProps = {
  /** Cor em formato CSS, ex: "#ECE7C1" */
  textColor?: string;
};

export default function Footer({
  textColor,
}: FooterProps) {
  const { navigateToSection, activeSection } = useSection();
  const t = useTranslations();

  const resolvedColor =
    textColor ??
    (activeSection === "work"
      ? "#222222"
      : activeSection === "contact"
        ? "#1A1A18"
        : "#ECE7C1");

  const handleHomeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigateToSection("home");
  };

  return (
    <footer className="hidden lg:fixed lg:top-0 lg:left-0 lg:z-40 lg:flex lg:h-screen lg:w-[70px] lg:flex-col lg:items-center">
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={handleHomeClick}
          className={`m-2 p-2 text-xs transition-opacity hover:opacity-80 ${activeSection === "home" ? "opacity-60" : ""}`}
          style={{ color: resolvedColor }}
          aria-label={t.footer.home}
        >
          {t.footer.home}
        </button>

        <div className="flex flex-col items-center">
          <Link
            className="m-2 p-2 transition-opacity hover:opacity-80"
            href="https://www.linkedin.com/in/johnrodrigues009/"
            aria-label="LinkedIn"
          >
            <Image
              src={Linkedin}
              alt="LinkedIn"
              width={20}
              height={20}
              className="animate-spin-slow hover:scale-125"
            />
          </Link>

          <Link
            className="m-2 p-2 transition-opacity hover:opacity-80"
            href="https://www.behance.net/johnrodrigues008"
            aria-label="Behance"
          >
            <Image
              src={Behance}
              alt="Behance"
              width={20}
              height={20}
              className="animate-spin-slow hover:scale-125"
            />
          </Link>

          <Link
            className="m-2 p-2 transition-opacity hover:opacity-80"
            href="https://www.threads.net"
            aria-label="Threads"
          >
            <Image
              src={Threads}
              alt="Threads"
              width={20}
              height={20}
              className="animate-spin-slow-reverse hover:scale-125"
            />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 -rotate-90">
        <p className="whitespace-nowrap text-xs" style={{ color: resolvedColor }}>
          © 2026
        </p>
      </div>
    </footer>
  );
}
