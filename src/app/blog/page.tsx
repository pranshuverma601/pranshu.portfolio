import Link from "next/link";
import { blogPosts } from "../../data/blogs";

export default function BlogPage() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-56 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Blog
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          Notes and guides on Dynamics 365 CRM backend development, PCF controls,
          Power Automate, and full-stack web development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-[2px] hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-gray-900/25 dark:hover:bg-gray-900/40"
          >
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-300">
              {post.date} • {post.readTime}
            </div>
            <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
              {post.title}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700 dark:bg-white/[0.06] dark:text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
              Read →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

