// src/components/Footer.tsx
"use client";

import Link from "next/link";

function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group inline-flex items-center justify-center gap-2 rounded-xl border border-black/5 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md active:translate-y-0 dark:border-white/10 dark:bg-gray-900/40 dark:text-gray-100 dark:hover:bg-gray-900/60"
      aria-label="Back to top"
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm transition-transform duration-200 group-hover:rotate-[8deg]">
        ↑
      </span>
      Back to top
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-black/5 bg-gradient-to-b from-white/80 via-white to-indigo-50/40 dark:border-white/10 dark:from-gray-950/80 dark:via-gray-950 dark:to-indigo-950/20">
      <div className="pointer-events-none absolute inset-x-0 -top-16 mx-auto h-44 max-w-6xl bg-gradient-to-r from-indigo-500/12 via-violet-500/12 to-fuchsia-500/12 blur-3xl animate-[gradientShift_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl animate-[floaty_18s_ease-in-out_infinite]" />

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-2xl px-2 py-1 transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
            >
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-[1.03] group-hover:rotate-[-2deg] dark:ring-white/10">
                <span className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="absolute -left-8 -top-8 h-16 w-16 rotate-12 bg-white/35 blur-xl" />
                </span>
                <span className="relative select-none text-sm font-black tracking-tight text-white">
                  P
                </span>
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold tracking-wide text-gray-900 dark:text-white">
                  MyPortfolio
                </span>
                <span className="block text-xs font-medium text-gray-600 dark:text-gray-300">
                  Full-Stack • Dynamics 365 CRM • Power Platform
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              I build CRM business solutions and modern web apps — focusing on
              Dynamics 365 CRM backend development, PCF controls, Power
              Automate, and responsive UI with React/Next.js.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["PL-400", "PL-900", "PCF", "Power Automate", "Next.js"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5 dark:text-gray-100 dark:ring-white/10"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              Quick links
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/resume", label: "Resume" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-gray-600 transition hover:bg-black/[0.03] hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/70" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              Let’s connect
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Have a CRM requirement or a web project? Send a message and I’ll
              reply quickly.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-indigo-600/30 active:translate-y-0 dark:ring-white/10"
              >
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/15 ring-1 ring-white/10 transition-transform duration-200 group-hover:rotate-[8deg]">
                  <span className="text-[12px] font-black tracking-tight">
                    P
                  </span>
                </span>
                Contact me
              </Link>
              <BackToTopButton />
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-black/5 pt-3 text-center text-sm text-gray-600 dark:border-white/10 dark:text-gray-300">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            MyPortfolio
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
