import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { profile, skillMatrix, timeline } from "@/content/site";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="比首页更完整一点的自我描述。"
          description="先把目前最真实的关注点放在这里：vibe coding、workflow、框架搭建，以及如何把这些东西慢慢变成自己的方法。"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-lg leading-8 text-slate-200">
              {profile.name} 现在更像一个持续实验中的实践者。我使用 vibe coding，但也不只满足于“能生成出来”，而是更想理解一套工作方式怎样变得稳定、可复用、可持续。
            </p>
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
          <div className="rounded-[2rem] border border-white/10 bg-panel p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Capabilities</p>
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
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300">
              Current focus: 把个人项目从零散的尝试，逐步沉淀成更清晰的 workflow 和更可靠的框架。
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
