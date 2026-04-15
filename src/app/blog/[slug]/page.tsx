import Link from "next/link";
import { blogPosts } from "../../../data/blogs";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section>
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Post not found
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          The blog post you’re looking for doesn’t exist.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-56 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-gray-900/30 dark:text-white dark:hover:bg-gray-900/45"
      >
        ← Back
      </Link>

      <header className="mt-6">
        <div className="text-sm font-semibold text-gray-500 dark:text-gray-300">
          {post.date} • {post.readTime}
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-200">
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
      </header>

      <section className="mt-10 rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/25">
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">
          This is a starter blog template. Replace this content with your real
          article text (steps, code snippets, screenshots, and learnings). If you
          want, I can also add Markdown support so you can write posts in files.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Problem / requirement",
            "Approach & key decisions",
            "Implementation notes",
            "Results & next steps",
          ].map((x) => (
            <div
              key={x}
              className="rounded-2xl border border-black/5 bg-white/60 p-4 text-sm font-semibold text-gray-900 dark:border-white/10 dark:bg-gray-900/20 dark:text-white"
            >
              {x}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

