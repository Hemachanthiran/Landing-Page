import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '95+', label: 'Projects Done' },
    { number: '200%', label: 'Satisfied Clients' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="stats-section">
      <motion.div
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {stats.map((stat, idx) => (
          <motion.div key={idx} className="stat-item" variants={itemVariants}>
            <div className="stat-number">{stat.number}</div>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
