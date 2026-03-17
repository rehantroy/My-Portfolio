import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiFileText, FiMail } from 'react-icons/fi'
import avatarImg from '../assets/img1.jpeg'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const roles = ['Full Stack Developer', 'Creator', 'Editor']

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/rehantroy',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/beingrehant',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rehantroy',
    icon: FaLinkedinIn,
  },
  {
    label: 'Email',
    href: 'mailto:rehantroy01@gmail.com',
    icon: FiMail,
  },
]

export default function Hero({ onResumeClick }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.section
      id="home"
      variants={heroVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className="section-frame relative flex min-h-[calc(100vh-6rem)] items-center justify-center py-12"
    >
      <div className="absolute left-1/2 top-[-8rem] -z-10 h-[46rem] w-[92rem] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.26),rgba(67,56,202,0.12)_34%,transparent_72%)] blur-3xl" />
      <div className="absolute left-1/2 top-[55%] -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(0,188,212,0.1),_transparent_70%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-[-8rem] -z-10 h-48 bg-[radial-gradient(circle_at_center,rgba(11,18,34,0.45),transparent_72%)] blur-2xl" />

      <div className="grid w-full items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="order-1 mx-auto max-w-3xl text-center lg:order-2 lg:mx-0 lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-100 shadow-[0_0_28px_rgba(124,58,237,0.12)]">
            <span className="h-2 w-2 rounded-full bg-purple-300 shadow-[0_0_14px_rgba(216,180,254,0.95)]" />
            Available for opportunities
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400 lg:justify-start">
            <span>Portfolio</span>
            <span className="h-1 w-1 rounded-full bg-cyan-300/70" />
            <span>Developer + Creator</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-black leading-none tracking-[-0.06em] text-transparent sm:text-5xl lg:text-6xl xl:text-[4.9rem]"
          >
            AI &amp; Data Science Student
          </motion.h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-base font-medium text-slate-300/90 sm:text-lg lg:justify-start lg:text-[1.55rem]">
            {roles.map((role, index) => (
              <div key={role} className="flex items-center gap-4">
                {index > 0 ? (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-purple-300/70 sm:inline-block" />
                ) : null}
                <span>{role}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base lg:mx-0 lg:text-lg">
            <p>Where code meets creativity.</p>
            <p>Developer by training, creator by passion.</p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex min-w-[13rem] items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,0.28)] transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex min-w-[13rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-base font-semibold text-slate-100 transition-all hover:border-white/20 hover:bg-white/[0.05]"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-slate-200 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-200"
              >
                <Icon />
              </a>
            ))}

            <button
              type="button"
              onClick={onResumeClick}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1a2033] px-5 py-3 text-base font-semibold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-purple-300/40"
            >
              <FiFileText className="text-lg" />
              Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="order-2 flex justify-center lg:order-1 lg:justify-center"
        >
          <div className="relative mx-auto w-full max-w-[25rem] pt-8 sm:pt-12">
            <div className="hidden lg:block absolute left-[34%] top-0 z-10 -translate-y-[92%]">
              <div className="relative whitespace-nowrap pl-16">
                <p className="text-base text-white/90">
                  Hello! I Am{' '}
                  <span className="font-semibold text-purple-300">
                    Rehant Roy
                  </span>
                </p>
                <svg
                  viewBox="0 0 180 100"
                  className="absolute -left-20 top-1 h-20 w-40 text-purple-300/80"
                >
                  <path
                    d="M170 12 C118 8 82 16 56 42 C40 58 35 72 39 88"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33 82 L39 88 L48 84"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute inset-x-8 top-16 h-48 rounded-full bg-[radial-gradient(circle,_rgba(124,58,237,0.45),_transparent_70%)] blur-3xl" />

            <div className="relative rounded-[2.25rem] border border-white/10 bg-[linear-gradient(160deg,rgba(14,18,38,0.98),rgba(7,9,21,0.84))] p-5 shadow-[0_35px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between gap-2 px-2 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/75" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/75" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/75" />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Preview
                </span>
              </div>

              <div className="mx-auto overflow-hidden rounded-full border border-purple-400/25 bg-[#12071f] p-2 shadow-[0_0_35px_rgba(124,58,237,0.22)]">
                <img
                  src={avatarImg}
                  alt="Rehant Roy portrait"
                  className="aspect-square w-full scale-[1.08] rounded-full object-cover"
                  style={{ objectPosition: '50% 26%' }}
                />
              </div>
            </div>

            <div className="absolute -bottom-5 right-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-xl sm:right-6">
              AI + Design
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}
