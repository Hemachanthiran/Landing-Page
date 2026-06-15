import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Works from './components/Works'
import Journal from './components/Journal'
import Explorations from './components/Explorations'
import Stats from './components/Stats'
import Contact from './components/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [activeNav, setActiveNav] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (section: string) => {
    setActiveNav(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar scrollY={scrollY} activeNav={activeNav} onNavClick={handleNavClick} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="work">
          <Works />
        </section>
        <section id="journal">
          <Journal />
        </section>
        <section id="explorations">
          <Explorations />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}
export default App