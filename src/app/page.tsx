import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { PostCard } from "@/components/post-card";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks, getFeaturedProjects, posts, profile, skillMatrix, timeline } from "@/content/site";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const hasPosts = posts.length > 0;

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-100" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="relative space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(131,225,208,0.9)]" />
              {profile.availability}
            </div>
            <div className="space-y-6">
              <p className="max-w-xl text-sm uppercase tracking-[0.38em] text-slate-400">
                {profile.location}
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-2xl leading-tight text-mist sm:text-3xl">{profile.role}</p>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-slate-950 transition hover:translate-y-[-1px]"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile Signal</p>
                <span className="rounded-full bg-coral/15 px-3 py-1 text-xs text-coral">Building</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-panel p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus</p>
                <p className="mt-4 text-lg leading-7 text-white">
                  Building portfolio-worthy interfaces with a balance of taste, speed, and
                  system thinking.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current Stack</p>
                <p className="mt-4 text-lg leading-7 text-white">
                  Next.js, TypeScript, Tailwind, MDX, and AI-assisted product workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Featured"
          title="当前公开的项目还不多，但已经能看到思路的方向。"
          description="这版 MVP 先把个人定位、代表项目、关于信息和联系路径稳定下来，后续再逐步扩展更多作品。"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
          <SectionHeading
            eyebrow="About"
            title="一个更接近当前状态的个人说明。"
            description="不是把自己包装得很满，而是先把我关心什么、正在做什么、以及我如何思考工作流表达清楚。"
          />
            <div className="mt-8 grid gap-4">
              {timeline.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-accent">{item.period}</p>
                  <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-panel p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skill Matrix</p>
            <div className="mt-6 space-y-5">
              {skillMatrix.map((skill, index) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{skill.label}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-accent via-gold to-coral"
                      style={{ width: `${92 - index * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"
            >
              Read full profile
            </Link>
          </div>
        </div>
      </section>

      {hasPosts ? (
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Writing"
              title="Recent notes on AI UX, workflow, and frontend craft."
              description="A simple editorial layer makes the portfolio feel alive and gives your thinking somewhere to live."
            />
            <Link href="/blog" className="text-sm font-medium text-accent">
              Visit blog
            </Link>
          </div>
          <div className="mt-10 grid gap-5">
            {posts.slice(0, 2).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <SectionHeading
              eyebrow="Writing"
              title="博客内容正在整理中。"
              description="后续这里会慢慢放入我对 vibe coding、workflow、框架搭建和项目实践的记录。"
            />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-8 shadow-soft sm:p-10">
          <SectionHeading
            eyebrow="Contact"
            title="Make it easy for the right people to reach you."
            description="目前优先保留最直接的联系路径。如果你愿意交流、批判、提建议，都欢迎来信。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-accent/40"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-lg text-white">{item.value}</p>
                </a>
              ))}
            </div>
            <form className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                  placeholder="How should I call you?"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <input
                  type="email"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                  placeholder="name@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Message
                <textarea
                  rows={5}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                  placeholder="Tell me a bit about your team, project, or idea."
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-mist"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
