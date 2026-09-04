"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useSection, type SectionId } from "../contexts/section-context";
import { useTranslations } from "../i18n";
import Translate from "./translate";

export default function Navbar() {
  const { navigateToSection, activeSection } = useSection();
  const pathname = usePathname();
  const t = useTranslations();

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/about", section: "about" as const, label: t.nav.about },
    { href: "/work", section: "work" as const, label: t.nav.work },
    { href: "/education", section: "education" as const, label: t.nav.education },
    { href: "/contact", section: "contact" as const, label: t.nav.contact },
  ] as const;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: SectionId
  ) => {
    e.preventDefault();
    setIsOpen(false);
    navigateToSection(section);
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

  const isActive = (section: SectionId) =>
    pathname === "/" && activeSection === section;

  return (
    <nav
      className="
        relative z-50 flex items-center justify-between
        px-5 py-4
        sm:px-8 sm:py-5
        md:px-12
        lg:w-[min(48%,42rem)] lg:shrink-0 lg:flex-col lg:items-start lg:justify-center
        lg:px-6 lg:py-0
        xl:w-[min(50%,48rem)] xl:px-10
        2xl:w-[min(52%,56rem)] 2xl:px-14
        lg:h-[100vh]
      "
    >
      <button
        type="button"
        onClick={() => handleLinkClick({ preventDefault: () => {} } as React.MouseEvent<HTMLAnchorElement>, "home")}
        className="
          z-50 block cursor-pointer font-grandslang
          text-[1.5rem] leading-[0.9]
          transition-all duration-300 ease-in-out
          hover:skew-x-[-15deg] hover:opacity-80
          lg:hidden
        "
      >
        {t.nav.brand}
      </button>

      <ul className="hidden w-full lg:block lg:space-y-3 xl:space-y-4 2xl:space-y-5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.section)}
              className={`
                block cursor-pointer font-grandslang
                text-[clamp(3.5rem,9vw,10rem)] leading-[0.9]
                transition-all duration-300 ease-in-out
                hover:skew-x-[-15deg] hover:opacity-80
                focus-visible:outline-2 focus-visible:outline-offset-4
                ${isActive(link.section) ? "opacity-60" : ""}
              `}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="contents">
        <Translate />
      </div>

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
                  onClick={(e) => handleLinkClick(e, link.section)}
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
