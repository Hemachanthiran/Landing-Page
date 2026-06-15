import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function Explorations() {
  const contentRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const explorations = [
    { image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1577720643272-265f434735a9?w=400&h=400&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=400&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=400&fit=crop' },
  ]

  useEffect(() => {
    if (!contentRef.current || !galleryRef.current) return

    // Pin the content
    ScrollTrigger.create({
      trigger: contentRef.current,
      pin: contentRef.current,
      pinSpacing: false,
      start: 'top top',
      end: '+=200%',
    })

    // Parallax for gallery items
    const items = galleryRef.current.querySelectorAll('.exploration-card')
    items.forEach((item, idx) => {
      gsap.fromTo(
        item,
        { y: 0 },
        {
          y: idx % 2 === 0 ? -100 : 100,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="explorations-section">
      <div ref={contentRef} className="explorations-content">
        <div className="explorations-header">
          <div className="explorations-eyebrow">Explorations</div>
          <h2 className="explorations-title">
            Visual <span className="works-title-italic">playground</span>
          </h2>
          <p className="explorations-description">
            A collection of experimental designs and creative explorations.
          </p>
          <motion.button
            className="hero-cta-secondary"
            whileHover={{ scale: 1.05 }}
            style={{
              marginTop: '2rem',
              display: 'inline-block',
            }}
          >
            <span className="hero-cta-secondary-content">
              Explore on Dribbble ↗
            </span>
          </motion.button>
        </div>

        <div ref={galleryRef} className="explorations-gallery">
          {explorations.map((item, idx) => (
            <div key={idx} className="exploration-card">
              <img src={item.image} alt={`Exploration ${idx + 1}`} className="exploration-card-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
