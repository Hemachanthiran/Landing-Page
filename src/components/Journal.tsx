import { motion } from 'framer-motion'


export default function Journal() {
  const entries = [
    {
      title: 'The Art of Minimalism',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop',
      readTime: '5 min read',
      date: 'Jun 15, 2024',
    },
    {
      title: 'Design Systems Explained',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=100&h=100&fit=crop',
      readTime: '8 min read',
      date: 'Jun 10, 2024',
    },
    {
      title: 'Web Performance Tips',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=100&h=100&fit=crop',
      readTime: '6 min read',
      date: 'Jun 5, 2024',
    },
    {
      title: 'Creative Process Deep Dive',
      image: 'https://images.unsplash.com/photo-1577720643272-265f434735a9?w=100&h=100&fit=crop',
      readTime: '10 min read',
      date: 'May 30, 2024',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="journal-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="journal-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="works-eyebrow">
            <div className="works-line"></div>
            <span className="works-eyebrow-text">Recent Thoughts</span>
          </div>
          <h2 className="journal-title">
            Latest <span className="works-title-italic">articles</span>
          </h2>
          <p className="works-description">
            Insights and thoughts on design, development, and creative direction.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="journal-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {entries.map((entry, idx) => (
            <motion.div
              key={idx}
              className="journal-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <img
                src={entry.image}
                alt={entry.title}
                className="journal-card-image"
              />
              <div className="journal-card-content">
                <h3 className="journal-card-title">{entry.title}</h3>
                <p className="journal-card-meta">
                  {entry.readTime} • {entry.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
