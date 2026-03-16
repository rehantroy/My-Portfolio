import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundEffects from './components/BackgroundEffects'
import ResumeModal from './components/ResumeModal'

function App() {
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const customCursorBlockedSelector =
      'a, button, input, textarea, label, select, [role="button"], .card-surface, .chip, nav, header, footer'

    const updatePointer = (event) => {
      root.style.setProperty('--mouse-x', `${event.clientX}px`)
      root.style.setProperty('--mouse-y', `${event.clientY}px`)

      const offsetX = ((event.clientX / window.innerWidth) - 0.5) * 14
      const offsetY = ((event.clientY / window.innerHeight) - 0.5) * 14
      root.style.setProperty('--parallax-x', `${offsetX}px`)
      root.style.setProperty('--parallax-y', `${offsetY}px`)

      const blocked = event.target.closest(customCursorBlockedSelector)
      root.style.setProperty('--cursor-opacity', blocked ? '0' : '1')
      document.body.classList.toggle('cursor-fx-active', !blocked)
    }

    const resetPointer = () => {
      root.style.setProperty('--mouse-x', '50vw')
      root.style.setProperty('--mouse-y', '30vh')
      root.style.setProperty('--parallax-x', '0px')
      root.style.setProperty('--parallax-y', '0px')
      root.style.setProperty('--cursor-scale', '1')
      root.style.setProperty('--cursor-opacity', '0')
      document.body.classList.remove('cursor-fx-active')
    }

    const shrinkPointer = () => {
      root.style.setProperty('--cursor-scale', '0.82')
    }

    const releasePointer = () => {
      root.style.setProperty('--cursor-scale', '1')
    }

    const handlePointerOver = (event) => {
      if (event.target.closest(customCursorBlockedSelector)) {
        root.style.setProperty('--cursor-scale', '1.55')
      }
    }

    const handlePointerOut = (event) => {
      if (event.target.closest(customCursorBlockedSelector)) {
        root.style.setProperty('--cursor-scale', '1')
      }
    }

    resetPointer()
    window.addEventListener('mousemove', updatePointer)
    window.addEventListener('mouseleave', resetPointer)
    window.addEventListener('mousedown', shrinkPointer)
    window.addEventListener('mouseup', releasePointer)
    document.addEventListener('mouseover', handlePointerOver)
    document.addEventListener('mouseout', handlePointerOut)

    return () => {
      window.removeEventListener('mousemove', updatePointer)
      window.removeEventListener('mouseleave', resetPointer)
      window.removeEventListener('mousedown', shrinkPointer)
      window.removeEventListener('mouseup', releasePointer)
      document.removeEventListener('mouseover', handlePointerOver)
      document.removeEventListener('mouseout', handlePointerOut)
    }
  }, [])

  return (
    <div className="min-h-screen bg-base text-body">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#04020f_0%,#070b18_36%,#07101c_64%,#04070f_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(110,64,255,0.22),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_50%_46%,rgba(72,87,255,0.08),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(34,211,238,0.1),transparent_30%)]" />
        <div className="absolute inset-x-0 top-[34%] h-[26rem] bg-[radial-gradient(circle_at_center,rgba(69,78,150,0.12),transparent_68%)] blur-3xl" />
        <BackgroundEffects />
        <div
          className="absolute inset-0 opacity-80 transition-transform duration-300 ease-out"
          style={{
            background:
              'radial-gradient(320px circle at var(--mouse-x) var(--mouse-y), rgba(34,211,238,0.16), transparent 32%), radial-gradient(420px circle at calc(var(--mouse-x) + 80px) calc(var(--mouse-y) - 40px), rgba(124,58,237,0.12), transparent 36%)',
          }}
        />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="app-cursor pointer-events-none fixed inset-0 z-[60]">
        <div className="cursor-aura" />
        <div className="cursor-energy" />
        <div className="cursor-pulse" />
        <div className="cursor-pulse cursor-pulse-delay" />
        <div className="cursor-ring" />
        <div className="cursor-dot" />
      </div>

      <Navbar
        activeSection={activeSection}
        onResumeClick={() => setShowResumeModal(true)}
      />

      <main className="mx-auto max-w-[88rem] px-[20px] sm:px-[20px] lg:px-[20px] pt-24 space-y-32 md:space-y-40">
        <Hero onResumeClick={() => setShowResumeModal(true)} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {showResumeModal && (
          <ResumeModal onClose={() => setShowResumeModal(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
