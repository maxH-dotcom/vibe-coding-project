export type ProjectType = "AI Project" | "Code" | "Design" | "Writing";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  outcome: string;
  type: ProjectType;
  year: string;
  stack: string[];
  href: string;
  status: string;
  featured?: boolean;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  href: string;
  body: string[];
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export const profile = {
  name: "Your Name",
  role: "AI builder, frontend engineer, and design-minded maker",
  intro:
    "I turn ideas into polished digital experiments, blending code, interface craft, and AI-native workflows into products people actually want to use.",
  location: "Based in Shanghai, available remotely",
  email: "hello@example.com",
  availability: "Open to product engineering and creative AI roles",
  tags: ["LLM Apps", "React / Next.js", "Design Systems", "Creative Coding"],
  stats: [
    { label: "Selected projects", value: "12+" },
    { label: "Years building", value: "5" },
    { label: "Domains explored", value: "AI / Web / Design" }
  ]
};

export const projects: Project[] = [
  {
    slug: "agent-console",
    title: "Agent Console for Research Workflows",
    summary:
      "A multi-step AI workspace for planning, execution, and artifact review with structured outputs and human checkpoints.",
    challenge:
      "Turn a fuzzy AI workflow into something operators could trust, inspect, and steer without losing speed.",
    outcome:
      "Created a console-style interface that breaks long AI tasks into visible checkpoints, summaries, and reusable outputs.",
    type: "AI Project",
    year: "2026",
    stack: ["Next.js", "TypeScript", "OpenAI", "Vercel"],
    href: "/projects/agent-console",
    status: "Prototype",
    featured: true
  },
  {
    slug: "visual-portfolio-cms",
    title: "Visual Portfolio CMS",
    summary:
      "A lightweight content system for managing design cases, development notes, and blog posts from one MDX-driven workflow.",
    challenge:
      "Make personal publishing feel structured enough for long-term maintenance without pulling in a heavyweight CMS.",
    outcome:
      "Built a file-driven workflow that keeps content local, composable, and easy to version with the codebase.",
    type: "Code",
    year: "2025",
    stack: ["MDX", "Tailwind CSS", "Content Modeling"],
    href: "/projects/visual-portfolio-cms",
    status: "Live"
  },
  {
    slug: "motion-language-study",
    title: "Motion Language Study",
    summary:
      "An interface exploration focused on scroll rhythm, ambient gradients, and subtle micro-interactions for storytelling pages.",
    challenge:
      "Explore motion and pacing without overwhelming the content or turning the page into a demo reel.",
    outcome:
      "Developed a reusable motion language for sections, cards, and transitions that still feels calm and readable.",
    type: "Design",
    year: "2025",
    stack: ["Figma", "Framer Motion", "Design Tokens"],
    href: "/projects/motion-language-study",
    status: "Case Study"
  }
];

export const posts: Post[] = [
  {
    slug: "designing-ai-interfaces",
    title: "Designing AI Interfaces That Still Feel Human",
    excerpt:
      "A practical breakdown of interaction patterns that make AI products feel trustworthy, legible, and calm.",
    date: "Mar 18, 2026",
    readTime: "6 min read",
    tags: ["AI UX", "Design"],
    href: "/blog/designing-ai-interfaces",
    body: [
      "The best AI interfaces do not try to look magical. They create calm through legible states, explicit feedback, and controlled pacing.",
      "When users can tell what the model is doing, what it produced, and what they should do next, trust goes up immediately.",
      "That means good defaults, visible checkpoints, and language that sounds grounded rather than theatrical."
    ]
  },
  {
    slug: "shipping-with-mdx",
    title: "What I Learned Shipping with MDX as a Personal CMS",
    excerpt:
      "Why file-based content still wins for small personal sites, and where it starts to bend under scale.",
    date: "Feb 04, 2026",
    readTime: "4 min read",
    tags: ["Next.js", "MDX"],
    href: "/blog/shipping-with-mdx",
    body: [
      "MDX works well when the site owner is also the editor. The filesystem becomes the source of truth, and content evolves alongside the components.",
      "The tradeoff appears when content workflows need collaboration, approvals, or rich editorial tooling.",
      "For a personal portfolio, that tradeoff is usually worth it because speed and ownership matter more."
    ]
  },
  {
    slug: "vibe-coding-workflow",
    title: "A Vibe Coding Workflow That Actually Survives Production",
    excerpt:
      "Prompting can move fast, but systems need structure. This post covers the guardrails that keep velocity useful.",
    date: "Jan 09, 2026",
    readTime: "7 min read",
    tags: ["Workflow", "Engineering"],
    href: "/blog/vibe-coding-workflow",
    body: [
      "Fast prototyping is only useful if the system remains explainable after the first burst of momentum.",
      "I keep a lightweight loop: define intent, generate a draft, review structure, and only then expand the surface area.",
      "That rhythm keeps AI assistance from turning into a maintenance problem later."
    ]
  }
];

export const timeline: TimelineItem[] = [
  {
    period: "2025 - Now",
    title: "Independent AI Product Builder",
    description:
      "Building experiments across AI tooling, portfolio systems, and productized frontend experiences."
  },
  {
    period: "2023 - 2025",
    title: "Frontend Engineer / Design Collaborator",
    description:
      "Worked across product surfaces, component systems, and interaction design with a strong bias for craft."
  },
  {
    period: "2020 - 2023",
    title: "Creative Technologist",
    description:
      "Explored the overlap of code, visuals, and storytelling through websites, prototypes, and digital branding."
  }
];

export const skillMatrix = [
  { label: "Product Thinking", level: "Advanced" },
  { label: "React / Next.js", level: "Advanced" },
  { label: "AI Prototyping", level: "Advanced" },
  { label: "Design Systems", level: "Intermediate+" },
  { label: "Motion / Interaction", level: "Intermediate+" }
];

export const contactLinks = [
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  { label: "GitHub", value: "github.com/your-handle", href: "https://github.com/" },
  { label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://linkedin.com/" }
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
