'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface Skill {
  name: string
  level: number
  type: 'tech' | 'soft' | 'chaos' | 'forbidden'
  challenges: Challenge[]
  dimension: 'reality' | 'void' | 'quantum' | 'nightmare'
}

interface Challenge {
  type: 'code' | 'riddle' | 'sacrifice'
  question: string
  answers: string[]
  correctIndex: number
  punishment: string
}

const skillsData: Skill[] = [
  {
    name: "TypeScript",
    level: 95,
    type: 'tech',
    dimension: 'reality',
    challenges: [{
      type: 'code',
      question: "What's the output of: type Chaos<T> = T extends void ? never : T[]",
      answers: [
        "An infinite loop of arrays",
        "A type error",
        "Never if T is void, otherwise array of T",
        "The void consumes all"
      ],
      correctIndex: 2,
      punishment: "Your types become any for 24 hours"
    }]
  },
  {
    name: "React Dark Arts",
    level: 88,
    type: 'forbidden',
    dimension: 'nightmare',
    challenges: [{
      type: 'sacrifice',
      question: "To prove your React mastery, you must delete one of your components. Choose:",
      answers: [
        "Your most complex component",
        "Your favorite UI element",
        "Your routing system",
        "Your state management"
      ],
      correctIndex: 3,
      punishment: "All your components render upside down"
    }]
  },
  {
    name: "Quantum Computing",
    level: 73,
    type: 'chaos',
    dimension: 'quantum',
    challenges: [{
      type: 'riddle',
      question: "If a quantum bit is both 0 and 1, what's the value of your sanity?",
      answers: [
        "undefined",
        "null",
        "NaN",
        "All of the above, simultaneously"
      ],
      correctIndex: 3,
      punishment: "Your code exists in superposition"
    }]
  }
];

export default function SkillsPage() {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
  const [chaosLevel, setChaosLevel] = useState(0);
  const [sanity, setSanity] = useState(100);
  const [showChallenge, setShowChallenge] = useState(false);
  const [challengeResult, setChallengeResult] = useState<'pending' | 'success' | 'failure'>('pending');
  const [skillsUnlocked, setSkillsUnlocked] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const chaosInterval = setInterval(() => {
      setChaosLevel(prev => {
        const newLevel = prev + Math.random() * 5;
        if (newLevel > 100) {
          triggerChaosEvent();
          return 0;
        }
        return newLevel;
      });
    }, 1000);

    return () => clearInterval(chaosInterval);
  }, []);

  const triggerChaosEvent = () => {
    const events = [
      () => document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)`,
      () => document.body.style.transform = `skew(${Math.random() * 10}deg)`,
      () => setSanity(prev => Math.max(0, prev - 10))
    ];
    events[Math.floor(Math.random() * events.length)]();
    setTimeout(() => {
      document.body.style.filter = '';
      document.body.style.transform = '';
    }, 2000);
  };

  const handleSkillClick = (skill: Skill) => {
    setActiveSkill(skill);
    setShowChallenge(true);
    setChallengeResult('pending');
    setSanity(prev => Math.max(0, prev - 5));
  };

  const handleChallengeAnswer = (answerIndex: number) => {
    if (!activeSkill) return;
    
    const challenge = activeSkill.challenges[0];
    if (answerIndex === challenge.correctIndex) {
      setChallengeResult('success');
      setSkillsUnlocked(prev => [...prev, activeSkill.name]);
      setSanity(prev => Math.min(100, prev + 10));
    } else {
      setChallengeResult('failure');
      setSanity(prev => Math.max(0, prev - 20));
      triggerChaosEvent();
    }
  };

  return (
    <div className={`skills-chaos-container ${chaosLevel > 80 ? 'high-chaos' : ''}`}>
      <motion.div className="chaos-metrics">
        <div className="metric">
          <span>Chaos Level: {chaosLevel.toFixed(1)}%</span>
          <div 
            className="metric-bar chaos"
            style={{ width: `${chaosLevel}%` }}
          />
        </div>
        <div className="metric">
          <span>Sanity: {sanity}%</span>
          <div 
            className="metric-bar sanity"
            style={{ width: `${sanity}%` }}
          />
        </div>
      </motion.div>

      <div className="skills-grid">
        <AnimatePresence mode="wait">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className={`skill-card dimension-${skill.dimension} ${
                skillsUnlocked.includes(skill.name) ? 'unlocked' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: 1,
                y: 0,
                rotate: Math.random() * 10 - 5,
                x: Math.random() * 20 - 10
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.2 }
              }}
              onClick={() => handleSkillClick(skill)}
            >
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div 
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="skill-type">{skill.type.toUpperCase()}</div>
              {skillsUnlocked.includes(skill.name) && (
                <div className="skill-unlocked">MASTERED</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {showChallenge && activeSkill && (
        <motion.div
          className="challenge-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <h2 className="challenge-title">
            PROVE YOUR WORTH IN {activeSkill.name.toUpperCase()}
          </h2>
          <p className="challenge-description">
            {activeSkill.challenges[0].question}
          </p>
          <div className="challenge-options">
            {activeSkill.challenges[0].answers.map((answer, index) => (
              <motion.button
                key={index}
                className="challenge-option"
                onClick={() => handleChallengeAnswer(index)}
                whileHover={{ x: 10, backgroundColor: 'rgba(255, 0, 255, 0.1)' }}
              >
                {answer}
              </motion.button>
            ))}
          </div>
          {challengeResult !== 'pending' && (
            <motion.div
              className={`challenge-result ${challengeResult}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              {challengeResult === 'success' ? (
                "SKILL UNLOCKED - CHAOS EMBRACES YOU"
              ) : (
                <>
                  <p>FAILURE - {activeSkill.challenges[0].punishment}</p>
                  <button 
                    onClick={() => setShowChallenge(false)}
                    className="try-again-button"
                  >
                    SACRIFICE MORE SANITY TO TRY AGAIN
                  </button>
                </>
              )}
            </motion.div>
          )}
        </motion.div>
      )}

      {sanity <= 0 && (
        <div className="sanity-lost">
          <h2>SANITY DEPLETED - SKILLS CONSUMED BY VOID</h2>
          <button onClick={() => router.push('/')}>
            ESCAPE TO SAFETY
          </button>
        </div>
      )}
    </div>
  );
} 