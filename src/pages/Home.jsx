import { useEffect, useRef } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
} from 'lucide-react'
import { motion } from 'framer-motion'

import Navbar from '../components/Navbar'

import asphaltVideo from '../assets/videos/asphalt.mp4'
import projectVideo from '../assets/videos/process-paving-v2.mp4'

const projectOne =
  'https://images.unsplash.com/photo-1780897524686-2a8dac3b5758?auto=format&fit=crop&w=1800&q=88'

const projectTwo =
  'https://images.unsplash.com/photo-1773018076638-75caa7558a63?auto=format&fit=crop&w=1800&q=88'
import projectThree from '../assets/images/project-3.jpg'
import drivewayImage from '../assets/images/service-driveway.jpg'
import commercialImage from '../assets/images/service-commercial.jpg'
import repairImage from '../assets/images/service-repair.jpg'

import './Home.css'

const services = [
  {
    number: '01',
    title: 'Driveway Paving',
    description:
      'Fresh asphalt driveways built for clean curb appeal, daily traffic and lasting performance.',
    image: drivewayImage,
  },
  {
    number: '02',
    title: 'Commercial Paving',
    description:
      'Parking lots and commercial surfaces built around the traffic and demands of your property.',
    image: commercialImage,
  },
  {
    number: '03',
    title: 'Repair + Resurfacing',
    description:
      'Restore worn pavement, damaged surfaces and aging asphalt without starting from zero.',
    image: repairImage,
  },
]

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
    },
  },
}

