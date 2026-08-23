"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import TranslateIcon from "../../../public/img/translate.svg";
import {
  LANGUAGE_TO_LOCALE,
  LOCALE_TO_LANGUAGE,
  useLocale,
  useTranslations,
  type LanguageCode,
} from "../i18n";

const languages: LanguageCode[] = ["PT", "EN", "ES"];

export default function Translate() {
  const { locale, setLocale, isReady } = useLocale();
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = isReady ? LOCALE_TO_LANGUAGE[locale] : null;

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  const handleLanguageSelect = (language: LanguageCode) => {
    setLocale(LANGUAGE_TO_LOCALE[language]);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed top-6 right-6 z-50 hidden lg:block xl:top-10 xl:right-10"
    >
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={
          selectedLanguage
            ? t.translate.selected.replace("{language}", selectedLanguage)
            : t.translate.select
        }
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="
          cursor-pointer leading-[0.9] animate-pulse
          transition-transform duration-300 ease-out
          hover:scale-110
          focus-visible:outline-2 focus-visible:outline-offset-4
        "
      >
        {selectedLanguage ? (
          <span
            aria-hidden="true"
            className="font-grandslang text-3xl leading-[0.9] 2xl:text-[2.5rem]"
          >
            {selectedLanguage}
          </span>
        ) : (
          <Image
            src={TranslateIcon}
            alt=""
            aria-hidden="true"
            width={50}
            height={50}
            className="h-10 w-10 xl:h-[50px] xl:w-[50px]"
          />
        )}
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={t.translate.available}
          className="absolute top-full right-0 mt-4 flex flex-col items-center gap-2"
        >
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              role="option"
              aria-selected={selectedLanguage === language}
              onClick={() => handleLanguageSelect(language)}
              className="
                cursor-pointer font-grandslang text-3xl leading-[0.9]
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:opacity-80
                focus-visible:outline-2 focus-visible:outline-offset-4
              "
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
