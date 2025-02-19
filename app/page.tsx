"use client"
import { useEffect } from 'react'
import ChaosHero from '@/components/ChaosHero'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  useEffect(() => {
    const addChaosEffect = () => {
      const container = document.querySelector('.chaos-container')
      if (!container) return
      
      const createGlitchElement = () => {
        const el = document.createElement('div')
        el.className = 'glitch-element'
        el.style.left = `${Math.random() * 100}vw`
        el.style.top = `${Math.random() * 100}vh`
        el.style.animationDelay = `${Math.random() * 5}s`
        container.appendChild(el)
      }

      for (let i = 0; i < 20; i++) {
        createGlitchElement()
      }
    }

    addChaosEffect()
  }, [])

  return (
    <main className="chaos-container">
      <div className="noise-overlay" />
      <ChaosHero />
      <Contact />
      <Experience />
    </main>
  )
}