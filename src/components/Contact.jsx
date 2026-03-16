import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const socialCards = [
  {
    label: 'Email',
    value: 'rehant@email.com',
    href: 'mailto:rehant@email.com',
    icon: FiMail,
    accent: 'text-cyan-200',
    border: 'border-cyan-400/30 hover:border-cyan-300/70',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rehantroy',
    href: 'https://linkedin.com/in/rehantroy',
    icon: FaLinkedinIn,
    accent: 'text-blue-200',
    border: 'border-blue-400/25 hover:border-blue-300/70',
  },
  {
    label: 'GitHub',
    value: 'github.com/rehantroy',
    href: 'https://github.com/rehantroy',
    icon: FaGithub,
    accent: 'text-slate-100',
    border: 'border-white/10 hover:border-white/25',
  },
  {
    label: 'Instagram',
    value: '@rehantroy',
    href: 'https://instagram.com/rehantroy',
    icon: FaInstagram,
    accent: 'text-pink-200',
    border: 'border-pink-400/25 hover:border-pink-300/70',
  },
]

const inputClassName =
  'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-400/50'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'tech',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio Inquiry - ${formData.projectType}`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:rehant@email.com?subject=${subject}&body=${body}`
  }

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="section-frame space-y-10"
    >
      <div className="grid gap-10 xl:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] xl:items-start">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="max-w-md"
        >
          <div className="flex items-center gap-4">
            <p className="section-label mb-0">Contact</p>
            <div className="h-px w-16 bg-cyan-400/50" />
          </div>

          <p className="mt-6 text-sm leading-7 text-body sm:text-base sm:leading-8">
            If you need someone who can handle both product logic and visual
            polish, this is where we start. Send a message with your idea,
            timeline, and the direction you want to take it.
          </p>

          <div className="mt-8 space-y-4">
            <div className="border-l border-cyan-400/40 pl-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200/65">
                Best Fit
              </p>
              <p className="mt-1 text-sm leading-6 text-body">
                Full stack projects, AI-backed concepts, portfolio builds, and
                creator-focused design work.
              </p>
            </div>
            <div className="border-l border-cyan-400/40 pl-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200/65">
                What Helps Most
              </p>
              <p className="mt-1 text-sm leading-6 text-body">
                A short brief, expected outcome, timeline, and whether the work
                is tech, creative, or both.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            {socialCards.map(({ label, value, href, icon: Icon, accent, border }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-surface flex items-center gap-4 rounded-[24px] px-4 py-4 transition-all hover:-translate-y-1 ${border}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.04] text-lg ${accent}`}
                >
                  <Icon />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-slate-100">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          onSubmit={handleSubmit}
          className="card-surface space-y-6 rounded-[28px] p-6"
        >
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-4">
                  <p className="section-label mb-0">Send Message</p>
                  <div className="h-px w-16 bg-cyan-400/50" />
                </div>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                  Choose the kind of work you want help with and send your
                  message directly from here.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    Fast Response
                  </span>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                    Tech + Creative
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/80">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClassName}
                  required
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/80">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClassName}
                  required
                />
              </label>
            </div>

            <fieldset className="space-y-3">
              <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/80">
                Project Type
              </legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    value: 'tech',
                    label: 'Tech',
                    hint: 'Web apps, full stack, dashboards',
                  },
                  {
                    value: 'creative',
                    label: 'Creative',
                    hint: 'Edits, visuals, social content',
                  },
                  {
                    value: 'both',
                    label: 'Both',
                    hint: 'Code plus visual direction',
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                      formData.projectType === option.value
                        ? 'border-cyan-400/55 bg-cyan-400/10 shadow-[0_0_24px_rgba(34,211,238,0.08)]'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value={option.value}
                      checked={formData.projectType === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <p className="text-sm font-semibold text-slate-100">
                      {option.label}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {option.hint}
                    </p>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300/80">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your idea, goal, and timeline..."
                className={`${inputClassName} min-h-[235px] resize-none`}
                required
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_32px_rgba(34,211,238,0.22)] transition-transform hover:-translate-y-0.5"
            >
              <FiSend className="text-base" />
              Send via Email
            </button>
        </motion.form>
      </div>
    </motion.section>
  )
}
