'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface NavNode {
  id: string
  label: string
  link?: string
  color: string
}

const navNodes: NavNode[] = [
  { 
    id: 'experience',
    label: 'TECH JOURNEY',
    color: '#ff0000',
  },
  {
    id: 'projects',
    label: 'CHAOS PROJECTS',
    color: '#00ff00',
  },
  {
    id: 'blog',
    label: 'MIND PALACE',
    color: '#0000ff',
  },
  {
    id: 'skills',
    label: 'SKILL VALIDATION',
    color: '#ff00ff',
  }
]

export default function ChaosNav() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)
  const [rotationDegree, setRotationDegree] = useState(0)
  const router = useRouter()

  const spinCylinder = () => {
    if (isSpinning) return
    
    setIsSpinning(true)
    const spins = 2 + Math.random() * 3 // 2-5 full rotations
    const finalRotation = 360 * spins + (Math.random() * 360)
    const selectedIndex = Math.floor((finalRotation % 360) / (360 / navNodes.length))
    
    setRotationDegree(finalRotation)
    
    setTimeout(() => {
      setIsSpinning(false)
      setSelectedSlot(selectedIndex)
      
      // Navigate after a brief delay
      setTimeout(() => {
        const selectedNode = navNodes[selectedIndex]
        if (selectedNode.link) {
          window.open(selectedNode.link, '_blank')
        } else {
          router.push(`/${selectedNode.id}`)
        }
      }, 500)
    }, 3000)
  }

  return (
    <div className="roulette-nav-container">
      <div className="roulette-title">RUSSIAN ROULETTE NAVIGATION</div>
      <div className="cylinder-container">
        <motion.div 
          className="cylinder"
          animate={{ 
            rotate: rotationDegree 
          }}
          transition={{ 
            duration: 3,
            ease: [0.32, 0, 0.67, 0]
          }}
        >
          {navNodes.map((node, index) => (
            <div
              key={node.id}
              className={`cylinder-slot ${selectedSlot === index ? 'selected' : ''}`}
              style={{
                transform: `rotate(${(360 / navNodes.length) * index}deg) translateY(-120px)`,
                backgroundColor: node.color
              }}
            >
              {node.label}
            </div>
          ))}
        </motion.div>
        <div className="cylinder-center" />
        <div className="cylinder-pointer" />
      </div>
      <button 
        className="spin-button"
        onClick={spinCylinder}
        disabled={isSpinning}
      >
        {isSpinning ? 'SPINNING...' : 'SPIN THE CYLINDER'}
      </button>
    </div>
  )
} 