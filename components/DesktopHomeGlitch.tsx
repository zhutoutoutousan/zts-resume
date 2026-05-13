'use client'

import { useEffect } from 'react'

/** Glitch lines on the home chaos container — desktop only (skipped on narrow viewports). */
export default function DesktopHomeGlitch() {
  useEffect(() => {
    const run = () => {
      if (typeof window === 'undefined' || window.innerWidth < 768) return
      const container = document.querySelector('.chaos-container')
      if (!container) return

      const existing = container.querySelectorAll('.glitch-element')
      existing.forEach((n) => n.remove())

      for (let i = 0; i < 20; i++) {
        const el = document.createElement('div')
        el.className = 'glitch-element'
        el.style.left = `${Math.random() * 100}vw`
        el.style.top = `${Math.random() * 100}vh`
        el.style.animationDelay = `${Math.random() * 5}s`
        container.appendChild(el)
      }
    }

    run()
    window.addEventListener('resize', run)
    return () => window.removeEventListener('resize', run)
  }, [])

  return null
}
