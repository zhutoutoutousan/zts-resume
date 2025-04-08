'use client'
import { useEffect, useRef, useState } from 'react'

export default function ChaosNav() {
  const rouletteRef = useRef<HTMLDivElement>(null)
  const chaosRef = useRef<HTMLDivElement>(null)
  const [isEscaping, setIsEscaping] = useState(false)

  useEffect(() => {
    // Initial random positions
    const initPosition = () => {
      if (rouletteRef.current && chaosRef.current) {
        const rouletteX = Math.random() * (window.innerWidth - 300)
        const rouletteY = Math.random() * (window.innerHeight - 300)
        const chaosX = Math.random() * (window.innerWidth - 300)
        const chaosY = Math.random() * (window.innerHeight - 300)
        
        rouletteRef.current.style.transform = `translate(${rouletteX}px, ${rouletteY}px)`
        chaosRef.current.style.transform = `translate(${chaosX}px, ${chaosY}px)`
      }
    }

    initPosition()

    let mouseX = 0
    let mouseY = 0
    let currentRouletteX = 0
    let currentRouletteY = 0
    let currentChaosX = 0
    let currentChaosY = 0

    const updateCurrentPositions = () => {
      if (rouletteRef.current && chaosRef.current) {
        const rouletteTransform = getComputedStyle(rouletteRef.current).transform
        const chaosTransform = getComputedStyle(chaosRef.current).transform
        
        if (rouletteTransform !== 'none') {
          const rouletteMatrix = new DOMMatrix(rouletteTransform)
          currentRouletteX = rouletteMatrix.m41
          currentRouletteY = rouletteMatrix.m42
        }
        
        if (chaosTransform !== 'none') {
          const chaosMatrix = new DOMMatrix(chaosTransform)
          currentChaosX = chaosMatrix.m41
          currentChaosY = chaosMatrix.m42
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      updateCurrentPositions()

      if (rouletteRef.current && chaosRef.current) {
        // Calculate distances
        const rouletteDist = Math.hypot(mouseX - currentRouletteX, mouseY - currentRouletteY)
        const chaosDist = Math.hypot(mouseX - currentChaosX, mouseY - currentChaosY)

        // Escape threshold
        const escapeThreshold = 300

        if (rouletteDist < escapeThreshold) {
          setIsEscaping(true)
          // Calculate escape angle (away from mouse)
          const angle = Math.atan2(currentRouletteY - mouseY, currentRouletteX - mouseX)
          const escapeSpeed = (escapeThreshold - rouletteDist) / 2
          
          let newX = currentRouletteX + Math.cos(angle) * escapeSpeed
          let newY = currentRouletteY + Math.sin(angle) * escapeSpeed
          
          // Keep within bounds
          newX = Math.max(0, Math.min(window.innerWidth - 300, newX))
          newY = Math.max(0, Math.min(window.innerHeight - 300, newY))
          
          rouletteRef.current.style.transform = `translate(${newX}px, ${newY}px)`
          rouletteRef.current.style.transition = 'transform 0.2s ease-out'
        }

        if (chaosDist < escapeThreshold) {
          setIsEscaping(true)
          // Quantum teleport for chaos nav
          const randomAngle = Math.random() * Math.PI * 2
          const teleportDistance = 400
          
          let newX = mouseX + Math.cos(randomAngle) * teleportDistance
          let newY = mouseY + Math.sin(randomAngle) * teleportDistance
          
          // Keep within bounds
          newX = Math.max(0, Math.min(window.innerWidth - 300, newX))
          newY = Math.max(0, Math.min(window.innerHeight - 300, newY))
          
          chaosRef.current.style.transform = `translate(${newX}px, ${newY}px)`
          chaosRef.current.style.transition = 'transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)'
        }
      }
    }

    // Random quantum fluctuations
    const quantumFluctuation = setInterval(() => {
      if (!isEscaping && Math.random() > 0.7) {
        updateCurrentPositions()
        
        if (rouletteRef.current) {
          let newX = currentRouletteX + (Math.random() - 0.5) * 100
          let newY = currentRouletteY + (Math.random() - 0.5) * 100
          newX = Math.max(0, Math.min(window.innerWidth - 300, newX))
          newY = Math.max(0, Math.min(window.innerHeight - 300, newY))
          rouletteRef.current.style.transform = `translate(${newX}px, ${newY}px)`
        }
        
        if (chaosRef.current) {
          let newX = Math.random() * (window.innerWidth - 300)
          let newY = Math.random() * (window.innerHeight - 300)
          chaosRef.current.style.transform = `translate(${newX}px, ${newY}px)`
        }
      }
    }, 2000)

    // Reset escaping state
    const escapeTimeout = setInterval(() => {
      setIsEscaping(false)
    }, 1000)

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(quantumFluctuation)
      clearInterval(escapeTimeout)
    }
  }, [isEscaping])

  return (
    <>
      <div 
        ref={rouletteRef} 
        className={`roulette-nav-container ${isEscaping ? 'escaping' : ''}`}
      >
        {/* existing roulette nav content */}
      </div>
      <div 
        ref={chaosRef} 
        className={`chaos-roulette-container ${isEscaping ? 'escaping' : ''}`}
      >
        {/* existing chaos nav content */}
      </div>
    </>
  )
} 