'use client'
import { useEffect, useRef } from 'react'

interface Job {
  company: string
  role: string
  period: string
  link?: string
  codeLink?: string
  highlights: string[]
}

const jobs: Job[] = [
  {
    company: "yuege-bootcamp.it.com",
    role: "Independent",
    period: "Jan 2025 - Present",
    link: "https://yuege-bootcamp.it.com/",
    highlights: [
      "Tech Stack: Next.js 14, NestJS, PostgreSQL, TailwindCSS, ShadCn UI, Aceternity UI, Framer Motion, Redux Toolkit, JWT Authentication, WebSocket",
      "Key Features: Dark-themed glassmorphism UI, secure invite code system, real-time chat, game-based learning with voice recognition",
      "Architecture: Monorepo structure with separate frontend (web) and backend (platform-web) codebases",
      "Security: Encrypted invite codes, JWT token refresh mechanism, role-based access control",
      "Interactive Features: Drag-and-drop class management, animated data visualizations, real-time tracking"
    ]
  },
  {
    company: "chaoschess.xyz",
    role: "Independent",
    period: "Jan 2025 - Present",
    link: "https://www.chaoschess.xyz/",
    codeLink: "https://github.com/zhutoutoutousan/chat-voting-chaos-chess",
    highlights: [
      "Random Chess World Map Generator, websocket multiplayer game, chaos effect in chess",
      "Frontend: https://github.com/zhutoutoutousan/chat-voting-chaos-chess",
      "Backend: https://github.com/zhutoutoutousan/chat-voting-chaos-chess-platform"
    ]
  },
  {
    company: "Independent Quant Developer",
    role: "Independent",
    period: "Jul 2024 - Present",
    link: "https://www.youtube.com/watch?v=6PdvdFeWl78",
    highlights: [
      "Independent MT5 Expert advisor author, writing MQL5 code for profitable algorithmic trading strategy",
      "PR for trend trading strategy: Profit factor: 55, Sharpe ratio: 32, Maximum drawdown: 8%",
      "Created detailed walkthrough of highly profitable trading strategy"
    ]
  },
  {
    company: "Avature",
    role: "Technical Analyst & UX Designer",
    period: "Mar 2024 - Present",
    highlights: [
      "Served as a nexus between dev, UX, and consultant teams, managing requirement feasibility and project compliance",
      "Managed complex Applicant Management System with PHP and Twig for 30+ APAC clients",
      "Designed 20+ portal apps using Figma for various clients",
      "Collaborated with international teams in Spanish and German"
    ]
  },
  {
    company: "Education First",
    role: "English Teacher",
    period: "Dec 2023 - Present",
    highlights: [
      "Obtained TEFL certificate, taught 200+ students from China, including important figures and investors"
    ]
  },
  {
    company: "Novelmonkey",
    role: "Frontend Developer",
    period: "Dec 2023 - Apr 2024",
    link: "https://www.novelmonkey.ai/",
    highlights: [
      "Optimized Next.js SEO with SSR, pre-rendering, and robots.txt configuration",
      "Led development of Novelmonkey and Hiwriter platforms",
      "Designed and developed AI applications including chatbot and writing editor"
    ]
  },
  {
    company: "PwC Shanghai",
    role: "Senior Software Engineer",
    period: "Aug 2021 - Dec 2023",
    highlights: [
      "Led development of high-impact products used by 500+ directors globally with 4.8/5 value score",
      "Full-stack development from scratch using TypeScript, Next.js, Nest.js, Azure CosmosDB Gremlin",
      "DevOps integration with Turborepo, Microsoft Semantic Kernel, Azure pipeline, Veracode, SonarQube, JFrog",
      "Project management with Azure DevOps, Sentry and Power BI dashboards connected to Azure Synapse"
    ]
  },
  {
    company: "MORIMATSU",
    role: "Frontend Developer",
    period: "Apr 2021 - Jun 2021",
    highlights: [
      "Developed factory change management interface using Vue.js, Vuex, and Sass",
      "Implemented global search with pagination and lazy loading",
      "Multi-language support for Vietnamese, English, German, and French using vue-i18n",
      "Resolved critical backend search pagination issues"
    ]
  },
  {
    company: "Inkdeeps",
    role: "Software Engineer",
    period: "Oct 2020 - Apr 2021",
    highlights: [
      "Developed company landing page reporting directly to CEO",
      "Led 3D Online Virtual Exhibition Hall project using Unity and WebGL",
      "Served as business and technical translator for international clients"
    ]
  },
  {
    company: "Legrand SLEC",
    role: "Automation Engineer",
    period: "Oct 2019 - May 2020",
    highlights: [
      "Led sensor testing automation project using Node.js, LabVIEWDAQmx, MongoDB",
      "Developed intranet sensor trigger logging tool",
      "Created company-wide lottery program using Vue.js and tagcanvas"
    ]
  },
  {
    company: "Yangzhou University",
    role: "NVH Researcher",
    period: "May 2019 - Sep 2019",
    link: "https://ieeexplore.ieee.org/abstract/document/9044105",
    codeLink: "https://github.com/zhutoutoutousan/Indirect-sensor-estimation",
    highlights: [
      "Published research on Order Tracking technique in NVH analysis using Deep Learning",
      "Developed firmware and software solutions for sensor estimation",
      "Presented at IEEE RCAR 2019 in Irkutsk, Russia"
    ]
  }
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = document.querySelectorAll('.job-card')
    
    cards.forEach((card, index) => {
      // Random rotation between -5 and 5 degrees
      const rotation = (Math.random() - 0.5) * 10
      // Random X offset between -20 and 20px
      const translateX = (Math.random() - 0.5) * 40
      // Random scale between 0.95 and 1.05
      const scale = 0.95 + Math.random() * 0.1
      
      ;(card as HTMLElement).style.transform = 
        `rotate(${rotation}deg) translateX(${translateX}px) scale(${scale})`
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = clientX - (rect.left + rect.width / 2)
        const y = clientY - (rect.top + rect.height / 2)
        const distance = Math.sqrt(x * x + y * y)
        
        if (distance < 400) {
          const angle = Math.atan2(y, x)
          const force = (400 - distance) / 400 // Stronger effect when closer
          const moveX = Math.cos(angle) * force * 20
          const moveY = Math.sin(angle) * force * 20
          const rotation = force * 5
          
          ;(card as HTMLElement).style.transform += 
            ` translate(${moveX}px, ${moveY}px) rotate(${rotation}deg)`
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="experience-section" ref={containerRef}>
      <h2 className="section-title glitch-text" data-text="EXPERIENCE">
        EXPERIENCE
      </h2>
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div 
            key={index} 
            className="job-card"
            style={{
              '--delay': `${index * 0.1}s`,
              '--hue': `${index * 60}deg`
            } as React.CSSProperties}
          >
            <div className="card-glitch-effect"></div>
            <div className="job-header">
              <h3 className="company-name">
                {job.link ? (
                  <a href={job.link} target="_blank" rel="noopener noreferrer" className="company-link">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <div className="job-meta">
                <span className="job-role">{job.role}</span>
                <span className="job-period">{job.period}</span>
              </div>
            </div>
            <ul className="job-highlights">
              {job.highlights.map((highlight, i) => (
                <li key={i} className="highlight-item">{highlight}</li>
              ))}
            </ul>
            {job.codeLink && (
              <a 
                href={job.codeLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="code-link"
              >
                VIEW CODE
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 