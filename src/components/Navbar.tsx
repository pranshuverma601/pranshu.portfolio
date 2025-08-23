"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 dark:text-white"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={
                  "px-3 py-2 rounded-md transition-colors duration-200 " +
                  (isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white")
                }
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2 shadow-inner">
          {navLinks.map(({ path, label }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={
                  "block px-3 py-2 rounded-md transition-colors duration-200 " +
                  (isActive
                    ? "bg-indigo-100 text-indigo-600"
                    : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white")
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
