export type ProjectType = "AI Project" | "Code" | "Design" | "Writing";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  outcome: string;
  role: string;
  type: ProjectType;
  year: string;
  stack: string[];
  href: string;
  demoHref?: string;
  status: string;
  featured?: boolean;
  highlights: string[];
  detailSections: {
    title: string;
    body: string;
  }[];
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
  name: "何孟谦",
  role: "Vibe coding 的使用者，工作流的思考者，框架的搭建者",
  intro:
    "这是何孟谦的 vibe coding 作品集，欢迎批判并提供建议。No worries, just be fun! 我更关心的不只是把东西做出来，也包括如何组织工作流、如何搭建框架、以及怎样把想法持续变成作品。",
  location: "Based in China",
  email: "mengqianhe2002@163.com",
  availability: "Open to feedback, collaboration, and new experiments",
  tags: ["Vibe Coding", "Workflow Thinking", "Framework Building", "HTML Prototyping"],
  stats: [
    { label: "Published project", value: "1" },
    { label: "Current mode", value: "Building" },
    { label: "Focus", value: "Workflow / MVP / Systems" }
  ]
};

export const projects: Project[] = [
  {
    slug: "todo-html",
    title: "To Do HTML",
    summary:
      "一个独立完成的待办事项工作网站，使用 HTML、CSS 和原生 JavaScript 搭建，围绕任务录入、完成状态管理和工作秩序感展开。",
    challenge:
      "在不依赖框架的前提下，做出一个真正能用的待办事项页面，同时让视觉风格、信息层级和交互反馈都保持统一，而不是只完成最基础的列表功能。",
    outcome:
      "最终做出了一个具有明确视觉语言的工作清单网站，支持本地持久化、完成切换、删除、清空已完成、实时统计和相对时间显示，也更准确地表达了我对 workflow 界面的审美和理解。",
    role: "独立完成想法整理、页面结构搭建与 MVP 实现。",
    type: "Code",
    year: "2026",
    stack: ["HTML", "CSS", "JavaScript", "localStorage"],
    href: "/projects/todo-html",
    demoHref: "/demos/todo-html",
    status: "MVP",
    featured: true,
    highlights: [
      "双语标题与工业感视觉系统",
      "任务新增、完成、删除、清空已完成",
      "总任务 / 已完成 / 待完成实时统计",
      "基于 localStorage 的本地持久化",
      "相对时间展示与空状态处理",
      "纯原生 HTML + CSS + JavaScript 实现"
    ],
    detailSections: [
      {
        title: "项目背景与目标",
        body:
          "这个项目从一个很直接的问题开始：如果每天都要面对待办事项，页面应该如何帮助我更快地进入状态，而不是只是多一个列表。To Do HTML 的目标不是堆很多功能，而是先在最轻的技术条件下，把任务管理的骨架和界面秩序感做出来。"
      },
      {
        title: "我的角色和职责",
        body:
          "这个项目由我独立推进，从概念、命名、视觉基调，到页面结构和交互逻辑都由我自己完成。它不只是一个前端练习，更像一次关于 workflow 界面如何成立的个人实验。"
      },
      {
        title: "页面结构与工作流",
        body:
          "页面主体被拆成标题区、统计区、输入区、任务列表、空状态和底部操作区。这样的结构让用户进入页面后可以马上理解当前任务状态、直接录入新任务，并随时处理已完成项。这种从上到下的组织方式，和我对 workflow 可读性的关注是连在一起的。"
      },
      {
        title: "交互和布局思路",
        body:
          "这个页面最吸引我的地方其实是它的氛围感。你用了偏工业风的深色配色、IBM Plex Mono 与 Noto Serif SC 的中英文字体组合、噪点和扫描线叠层，以及细节很完整的 hover、入场和删除动画。它不是普通的待办应用模板，而是带着明显个人审美的一次界面表达。"
      },
      {
        title: "限制与取舍",
        body:
          "目前项目仍然保持在单文件原生实现的层面，因此复杂功能、跨端同步和更强的数据结构都还没有引入。但这种克制本身也是一种选择，因为它迫使我先把最核心的交互逻辑和视觉秩序打磨清楚。"
      },
      {
        title: "下一步优化方向",
        body:
          "后续我希望继续给这个项目补上更多维度，比如任务分类、优先级、筛选视图、编辑能力，以及把当前这套视觉语言拓展成更完整的工作流产品界面。它也很适合作为我后续框架化思考的一个起点。"
      }
    ]
  }
];

export const posts: Post[] = [];

export const timeline: TimelineItem[] = [
  {
    period: "Now",
    title: "Vibe Coding Practitioner",
    description:
      "持续使用 vibe coding 的方式做实验、做页面、做最小可用产品，也在观察这套方式真正擅长什么。"
  },
  {
    period: "Ongoing",
    title: "Workflow Thinker",
    description:
      "相比只关注结果，我更在意任务如何被拆解、流程如何被整理，以及一个系统怎样更顺手地支持创作。"
  },
  {
    period: "Ongoing",
    title: "Framework Builder",
    description:
      "我希望把自己的项目逐步沉淀成可复用的结构，让每一次制作都不只是完成，而是积累。"
  }
];

export const skillMatrix = [
  { label: "Vibe Coding", level: "Advanced" },
  { label: "Workflow Thinking", level: "Advanced" },
  { label: "Framework Building", level: "Advanced" },
  { label: "MVP Structuring", level: "Intermediate+" },
  { label: "HTML Prototyping", level: "Intermediate+" }
];

export const contactLinks = [
  {
    label: "Primary Email",
    value: "mengqianhe2002@163.com",
    href: "mailto:mengqianhe2002@163.com"
  },
  {
    label: "Backup Email",
    value: "maxmqh2@gmail.com",
    href: "mailto:maxmqh2@gmail.com"
  }
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
