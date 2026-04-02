import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/site";

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="A filter-ready gallery for AI products, code work, and design studies."
          description="This MVP keeps the data simple, but the structure is ready for MDX-backed details, screenshots, and richer taxonomy later."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {["All", "AI Project", "Code", "Design", "Live", "Prototype"].map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
