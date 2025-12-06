import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="lg:flex lg:items-center">
      <ul className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6">
        <li>
          <Link href="/about" className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out">ABOUT</Link>
        </li>
        <li>
          <Link href="/work" className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out">WORK</Link>
        </li>
        <li>
          <Link href="/blog" className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out">SHOP</Link>
        </li>
        <li>
          <Link href="/contact" className="font-grandslang text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[12rem] block leading-[0.9] hover:opacity-80 hover:skew-x-[-15deg] transition-all duration-300 ease-in-out">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}