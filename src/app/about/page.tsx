// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-56 max-w-5xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="mb-10 flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5">
          <span className="select-none text-sm font-black tracking-tight">
            P
          </span>
        </div>
        <div className="min-w-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
            About Pranshu
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Full-Stack Developer • Dynamics 365 CRM Backend • Power Platform
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900">
            What I do
          </h3>
          <p className="mt-3 leading-relaxed text-gray-700">
            I’m a <span className="font-semibold">Full-Stack Developer</span> working as a{" "}
            <span className="font-semibold">Dynamics 365 CRM Backend Developer</span>. I build CRM
            solutions and business automations using{" "}
            <span className="font-semibold">PCF controls</span> and{" "}
            <span className="font-semibold">Power Automate</span>, and I also create modern web
            applications with <span className="font-semibold">React.js</span> and{" "}
            <span className="font-semibold">Next.js</span>.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Dynamics 365 / Dataverse",
                desc: "Backend development, integrations, and scalable business logic.",
                pill: "CRM",
              },
              {
                title: "PCF + Automation",
                desc: "Custom controls and workflow automation that improves UX and productivity.",
                pill: "Power",
              },
              {
                title: "Web Development",
                desc: "Responsive, fast, and clean UI using modern frontend tools.",
                pill: "Web",
              },
              {
                title: "Databases",
                desc: "Designing and working with both NoSQL and relational data.",
                pill: "DB",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-black/5 bg-white p-5 transition hover:-translate-y-[1px] hover:bg-black/[0.01] hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {c.title}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">{c.desc}</div>
                  </div>
                  <span className="rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                    {c.pill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
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

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
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
                  className="flex items-center justify-between gap-3 rounded-xl border border-black/5 px-4 py-3 transition hover:bg-black/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm">
                      <span className="text-center text-[10px] font-black leading-none tracking-tight">
                        <span className="block">PL</span>
                        <span className="block">{c.title.replace("PL-", "")}</span>
                      </span>
                    </div>
                    <div>
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
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">AI Tools</h3>
            <p className="mt-2 text-sm text-gray-600">
              I use Copilot and AI tooling to speed up development and I can
              create a RAG Agent solution when needed.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["GitHub Copilot", "AI tools", "RAG Agent"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-black/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
