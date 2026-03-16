import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection, onResumeClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 right-0 top-0 z-30 border-b border-white/8 bg-[rgba(5,1,18,0.72)] backdrop-blur-2xl shadow-[0_18px_45px_rgba(0,0,0,0.45)]"
    >
      <div className="mx-auto max-w-[88rem] px-[20px] sm:px-[20px] lg:px-[20px]">
        <motion.nav
          animate={{
            paddingTop: scrolled ? 12 : 18,
            paddingBottom: scrolled ? 12 : 18,
          }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-between gap-4"
        >
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="shrink-0"
          >
            <span className="rounded-full border border-cyan-400/20 bg-white/[0.03] px-4 py-2 text-[1.4rem] font-black tracking-[-0.08em] text-[#8ec5ff] shadow-[0_10px_24px_rgba(0,0,0,0.24)]">
              &lt;RR/&gt;
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`group relative pb-2 text-xs font-semibold uppercase tracking-[0.24em] transition-colors ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 transition-all ${
                    activeSection === item.id
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-50 opacity-0 group-hover:scale-x-100 group-hover:opacity-70'
                  }`}
                />
              </button>
            ))}

            <button
              type="button"
              onClick={onResumeClick}
              className="rounded-full border border-purple-400/35 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-100 transition-all hover:-translate-y-0.5 hover:border-purple-300/70 hover:bg-purple-500/20"
            >
              Resume
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              type="button"
              onClick={onResumeClick}
              className="rounded-full border border-purple-400/35 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold text-purple-100"
            >
              Resume
            </button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="rounded-full border border-white/10 p-2 text-heading"
            >
              {open ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4"
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(9,11,24,0.96)] backdrop-blur-xl">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full px-4 py-3 text-left text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                      activeSection === item.id
                        ? 'bg-white/5 text-white'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
