import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { getPostBySlug, posts } from "@/content/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <Link href="/blog" className="text-sm font-medium text-accent">
          Back to blog
        </Link>
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/30 p-8">
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
