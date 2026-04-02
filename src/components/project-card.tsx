import Link from "next/link";
import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:border-accent/50 hover:bg-white/[0.075]">
      <div className="flex items-center justify-between text-sm text-slate-400">
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <Link href={project.href} className="text-sm font-medium text-accent">
          View details
        </Link>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          {project.status}
        </span>
      </div>
    </article>
  );
}
