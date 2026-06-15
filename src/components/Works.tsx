import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Works() {
  const projects = [
    {
      title: 'Automotive Motion',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop',
    },
    {
      title: 'Urban Architecture',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop',
    },
    {
      title: 'Human Perspective',
      image: 'https://images.unsplash.com/photo-1577720643272-265f434735a9?w=800&h=600&fit=crop',
    },
    {
      title: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section className="works-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="works-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="works-eyebrow">
            <div className="works-line"></div>
            <span className="works-eyebrow-text">Selected Work</span>
          </div>
          <h2 className="works-title">
            Featured <span className="works-title-italic">projects</span>
          </h2>
          <p className="works-description">
            A selection of projects I've worked on, from concept to launch.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="works-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="work-card"
              variants={itemVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="work-card-image"
              />
              <div className="work-card-overlay">
                <div className="work-card-label">
                  View{' '}
                  <span className="work-card-title">{project.title}</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
