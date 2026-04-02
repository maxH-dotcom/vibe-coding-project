import Link from "next/link";
import type { Post } from "@/content/site";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-slate-950/30 p-6">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
        <span>{post.date}</span>
        <span className="h-1 w-1 rounded-full bg-slate-600" />
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-white">
        <Link href={post.href}>{post.title}</Link>
      </h3>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
