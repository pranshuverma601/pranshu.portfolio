// src/app/resume/page.tsx
import Link from "next/link";

export default function ResumePage() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-56 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Resume
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          A quick overview of my experience and strengths across Dynamics 365
          CRM backend development, PCF controls, Power Automate, and full-stack
          web development.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/25">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/30 dark:text-gray-200">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 animate-[floaty_3.4s_ease-in-out_infinite]" />
                  Full-Stack • Dynamics 365 CRM • Power Platform
                </div>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Download my resume
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  Includes project highlights, certifications (PL-400 / PL-900),
                  and skills: TypeScript, C#, Java, JavaScript, React, Next.js,
                  MongoDB, SQL.
                </p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                CV
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Dynamics 365 CRM backend (Dataverse + integrations)",
                "PCF controls (custom UI + performance UX)",
                "Power Automate (approvals, routing, tracking)",
                "Full-stack web apps (React / Next.js)",
                "Databases (MongoDB + SQL)",
                "AI tooling (Copilot + RAG Agent approach)",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/60 p-4 text-sm text-gray-700 dark:border-white/10 dark:bg-gray-900/20 dark:text-gray-200"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <span>{x}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-600/20 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-emerald-600/30 active:translate-y-0 dark:ring-white/10"
              >
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/15 ring-1 ring-white/10 transition-transform duration-200 group-hover:rotate-[8deg]">
                  ↓
                </span>
                Download Resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md active:translate-y-0 dark:border-white/10 dark:bg-gray-900/30 dark:text-white dark:hover:bg-gray-900/45"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/25">
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              Quick profile
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Full-Stack Developer working as Dynamics 365 CRM Backend Developer.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["PL-400", "PL-900", "PCF", "Power Automate", "Next.js"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700 dark:bg-white/[0.06] dark:text-gray-200"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
