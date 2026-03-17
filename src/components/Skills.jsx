import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  creativeSkills,
  softSkills,
  techSkills,
  techTools,
  creativeTools,
} from '../data/skills'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const cardContainer = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const dividerVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: { width: '100%', opacity: 1 },
}

const TABS = ['tech', 'creative', 'soft']

export default function Skills() {
  const [activeTab, setActiveTab] = useState('tech')

  const renderLabelRow = (label, lineClassName) => (
    <div className="flex items-center gap-4">
      <p className="section-label mb-0">{label}</p>
      <div className={`h-px w-16 ${lineClassName}`} />
    </div>
  )

  const renderBadge = (badge, palette) => {
    const styles =
      badge === 'Proficient'
        ? {
            bg: palette.proficientBg,
            text: palette.proficientText,
          }
        : badge === 'Intermediate'
        ? {
            bg: palette.intermediateBg,
            text: palette.intermediateText,
          }
        : badge === 'Familiar'
        ? {
            bg: palette.familiarBg,
            text: palette.familiarText,
          }
        : {
            bg: palette.learningBg,
            text: palette.learningText,
          }

    return (
      <div
        className="rounded-full px-2.5 py-[4px] text-[10px] font-medium"
        style={{ backgroundColor: styles.bg, color: styles.text }}
      >
        {badge}
      </div>
    )
  }

  const renderSkillCard = (skill, palette) => (
    <motion.div
      key={skill.name}
      variants={cardItem}
      className={`card-surface group relative overflow-hidden p-5 transition-transform hover:-translate-y-1 ${palette.hoverBorder} ${palette.hoverShadow}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${palette.line} to-transparent opacity-80`}
      />
      <p className="text-sm font-semibold text-heading">{skill.name}</p>
      <p className={`mt-2 text-sm leading-6 text-muted ${palette.hoverText}`}>
        {skill.description}
      </p>
      <div className="mt-4">
        {renderBadge(skill.badge, palette.badge)}
      </div>
    </motion.div>
  )

  return (
    <motion.section
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="section-frame space-y-8"
    >
      <div>{renderLabelRow('Skills', 'bg-cyan-400/50')}</div>

      <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-xs shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
        {TABS.map((tab) => (
          <motion.button
            key={tab}
            type="button"
            layout
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-3 py-2 capitalize transition-colors sm:px-4 ${
              activeTab === tab ? 'text-black' : 'text-body'
            }`}
            style={{
              backgroundColor:
                activeTab === tab
                  ? tab === 'tech'
                    ? '#00bcd4'
                    : tab === 'creative'
                    ? '#7c3aed'
                    : '#f59e0b'
                  : 'transparent',
            }}
          >
            {tab === 'tech'
              ? 'Tech Skills'
              : tab === 'creative'
              ? 'Creative Skills'
              : 'Soft Skills'}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'tech' && (
          <motion.div
            key="tech"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {techSkills.map((skill) =>
                renderSkillCard(skill, {
                  line: 'via-cyan-400/70',
                  hoverBorder: 'hover:border-cyan-400/80',
                  hoverShadow: 'hover:shadow-[0_0_40px_rgba(0,188,212,0.26)]',
                  hoverText: 'group-hover:text-cyan-100',
                  badge: {
                    proficientBg: '#00bcd411',
                    proficientText: '#00bcd4',
                    intermediateBg: '#10b98122',
                    intermediateText: '#10b981',
                    familiarBg: '#f59e0b22',
                    familiarText: '#f59e0b',
                    learningBg: '#ffffff11',
                    learningText: '#888888',
                  },
                })
              )}
            </motion.div>

            <motion.div
              variants={dividerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"
            />

            {renderLabelRow('Tools', 'bg-cyan-400/50')}
            <div className="flex flex-wrap gap-3">
              {techTools.map((tool) => (
                <button
                  key={tool.name}
                  type="button"
                  className="chip transform border-cyan-400/35 text-cyan-100 transition-transform hover:scale-105"
                >
                  <span>{tool.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'creative' && (
          <motion.div
            key="creative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {creativeSkills.map((skill) =>
                renderSkillCard(skill, {
                  line: 'via-purple-400/70',
                  hoverBorder: 'hover:border-purple-400/80',
                  hoverShadow: 'hover:shadow-[0_0_40px_rgba(124,58,237,0.26)]',
                  hoverText: 'group-hover:text-purple-100',
                  badge: {
                    proficientBg: '#7c3aed22',
                    proficientText: '#a78bfa',
                    intermediateBg: '#8b5cf622',
                    intermediateText: '#8b5cf6',
                    familiarBg: '#f59e0b22',
                    familiarText: '#f59e0b',
                    learningBg: '#ffffff11',
                    learningText: '#888888',
                  },
                })
              )}
            </motion.div>

            <motion.div
              variants={dividerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
            />

            {renderLabelRow('Tools', 'bg-purple-400/50')}
            <div className="flex flex-wrap gap-3">
              {creativeTools.map((tool) => (
                <button
                  key={tool.name}
                  type="button"
                  className="chip transform border-purple-400/35 text-purple-100 transition-transform hover:scale-105"
                >
                  <span>{tool.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'soft' && (
          <motion.div
            key="soft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {softSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardItem}
                  className="card-surface relative overflow-hidden p-5 transition-transform hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-[0_0_40px_rgba(245,158,11,0.2)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent opacity-80" />
                  <p className="text-sm font-semibold text-heading">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}
