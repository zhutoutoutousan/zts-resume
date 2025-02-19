'use client'
import { useEffect, useRef } from 'react'

export default function ChaosHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 30
      const y = (clientY / window.innerHeight - 0.5) * 30
      heroRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.05}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="glitch-container">
        <h1 className="glitch-text" data-text="OWEN SHAO">OWEN SHAO</h1>
        <div className="hero-subtitle">CHAOS ENGINEER & POLYGLOT DEVELOPER</div>
        <div className="language-list">
          EN | DE | FR | ES | IT | HI | RU | AR | PT | KO | JA
        </div>
      </div>
    </section>
  )
} 