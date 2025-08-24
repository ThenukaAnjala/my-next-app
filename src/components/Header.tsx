"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#673CC0] text-white shadow-md z-50">
      <div className="relative max-w-7xl mx-auto h-16 px-6 flex items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"         // put your logo at /public/logo.png
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Center: Nav (always perfectly centered) */}
        <nav
  aria-label="Primary"
  className="absolute left-1/2 -translate-x-1/2"
>
  <ul className="flex items-center gap-12 text-[24px] sm:text-[28px] md:text-[36px] lg:text-[45px] font-medium list-none">
    <li>
      <Link href="/" className="hover:text-gray-300 transition-colors no-underline">
        Home
      </Link>
    </li>
    <li>
      <Link href="/about" className="hover:text-gray-300 transition-colors no-underline">
        About
      </Link>
    </li>
    <li>
      <Link href="/services" className="hover:text-gray-300 transition-colors no-underline">
        Services
      </Link>
    </li>
    <li>
      <Link href="/projects" className="hover:text-gray-300 transition-colors no-underline">
        Projects
      </Link>
    </li>
  </ul>
</nav>

      </div>
    </header>
  );
}
