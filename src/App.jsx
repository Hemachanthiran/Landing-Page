import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink, ChevronRight } from 'lucide-react';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // ====================
  // CONFIGURATION OBJECT
  // ====================
  const config = {
    // Personal Information
    personal: {
      name: 'Chandru',
      title: 'Graphic Designer & Research Enthusiast',
      shortBio: 'B.Tech Pharmaceutical Technology student exploring the intersection of design and science.',
      longBio: 'I\'m a B.Tech Pharmaceutical Technology student with a passion for graphic design, visual communication, and research. My work focuses on creating meaningful visual solutions that bridge the gap between scientific concepts and user experience. I believe in the power of thoughtful design to communicate complex ideas simply.',
      email: 'your.email@example.com',
      phone: '+91 7358419133'
    },

    // Social & Profile Links (with brand colors)
    links: [
      {
        name: 'Instagram',
        icon: 'instagram',
        url: 'https://instagram.com/yourprofile',
        color: '#E4405F',
        backgroundColor: '#E4405F'
      },
      {
        name: 'Behance',
        icon: 'behance',
        url: 'https://behance.net/yourprofile',
        color: '#1473E6',
        backgroundColor: '#1473E6'
      },
      {
        name: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://linkedin.com/in/yourprofile',
        color: '#0A66C2',
        backgroundColor: '#0A66C2'
      },
      {
        name: 'ResearchGate',
        icon: 'researchgate',
        url: 'https://researchgate.net/profile/yourprofile',
        color: '#00D084',
        backgroundColor: '#00D084'
      },
      {
        name: 'GitHub',
        icon: 'github',
        url: 'https://github.com/yourprofile',
        color: '#1F2937',
        backgroundColor: '#1F2937'
      }
    ],

    // Portfolio Links
    portfolio: [
      {
        id: 1,
        name: 'Behance Portfolio',
        description: 'View my complete design portfolio and recent projects.',
        url: 'https://behance.net/yourprofile',
        icon: 'behance',
        color: '#1473E6'
      },
      {
        id: 2,
        name: 'Graphic Design Projects',
        description: 'Collection of branding, UI, and visual design work.',
        url: 'https://behance.net/yourprofile',
        icon: 'behance',
        color: '#1473E6'
      },
      {
        id: 3,
        name: 'Research Publications',
        description: 'Papers and research contributions on ResearchGate.',
        url: 'https://researchgate.net/profile/yourprofile',
        icon: 'researchgate',
        color: '#00D084'
      },
      {
        id: 4,
        name: 'GitHub Projects',
        description: 'Web and coding projects available on GitHub.',
        url: 'https://github.com/yourprofile',
        icon: 'github',
        color: '#1F2937'
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      instagram: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        </svg>
      ),
      linkedin: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.413-.103.25-.129.598-.129.946v5.446h-3.554s.05-8.841 0-9.753h3.554v1.381c-.009.015-.021.029-.033.042h.033v-.042c.43-.664 1.199-1.61 2.919-1.61 2.135 0 3.731 1.395 3.731 4.397v5.585zM5.337 9.341c-1.144 0-1.915-.758-1.915-1.71 0-.956.77-1.71 1.954-1.71 1.184 0 1.915.754 1.94 1.71 0 .952-.756 1.71-1.979 1.71zm1.581 11.111H3.564V9.599h3.354v10.853zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      github: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      behance: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.938 4.503c.702 0 1.217-.215 1.517-.645.315-.447.449-.972.449-1.646 0-.674-.134-1.199-.449-1.646C8.155.215 7.64 0 6.938 0H0v16.27h6.938c.94 0 1.649-.27 2.122-.803.449-.512.673-1.337.673-2.474h-2.953c0 .447-.035.805-.138 1.075-.104.239-.29.448-.545.552-.256.104-.576.16-.949.16H3.087V8.717h3.592c.373 0 .693.058.949.16.256.105.441.314.545.553.103.27.138.627.138 1.074h2.953c0-1.137-.224-1.962-.673-2.474-.473-.533-1.182-.803-2.122-.803H3.087V4.503h3.851zM17.007 4.736c-.246-.269-.616-.404-1.043-.404-.427 0-.796.135-1.042.404-.246.269-.369.643-.369 1.116h4.82c0-.473-.123-.847-.369-1.116h-.997zm-.369 3.233h2.953c0 .551-.115 1.025-.314 1.42-.199.396-.506.704-.89.882-.384.179-.84.268-1.363.268-.511 0-.951-.08-1.331-.269-.381-.188-.681-.502-.859-.896-.201-.422-.314-.937-.314-1.542 0-.605.113-1.12.314-1.542.178-.394.478-.708.859-.896.38-.189.82-.268 1.331-.268.616 0 1.156.164 1.596.492.44.328.733.804.858 1.42h3.024c-.269-1.363-1.006-2.408-2.212-3.083-1.206-.675-2.731-1.013-4.574-1.013-1.384 0-2.604.255-3.655.764-1.051.509-1.853 1.237-2.404 2.183-.551.945-.826 2.078-.826 3.397 0 1.319.275 2.452.826 3.397.551.946 1.353 1.674 2.404 2.183 1.051.509 2.271.764 3.655.764 1.868 0 3.417-.397 4.636-1.19 1.219-.794 2.022-2.022 2.409-3.684h-3.024c-.128.615-.421 1.09-.861 1.419-.44.328-.98.492-1.596.492-.511 0-.951-.08-1.331-.269-.381-.188-.681-.502-.859-.896-.201-.422-.314-.937-.314-1.542 0-.605.113-1.12.314-1.542z" />
        </svg>
      ),
      researchgate: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.5 0h-15C2.01 0 0 2.01 0 4.5v15C0 21.99 2.01 24 4.5 24h15c2.49 0 4.5-2.01 4.5-4.5v-15C24 2.01 21.99 0 19.5 0zm-5.22 15.9c0 1.21-.98 2.19-2.19 2.19-1.21 0-2.19-.98-2.19-2.19 0-1.21.98-2.19 2.19-2.19 1.21 0 2.19.98 2.19 2.19zm3.99-5.91h-2.87c-.16-1.11-1.1-1.95-2.25-1.95-1.15 0-2.09.84-2.25 1.95H6.92v1.86h1.3c.16 1.11 1.1 1.95 2.25 1.95 1.15 0 2.09-.84 2.25-1.95h2.87v-1.86z" />
        </svg>
      )
    };
    return icons[iconName] || icons.behance;
  };

  const pages = {
    home: (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-4xl shadow-md border border-gray-300">
              👨‍💼
            </div>
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up" 
            style={{ animationDelay: '0.3s' }}
          >
            {config.personal.name}
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-6 animate-fade-in-up font-light" 
            style={{ animationDelay: '0.4s' }}
          >
            {config.personal.title}
          </p>
          <p 
            className="text-lg text-gray-600 mb-8 animate-fade-in-up leading-relaxed" 
            style={{ animationDelay: '0.5s' }}
          >
            {config.personal.shortBio}
          </p>
          <div 
            className="flex gap-4 justify-center mb-12 animate-fade-in-up flex-col sm:flex-row" 
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Social Links with Brand Colors */}
          <div 
            className="flex gap-6 justify-center animate-fade-in-up flex-wrap" 
            style={{ animationDelay: '0.7s' }}
          >
            {config.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 p-2 rounded-lg hover:bg-gray-100"
                aria-label={link.name}
                title={link.name}
              >
                <div style={{ color: link.color }}>
                  {getIcon(link.icon)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    ),

    about: (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in-down">About Me</h1>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p>{config.personal.longBio}</p>
            
            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 rounded-r-lg my-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✦ Design visual solutions for pharmaceutical and biotech concepts</li>
                <li>✦ Create engaging graphics and branding materials</li>
                <li>✦ Conduct and contribute to research projects</li>
                <li>✦ Communicate complex scientific ideas through design</li>
              </ul>
            </div>

            <p>I'm always interested in collaborating on projects that blend design thinking with scientific rigor. Whether it's creating compelling visuals for research presentations or developing comprehensive brand identities, I'm here to help bring your ideas to life.</p>
          </div>

          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2"
            >
              Explore My Work <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    ),

    portfolio: (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-down">Portfolio</h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Explore my work across design, research, and creative projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {config.portfolio.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-gray-300 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg" style={{ backgroundColor: item.color + '15' }}>
                    <div style={{ color: item.color }}>
                      {getIcon(item.icon)}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex items-center text-gray-900 font-semibold group-hover:gap-3 gap-1 transition-all">
                      View Project <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Direct Links Configuration */}
          <div className="pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-fade-in-up">Direct Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {config.links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 flex flex-col items-center gap-3 group animate-fade-in-up hover:border-gray-300"
                  style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                >
                  <div style={{ color: link.color }} className="group-hover:scale-110 transition-transform">
                    {getIcon(link.icon)}
                  </div>
                  <span className="font-semibold text-gray-900 text-center text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),

    contact: (
      <div className="min-h-screen py-20 px-4 flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-down">Get in Touch</h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            I'd love to hear from you. Feel free to reach out through any of these channels.
          </p>

          {/* Contact Information */}
          <div className="space-y-4 mb-12">
            {/* Email */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href={`mailto:${config.personal.email}`}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Mail className="text-gray-900" size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">{config.personal.email}</p>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
            </div>

            {/* Phone */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href={`tel:${config.personal.phone.replace(/\s/g, '')}`}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <svg className="text-gray-900 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">{config.personal.phone}</p>
                </div>
                <ExternalLink className="text-gray-400 group-hover:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Social Links */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Follow Me</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {config.links.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-gray-300 flex flex-col items-center gap-2 group animate-fade-in-up"
                style={{ animationDelay: `${0.5 + index * 0.08}s` }}
              >
                <div style={{ color: link.color }} className="group-hover:scale-110 transition-transform">
                  {getIcon(link.icon)}
                </div>
                <span className="text-sm font-semibold text-gray-900 text-center">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-600"></div>
            <span className="font-bold text-gray-900 text-lg">{config.personal.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {['home', 'about', 'portfolio', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`font-semibold transition-colors duration-300 capitalize ${
                  currentPage === page
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
            <div className="flex flex-col gap-4">
              {['home', 'about', 'portfolio', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setIsMenuOpen(false);
                  }}
                  className={`font-semibold transition-colors duration-300 capitalize text-left py-2 ${
                    currentPage === page
                      ? 'text-gray-900 pl-2 border-l-2 border-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {pages[currentPage]}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 {config.personal.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
