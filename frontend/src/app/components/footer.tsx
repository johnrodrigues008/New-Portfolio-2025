"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "../contexts/transition-context";
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
  textColor = "#ECE7C1", // cor padrão
}: FooterProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { startTransition } = useTransition();
  const isHome = pathname === "/";

  const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    startTransition();
    setTimeout(() => {
      router.push("/");
    }, 100);
  };

  return (
    <footer
      className="
        flex flex-row lg:flex-col
        items-center justify-between lg:justify-between lg:items-center
        w-full lg:w-[80px]
        h-auto lg:h-screen
        px-4 sm:px-6 lg:px-0
        py-4 lg:py-0
        lg:fixed lg:left-0 lg:top-0
      "
    >
      <div className="flex flex-row lg:flex-col items-center gap-2 sm:gap-4 lg:gap-0">
        {isHome ? (
          <>
            <div className="flex flex-row lg:flex-col items-center">
              <Link
                className="p-2 lg:m-2 hover:opacity-80 transition-opacity"
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
                className="p-2 lg:m-2 hover:opacity-80 transition-opacity"
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
                className="p-2 lg:m-2 hover:opacity-80 transition-opacity"
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
                className="p-2 lg:m-2 hover:opacity-80 transition-opacity"
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

            {/* linha vertical usando a mesma cor do texto */}
            <div
              className="hidden lg:block w-px h-[100px] mt-4"
              style={{ backgroundColor: textColor }}
            />
          </>
        ) : (
          <>
            <a
              href="/"
              className="text-2xl sm:text-2xl lg:py-10 tracking-[5px] lg:text-xs lg:-rotate-90 transition-all duration-300 ease-in-out p-2 lg:m-2"
              onClick={handleHomeClick}
              style={{ color: textColor }}
            >
              HOME
            </a>
            <div
              className="hidden lg:block w-px h-[100px] mt-4"
              style={{ backgroundColor: textColor }}
            />
          </>
        )}
      </div>

      <div className="lg:absolute lg:bottom-6 lg:left-3 lg:-rotate-90">
        <p
          className="text-xs sm:text-sm hidden lg:block py-3"
          style={{ color: textColor }}
        >
          © 2026
        </p>
      </div>
    </footer>
  );
}
