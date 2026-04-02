import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { getProjectBySlug, projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <Link href="/projects" className="text-sm font-medium text-accent">
          Back to projects
        </Link>
        <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span>{project.type}</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>{project.status}</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/30 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Challenge</p>
            <p className="mt-4 leading-8 text-slate-300">{project.challenge}</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/30 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Outcome</p>
            <p className="mt-4 leading-8 text-slate-300">{project.outcome}</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-panel p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Case Study Skeleton</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[
              "Background and goal",
              "Role and responsibilities",
              "Architecture and workflow",
              "Design decisions",
              "Tradeoffs and constraints",
              "Results and next steps"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
