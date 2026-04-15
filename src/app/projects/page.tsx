// src/app/projects/page.tsx
type Project = {
  title: string;
  type: "Dynamics 365 / Power Platform" | "Full-Stack Web";
  description: string;
  highlights: string[];
  tech: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Dynamics 365 CRM Automation Suite",
    type: "Dynamics 365 / Power Platform",
    description:
      "Automated lead-to-opportunity processes with approvals, notifications, and data validation to reduce manual effort.",
    highlights: [
      "Power Automate flows for routing & approvals",
      "Dataverse business rules & validations",
      "Audit-friendly status tracking",
    ],
    tech: ["Dynamics 365", "Dataverse", "Power Automate"],
  },
  {
    title: "PCF Control: Smart Lookup & Grid Enhancer",
    type: "Dynamics 365 / Power Platform",
    description:
      "Custom PCF control to improve data entry speed with smart search, inline preview, and friendly UX.",
    highlights: [
      "Responsive UI and keyboard-first interactions",
      "Reusable component design",
      "Performance-focused rendering",
    ],
    tech: ["PCF", "TypeScript", "React", "Dataverse"],
  },
  {
    title: "Dynamics 365 Integration Layer",
    type: "Dynamics 365 / Power Platform",
    description:
      "Backend integration patterns for syncing CRM data with external systems while keeping data consistent and reliable.",
    highlights: [
      "Robust error handling & retries",
      "Data mapping and transformation",
      "Secure integration approach",
    ],
    tech: ["Dynamics 365", "Dataverse", "Integration"],
  },
  {
    title: "Full-Stack Portfolio Platform",
    type: "Full-Stack Web",
    description:
      "Modern portfolio website with interactive UI, responsive sections, and smooth micro-interactions.",
    highlights: [
      "Responsive layout + interactive components",
      "Modern UI with Tailwind CSS",
      "Fast builds with Next.js",
    ],
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "CRUD Admin Panel (Full-Stack)",
    type: "Full-Stack Web",
    description:
      "Admin dashboard for managing entities with authentication-ready structure, search/filtering, and clean UI patterns.",
    highlights: [
      "Reusable table + form patterns",
      "Search, filter, and pagination-ready UI",
      "Scalable project structure",
    ],
    tech: ["React", "Next.js", "MongoDB", "SQL"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-56 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="mb-10">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
          Projects
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
          A mix of Dynamics 365 / Power Platform work and full-stack web
          projects. I focus on clean UX, scalable structure, and dependable
          delivery.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-[2px] hover:bg-white hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  {p.title}
                </h3>
                <div className="mt-1 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600/10 to-violet-600/10 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-black/5">
                  {p.type}
                </div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:rotate-[6deg]">
                P
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {p.description}
            </p>

            <div className="mt-5 grid gap-2">
              {p.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-sm">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500/70" />
                  <span className="text-gray-700">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link && (
              <div className="mt-6">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md active:translate-y-0"
                >
                  View Project →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
