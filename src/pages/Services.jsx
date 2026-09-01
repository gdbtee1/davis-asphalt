import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Layers3,
  Phone,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'

import Navbar from '../components/Navbar'

import drivewayImage from '../assets/images/service-driveway.jpg'
import commercialImage from '../assets/images/service-commercial.jpg'
import repairImage from '../assets/images/service-repair.jpg'

import servicesHeroVideo from '../assets/videos/services-hero.mp4'

import './Services.css'

const services = [
  {
    number: '01',
    title: 'Residential Driveways',
    image: drivewayImage,
    video: servicesHeroVideo,
    points: ['Full base preparation', 'Clean edge work', 'Smooth final rolling'],
  },
  {
    number: '02',
    title: 'Commercial Paving',
    image: commercialImage,
    video: servicesHeroVideo,
    points: ['Parking lots + lanes', 'Heavy-traffic surfaces', 'Commercial site planning'],
  },
  {
    number: '03',
    title: 'Repair + Resurfacing',
    image: repairImage,
    video: servicesHeroVideo,
    points: ['Surface repair', 'Resurfacing options', 'Worn asphalt restoration'],
  },
]

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Site Assessment',
    copy: 'We inspect the surface, measure the area and evaluate the base before recommending the right approach.',
  },
  {
    icon: Layers3,
    number: '02',
    title: 'Prep + Paving',
    copy: 'The site is prepared correctly, hot mix is placed and the surface is compacted with professional equipment.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Finish + Clean Up',
    copy: 'Edges are finished, the work zone is cleaned and the new surface is left ready for proper curing.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)

  return (
    <div className="services-compare__frame">
      <div className="services-compare__image services-compare__image--before">
        <img src={repairImage} alt="Worn asphalt before paving work" />
        <span>Before</span>
      </div>

      <div
        className="services-compare__image services-compare__image--after"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={drivewayImage} alt="Finished asphalt surface after paving" />
        <span>After</span>
      </div>

      <div
        className="services-compare__divider"
        style={{ left: `${position}%` }}
        aria-hidden="true"
      >
        <div className="services-compare__handle">
          <span>‹</span>
          <span>›</span>
        </div>
      </div>

      <input
        className="services-compare__range"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Compare before and after paving images"
      />
    </div>
  )
}

function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <Navbar />

        <div className="services-hero__inner">
          <motion.div
            className="services-hero__copy"
            initial="hidden"
            animate="show"
            variants={reveal}
          >
            <div className="services-kicker">
              <span>901</span>
              <div />
              <p>ASPHALT SERVICES</p>
            </div>

            <h1>
              PAVING TENNESSEE
              <span>WITH PRECISION.</span>
            </h1>

            <p className="services-hero__intro">
              Driveways, parking lots and asphalt restoration built around
              proper preparation, clean execution and surfaces made to take
              real traffic.
            </p>

            <div className="services-hero__actions">
              <a href="tel:9014937651" className="services-button services-button--primary">
                Get a free estimate
                <ArrowRight size={17} />
              </a>

              <a href="#services-menu" className="services-button services-button--ghost">
                View services
              </a>
            </div>
          </motion.div>

          <motion.div
            className="services-hero__media"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <video className="services-hero__video" autoPlay muted loop playsInline preload="auto">
              <source src={servicesHeroVideo} type="video/mp4" />
            </video>

            <div className="services-hero__media-overlay" />

            <div className="services-hero__media-label">
              <span>REAL WORK / MEMPHIS</span>
              <strong>FROM BASE TO BLACKTOP.</strong>
            </div>
          </motion.div>
        </div>

        <div className="services-hero__angle" />
      </section>

      <section className="services-menu" id="services-menu">
        <div className="services-menu__intro">
          <div className="services-kicker">
            <span>01</span>
            <div />
            <p>WHAT WE DO</p>
          </div>

          <div className="services-menu__intro-grid">
            <h2>
              PICK THE
              <br />
              RIGHT SURFACE.
            </h2>

            <p>
              Choose the type of work you need. Each service is built around
              the condition of the property—not a one-size-fits-all package.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-menu-card"
              key={service.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              variants={reveal}
              transition={{ delay: index * 0.06 }}
            >
              <div className="service-menu-card__media">
                <img src={service.image} alt={service.title} />

                <video muted loop playsInline preload="metadata">
                  <source src={service.video} type="video/mp4" />
                </video>

                <span className="service-menu-card__number">
                  {service.number}
                </span>
              </div>

              <div className="service-menu-card__body">
                <h3>{service.title}</h3>

                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <Check size={14} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a href="tel:9014937651">
                  Ask about this service
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="services-compare">
        <motion.div
          className="services-compare__intro"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <div>
            <span>02 / THE DIFFERENCE</span>
            <h2>
              DRAG TO SEE
              <br />
              THE CHANGE.
            </h2>
          </div>

          <p>
            Move the slider across the surface to compare worn pavement with
            the clean finish a new asphalt job can create.
          </p>
        </motion.div>

        <BeforeAfterSlider />

        <p className="services-compare__note">
          Replace these comparison photos with a matched Davis Asphalt
          before-and-after set when available.
        </p>
      </section>

      <section className="services-process">
        <div className="services-process__top">
          <div className="services-kicker">
            <span>03</span>
            <div />
            <p>HOW WE WORK</p>
          </div>

          <h2>
            SIMPLE PROCESS.
            <br />
            SERIOUS WORK.
          </h2>
        </div>

        <div className="services-process__steps">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.article
                className="services-step"
                key={step.number}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
              >
                <div className="services-step__top">
                  <span>{step.number}</span>
                  <Icon size={22} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="services-lead">
        <motion.div
          className="services-lead__copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <span>FREE ESTIMATE / MEMPHIS TN</span>

          <h2>
            READY FOR A
            <br />
            SMOOTH SURFACE?
          </h2>

          <p>
            Tell Davis Asphalt what you need and we’ll start with the basics.
          </p>

          <a href="tel:9014937651" className="services-lead__phone">
            <Phone size={18} />
            901-493-7651
          </a>
        </motion.div>

        <motion.form
          className="services-lead__form"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            <span>Phone</span>
            <input type="tel" name="phone" placeholder="(901) 000-0000" />
          </label>

          <label>
            <span>Service needed</span>
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>Residential Driveway</option>
              <option>Commercial Paving</option>
              <option>Repair + Resurfacing</option>
            </select>
          </label>

          <button type="submit">
            Request free estimate
            <ArrowRight size={17} />
          </button>

          <p>
            No obligation. We’ll contact you about the property and next steps.
          </p>
        </motion.form>
      </section>
    </main>
  )
}

export default Services