function Home() {
  const heroVideoRef = useRef(null)
  const processVideoRef = useRef(null)

  useEffect(() => {
    const videos = [heroVideoRef.current, processVideoRef.current].filter(Boolean)

    const playVideos = () => {
      videos.forEach((video) => {
        video.muted = true
        video.defaultMuted = true
        video.playsInline = true

        const playPromise = video.play()

        if (playPromise !== undefined) {
          playPromise.catch(() => {})
        }
      })
    }

    playVideos()

    const handleInteraction = () => {
      playVideos()
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideos()
      }
    }

    window.addEventListener('scroll', handleInteraction, {
      passive: true,
      once: true,
    })

    window.addEventListener('touchstart', handleInteraction, {
      passive: true,
      once: true,
    })

    window.addEventListener('pointerdown', handleInteraction, {
      passive: true,
      once: true,
    })

    window.addEventListener('pageshow', playVideos)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('pointerdown', handleInteraction)
      window.removeEventListener('pageshow', playVideos)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <main className="home-page">
      <section className="home-hero">
        <Navbar />

        <div className="home-hero__media">
          <video
            ref={heroVideoRef}
            className="home-hero__video"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            onCanPlay={(event) => {
              event.currentTarget.muted = true
              event.currentTarget.play().catch(() => {})
            }}
          >
            <source src={asphaltVideo} type="video/mp4" />
          </video>

          <div className="home-hero__overlay" />
          <div className="home-hero__grain" />
        </div>

        <motion.div
          className="home-hero__content"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div className="home-hero__eyebrow" variants={reveal}>
            <span className="home-hero__eyebrow-number">901</span>
            <span className="home-hero__eyebrow-line" />
            <span className="home-hero__eyebrow-text">
              MEMPHIS ASPHALT / COMMERCIAL + RESIDENTIAL
            </span>
          </motion.div>

          <motion.div className="home-hero__headline-wrap" variants={reveal}>
            <h1 className="home-hero__headline">
              <span>BUILT FOR</span>
              <span>TENNESSEE.</span>
            </h1>
          </motion.div>

          <motion.div className="home-hero__bottom" variants={reveal}>
            <div className="home-hero__intro">
              <p>
                Real crews. Real equipment. Asphalt paving built for Memphis
                homes, businesses and high-traffic properties.
              </p>

              <div className="home-hero__actions">
                <a
                  href="tel:9014937651"
                  className="home-hero__primary-button"
                >
                  <span>Get a free quote</span>
                  <ArrowUpRight size={18} />
                </a>

                <a href="#featured-work" className="home-hero__work-link">
                  <span>See the work</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="home-hero__services">
              <div className="home-hero__service">
                <span>01</span>
                <p>Parking Lots</p>
              </div>

              <div className="home-hero__service">
                <span>02</span>
                <p>Driveways</p>
              </div>

              <div className="home-hero__service">
                <span>03</span>
                <p>Commercial Jobs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="home-hero__edge" aria-hidden="true" />
      </section>

      <section className="home-work" id="featured-work">
        <motion.div
          className="home-process"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={stagger}
        >
          <motion.div className="home-process__top" variants={reveal}>
            <div className="home-process__label">
              <span>01</span>
              <div />
              <p>FROM PREP TO FINISH</p>
            </div>

            <span className="home-process__location">
              MEMPHIS / TENNESSEE / 901
            </span>
          </motion.div>

          <motion.div className="home-process__heading" variants={reveal}>
            <h2>
              <span>SEE THE</span>
              <span>PROCESS.</span>
            </h2>

            <p>
              Great pavement starts before the final surface goes down. See the
              equipment, crew and preparation behind Davis Asphalt projects
              across Memphis.
            </p>
          </motion.div>

          <motion.div className="home-process__video" variants={reveal}>
            <video
              ref={processVideoRef}
              autoPlay
              muted
              defaultMuted
              loop
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              onCanPlay={(event) => {
                event.currentTarget.muted = true
                event.currentTarget.play().catch(() => {})
              }}
            >
              <source src={projectVideo} type="video/mp4" />
            </video>

            <div className="home-process__video-overlay" />

            <div className="home-process__video-info">
              <div>
                <span>PROCESS / 01</span>
                <strong>
                  FROM BASE
                  <br />
                  TO BLACKTOP.
                </strong>
              </div>

              <span className="home-process__watch">
                DAVIS ASPHALT / IN MOTION
              </span>
            </div>
          </motion.div>

          <motion.div className="home-process__gallery-label" variants={reveal}>
            <span>SELECTED WORK</span>
            <span>REAL PROJECTS / 901</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-work__gallery"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
          variants={stagger}
        >
          {[
            [projectOne, 'Commercial Paving', 'Memphis, Tennessee'],
            [projectTwo, 'Parking Lots', '901 Area'],
            [projectThree, 'Driveways', 'Tennessee'],
          ].map(([image, title, location], index) => (
            <motion.article
              className={`home-work__item home-work__item--${index + 1}`}
              key={title}
              variants={reveal}
            >
              <div className="home-work__media">
                <img src={image} alt={`Davis Asphalt ${title} project`} />
              </div>

              <div className="home-work__caption">
                <div>
                  <span>0{index + 1}</span>
                  <strong>{title}</strong>
                </div>
                <p>{location}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="home-services">
        <motion.div
          className="home-services__heading"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="home-services__label" variants={reveal}>
            <span>02</span>
            <div />
            <p>WHAT WE DO</p>
          </motion.div>

          <motion.div className="home-services__heading-grid" variants={reveal}>
            <h2>
              BUILT TO
              <br />
              TAKE TRAFFIC.
            </h2>

            <div className="home-services__heading-copy">
              <p>
                Residential driveways, commercial pavement and resurfacing
                handled with the equipment and preparation the job calls for.
              </p>

              <a href="/services">
                Explore all services
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="home-services__grid">
          {services.map((service, index) => (
            <motion.article
              className={`home-service-card home-service-card--${index + 1}`}
              key={service.number}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a href="/services" className="home-service-card__media">
                <img src={service.image} alt={service.title} />
                <span className="home-service-card__number">
                  {service.number}
                </span>
              </a>

              <div className="home-service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="/services" className="home-service-card__link">
                  View service
                  <ArrowRight size={17} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="home-standard">
        <motion.div
          className="home-standard__inner"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="home-standard__top" variants={reveal}>
            <div className="home-standard__label">
              <span>DAVIS STANDARD / 901</span>
            </div>

            <p>
              The difference is visible before the crew ever leaves the
              property.
            </p>
          </motion.div>

          <motion.div className="home-standard__statement" variants={reveal}>
            <h2>
              DONE RIGHT.
              <br />
              <span>FROM THE GROUND UP.</span>
            </h2>
          </motion.div>

          <motion.div className="home-standard__bottom" variants={reveal}>
            <div className="home-standard__principles">
              <div>
                <Check size={16} />
                <span>Proper preparation</span>
              </div>
              <div>
                <Check size={16} />
                <span>Professional equipment</span>
              </div>
              <div>
                <Check size={16} />
                <span>Clean finished surfaces</span>
              </div>
              <div>
                <Check size={16} />
                <span>Residential + commercial</span>
              </div>
            </div>

            <a href="/about" className="home-standard__about">
              <span>About Davis Asphalt</span>
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="home-territory">
        <div className="home-territory__road-line" aria-hidden="true" />

        <motion.div
          className="home-territory__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div className="home-territory__eyebrow" variants={reveal}>
            <MapPin size={16} />
            <span>MEMPHIS / TENNESSEE</span>
          </motion.div>

          <motion.h2 variants={reveal}>
            LOCAL ROADS.
            <br />
            LOCAL WORK.
          </motion.h2>

          <motion.div className="home-territory__lower" variants={reveal}>
            <p>
              Serving Memphis and surrounding Tennessee communities with
              paving solutions built for local homes, businesses and
              properties.
            </p>

            <div className="home-territory__coords">
              <span>35.1495° N</span>
              <span>90.0490° W</span>
              <span>AREA / 901</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="home-territory__state-text">TENNESSEE</div>
      </section>

      <section className="home-cta">
        <motion.div
          className="home-cta__inner"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={stagger}
        >
          <motion.div className="home-cta__top" variants={reveal}>
            <span>HAVE A SURFACE THAT NEEDS WORK?</span>
            <span>MEMPHIS, TN / 901</span>
          </motion.div>

          <motion.h2 variants={reveal}>
            LET&apos;S GET IT
            <br />
            <span>PAVED.</span>
          </motion.h2>

          <motion.div className="home-cta__bottom" variants={reveal}>
            <p>
              Tell us about your driveway, parking lot, commercial property or
              asphalt project.
            </p>

            <div className="home-cta__actions">
              <a href="tel:9014937651" className="home-cta__call">
                <Phone size={18} />
                <div>
                  <span>Call Davis Asphalt</span>
                  <strong>901-493-7651</strong>
                </div>
              </a>

              <a href="/about" className="home-cta__quote">
                Get a free quote
                <ArrowUpRight size={19} />
              </a>
            </div>
          </motion.div>

          <motion.div className="home-cta__footer" variants={reveal}>
            <strong>DAVIS ASPHALT</strong>
            <span>Memphis, Tennessee</span>
            <span>© 2026 Davis Asphalt LLC</span>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        className="home-mobile-actions"
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="tel:9014937651" className="home-mobile-actions__call">
          <Phone size={17} />
          <span>Call now</span>
        </a>

        <a href="#featured-work" className="home-mobile-actions__work">
          <span>See work</span>
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </main>
  )
}

export default Home