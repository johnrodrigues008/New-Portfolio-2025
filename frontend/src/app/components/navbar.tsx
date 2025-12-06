'use client';

import Link from "next/link";
import { useTransition } from "../contexts/transition-context";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { startTransition } = useTransition();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition();
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  return (
    <nav className="lg:flex lg:items-center">
      <ul className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6">
        <li>
          <a 
            href="/about" 
            onClick={(e) => handleLinkClick(e, '/about')}
            className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out cursor-pointer"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a 
            href="/work" 
            onClick={(e) => handleLinkClick(e, '/work')}
            className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out cursor-pointer"
          >
            WORK
          </a>
        </li>
        <li>
          <a 
            href="/blog" 
            onClick={(e) => handleLinkClick(e, '/blog')}
            className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out cursor-pointer"
          >
            SHOP
          </a>
        </li>
        <li>
          <a 
            href="/contact" 
            onClick={(e) => handleLinkClick(e, '/contact')}
            className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out cursor-pointer"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}