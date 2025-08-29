"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#673CC0] text-white shadow-md z-50">
      <div className="relative max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={56} height={56} priority />
        </Link>

        {/* Center menu (no <nav>) */}
        <div role="navigation" aria-label="Primary" className="absolute left-1/2 -translate-x-1/2">
          <ul
            className="
              flex items-center list-none whitespace-nowrap
              gap-10 sm:gap-12 md:gap-16 lg:gap-24      /* ← items අතර සමාන පරතරය */
              text-[20px] sm:text-[24px] md:text-[32px] lg:text-[45px]
              font-semibold tracking-wide
            "
          >
            <li>
              <Link
                href="/"
                className="
                  inline-flex items-center no-underline
                  px-4 py-2 md:px-5 md:py-2.5 lg:px-6     /* ← link padding */
                  rounded-md
                  text-white visited:text-white
                  hover:text-gray-100 hover:bg-white/10
                  transition-colors
                "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="
                  inline-flex items-center no-underline
                  px-4 py-2 md:px-5 md:py-2.5 lg:px-6
                  rounded-md
                  text-white visited:text-white
                  hover:text-gray-100 hover:bg-white/10
                  transition-colors
                "
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="
                  inline-flex items-center no-underline
                  px-4 py-2 md:px-5 md:py-2.5 lg:px-6
                  rounded-md
                  text-white visited:text-white
                  hover:text-gray-100 hover:bg-white/10
                  transition-colors
                "
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="
                  inline-flex items-center no-underline
                  px-4 py-2 md:px-5 md:py-2.5 lg:px-6
                  rounded-md
                  text-white visited:text-white
                  hover:text-gray-100 hover:bg-white/10
                  transition-colors
                "
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
