'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Job {
  company: string
  role: string
  period: string
  link?: string
  codeLink?: string
  highlights: string[]
  techStack?: string[]
  level?: number
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

// Add tech stack to each job
const techStacks = {
  "yuege-bootcamp.it.com": ["Next.js", "NestJS", "PostgreSQL", "TailwindCSS", "WebSocket", "Redux"],
  "chaoschess.xyz": ["React", "WebSocket", "Node.js", "MongoDB"],
  "Independent Quant Developer": ["MQL5", "Python", "TradingView"],
  "Avature": ["PHP", "Twig", "Figma", "MySQL"],
  "Novelmonkey": ["Next.js", "TailwindCSS", "OpenAI"],
  "PwC Shanghai": ["TypeScript", "Next.js", "NestJS", "Azure", "Kubernetes"],
  "MORIMATSU": ["Vue.js", "Vuex", "Sass", "i18n"],
  "Inkdeeps": ["Unity", "WebGL", "Three.js"],
  "Legrand SLEC": ["Node.js", "MongoDB", "Vue.js", "LabVIEW"],
  "Yangzhou University": ["Python", "TensorFlow", "MATLAB"]
}

interface GameState {
  selectedTechs: string[]
  score: number
  attempts: number
  revealed: boolean
}

export default function Experience() {
  const [currentJob, setCurrentJob] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [gameState, setGameState] = useState<GameState>({
    selectedTechs: [],
    score: 0,
    attempts: 3,
    revealed: false
  })

  const availableTechs = [
    "React", "Next.js", "Vue.js", "Node.js", "Python", "TypeScript",
    "MongoDB", "PostgreSQL", "MySQL", "WebSocket", "Redux", "TailwindCSS",
    "Three.js", "WebGL", "Unity", "Azure", "Kubernetes", "Docker",
    "TensorFlow", "MATLAB", "PHP", "Figma", "MQL5", "TradingView"
  ]

  const handleTechSelect = (tech: string) => {
    if (gameState.attempts === 0 || gameState.revealed) return

    const currentTechStack = techStacks[jobs[currentJob].company as keyof typeof techStacks] || []
    const isCorrect = currentTechStack.includes(tech)
    
    setGameState(prev => ({
      ...prev,
      selectedTechs: [...prev.selectedTechs, tech],
      score: isCorrect ? prev.score + 10 : prev.score,
      attempts: prev.attempts - 1,
      revealed: prev.attempts === 1 || prev.selectedTechs.length + 1 === currentTechStack.length
    }))
  }

  const nextJob = () => {
    setCurrentJob(prev => prev + 1)
    setGameState({
      selectedTechs: [],
      score: gameState.score,
      attempts: 3,
      revealed: false
    })
  }

  return (
    <div className="experience-game">
      {!isPlaying ? (
        <motion.div 
          className="game-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="game-title">TECH JOURNEY</h2>
          <p className="game-description">
            Explore my career journey and guess the tech stack used in each role!
          </p>
          <button 
            className="start-button"
            onClick={() => setIsPlaying(true)}
          >
            START JOURNEY
          </button>
        </motion.div>
      ) : (
        <div className="game-container">
          <div className="game-hud">
            <div className="score">SCORE: {gameState.score}</div>
            <div className="attempts">ATTEMPTS LEFT: {gameState.attempts}</div>
            <div className="level">LEVEL {currentJob + 1}/{jobs.length}</div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentJob}
              className="job-display"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            >
              <h3 className="company-name">{jobs[currentJob].company}</h3>
              <div className="role-badge">{jobs[currentJob].role}</div>
              <div className="period-display">{jobs[currentJob].period}</div>
              
              <div className="highlights-container">
                {jobs[currentJob].highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="highlight-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {highlight}
                  </motion.div>
                ))}
              </div>

              <div className="tech-game-section">
                <h4 className="tech-title">Guess the Tech Stack!</h4>
                <div className="tech-options">
                  {availableTechs.map((tech) => (
                    <button
                      key={tech}
                      className={`tech-button ${
                        gameState.selectedTechs.includes(tech) ? 'selected' : ''
                      } ${
                        gameState.revealed &&
                        techStacks[jobs[currentJob].company as keyof typeof techStacks]?.includes(tech)
                          ? 'correct'
                          : ''
                      }`}
                      onClick={() => handleTechSelect(tech)}
                      disabled={gameState.selectedTechs.includes(tech) || gameState.attempts === 0}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {(gameState.revealed || gameState.attempts === 0) && (
                <div className="tech-reveal">
                  <h4>Actual Tech Stack:</h4>
                  <div className="tech-stack-list">
                    {techStacks[jobs[currentJob].company as keyof typeof techStacks]?.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {jobs[currentJob].link && (
                <a 
                  href={jobs[currentJob].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  VIEW PROJECT
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="navigation-controls">
            <button
              className="nav-button"
              disabled={currentJob === 0}
              onClick={() => setCurrentJob(prev => prev - 1)}
            >
              ← PREVIOUS
            </button>
            <button
              className="nav-button"
              disabled={currentJob === jobs.length - 1}
              onClick={nextJob}
            >
              NEXT →
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 