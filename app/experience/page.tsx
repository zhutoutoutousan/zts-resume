'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface ExperienceScene {
  company: string
  role: string
  period: string
  description: string
  effect: string
  highlights: string[]
  techStack: string[]
}

interface ChallengeQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const experienceScenes: ExperienceScene[] = [
  {
    company: "PwC Shanghai",
    role: "Senior Software Engineer",
    period: "Aug 2021 - Dec 2023",
    description: "In the depths of corporate matrix, I architected digital realms...",
    effect: "matrix-rain",
    highlights: [
      "Led development of high-impact products used by 500+ directors globally",
      "Full-stack development with TypeScript, Next.js, Nest.js, Azure CosmosDB",
      "DevOps integration with Turborepo, Azure pipeline, K8S cluster"
    ],
    techStack: ["TypeScript", "Next.js", "Nest.js", "Azure", "Kubernetes"]
  },
  {
    company: "yuege-bootcamp.it.com",
    role: "Chaos Architect",
    period: "Jan 2025 - Present",
    description: "Creating digital realms where code bends reality...",
    effect: "glitch-reality",
    highlights: [
      "Built secure invite code system with real-time chat",
      "Implemented game-based learning with voice recognition",
      "Designed dark-themed glassmorphism UI"
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "WebSocket"]
  },
  {
    company: "Independent Quant",
    role: "Digital Alchemist",
    period: "Jul 2024 - Present",
    description: "Trading algorithms dance through the quantum realm...",
    effect: "quantum-flux",
    highlights: [
      "Developed profitable algorithmic trading strategies",
      "Achieved Profit factor: 55, Sharpe ratio: 32",
      "Maximum drawdown maintained at 8%"
    ],
    techStack: ["MQL5", "Python", "TradingView"]
  }
]

const escapeQuestions: ChallengeQuestion[] = [
  {
    question: "What is the time complexity of quicksort in the worst case?",
    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
    correctAnswer: 1,
    difficulty: 'hard'
  },
  {
    question: "Which HTTP status code represents 'I'm a teapot'?",
    options: ["404", "418", "500", "302"],
    correctAnswer: 1,
    difficulty: 'medium'
  },
  {
    question: "What is the output of: console.log(1 + '2' - 1)?",
    options: ["11", "2", "12", "NaN"],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    question: "In Git, what does 'HEAD~3' refer to?",
    options: [
      "3 commits ahead of HEAD",
      "3 commits behind HEAD",
      "3rd branch from HEAD",
      "HEAD in 3 minutes"
    ],
    correctAnswer: 1,
    difficulty: 'medium'
  }
];

export default function ExperiencePage() {
  const [currentScene, setCurrentScene] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [chaos, setChaos] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [showChallenge, setShowChallenge] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<ChallengeQuestion | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [challengeResult, setChallengeResult] = useState<'pending' | 'success' | 'failure'>('pending');
  const [showChaos, setShowChaos] = useState(false);
  const [chaosType, setChaosType] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentScene(prev => (prev + 1) % experienceScenes.length)
        if (Math.random() > 0.7) triggerChaos()
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const triggerChaos = () => {
    setChaos(true)
    setTimeout(() => setChaos(false), 2000)
  }

  const startExperience = () => {
    setIsPlaying(true)
    // Add initial chaos effect
    setTimeout(triggerChaos, 500)
  }

  const startHomeChallenge = () => {
    setShowChallenge(true);
    setCurrentQuestion(escapeQuestions[Math.floor(Math.random() * escapeQuestions.length)]);
    setChallengeResult('pending');
  };

  const handleAnswer = (answerIndex: number) => {
    if (currentQuestion && answerIndex === currentQuestion.correctAnswer) {
      setChallengeResult('success');
      setTimeout(() => {
        router.push('/');
      }, 2000);
    } else {
      setAttempts(prev => prev + 1);
      if (attempts >= 2) {
        setChallengeResult('failure');
        // Trigger chaos punishment
        setShowChaos(true);
        
        // Cycle through different chaos effects
        let chaosCount = 0;
        const chaosInterval = setInterval(() => {
          chaosCount++;
          setChaosType(getRandomChaosEffect());
          if (chaosCount >= 10) {
            clearInterval(chaosInterval);
            setShowChaos(false);
            setShowChallenge(false);
            setAttempts(0);
            setChallengeResult('pending');
          }
        }, 1000);
      } else {
        // Get a new random question
        setCurrentQuestion(escapeQuestions[Math.floor(Math.random() * escapeQuestions.length)]);
      }
    }
  };

  const getRandomChaosEffect = () => {
    const effects = [
      'invert-reality',
      'matrix-meltdown',
      'quantum-distortion',
      'reality-break',
      'digital-decay'
    ];
    return effects[Math.floor(Math.random() * effects.length)];
  };

  return (
    <div className={`cinematic-experience ${showChaos ? `chaos-punishment ${chaosType}` : ''}`} ref={containerRef}>
      <div className="noise-overlay"></div>
      {!isPlaying ? (
        <motion.div 
          className="cinema-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="cinema-title">ENTER THE VOID</h1>
          <p className="cinema-subtitle">A journey through digital chaos</p>
          <button 
            className="start-experience"
            onClick={startExperience}
          >
            INITIATE SEQUENCE
          </button>
        </motion.div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentScene}
            className={`cinema-scene ${experienceScenes[currentScene].effect} ${chaos ? 'chaos-active' : ''}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
          >
            <div className="scene-content">
              <motion.h2 
                className="company-title"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {experienceScenes[currentScene].company}
              </motion.h2>
              
              <motion.div 
                className="role-title"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {experienceScenes[currentScene].role}
              </motion.div>
              
              <motion.div 
                className="period-display"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {experienceScenes[currentScene].period}
              </motion.div>

              <motion.p 
                className="scene-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {experienceScenes[currentScene].description}
              </motion.p>

              <motion.div 
                className="highlights-container"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {experienceScenes[currentScene].highlights.map((highlight, index) => (
                  <motion.div 
                    key={index}
                    className="highlight-item"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                  >
                    {highlight}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="tech-stack"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2 }}
              >
                {experienceScenes[currentScene].techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      <motion.button
        className="chaos-home-button"
        onClick={startHomeChallenge}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ESCAPE TO HOME
      </motion.button>

      {showChallenge && currentQuestion && (
        <motion.div
          className="challenge-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="challenge-container">
            <h2 className="challenge-title">ESCAPE CHALLENGE</h2>
            <p className="challenge-subtitle">
              {attempts === 0 ? "Think you can escape? Prove your worth!" :
               attempts === 1 ? "Wrong! One more chance..." :
               "Last attempt before chaos consumes you!"}
            </p>
            
            <motion.div
              className="question-container"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="question-text">{currentQuestion.question}</p>
              <div className="options-grid">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="challenge-option"
                    onClick={() => handleAnswer(index)}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      backgroundColor: 'rgba(255, 0, 0, 0.1)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {challengeResult !== 'pending' && (
              <motion.div
                className={`challenge-result ${challengeResult}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring' }}
              >
                {challengeResult === 'success' ? 
                  "ESCAPE SUCCESSFUL - REDIRECTING..." :
                  "CHALLENGE FAILED - CHAOS CONSUMES YOU"}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}

      {showChaos && (
        <motion.div
          className="chaos-punishment-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="chaos-messages">
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
            >
              CHAOS CONSUMES YOU
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: 10 }}
            >
              YOU SHOULD HAVE ANSWERED CORRECTLY
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  )
} 