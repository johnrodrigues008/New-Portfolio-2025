"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "../contexts/transition-context";
import { useTranslations } from "../i18n";
import type { MouseEvent } from "react";

import Linkedin from "../../../public/img/linkedin.svg";
import Dribble from "../../../public/img/dribble.svg";
import Behance from "../../../public/img/behance.svg";
import Threads from "../../../public/img/threads.svg";

type FooterProps = {
  /** Cor em formato CSS, ex: "#ECE7C1" */
  textColor?: string;
};

export default function Footer({
  textColor = "#ECE7C1",
}: FooterProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { startTransition } = useTransition();
  const t = useTranslations();
  const isHome = pathname === "/";

  const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    startTransition();
    setTimeout(() => {
      router.push("/");
    }, 100);
  };

  return (
    <div
      className="
        hidden
        lg:fixed lg:top-0 lg:left-0 lg:z-40
        lg:flex lg:h-screen lg:w-[100px] lg:flex-col lg:items-center
        lg:py-6
      "
    >
      <div className="flex flex-col items-center">
        {isHome ? (
          <>
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
                href="https://dribbble.com/Rodrigues008"
                aria-label="Dribbble"
              >
                <Image
                  src={Dribble}
                  alt="Dribbble"
                  width={20}
                  height={20}
                  className="animate-spin-slow-reverse hover:scale-125"
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

            <div
              className="mt-4 h-[100px] w-px"
              style={{ backgroundColor: textColor }}
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            <a
              href="/"
              className="m-2 -rotate-90 py-10 text-xs tracking-[5px] transition-all duration-300 ease-in-out"
              onClick={handleHomeClick}
              style={{ color: textColor }}
            >
              {t.footer.home}
            </a>
            <div
              className="mt-4 h-[100px] w-px"
              style={{ backgroundColor: textColor }}
              aria-hidden="true"
            />
          </>
        )}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 -rotate-90">
        <p className="whitespace-nowrap text-xs" style={{ color: textColor }}>
          © 2026
        </p>
      </div>
    </div>
  );
}
