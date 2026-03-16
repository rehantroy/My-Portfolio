import { useEffect, useRef } from 'react'

const MAX_PARTICLES = 54
const MIN_PARTICLES = 24
const REPULSION_RADIUS = 150
const LINK_RADIUS = 180

function createParticle(width, height) {
  const speed = 0.12 + Math.random() * 0.22
  const angle = Math.random() * Math.PI * 2

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size: 1.2 + Math.random() * 2.4,
    alpha: 0.22 + Math.random() * 0.35,
    hue: Math.random() > 0.6 ? '124,58,237' : '34,211,238',
  }
}

export default function BackgroundEffects() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 3,
    active: false,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let particles = []
    let animationFrame = 0

    const setupCanvas = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const dpr = window.devicePixelRatio || 1

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const particleCount = Math.max(
        MIN_PARTICLES,
        Math.min(MAX_PARTICLES, Math.floor(width / 28))
      )

      particles = Array.from({ length: particleCount }, () =>
        createParticle(width, height)
      )
    }

    const drawConnections = () => {
      particles.forEach((particle, index) => {
        const neighbors = particles
          .map((candidate, candidateIndex) => {
            if (candidateIndex === index) {
              return null
            }

            const dx = particle.x - candidate.x
            const dy = particle.y - candidate.y
            const distance = Math.hypot(dx, dy)

            return distance < LINK_RADIUS
              ? {
                  candidate,
                  distance,
                }
              : null
          })
          .filter(Boolean)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 3)

        neighbors.forEach(({ candidate, distance }) => {
          const intensity = 1 - distance / LINK_RADIUS
          context.strokeStyle = `rgba(120, 216, 255, ${0.085 * intensity})`
          context.lineWidth = 1
          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(candidate.x, candidate.y)
          context.stroke()
        })
      })
    }

    const render = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      context.clearRect(0, 0, width, height)

      drawConnections()

      particles.forEach((particle) => {
        const mouse = mouseRef.current
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.hypot(dx, dy)

        if (mouse.active && distance < REPULSION_RADIUS && distance > 0) {
          const force = (REPULSION_RADIUS - distance) / REPULSION_RADIUS
          particle.vx += (dx / distance) * force * 0.18
          particle.vy += (dy / distance) * force * 0.18
        }

        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.985
        particle.vy *= 0.985

        if (Math.abs(particle.vx) < 0.03) {
          particle.vx += (Math.random() - 0.5) * 0.03
        }

        if (Math.abs(particle.vy) < 0.03) {
          particle.vy += (Math.random() - 0.5) * 0.03
        }

        if (particle.x < -20) particle.x = width + 20
        if (particle.x > width + 20) particle.x = -20
        if (particle.y < -20) particle.y = height + 20
        if (particle.y > height + 20) particle.y = -20

        context.beginPath()
        context.fillStyle = `rgba(${particle.hue}, ${particle.alpha})`
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()

        context.beginPath()
        context.fillStyle = `rgba(${particle.hue}, ${particle.alpha * 0.22})`
        context.arc(particle.x, particle.y, particle.size * 3.2, 0, Math.PI * 2)
        context.fill()
      })

      if (mouseRef.current.active) {
        particles.forEach((particle) => {
          const dx = particle.x - mouseRef.current.x
          const dy = particle.y - mouseRef.current.y
          const distance = Math.hypot(dx, dy)

          if (distance < REPULSION_RADIUS * 0.95) {
            context.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - distance / (REPULSION_RADIUS * 0.95))})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(mouseRef.current.x, mouseRef.current.y)
            context.lineTo(particle.x, particle.y)
            context.stroke()
          }
        })

        const gradient = context.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          170
        )
        gradient.addColorStop(0, 'rgba(34,211,238,0.08)')
        gradient.addColorStop(0.5, 'rgba(124,58,237,0.06)')
        gradient.addColorStop(1, 'rgba(34,211,238,0)')

        context.beginPath()
        context.fillStyle = gradient
        context.arc(
          mouseRef.current.x,
          mouseRef.current.y,
          170,
          0,
          Math.PI * 2
        )
        context.fill()
      }

      animationFrame = window.requestAnimationFrame(render)
    }

    const handleMove = (event) => {
      mouseRef.current.x = event.clientX
      mouseRef.current.y = event.clientY
      mouseRef.current.active = true
    }

    const handleLeave = () => {
      mouseRef.current.active = false
    }

    setupCanvas()
    render()

    window.addEventListener('resize', setupCanvas)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', setupCanvas)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-90"
      aria-hidden="true"
    />
  )
}
