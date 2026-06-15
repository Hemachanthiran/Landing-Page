import { ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  scrollY: number
  activeNav: string
  onNavClick: (section: string) => void
}

export default function Navbar({ scrollY, activeNav, onNavClick }: NavbarProps) {
  const navLinks = ['Home', 'Work', 'Resume']
  const navIds = ['home', 'work', 'journal']

  return (
    <nav className="navbar">
      <div className={`navbar-pill ${scrollY > 100 ? 'scrolled' : ''}`}>
        {/* Logo */}
        <div className="navbar-logo">
          <span className="navbar-logo-text">JA</span>
        </div>

        {/* Divider */}
        <div className="navbar-divider"></div>

        {/* Links */}
        <div className="navbar-links">
          {navLinks.map((link, idx) => (
            <button
              key={link}
              className={`navbar-link ${activeNav === navIds[idx] ? 'active' : ''}`}
              onClick={() => onNavClick(navIds[idx])}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="navbar-divider"></div>

        {/* CTA Button */}
        <button className="navbar-cta">
          <div className="navbar-cta-content">
            Say hi <ArrowUpRight size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
          </div>
        </button>
      </div>
    </nav>
  )
}
