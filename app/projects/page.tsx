'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  chaosLevel: number
  dimension: 'reality' | 'void' | 'quantum' | 'nightmare'
  challenges: Challenge[]
}

interface Challenge {
  type: 'riddle' | 'code' | 'reality-bend'
  question: string
  solution: string
  hint: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Neural Network Navigator",
    description: "A sentient navigation system that questions your choices",
    techStack: ["React", "TensorFlow.js", "Dark Matter API"],
    chaosLevel: 7,
    dimension: 'quantum',
    challenges: [
      {
        type: 'code',
        question: "Complete the sequence: void(0), void(1), void(2), ...",
        solution: "void(∞)",
        hint: "Think beyond dimensional constraints"
      }
    ]
  },
  {
    id: 2,
    title: "Quantum Portfolio Destabilizer",
    description: "Projects that may or may not exist simultaneously",
    techStack: ["Quantum.js", "Paradox Engine", "Time-Loop DB"],
    chaosLevel: 9,
    dimension: 'void',
    challenges: [
      {
        type: 'reality-bend',
        question: "If a project deploys in a void and no one observes it, does it throw errors?",
        solution: "The errors become features",
        hint: "Schrödinger's bug"
      }
    ]
  },
  {
    id: 3,
    title: "Reality Compiler",
    description: "Compiles human thoughts into machine nightmares",
    techStack: ["Mind.js", "Chaos++", "Void Protocol"],
    chaosLevel: 8,
    dimension: 'nightmare',
    challenges: [
      {
        type: 'riddle',
        question: "What walks on four legs in the morning, two legs in the afternoon, and crashes at runtime?",
        solution: "Legacy code",
        hint: "It evolves, but not always for the better"
      }
    ]
  }
];

const warningMessages = [
  "⚠️ HR PROFESSIONALS BEWARE ⚠️",
  "This is not your typical portfolio page...",
  "Abandon professionalism, all ye who enter here!",
  "Warning: Projects may cause existential crisis"
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [realityStability, setRealityStability] = useState(100);
  const [chaosMode, setChaosMode] = useState(false);
  const [currentDimension, setCurrentDimension] = useState<Project['dimension']>('reality');
  const [challengeActive, setChallengeActive] = useState(false);
  const [userSanity, setUserSanity] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    // Reality decay over time
    const decayInterval = setInterval(() => {
      setRealityStability(prev => Math.max(0, prev - 0.1));
    }, 1000);

    // Chaos mode random triggers
    const chaosInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        triggerChaosMode();
      }
    }, 5000);

    return () => {
      clearInterval(decayInterval);
      clearInterval(chaosInterval);
    };
  }, []);

  const triggerChaosMode = () => {
    setChaosMode(true);
    setUserSanity(prev => Math.max(0, prev - 10));
    setTimeout(() => setChaosMode(false), 3000);
  };

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    setCurrentDimension(project.dimension);
    setRealityStability(prev => Math.max(0, prev - project.chaosLevel));
    
    if (project.chaosLevel > 7) {
      triggerChaosMode();
    }
  };

  const startChallenge = () => {
    setChallengeActive(true);
    setUserSanity(prev => Math.max(0, prev - 15));
  };

  const attemptSolution = (solution: string) => {
    if (activeProject && activeProject.challenges[0].solution === solution) {
      setUserSanity(prev => Math.min(100, prev + 20));
      setChallengeActive(false);
      // Reality bend success effect
      containerRef.current?.classList.add('reality-bend-success');
      setTimeout(() => {
        containerRef.current?.classList.remove('reality-bend-success');
      }, 2000);
    } else {
      triggerChaosMode();
      setUserSanity(prev => Math.max(0, prev - 25));
    }
  };

  const getRandomPosition = () => ({
    x: (Math.random() - 0.5) * 50,
    y: (Math.random() - 0.5) * 50,
    rotate: (Math.random() - 0.5) * 15
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`projects-void ${chaosMode ? 'chaos-active' : ''} dimension-${currentDimension}`}
    >
      {showWarning && (
        <motion.div 
          className="warning-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {warningMessages.map((message, index) => (
            <motion.p
              key={index}
              className="warning-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.5 }}
            >
              {message}
            </motion.p>
          ))}
        </motion.div>
      )}

      <motion.div className="reality-metrics">
        <div className="metric">
          <span>Reality Stability: {realityStability.toFixed(1)}%</span>
          <div className="metric-bar" style={{ width: `${realityStability}%` }} />
        </div>
        <div className="metric">
          <span>User Sanity: {userSanity}%</span>
          <div className="metric-bar sanity" style={{ width: `${userSanity}%` }} />
        </div>
      </motion.div>

      <div className="projects-grid">
        <AnimatePresence mode="wait">
          {projectsData.map(project => (
            <motion.div
              key={project.id}
              className={`project-card dimension-${project.dimension}`}
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                ...getRandomPosition(),
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.1,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <div className="chaos-meter">
                  Chaos Level: {Array(project.chaosLevel).fill('🌀').join('')}
                </div>
              </div>
              <div className="card-glitch"></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {activeProject && (
        <motion.div 
          className="project-challenge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>Reality Bending Challenge</h2>
          <p>{activeProject.challenges[0].question}</p>
          {challengeActive ? (
            <div className="challenge-interface">
              <input 
                type="text" 
                placeholder="Enter your solution to bend reality"
                onChange={(e) => attemptSolution(e.target.value)}
                className="reality-input"
              />
              <p className="hint">Hint: {activeProject.challenges[0].hint}</p>
            </div>
          ) : (
            <button onClick={startChallenge} className="start-challenge">
              INITIATE REALITY BEND
            </button>
          )}
        </motion.div>
      )}

      {userSanity <= 0 && (
        <div className="sanity-lost">
          <h2>SANITY LOST - REALITY COLLAPSED</h2>
          <button onClick={() => router.push('/')}>
            ESCAPE TO SAFETY
          </button>
        </div>
      )}
    </div>
  );
} 