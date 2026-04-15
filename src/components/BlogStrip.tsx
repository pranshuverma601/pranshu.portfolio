import Link from "next/link";
import BlogSlider from "./BlogSlider";
import { blogPosts } from "../data/blogs";

export default function BlogStrip({
  compact,
}: {
  compact?: boolean;
}) {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-36 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="container mx-auto px-4 py-10">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {compact ? "Blogs" : "From the blog"}
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Tips on Dynamics 365, PCF, Power Automate, and full-stack dev.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-indigo-700 hover:underline dark:text-indigo-300"
          >
            Browse all →
          </Link>
        </div>

        <BlogSlider posts={blogPosts} maxPosts={compact ? 6 : 9} />
      </div>
    </section>
  );
}

