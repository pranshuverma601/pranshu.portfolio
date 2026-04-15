"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { BlogPost } from "../data/blogs";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function usePerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perPage;
}

function Card({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-[2px] hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-gray-900/25 dark:hover:bg-gray-900/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-300">
            {post.date} • {post.readTime}
          </div>
          <div className="mt-2 text-base font-semibold leading-snug text-gray-900 dark:text-white">
            {post.title}
          </div>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-sm ring-1 ring-black/5 transition-transform duration-200 group-hover:rotate-[6deg] dark:ring-white/10">
          P
        </div>
      </div>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
        {post.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700 dark:bg-white/[0.06] dark:text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition group-hover:gap-2.5 dark:text-indigo-300">
        Read more <span aria-hidden>→</span>
      </div>
    </Link>
  );
}

export default function BlogSlider({
  posts,
  maxPosts,
}: {
  posts: BlogPost[];
  maxPosts?: number;
}) {
  const perPage = usePerPage();
  const visiblePosts = useMemo(
    () => posts.slice(0, maxPosts ?? posts.length),
    [posts, maxPosts]
  );

  const pageCount = Math.max(1, Math.ceil(visiblePosts.length / perPage));
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((p) => clamp(p, 0, pageCount - 1));
  }, [pageCount]);

  const start = page * perPage;
  const pageItems = visiblePosts.slice(start, start + perPage);

  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  return (
    <div className="rounded-3xl border border-black/5 bg-white/50 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-gray-900/15 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-semibold text-gray-900 dark:text-white">
          Latest blogs
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={!canPrev}
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-gray-900/30 dark:text-white dark:hover:bg-gray-900/45"
            aria-label="Previous blogs"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={!canNext}
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-gray-900/30 dark:text-white dark:hover:bg-gray-900/45"
            aria-label="Next blogs"
          >
            →
          </button>
          <Link
            href="/blog"
            className="ml-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-indigo-600/30 active:translate-y-0 dark:ring-white/10"
          >
            View all
          </Link>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((post) => (
          <Card key={post.slug} post={post} />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={
                "h-2.5 w-2.5 rounded-full transition " +
                (i === page
                  ? "bg-indigo-600"
                  : "bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20")
              }
              aria-label={`Go to blog page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

