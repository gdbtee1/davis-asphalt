import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <div className="site-footer__badge">DA</div>

          <div>
            <strong>DAVIS ASPHALT</strong>
            <span>MEMPHIS, TENNESSEE</span>
          </div>
        </div>

        <div className="site-footer__cta">
          <span>READY WHEN YOU ARE.</span>

          <h2>
            LET'S PAVE
            <strong>YOUR NEXT PROJECT.</strong>
          </h2>

          <a href="tel:9014937651">
            Get a free estimate
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="site-footer__grid">
        <div className="site-footer__column site-footer__column--intro">
          <p>
            Residential and commercial asphalt paving for Memphis and surrounding
            Tennessee communities.
          </p>

          <div className="site-footer__location">
            <MapPin size={15} />
            <span>Serving the 901 and surrounding areas</span>
          </div>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__label">Navigate</span>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__label">Services</span>

          <Link to="/services">Residential Driveways</Link>
          <Link to="/services">Commercial Paving</Link>
          <Link to="/services">Repairs & Resurfacing</Link>
        </div>

        <div className="site-footer__column">
          <span className="site-footer__label">Contact</span>

          <a href="tel:9014937651" className="site-footer__phone">
            <Phone size={14} />
            901-493-7651
          </a>

          <span>Memphis, Tennessee</span>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Davis Asphalt LLC</span>

        <span>LOCAL PAVING / TENNESSEE / 901</span>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          Back to top
          <ArrowUpRight size={13} />
        </button>
      </div>
    </footer>
  )
}

export default Footer
