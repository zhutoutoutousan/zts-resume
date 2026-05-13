export interface Job {
  company: string
  role: string
  period: string
  link?: string
  codeLink?: string
  repositoryLinks?: { label: string; href: string }[]
  highlights: string[]
  techStack?: string[]
  level?: number
}

export const jobs: Job[] = [
  {
    company: "RITS / XU Exponential University",
    role: "Software Engineer (work study)",
    period: "Sep 2025 – Present · Potsdam, Brandenburg (hybrid)",
    link: "https://resiliente-infrastruktur.de/de/",
    highlights: [
      "Supported development of RITS (Resilient Infrastructure Technology Suite): a research-backed platform that maps and analyzes energy, water, and food (EWF) infrastructure in Brandenburg and helps stakeholders coordinate information. Public site: https://resiliente-infrastruktur.de/de/",
      "Contributed across the stack: REST APIs and data processing (Go), web application (Next.js / React), and integration with official datasets (e.g. German energy register workflows, geospatial imports).",
      "Helped design and implement features for maps, reporting, and data-driven views used to monitor infrastructure and support resilient planning.",
      "Collaborated on reliable ingestion and synchronization of large infrastructure datasets and on tooling that keeps analysis traceable and aligned with authoritative sources.",
    ],
  },
  {
    company: "WorldQuant",
    role: "Quantitative Research Consultant & MT5 strategy developer (part-time)",
    period: "Aug 2025 – Mar 2026",
    repositoryLinks: [
      {
        label: "worldquant-miner",
        href: "https://github.com/zhutoutoutousan/worldquant-miner",
      },
      {
        label: "profitable-expert-advisor",
        href: "https://github.com/zhutoutoutousan/profitable-expert-advisor",
      },
    ],
    highlights: [
      "Mined 100+ high-quality alphas for quantitative trading meeting Sharpe, fitness, and margin criteria; among ~10,000 BRAIN consultants worldwide.",
      "Built worldquant-miner (Python GUI and AI agent tooling): 450+ stars and 120+ forks on GitHub; adopted by 1000+ BRAIN consultants, including a web interface for BRAIN workflows.",
      "Developed MT5 Expert Advisor systems (example metrics: profit factor ~55, Sharpe ~32, max drawdown ~8%); additional profitable EAs in open source and commercial work.",
    ],
  },
  {
    company: "yuege-bootcamp.it.com",
    role: "Tech lead, Instructor & Co-founder (part-time)",
    period: "May 2025 – May 2026",
    link: "https://yuege-bootcamp.it.com/",
    highlights: [
      "Built yuege-bootcamp: an online IT bootcamp platform teaching technical English.",
      "Instruct and mentor students to practice technical English in a product-like learning environment.",
      "Stack and product detail: Next.js, NestJS, PostgreSQL, real-time features, invite-based access, and monorepo-style frontend/backend separation.",
    ],
  },
  {
    company: "NAMELOS.XYZ",
    role: "Founder",
    period: "Jan 2024 – May 2026",
    highlights: [
      "Founded and shipped multiple products: wellness & language tutoring, founder matching (mindr.club), chaoschess.xyz, and browser tooling (e.g. Bilibili dual-subtitle extension).",
      "Growth and conversion experiments with SEO/AEO and multilingual positioning.",
    ],
  },
  {
    company: "chaoschess.xyz",
    role: "Independent",
    period: "Jan 2025 – Present",
    link: "https://www.chaoschess.xyz/",
    codeLink: "https://github.com/zhutoutoutousan/chat-voting-chaos-chess",
    highlights: [
      "Random chess world map generator, WebSocket multiplayer, and chaos effects in gameplay.",
      "Frontend and platform repos: chat-voting-chaos-chess and chat-voting-chaos-chess-platform on GitHub.",
    ],
  },
  {
    company: "Avature",
    role: "Technical Analyst & UX Designer (permanent)",
    period: "Mar 2024 – Mar 2026",
    highlights: [
      "Led implementation of the UX design system and construction of design standards for 20+ portal applications in Figma, serving 30+ APAC clients.",
      "Conducted international technical HRIS project meetings in English, Spanish, and German.",
      "Nexus among sales engineering, development, and consultants: feasibility, effort estimation, and relaying technical requirements—reducing average case response from ~1 week to 1–2 days.",
      "Led full-cycle client engagement and delivery, reducing time-to-delivery by ~30%.",
    ],
  },
  {
    company: "Education First",
    role: "English Teacher",
    period: "Dec 2023 – Mar 2024",
    highlights: [
      "TEFL-certified; strong student ratings and 200+ hours teaching professionals and investors from China.",
    ],
  },
  {
    company: "Novelmonkey",
    role: "Frontend Developer",
    period: "Dec 2023 - Apr 2024",
    link: "https://www.novelmonkey.ai/",
    highlights: [
      "Optimized Next.js SEO with SSR, pre-rendering, and robots.txt configuration",
      "Led development of Novelmonkey and Hiwriter platforms",
      "Designed and developed AI applications including chatbot and writing editor",
    ],
  },
  {
    company: "PwC Shanghai",
    role: "Senior Software Engineer",
    period: "Aug 2021 - Dec 2023",
    highlights: [
      "Led development of high-impact products used by 500+ directors globally with 4.8/5 value score",
      "Full-stack development from scratch using TypeScript, Next.js, Nest.js, Azure CosmosDB Gremlin",
      "DevOps integration with Turborepo, Microsoft Semantic Kernel, Azure pipeline, Veracode, SonarQube, JFrog",
      "Project management with Azure DevOps, Sentry and Power BI dashboards connected to Azure Synapse",
    ],
  },
  {
    company: "MORIMATSU",
    role: "Frontend Developer",
    period: "Apr 2021 - Jun 2021",
    highlights: [
      "Developed factory change management interface using Vue.js, Vuex, and Sass",
      "Implemented global search with pagination and lazy loading",
      "Multi-language support for Vietnamese, English, German, and French using vue-i18n",
      "Resolved critical backend search pagination issues",
    ],
  },
  {
    company: "Inkdeeps",
    role: "Software Engineer",
    period: "Oct 2020 - Apr 2021",
    highlights: [
      "Developed company landing page reporting directly to CEO",
      "Led 3D Online Virtual Exhibition Hall project using Unity and WebGL",
      "Served as business and technical translator for international clients",
    ],
  },
  {
    company: "Legrand SLEC",
    role: "Automation Engineer",
    period: "Oct 2019 - May 2020",
    highlights: [
      "Led sensor testing automation project using Node.js, LabVIEWDAQmx, MongoDB",
      "Developed intranet sensor trigger logging tool",
      "Created company-wide lottery program using Vue.js and tagcanvas",
    ],
  },
  {
    company: "Yangzhou University",
    role: "NVH Researcher",
    period: "May 2019 - Sep 2019",
    link: "https://ieeexplore.ieee.org/document/9044105",
    codeLink: "https://github.com/zhutoutoutousan/Indirect-sensor-estimation",
    highlights: [
      "Published research on Order Tracking technique in NVH analysis using Deep Learning",
      "Developed firmware and software solutions for sensor estimation",
      "Presented at IEEE RCAR 2019 in Irkutsk, Russia",
    ],
  },
]

