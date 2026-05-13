import ChaosHero from '@/components/ChaosHero'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import DesktopHomeGlitch from '@/components/DesktopHomeGlitch'
import MobileHero from '@/components/MobileHero'
import MobileOnePageSections from '@/components/MobileOnePageSections'

export default function Home() {
  return (
    <main className="chaos-container">
      <div className="noise-overlay" />
      <DesktopHomeGlitch />

      <div className="flex flex-col md:hidden">
        <MobileHero />
        <MobileOnePageSections />
      </div>

      <div className="hidden md:flex md:flex-col">
        <ChaosHero />
        <Contact />
        <Experience />
      </div>
    </main>
  )
}
