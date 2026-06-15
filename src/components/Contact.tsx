import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Hls from 'hls.js'
import { Github, Linkedin, Twitter, Dribbble } from 'lucide-react'

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Dribbble, label: 'Dribbble', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
  ]

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
    if (!marqueeRef.current) return

    const marquee = marqueeRef.current
    gsap.fromTo(
      marquee,
      { xPercent: 0 },
      {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      }
    )
  }, [])

  return (
    <section className="contact-section">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="contact-video"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="contact-overlay"></div>

      {/* Marquee */}
      <div className="contact-marquee-container">
        <div ref={marqueeRef} className="contact-marquee">
          {Array.from({ length: 10 }).map((_, idx) => (
            <span key={idx}>BUILDING THE FUTURE •</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="contact-content">
        <a href="mailto:hello@michaelsmith.com" className="contact-cta">
          <span className="contact-cta-content">Get in touch</span>
        </a>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-socials">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="footer-social-link"
              title={label}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="footer-status">
          <div className="footer-status-dot"></div>
          <span>Available for projects</span>
        </div>
      </div>
    </section>
  )
}
