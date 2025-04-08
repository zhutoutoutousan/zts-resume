'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  category: string
  challenges: Challenge[]
}

interface Challenge {
  question: string
  options: string[]
  correct: number
  difficulty: number
}

const skills: Skill[] = [
  {
    name: "Next.js",
    level: 90,
    category: "Frontend",
    challenges: [
      {
        question: "What's the difference between getStaticProps and getServerSideProps?",
        options: [
          "They're the same thing",
          "getStaticProps runs at build time, getServerSideProps runs on each request",
          "getStaticProps is for client-side, getServerSideProps is for server-side",
          "getStaticProps is deprecated"
        ],
        correct: 1,
        difficulty: 3
      }
    ]
  },
  // Add more skills and challenges
]

export default function SkillValidation() {
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null)
  const [challenge, setChallenge] = useState<Challenge | null>(null)
  const [score, setScore] = useState(0)

  const startChallenge = (skill: Skill) => {
    setCurrentSkill(skill)
    setChallenge(skill.challenges[Math.floor(Math.random() * skill.challenges.length)])
  }

  const handleAnswer = (optionIndex: number) => {
    if (!challenge) return
    
    if (optionIndex === challenge.correct) {
      setScore(prev => prev + challenge.difficulty * 10)
    }
    
    // Move to next challenge or finish
    setChallenge(null)
    setCurrentSkill(null)
  }

  return (
    <div className="skill-validation">
      <h2 className="glitch-text">VALIDATE MY SKILLS</h2>
      <div className="skill-score">Current Score: {score}</div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => startChallenge(skill)}
          >
            <h3>{skill.name}</h3>
            <div className="skill-level">
              <div 
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <span className="skill-category">{skill.category}</span>
          </motion.div>
        ))}
      </div>

      {challenge && (
        <motion.div
          className="challenge-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <h3>{currentSkill?.name} Challenge</h3>
          <p>{challenge.question}</p>
          <div className="challenge-options">
            {challenge.options.map((option, index) => (
              <button
                key={index}
                className="challenge-option"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
} 