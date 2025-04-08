'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ChaosEffect {
  id: string
  label: string
  color: string
  effect: () => void
}

export default function ChaosRoulette() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedEffect, setSelectedEffect] = useState<number | null>(null)
  const [rotationDegree, setRotationDegree] = useState(0)

  const chaosEffects: ChaosEffect[] = [
    {
      id: 'glitch',
      label: 'GLITCH REALITY',
      color: '#ff0000',
      effect: () => {
        document.body.classList.add('chaos-glitch')
        setTimeout(() => document.body.classList.remove('chaos-glitch'), 3000)
      }
    },
    {
      id: 'matrix',
      label: 'MATRIX RAIN',
      color: '#00ff00',
      effect: () => {
        document.body.classList.add('chaos-matrix')
        setTimeout(() => document.body.classList.remove('chaos-matrix'), 3000)
      }
    },
    {
      id: 'invert',
      label: 'INVERT WORLD',
      color: '#0000ff',
      effect: () => {
        document.body.classList.add('chaos-invert')
        setTimeout(() => document.body.classList.remove('chaos-invert'), 3000)
      }
    },
    {
      id: 'earthquake',
      label: 'EARTHQUAKE',
      color: '#ff00ff',
      effect: () => {
        document.body.classList.add('chaos-shake')
        setTimeout(() => document.body.classList.remove('chaos-shake'), 3000)
      }
    }
  ]

  const spinRoulette = () => {
    if (isSpinning) return
    
    setIsSpinning(true)
    const spins = 2 + Math.random() * 3
    const finalRotation = 360 * spins + (Math.random() * 360)
    const selectedIndex = Math.floor((finalRotation % 360) / (360 / chaosEffects.length))
    
    setRotationDegree(finalRotation)
    
    setTimeout(() => {
      setIsSpinning(false)
      setSelectedEffect(selectedIndex)
      chaosEffects[selectedIndex].effect()
    }, 3000)
  }

  return (
    <div className="chaos-roulette-container">
      <div className="chaos-title">CHAOS ROULETTE</div>
      <div className="chaos-cylinder-container">
        <motion.div 
          className="chaos-cylinder"
          animate={{ 
            rotate: rotationDegree 
          }}
          transition={{ 
            duration: 3,
            ease: [0.32, 0, 0.67, 0]
          }}
        >
          {chaosEffects.map((effect, index) => (
            <div
              key={effect.id}
              className={`chaos-slot ${selectedEffect === index ? 'selected' : ''}`}
              style={{
                transform: `rotate(${(360 / chaosEffects.length) * index}deg) translateY(-120px)`,
                backgroundColor: effect.color,
                opacity: 0.8
              }}
            >
              {effect.label}
            </div>
          ))}
        </motion.div>
        <div className="chaos-center" />
        <div className="chaos-pointer" />
      </div>
      <button 
        className="chaos-button"
        onClick={spinRoulette}
        disabled={isSpinning}
      >
        {isSpinning ? 'UNLEASHING CHAOS...' : 'SPIN FOR CHAOS'}
      </button>
    </div>
  )
} 