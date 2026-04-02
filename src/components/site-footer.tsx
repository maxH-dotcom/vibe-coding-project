import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Built with Next.js, Tailwind CSS, and a vibe-coding-first content workflow.</p>
        <div className="flex gap-5">
          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="/blog" className="transition hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
