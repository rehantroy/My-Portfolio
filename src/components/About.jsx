import { motion } from 'framer-motion'
import img2 from '../assets/img2.jpg'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const details = [
  {
    label: 'Education',
    value: 'B.Tech in Artificial Intelligence & Data Science at IIITDM Kurnool',
  },
  {
    label: 'Focus',
    value: 'Building web applications and practical machine learning projects',
  },
  {
    label: 'Creative Work',
    value: 'Video editing, visual design, and content creation',
  },
  {
    label: 'Approach',
    value: 'Building products that feel smooth, useful, and visually sharp',
  },
]

export default function About() {
  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="section-frame space-y-10"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4">
            <p className="section-label mb-0">About</p>
            <div className="h-px w-16 bg-cyan-400/50" />
            <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-100/50">
              Profile Snapshot
            </p>
          </div>

          <p className="mt-6 text-sm leading-7 text-body sm:text-base sm:leading-8">
            I&apos;m a B.Tech student in Artificial Intelligence &amp; Data
            Science at IIITDM Kurnool. I enjoy building web applications and
            machine learning projects, and I also work on creative content like
            video editing and visual design. Developer by training, creator by
            passion.
          </p>

          <p className="mt-4 text-sm leading-7 text-body/85 sm:text-[15px] sm:leading-8">
            I like working on ideas from both sides: building the logic that
            makes them useful and shaping the visuals that make them memorable.
            My goal is to create digital experiences that feel modern, clear,
            and genuinely enjoyable to use.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Web Apps', 'Machine Learning', 'Visual Design'].map((item) => (
              <span
                key={item}
                className="chip border-cyan-400/30 text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {details.map((item) => (
              <div
                key={item.label}
                className="border-l border-cyan-400/40 pl-4"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-200/65">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-body">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-[440px] justify-self-center lg:justify-self-end"
        >
          <div className="card-surface overflow-hidden p-3 shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            <div className="rounded-[16px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-3">
              <div className="mb-3 flex items-center gap-2 rounded-[10px] border border-white/6 bg-black/15 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>

              <div className="rounded-[14px] border border-white/10 bg-[#101626] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="aspect-square overflow-hidden rounded-[12px] border border-white/8 bg-white/5">
                  <img
                    src={img2}
                    alt="Portrait"
                    className="h-full w-full scale-[1.34] object-cover"
                    style={{ objectPosition: '82% 24%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
