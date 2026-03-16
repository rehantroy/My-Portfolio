import { motion } from 'framer-motion'

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

export default function ResumeModal({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        transition={{ duration: 0.2 }}
        className="max-w-md w-[90%] bg-card border border-white/15 rounded-card p-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 text-xs text-muted hover:text-heading"
        >
          ✕
        </button>
        <h3 className="text-lg font-semibold text-heading mb-1">
          Download Resume
        </h3>
        <p className="text-xs text-body mb-4">
          Choose which resume to download
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="/resumes/tech-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-sm font-medium text-black bg-cyan-400 rounded-pill px-4 py-2.5 text-center hover:shadow-soft-glow will-change-transform transform hover:scale-[1.02]"
          >
            💼 Tech Resume PDF
          </a>
          <a
            href="/resumes/creative-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-sm font-medium text-white bg-purple-600 rounded-pill px-4 py-2.5 text-center hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] will-change-transform transform hover:scale-[1.02]"
          >
            🎨 Creative Resume PDF
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

