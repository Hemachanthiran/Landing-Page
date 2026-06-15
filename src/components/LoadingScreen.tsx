import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const [isHidden, setIsHidden] = useState(false)

  const words = ['Design', 'Create', 'Inspire']

  useEffect(() => {
    const startTime = Date.now()
    const duration = 2700

    const animateCounter = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const newCount = Math.floor(progress * 100)

      setCount(newCount)

      if (newCount < 100) {
        requestAnimationFrame(animateCounter)
      } else {
        setTimeout(() => {
          setIsHidden(true)
          setTimeout(onComplete, 400)
        }, 400)
      }
    }

    requestAnimationFrame(animateCounter)
  }, [onComplete])

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 900)

    return () => clearInterval(wordInterval)
  }, [])

  return (
    <div className={`loading-screen ${isHidden ? 'hidden' : ''}`}>
      <div className="loading-content">
        {/* Label */}
        <div className="loading-label">Portfolio</div>

        {/* Rotating Words */}
        <div className="loading-words">
          <AnimatePresence mode="wait">
            <motion.div
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="loading-word"
            >
              {words[wordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Counter */}
        <div className="loading-counter">
          {String(count).padStart(3, '0')}
        </div>

        {/* Progress Bar */}
        <div className="loading-progress">
          <div 
            className="loading-progress-bar"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </div>
  )
}
