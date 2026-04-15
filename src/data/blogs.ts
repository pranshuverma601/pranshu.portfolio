export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO-like (YYYY-MM-DD)
  readTime: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dynamics-365-backend-best-practices",
    title: "Dynamics 365 CRM Backend: Best Practices I Use",
    excerpt:
      "A practical checklist for building reliable CRM backend logic: validations, integrations, and maintainable patterns.",
    date: "2026-04-10",
    readTime: "5 min read",
    tags: ["Dynamics 365", "Dataverse", "Backend"],
  },
  {
    slug: "pcf-controls-fast-ux",
    title: "PCF Controls: Designing Fast, Friendly UX",
    excerpt:
      "How I approach PCF controls for model-driven apps: performance, accessibility, and keyboard-first interactions.",
    date: "2026-03-28",
    readTime: "6 min read",
    tags: ["PCF", "TypeScript", "React"],
  },
  {
    slug: "power-automate-approval-flows",
    title: "Power Automate: Approval Flows That Don’t Break",
    excerpt:
      "Patterns for reliable approvals: retry handling, clear status tracking, and building flows that scale with business needs.",
    date: "2026-03-15",
    readTime: "4 min read",
    tags: ["Power Automate", "Power Platform"],
  },
  {
    slug: "nextjs-tailwind-portfolio-ui",
    title: "Next.js + Tailwind: Building a Modern Portfolio UI",
    excerpt:
      "My UI approach for a modern portfolio: subtle animations, clean cards, and responsive layout without heavy dependencies.",
    date: "2026-02-22",
    readTime: "7 min read",
    tags: ["Next.js", "Tailwind CSS", "UI"],
  },
  {
    slug: "sql-vs-mongodb-when-to-use",
    title: "SQL vs MongoDB: How I Choose (Quick Guide)",
    excerpt:
      "A simple decision guide for picking SQL or MongoDB based on data shape, relationships, scale, and development speed.",
    date: "2026-02-05",
    readTime: "5 min read",
    tags: ["SQL", "MongoDB", "Databases"],
  },
];

