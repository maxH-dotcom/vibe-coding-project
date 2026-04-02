import { PageShell } from "@/components/page-shell";
import { PostCard } from "@/components/post-card";
import { SectionHeading } from "@/components/section-heading";
import { posts } from "@/content/site";

export default function BlogPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Notes on AI interfaces, frontend craft, and building in public."
          description="This section already behaves like a small publication and can later be replaced with MDX parsing without changing the page structure."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {["All posts", "AI UX", "Next.js", "Workflow", "Design"].map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
