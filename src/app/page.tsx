import Link from "next/link";
import BlogStrip from "../components/BlogStrip";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl animate-[floaty_14s_ease-in-out_infinite]" />
          <div className="absolute -right-28 top-10 h-96 w-96 rounded-full bg-gradient-to-tr from-fuchsia-500/15 via-violet-500/15 to-indigo-500/15 blur-3xl animate-[gradientShift_16s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-400/10 via-sky-400/10 to-indigo-400/10 blur-3xl animate-[floaty_18s_ease-in-out_infinite]" />
        </div>

        <div className="container mx-auto px-6 py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/30 dark:text-gray-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-[floaty_2.8s_ease-in-out_infinite]" />
                Available for freelance & full-time opportunities
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Pranshu Verma
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-200 sm:text-lg">
                Full-Stack Developer working as a{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Dynamics 365 CRM Backend Developer
                </span>
                . I build business solutions with{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  PCF Controls
                </span>{" "}
                and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Power Automate
                </span>
                , and develop modern web apps using{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  React
                </span>{" "}
                &{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  Next.js
                </span>
                .
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Dynamics 365 CRM",
                  "Dataverse",
                  "PCF",
                  "Power Automate",
                  "React.js",
                  "Next.js",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5 dark:text-gray-100 dark:ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-indigo-600/30 active:translate-y-0 dark:ring-white/10"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/15 ring-1 ring-white/10 transition-transform duration-200 group-hover:rotate-[8deg]">
                    <span className="text-[12px] font-black tracking-tight">
                      P
                    </span>
                  </span>
                  View Projects
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md active:translate-y-0 dark:border-white/10 dark:bg-gray-900/30 dark:text-white dark:hover:bg-gray-900/45"
                >
                  Contact Me
                </Link>
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { k: "Certifications", v: "PL-400 • PL-900" },
                  { k: "Databases", v: "MongoDB • SQL" },
                  { k: "Frontend", v: "Tailwind • Next.js" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-gray-900/25 dark:hover:bg-gray-900/40"
                  >
                    <div className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      {s.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/25">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 opacity-60"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                        <span className="text-sm font-black tracking-tight">
                          P
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          Pranshu Verma
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">
                          Full-Stack • Dynamics 365 • Power Platform
                        </div>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300">
                      Open to work
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      {
                        title: "Dynamics 365 CRM Backend",
                        desc: "Dataverse + business logic + integrations",
                      },
                      {
                        title: "PCF Controls",
                        desc: "Custom interactive UI for model-driven apps",
                      },
                      {
                        title: "Power Automate",
                        desc: "Workflow automation to boost productivity",
                      },
                    ].map((c) => (
                      <div
                        key={c.title}
                        className="group rounded-2xl border border-black/5 bg-white/70 p-4 transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-gray-900/20 dark:hover:bg-gray-900/35"
                      >
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {c.title}
                        </div>
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          {c.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-black/5 bg-gradient-to-r from-indigo-600/10 to-violet-600/10 p-4 dark:border-white/10">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Certified
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {["PL-400", "PL-900"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5 dark:bg-gray-900/35 dark:text-gray-100 dark:ring-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Me
        </h2>
        <p className="max-w-3xl text-gray-600 mx-auto leading-relaxed text-center">
          I’m a <span className="font-semibold text-gray-800">Full-Stack Developer</span> working as a{" "}
          <span className="font-semibold text-gray-800">Dynamics 365 CRM Backend Developer</span>.
          I build business solutions using <span className="font-semibold text-gray-800">PCF controls</span> and{" "}
          <span className="font-semibold text-gray-800">Power Automate</span>, and I also develop modern web apps with{" "}
          <span className="font-semibold text-gray-800">React</span> and{" "}
          <span className="font-semibold text-gray-800">Next.js</span>.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600 text-white shadow-sm">
                <span className="text-sm font-black">CRM</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Dynamics 365 CRM Backend
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Backend development for CRM solutions, integrations, and business logic.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Dataverse", "Plugins", "Workflows", "Integrations"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
                <span className="text-sm font-black">UI</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  PCF Controls + Power Automate
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Interactive UI components and automation flows that improve productivity.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {["PCF", "Power Automate", "TypeScript", "Custom UX"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-gray-900">Tech Stack</h3>
              <p className="mt-1 text-sm text-gray-600">
                Frontend, backend, and databases I work with.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "TypeScript",
                  "JavaScript",
                  "React.js",
                  "Next.js",
                  "MongoDB",
                  "SQL",
                  "C#",
                  "Java",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <h3 className="text-lg font-semibold text-gray-900">
                Certifications
              </h3>
              <div className="mt-4 grid gap-2">
                {[
                  { title: "PL-400", desc: "Power Platform Developer" },
                  { title: "PL-900", desc: "Power Platform Fundamentals" },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-black/5 bg-white px-4 py-3 transition hover:bg-black/[0.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5">
                        <span className="text-center text-[10px] font-black leading-none tracking-tight">
                          <span className="block">PL</span>
                          <span className="block">{c.title.replace("PL-", "")}</span>
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">
                          {c.title}
                        </div>
                        <div className="text-xs text-gray-600">{c.desc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-700">
                      Certified
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5">
                    <span className="text-[11px] font-black leading-none">AI</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900">
                      Languages & AI Tools
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[
                        "TypeScript",
                        "JavaScript",
                        "C#",
                        "Java",
                        "GitHub Copilot",
                        "RAG Agent",
                      ].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/about"
            className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
              Projects
            </h2>
            <p className="text-gray-600">
              Dynamics 365 / Power Platform work and full-stack web projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dynamics 365 CRM Automation Suite",
                type: "Dynamics 365 / Power Platform",
                desc: "Lead-to-opportunity automation with approvals, routing, and tracking.",
                tags: ["Power Automate", "Dataverse", "Dynamics 365"],
              },
              {
                title: "PCF Control: Smart Lookup",
                type: "Dynamics 365 / Power Platform",
                desc: "Custom PCF control for faster data entry and improved UX in model-driven apps.",
                tags: ["PCF", "TypeScript", "React"],
              },
              {
                title: "CRUD Admin Panel (Full-Stack)",
                type: "Full-Stack Web",
                desc: "Scalable admin UI patterns with clean forms, tables, and search/filtering.",
                tags: ["Next.js", "MongoDB", "SQL"],
              },
            ].map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-[2px] hover:bg-white hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {p.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5">
                      {p.type}
                    </div>
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:rotate-[6deg]">
                    P
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {p.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md active:translate-y-0"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-56 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl"
        />

        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/25">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/12 via-violet-500/10 to-fuchsia-500/12"
            />

            <div className="relative grid gap-8 p-8 md:grid-cols-12 md:p-10">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/30 dark:text-gray-200">
                  <span className="h-2 w-2 rounded-full bg-indigo-500 animate-[floaty_3.4s_ease-in-out_infinite]" />
                  Updated resume • Full-Stack + Dynamics 365 CRM
                </div>

                <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Resume
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 dark:text-gray-200 sm:text-base">
                  Download my resume to see my experience in{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Dynamics 365 CRM backend development
                  </span>
                  ,{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    PCF controls
                  </span>
                  ,{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Power Automate
                  </span>
                  , and full-stack web development with{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    React / Next.js
                  </span>
                  .
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Certifications", v: "PL-400 • PL-900" },
                    { k: "Core", v: "Dynamics 365 • Dataverse" },
                    { k: "Web", v: "React • Next.js • Tailwind" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-gray-900/25 dark:hover:bg-gray-900/40"
                    >
                      <div className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                        {s.k}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                        {s.v}
                      </div>
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
                    href="/resume"
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md active:translate-y-0 dark:border-white/10 dark:bg-gray-900/30 dark:text-white dark:hover:bg-gray-900/45"
                  >
                    View Resume Page
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/20">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        What’s inside
                      </div>
                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        Quick snapshot of my highlights and strengths.
                      </div>
                    </div>
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5">
                      CV
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      "Dynamics 365 CRM backend work (Dataverse + integrations)",
                      "PCF controls and productivity-focused UX",
                      "Power Automate workflows (approvals, routing, tracking)",
                      "Full-stack web apps (React/Next.js) + databases (MongoDB/SQL)",
                      "AI tooling experience: Copilot + RAG Agent approach",
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-56 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl"
        />

        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/25">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-500/12 via-violet-500/10 to-fuchsia-500/12"
            />

            <div className="relative grid gap-8 p-8 md:grid-cols-12 md:p-10">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-500 text-white">
                    ✓
                  </span>
                  Usually replies within 24 hours
                </div>

                <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Get in Touch
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-700 dark:text-gray-200 sm:text-base">
                  Need help with{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Dynamics 365 CRM backend
                  </span>
                  ,{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    PCF controls
                  </span>
                  , or{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Power Automate
                  </span>
                  ? Or building a full-stack web app with{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Next.js / React
                  </span>
                  ? Send me a message — I’ll respond with the best next steps.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Dynamics 365",
                    "Dataverse",
                    "PCF",
                    "Power Automate",
                    "TypeScript",
                    "Next.js",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5 dark:bg-gray-900/35 dark:text-gray-100 dark:ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-indigo-600/30 active:translate-y-0 dark:ring-white/10"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/15 ring-1 ring-white/10 transition-transform duration-200 group-hover:rotate-[8deg]">
                      <span className="text-[12px] font-black tracking-tight">
                        P
                      </span>
                    </span>
                    Contact Me
                  </Link>

                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md active:translate-y-0 dark:border-white/10 dark:bg-gray-900/30 dark:text-white dark:hover:bg-gray-900/45"
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="grid gap-3">
                  {[
                    {
                      title: "CRM / Power Platform",
                      desc: "Backend logic, integrations, PCF controls, automation flows.",
                      tag: "Business",
                    },
                    {
                      title: "Full-Stack Web",
                      desc: "React + Next.js UI, clean APIs, MongoDB/SQL data layers.",
                      tag: "Web",
                    },
                    {
                      title: "AI / RAG Agent",
                      desc: "Copilot + AI tools and RAG Agent approach for knowledge search.",
                      tag: "AI",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="group rounded-2xl border border-black/5 bg-white/70 p-5 transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-gray-900/20 dark:hover:bg-gray-900/35"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {c.title}
                          </div>
                          <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                            {c.desc}
                          </div>
                        </div>
                        <span className="shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                          {c.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-black/5 bg-white/70 p-5 text-sm text-gray-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/20 dark:text-gray-200">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    What to include in your message
                  </div>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Project / requirement summary",
                      "Timeline & priority",
                      "Tech stack (Dynamics/PCF/Power Automate or Web stack)",
                      "Any screenshots or errors (if debugging)",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500/70" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogStrip />
    </div>
  );
}
