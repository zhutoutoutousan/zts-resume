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
      "PostGIS/GIS platform: PostgreSQL/PostGIS microservices with Go/Fiber geospatial REST APIs (ST_Intersects, ST_DWithin, GeoJSON); MapLibre GL + Deck.gl frontend with 15+ infrastructure layers; ETL imports from MaStR, OSM/OpenInfraMap, ALKIS, BKG VG250, Natura 2000; proximity analysis, EEG atlas, cadastral parcels and admin boundaries.",
      "AI + GIS chat: split-screen infrastructure chat + map — FastAPI agents route MaStR vs OpenInfraMap queries, fetch PostGIS APIs via MCP tools, render live GeoJSON overlays on MapLibre; complex agent harness workflows for geospatial Q&A.",
      "Full stack: Next.js/React, Go, FastAPI, Docker; maps, reporting, and traceable data-driven views.",
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
      "Mined 100+ alphas for quantitative research.",
      "Built worldquant-miner (Python/FastAPI, AST harness, bandit and genetic search): 743 stars and 203 forks on GitHub as of 4 Oct 2026.",
      "Harness work: self-correcting AST/template validation, multi-arm bandits, and genetic search.",
      "MT5 Expert Advisors live in the open-source repo profitable-expert-advisor.",
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
    period: "Jan 2024 – Present",
    highlights: [
      "Founded and shipped multiple products: wellness & language tutoring, founder matching (mindr.club), chaoschess.xyz, and browser tooling (e.g. Bilibili dual-subtitle extension).",
      "Growth and conversion experiments with SEO/AEO and multilingual positioning.",
    ],
  },
  {
    company: "Tradr",
    role: "Full-stack",
    period: "2024 – Present",
    link: "https://www.tradr.it.com/",
    codeLink: "https://github.com/zhutoutoutousan/tradr",
    highlights: [
      "Public project: trade and compete with computer strategy and an AI agent.",
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
    period: "Dec 2023 – Mar 2024 · Shanghai",
    highlights: [
      "TEFL-certified; strong student ratings and 200+ hours teaching professionals and investors from China.",
    ],
  },
  {
    company: "Novelmonkey",
    role: "Frontend Developer",
    period: "Dec 2023 - Apr 2024",
    link: "https://www.novelmonkey.ai/",
    codeLink: "https://play.google.com/store/apps/details?id=topstory.fiction.novel",
    highlights: [
      "Optimized Next.js SEO with SSR, pre-rendering, and robots.txt configuration",
      "Led development of Novelmonkey and Hiwriter platforms",
      "Designed and developed AI applications including chatbot and writing editor",
      "Shipped Fictio Android app on Google Play (500K+ downloads, 4.4/5) — fiction/novels with subscriptions, in-app purchases, multilingual library across 50+ countries",
      "Designed AWS architecture: Next.js on ECS/EKS/Fargate; novel generation with AWS Bedrock and SQS; DynamoDB data modeling; CDK/CloudFormation IaC; AWS CI/CD workflows",
    ],
  },
  {
    company: "PwC Shanghai",
    role: "Senior Software Engineer",
    period: "Aug 2021 - Dec 2023",
    highlights: [
      "Started on the AWS team; earned AWS Certified Developer and SysOps Administrator (Associate).",
      "International music academy OMS: digital transformation for teaching operations — Vue.js, Java Spring Boot, Redis/Redisson; built a CLI code generator and rapid low-code scaffolding (pre-LLM era); API collaboration via Postman.",
      "Joined Innovation Hub: Daily Feed — AI chat UI + RSS curation for market intelligence, producing a graph-database knowledge tree; Emerging Tech Radar — interactive market/tech intelligence surface.",
      "Deals Tech — Restructure Orgchart: complex enterprise UI with split-screen layouts, micro-frontends, and integrated chatbot; TypeScript / Next.js / NestJS / Azure CosmosDB Gremlin.",
      "Products used by 500+ global directors (4.8/5); DevOps with Turborepo, Semantic Kernel, Azure Pipelines, Veracode, SonarQube, JFrog, Sentry, Power BI / Synapse.",
    ],
  },
  {
    company: "MORIMATSU",
    role: "Frontend Developer",
    period: "Apr 2021 - Jun 2021 · Shanghai",
    highlights: [
      "Industrial MES frontends and factory panorama / plant-map UIs in Vue.js — D3.js for 2D overlays, Three.js for 3D views.",
      "Integrated BIMFACE for industrial BIM interaction: complex equipment file trees and very large NVM/device models in-browser.",
      "Addressed oversized plant models via mesh compression, low-poly LOD simplification, frustum/octree culling, and cloud rendering/streaming when client VRAM could not hold full scenes.",
      "Change-management UI (Vuex, Sass); global search with pagination and lazy loading; i18n (Vietnamese, English, German, French).",
    ],
  },
  {
    company: "Inkdeeps",
    role: "Software Engineer",
    period: "Oct 2020 - Apr 2021 · Shanghai",
    highlights: [
      "Developed company landing page reporting directly to CEO",
      "Led 3D Online Virtual Exhibition Hall project using Unity and WebGL",
      "Served as business and technical translator for international clients",
    ],
  },
  {
    company: "Legrand SLEC",
    role: "Automation Engineer",
    period: "Oct 2019 - May 2020 · Shanghai",
    highlights: [
      "Led sensor testing automation project using Node.js, LabVIEWDAQmx, MongoDB",
      "Developed intranet sensor trigger logging tool",
      "Created company-wide lottery program using Vue.js and tagcanvas",
    ],
  },
  {
    company: "Yangzhou University",
    role: "NVH Researcher",
    period: "May 2019 - Sep 2019 · Yangzhou",
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
    "PostGIS",
    "MapLibre GL",
    "Deck.gl",
    "Python",
    "FastAPI",
  ],
  WorldQuant: ["Python", "MQL5", "TradingView", "FastAPI", "Cursor", "AWS Kiro", "Claude Code"],
  "yuege-bootcamp.it.com": ["Next.js", "NestJS", "PostgreSQL", "TailwindCSS", "WebSocket", "Redux"],
  "NAMELOS.XYZ": ["Next.js", "React", "Node.js", "TypeScript", "MongoDB"],
  "chaoschess.xyz": ["React", "WebSocket", "Node.js", "MongoDB"],
  Avature: ["PHP", "Twig", "Figma", "MySQL"],
  "Education First": ["React", "TypeScript"],
  Novelmonkey: ["Next.js", "TailwindCSS", "OpenAI", "Android", "Google Play", "Mobile"],
  "PwC Shanghai": [
    "TypeScript",
    "Next.js",
    "NestJS",
    "Vue.js",
    "Java",
    "Spring Boot",
    "Redis",
    "Azure",
    "CosmosDB",
    "Micro Frontends",
    "AWS",
  ],
  MORIMATSU: ["Vue.js", "Vuex", "D3.js", "Three.js", "BIMFACE", "Sass", "i18n"],
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

export const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services (AWS)",
    issuedAt: "Nov 2021",
    expiresAt: "Nov 2024",
  },
  {
    name: "AWS Certified SysOps Administrator – Associate",
    issuer: "Amazon Web Services (AWS)",
    issuedAt: "Sep 2022",
    expiresAt: "Sep 2025",
  },
] as const
