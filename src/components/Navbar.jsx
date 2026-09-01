import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`}
      >
        <div className="site-navbar__inner">
          <Link
            to="/"
            className="site-navbar__brand"
            onClick={closeMenu}
            aria-label="Davis Asphalt home"
          >
            <div className="site-navbar__mascot">
              <span className="site-navbar__helmet">DA</span>
            </div>

            <div className="site-navbar__brand-copy">
              <span className="site-navbar__brand-name">
                DAVIS
                <strong>ASPHALT</strong>
              </span>

              <span className="site-navbar__location">
                <span className="site-navbar__location-mark">
                  <span />
                  <span />
                  <span />
                </span>

                MEMPHIS, TENNESSEE
              </span>
            </div>
          </Link>

          <nav className="site-navbar__desktop-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `site-navbar__nav-link ${
                  isActive ? 'site-navbar__nav-link--active' : ''
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                `site-navbar__nav-link ${
                  isActive ? 'site-navbar__nav-link--active' : ''
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `site-navbar__nav-link ${
                  isActive ? 'site-navbar__nav-link--active' : ''
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `site-navbar__nav-link ${
                  isActive ? 'site-navbar__nav-link--active' : ''
                }`
              }
            >
              About
            </NavLink>
          </nav>

          <div className="site-navbar__desktop-actions">
            <a
              className="site-navbar__phone"
              href="tel:9014937651"
            >
              <Phone size={16} strokeWidth={2} />
              <span>901-493-7651</span>
            </a>

            <Link
              className="site-navbar__quote"
              to="/about"
            >
              Get a quote
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <button
            className="site-navbar__menu-button"
            type="button"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mobile-menu__panel"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{
                duration: 0.45,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <div className="mobile-menu__top">
                <Link
                  to="/"
                  className="mobile-menu__brand"
                  onClick={closeMenu}
                >
                  <div className="mobile-menu__brand-mark">
                    DA
                  </div>

                  <div>
                    <span className="mobile-menu__brand-name">
                      DAVIS ASPHALT
                    </span>
                    <span className="mobile-menu__brand-location">
                      MEMPHIS, TENNESSEE
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  className="mobile-menu__close"
                  aria-label="Close navigation"
                  onClick={closeMenu}
                >
                  <X size={26} />
                </button>
              </div>

              <div className="mobile-menu__state-line">
                <span>TN</span>
                <div />
                <p>901 AREA</p>
              </div>

              <nav className="mobile-menu__navigation">
                <NavLink to="/" onClick={closeMenu}>
                  <span>01</span>
                  Home
                </NavLink>

                <NavLink to="/services" onClick={closeMenu}>
                  <span>02</span>
                  Services
                </NavLink>

                <NavLink to="/projects" onClick={closeMenu}>
                  <span>03</span>
                  Projects
                </NavLink>

                <NavLink to="/about" onClick={closeMenu}>
                  <span>04</span>
                  About
                </NavLink>
              </nav>

              <div className="mobile-menu__bottom">
                <a
                  className="mobile-menu__call"
                  href="tel:9014937651"
                >
                  <span>Call Davis Asphalt</span>

                  <strong>
                    901-493-7651
                    <ArrowUpRight size={18} />
                  </strong>
                </a>

                <p>
                  Commercial jobs · Parking lots · Driveways
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar