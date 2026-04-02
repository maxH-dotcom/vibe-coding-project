import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { contactLinks } from "@/content/site";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="A clean handoff for conversations, interviews, and collaborations."
          description="The MVP keeps contact friction low: direct links on the left, polished form styling on the right."
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
          <form className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft">
            <label className="grid gap-2 text-sm text-slate-300">
              Name
              <input
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition focus:border-accent"
                placeholder="How should I call you?"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Email
              <input
                type="email"
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition focus:border-accent"
                placeholder="name@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                rows={7}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none transition focus:border-accent"
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
      </section>
    </PageShell>
  );
}
