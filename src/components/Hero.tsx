import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Hls from 'hls.js'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [roleIndex, setRoleIndex] = useState(0)

  const roles = ['Creative', 'Fullstack', 'Founder', 'Scholar']

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const hlsUrl = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(hlsUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play()
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl
      video.addEventListener('canplay', () => {
        video.play()
      })
    }
  }, [])

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(roleInterval)
  }, [])

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Fade */}
      <div className="hero-fade"></div>

      {/* Content */}
      <div className="hero-content">
        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow blur-in"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Collection '26
        </motion.div>

        {/* Name */}
        <motion.h1
          className="hero-name name-reveal"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
        >
          Michael Smith
        </motion.h1>

        {/* Role Line */}
        <div className="hero-role-line">
          A{' '}
          <motion.span
            key={roleIndex}
            className="hero-role-word"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {roles[roleIndex]}
          </motion.span>
          {' '}lives in Chicago.
        </div>

        {/* Description */}
        <motion.p
          className="hero-description blur-in"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </motion.p>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <motion.button
            className="hero-cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            See Works
          </motion.button>
          <motion.button
            className="hero-cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="hero-cta-secondary-content">
              Reach out <ArrowUpRight size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
            </span>
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span className="hero-scroll-label">SCROLL</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  )
}