export const techStacks: Record<string, string[]> = {
  "RITS / XU Exponential University": [
    "Next.js",
    "React",
    "Go",
    "TypeScript",
    "PostgreSQL",
    "Python",
  ],
  WorldQuant: ["Python", "MQL5", "TradingView"],
  "yuege-bootcamp.it.com": ["Next.js", "NestJS", "PostgreSQL", "TailwindCSS", "WebSocket", "Redux"],
  "NAMELOS.XYZ": ["Next.js", "React", "Node.js", "TypeScript", "MongoDB"],
  "chaoschess.xyz": ["React", "WebSocket", "Node.js", "MongoDB"],
  Avature: ["PHP", "Twig", "Figma", "MySQL"],
  "Education First": ["React", "TypeScript"],
  Novelmonkey: ["Next.js", "TailwindCSS", "OpenAI"],
  "PwC Shanghai": ["TypeScript", "Next.js", "NestJS", "Azure", "Kubernetes"],
  MORIMATSU: ["Vue.js", "Vuex", "Sass", "i18n"],
  Inkdeeps: ["Unity", "WebGL", "Three.js"],
  "Legrand SLEC": ["Node.js", "MongoDB", "Vue.js", "LabVIEW"],
  "Yangzhou University": ["Python", "TensorFlow", "MATLAB"],
}

export const availableTechs = [
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Python",
  "TypeScript",
  "Go",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "WebSocket",
  "Redux",
  "TailwindCSS",
  "Three.js",
  "WebGL",
  "Unity",
  "Azure",
  "Kubernetes",
  "Docker",
  "TensorFlow",
  "MATLAB",
  "PHP",
  "Figma",
  "MQL5",
  "TradingView",
] as const
