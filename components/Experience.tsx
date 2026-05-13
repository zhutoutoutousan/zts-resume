'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { jobs, techStacks, availableTechs } from '@/data/experience'

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
    revealed: false,
  })

  const handleTechSelect = (tech: string) => {
    if (gameState.attempts === 0 || gameState.revealed) return

    const currentTechStack = techStacks[jobs[currentJob].company] ?? []
    const isCorrect = currentTechStack.includes(tech)

    setGameState((prev) => ({
      ...prev,
      selectedTechs: [...prev.selectedTechs, tech],
      score: isCorrect ? prev.score + 10 : prev.score,
      attempts: prev.attempts - 1,
      revealed:
        prev.attempts === 1 ||
        prev.selectedTechs.length + 1 === currentTechStack.length,
    }))
  }

  const nextJob = () => {
    setCurrentJob((prev) => prev + 1)
    setGameState({
      selectedTechs: [],
      score: gameState.score,
      attempts: 3,
      revealed: false,
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
            <div className="level">
              LEVEL {currentJob + 1}/{jobs.length}
            </div>
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
                        techStacks[jobs[currentJob].company]?.includes(tech)
                          ? 'correct'
                          : ''
                      }`}
                      onClick={() => handleTechSelect(tech)}
                      disabled={
                        gameState.selectedTechs.includes(tech) ||
                        gameState.attempts === 0
                      }
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
                    {techStacks[jobs[currentJob].company]?.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
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
              {jobs[currentJob].codeLink && (
                <a
                  href={jobs[currentJob].codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  VIEW CODE
                </a>
              )}
              {jobs[currentJob].repositoryLinks &&
                jobs[currentJob].repositoryLinks!.length > 0 && (
                  <div className="repo-links-row">
                    {jobs[currentJob].repositoryLinks!.map((repo) => (
                      <a
                        key={repo.href}
                        href={repo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-link"
                      >
                        {repo.label}
                      </a>
                    ))}
                  </div>
                )}
            </motion.div>
          </AnimatePresence>

          <div className="navigation-controls">
            <button
              className="nav-button"
              disabled={currentJob === 0}
              onClick={() => setCurrentJob((prev) => prev - 1)}
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
