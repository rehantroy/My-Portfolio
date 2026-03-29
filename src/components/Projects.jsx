import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiGithub, FiPlay, FiX } from 'react-icons/fi'
import YouTube from 'react-youtube'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import {
  techProjects,
  creativeVideoProjects,
  creativeThumbnailProjects,
} from '../data/projects'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const cardContainer = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  const [tab, setTab] = useState('tech')
  const [videoProject, setVideoProject] = useState(null)
  const [thumbIndex, setThumbIndex] = useState(-1)

  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="section-frame space-y-8"
    >
      <div className="flex items-center gap-4">
        <p className="section-label mb-0">Projects</p>
        <div className="h-px w-16 bg-cyan-400/50" />
      </div>

      <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-xs shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
        <motion.button
          type="button"
          layout
          onClick={() => setTab('tech')}
          className={`rounded-full px-3 py-2 sm:px-4 ${
            tab === 'tech' ? 'text-black' : 'text-body'
          }`}
          style={{
            backgroundColor: tab === 'tech' ? '#00bcd4' : 'transparent',
          }}
        >
          Tech Projects
        </motion.button>
        <motion.button
          type="button"
          layout
          onClick={() => setTab('creative')}
          className={`rounded-full px-3 py-2 sm:px-4 ${
            tab === 'creative' ? 'text-black' : 'text-body'
          }`}
          style={{
            backgroundColor: tab === 'creative' ? '#7c3aed' : 'transparent',
          }}
        >
          Creative Projects
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {tab === 'tech' && (
          <motion.div
            key="tech-projects"
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
              className="grid grid-cols-1 gap-5 lg:grid-cols-3"
            >
              {techProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  variants={cardItem}
                  className="card-surface group flex flex-col overflow-hidden rounded-[28px] transition-transform hover:-translate-y-2 hover:border-cyan-400/70 hover:shadow-[0_0_42px_rgba(0,188,212,0.22)]"
                >
                  <div
                    className={`relative overflow-hidden px-5 py-5 bg-gradient-to-br ${project.bannerColor}`}
                  >
                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      0{index + 1}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/60">
                      Case Study
                    </p>
                    <p className="mt-4 max-w-[24rem] text-xl font-semibold leading-tight text-white">
                      {project.name}
                    </p>
                    <p className="mt-3 max-w-[16rem] text-sm leading-6 text-slate-200/80">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col space-y-5 px-5 py-5">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="chip border-cyan-400/25 text-cyan-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-slate-100 transition-colors hover:border-cyan-400/40 hover:text-cyan-100"
                        >
                          <FiGithub />
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full px-1 py-2 font-medium text-cyan-200 transition-colors hover:text-cyan-100"
                        >
                          Live Demo
                          <FiArrowRight />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        )}

        {tab === 'creative' && (
          <motion.div
            key="creative-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-purple-200/70">
                Video Editing
              </h3>
              <motion.div
                variants={cardContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 gap-5 md:grid-cols-3"
              >
                {creativeVideoProjects.map((video) => (
                  <motion.button
                    key={video.id}
                    type="button"
                    variants={cardItem}
                    onClick={() => setVideoProject(video)}
                    className="card-surface overflow-hidden rounded-[28px] text-left transition-transform hover:-translate-y-2 hover:border-purple-400/70 hover:shadow-[0_0_42px_rgba(124,58,237,0.24)]"
                  >
                    <div className="relative flex h-40 items-end overflow-hidden bg-[linear-gradient(180deg,rgba(88,28,135,0.6),rgba(15,23,42,0.95))] p-5">
                      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                        <FiPlay className="translate-x-[1px]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-100/60">
                          Visual Work
                        </p>
                        <p className="mt-3 text-lg font-semibold text-white">
                          {video.label}
                        </p>
                      </div>
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-sm leading-6 text-slate-300/85">
                        {video.context}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-purple-200/70">
                Thumbnails &amp; Posters
              </h3>
              <motion.div
                variants={cardContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-4"
              >
                {creativeThumbnailProjects.map((thumb, index) => (
                  <motion.button
                    key={thumb.id}
                    type="button"
                    variants={cardItem}
                    onClick={() => setThumbIndex(index)}
                    className="group relative h-40 overflow-hidden rounded-[24px] border border-purple-400/25 bg-[linear-gradient(180deg,rgba(124,58,237,0.2),rgba(15,23,42,0.95))] p-4 text-left transition-transform hover:-translate-y-2 hover:border-purple-400/70 hover:shadow-[0_0_42px_rgba(124,58,237,0.22)]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_48%)] opacity-70" />
                    <div className="relative flex h-full flex-col justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-purple-100/60">
                        Creative
                      </span>
                      <span className="text-sm font-medium text-white group-hover:text-purple-100">
                        {thumb.label}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {videoProject && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="w-[90%] max-w-2xl rounded-[28px] border border-purple-400/30 bg-[#0b1020] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-base font-semibold text-heading">
                  {videoProject.label}
                </p>
                <button
                  type="button"
                  onClick={() => setVideoProject(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                >
                  <FiX />
                </button>
              </div>
              <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                <YouTube
                  videoId={videoProject.videoId}
                  opts={{ width: '100%', height: '100%' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Lightbox
        open={thumbIndex >= 0}
        close={() => setThumbIndex(-1)}
        index={thumbIndex}
        slides={creativeThumbnailProjects.map((thumb) => ({
          src: thumb.image,
          description: thumb.label,
        }))}
      />
    </motion.section>
  )
}
