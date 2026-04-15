"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function LogoMark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-[1.03] group-hover:rotate-[-2deg] dark:ring-white/10">
      <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span className="absolute -left-8 -top-8 h-16 w-16 rotate-12 bg-white/35 blur-xl" />
      </span>
      <span className="relative select-none text-sm font-black tracking-tight text-white">
        P
      </span>
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55 dark:border-white/10 dark:bg-gray-900/55">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-24 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-2xl animate-[gradientShift_12s_ease-in-out_infinite]"
      />
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
        >
          <LogoMark />
          <span className="leading-tight">
            <span className="block text-[13px] font-semibold tracking-wide text-gray-900 dark:text-white">
              MyPortfolio
            </span>
            <span className="block text-[11px] font-medium text-gray-600 dark:text-gray-300">
              Full-Stack Developer
            </span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 " +
                  (isActive
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20"
                    : "text-gray-700 hover:bg-black/[0.04] hover:text-gray-900 dark:text-gray-200 dark:hover:bg-white/[0.08] dark:hover:text-white")
                }
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="group ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-indigo-600/30 active:translate-y-0 dark:ring-white/10"
          >
            Contact me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden rounded-lg p-2 text-gray-800 ring-1 ring-black/5 transition-colors hover:bg-black/[0.04] focus:outline-none dark:text-gray-200 dark:ring-white/10 dark:hover:bg-white/[0.08]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-black/5 bg-white/80 px-4 pb-4 pt-2 backdrop-blur dark:border-white/10 dark:bg-gray-900/65">
          {navLinks.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={
                  "block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 " +
                  (isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-black/[0.04] hover:text-gray-900 dark:text-gray-200 dark:hover:bg-white/[0.08] dark:hover:text-white")
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-black/5 dark:ring-white/10"
            onClick={() => setIsOpen(false)}
          >
            Contact me
          </Link>
        </div>
      )}
    </nav>
  );
}
