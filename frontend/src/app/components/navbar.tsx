"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "../contexts/transition-context";
import { useTranslations } from "../i18n";
import Translate from "./translate";

export default function Navbar() {
  const { startTransition } = useTransition();
  const router = useRouter();
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/about", label: t.nav.about },
    { href: "/work", label: t.nav.work },
    { href: "/blog", label: t.nav.education },
    { href: "/contact", label: t.nav.contact },
  ] as const;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setIsOpen(false);
    startTransition();

    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav
      className="
        relative z-50 flex items-center justify-between
        px-5 py-4
        sm:px-8 sm:py-5
        md:px-12
        lg:h-full lg:w-[min(48%,42rem)] lg:shrink-0 lg:flex-col lg:items-start lg:justify-center
        lg:px-6 lg:py-10
        xl:w-[min(50%,48rem)] xl:px-10
        2xl:w-[min(52%,56rem)] 2xl:px-14
      "
    >
      {/* Mobile brand — hidden on desktop split layout */}
      <span
        className="
          z-50 block cursor-pointer font-grandslang
          text-[1.5rem] leading-[0.9]
          transition-all duration-300 ease-in-out
          hover:skew-x-[-15deg] hover:opacity-80
          lg:hidden
        "
      >
        {t.nav.brand}
      </span>

      {/* Desktop mega menu */}
      <ul className="hidden w-full lg:block lg:space-y-3 xl:space-y-4 2xl:space-y-5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="
                block cursor-pointer font-grandslang
                text-[clamp(3.5rem,9vw,10rem)] leading-[0.9]
                transition-all duration-300 ease-in-out
                hover:skew-x-[-15deg] hover:opacity-80
                focus-visible:outline-2 focus-visible:outline-offset-4
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Language — desktop only (top-right of viewport) */}
      <div className="hidden lg:contents">
        <Translate />
      </div>

      {/* Mobile fullscreen menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.menuLabel}
          className="
            fixed inset-0 z-40 flex items-center justify-center
            bg-[#1A1A18]/95 backdrop-blur-md
          "
        >
          <ul className="flex flex-col items-center gap-6 text-center sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="
                    block cursor-pointer font-grandslang
                    text-5xl leading-[0.9] sm:text-6xl md:text-7xl
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:skew-x-[-8deg] hover:opacity-70
                    focus-visible:outline-2 focus-visible:outline-offset-4
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hamburger — mobile / tablet only */}
      <button
        type="button"
        aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((previous) => !previous)}
        className="
          relative z-50 flex h-10 w-10 cursor-pointer
          flex-col items-end justify-center gap-1.5
          transition-transform duration-300 hover:scale-110
          focus-visible:outline-2 focus-visible:outline-offset-4
          lg:hidden
        "
      >
        <span
          aria-hidden="true"
          className={`
            block h-[2px] w-7 bg-current
            transition-all duration-300 ease-in-out
            ${isOpen ? "translate-y-[8px] rotate-45" : ""}
          `}
        />
        <span
          aria-hidden="true"
          className={`
            block h-[2px] w-5 bg-current
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-0" : "opacity-100"}
          `}
        />
        <span
          aria-hidden="true"
          className={`
            block h-[2px] w-7 bg-current
            transition-all duration-300 ease-in-out
            ${isOpen ? "-translate-y-[8px] -rotate-45" : ""}
          `}
        />
      </button>
    </nav>
  );
}
