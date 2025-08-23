// src/app/projects/page.tsx
type Project = { title: string; description: string; link: string };

const projects: Project[] = [
  { title: "Project A", description: "A cool Next.js app.", link: "#" },
  { title: "Project B", description: "An innovative React dashboard.", link: "#" },
];

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="border p-4 rounded-lg hover:shadow-lg">
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="mb-2">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
