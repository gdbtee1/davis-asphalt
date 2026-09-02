import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeDollarSign,
  Construction,
  HardHat,
  MapPin,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react'

import Navbar from '../components/Navbar'

import crewPhoto from '../assets/images/about-crew.jpg'
import completedProject from '../assets/images/about-completed.jpg'

import paverVideo from '../assets/videos/about-paver.mp4'
import rollerVideo from '../assets/videos/about-roller.mp4'
import trucksVideo from '../assets/videos/about-trucks.mp4'
import crewVideo from '../assets/videos/about-crew.mp4'

import './About.css'

const fleet = [
  {
    icon: Construction,
    title: 'The Paver',
    video: paverVideo,
    caption:
      'Consistent material placement helps create a smoother, stronger finished surface from the start.',
  },
  {
    icon: HardHat,
    title: 'The Roller',
    video: rollerVideo,
    caption:
      'Proper compaction is what turns fresh asphalt into a dense surface built to hold up under daily use.',
  },
  {
    icon: Truck,
    title: 'The Trucks',
    video: trucksVideo,
    caption:
      'Reliable material delivery keeps the job moving and helps the crew finish efficiently and cleanly.',
  },
]

const pillars = [
  {
    icon: BadgeDollarSign,
    title: 'Straightforward Local Estimates',
    copy:
      'Clear scopes, practical recommendations and pricing built around the actual job in front of us.',
  },
  {
    icon: Users,
    title: 'Crew-Driven Work',
    copy:
      'The work is handled by the people responsible for the final result—not hidden behind a generic corporate process.',
  },
  {
    icon: ShieldCheck,
    title: 'Respect for Your Property',
    copy:
      'We pay attention to the edges, landscaping, access points and cleanup because the surrounding property matters too.',
  },
]

const timeline = [
  {
    year: 'ROOTS',
    title: 'Built in Tennessee',
    copy:
      'Davis Asphalt was built around straightforward work, dependable service and taking pride in the finished surface.',
  },
  {
    year: 'GROWTH',
    title: 'Built for More',
    copy:
      'As the operation grew, the focus expanded from smaller residential work into larger paving and commercial projects.',
  },
  {
    year: 'TODAY',
    title: 'Serving the 901',
    copy:
      'Today, Davis Asphalt continues serving Memphis and surrounding Tennessee communities with residential and commercial paving.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

function About() {
  return (
    <main className="about-page">
      <Navbar />

      <section className="about-hero">
        <motion.div
          className="about-hero__copy"
          initial="hidden"
          animate="show"
          variants={reveal}
        >
          <div className="about-kicker">
            <span>901</span>
            <div />
            <p>ABOUT / DAVIS ASPHALT</p>
          </div>

          <h1>
            BUILT ON
            <span>TENNESSEE GRIT.</span>
          </h1>

          <p>
            Local paving, real equipment and a crew that stands behind the work.
            Davis Asphalt serves Memphis and surrounding Tennessee communities
            with a straightforward approach from estimate to cleanup.
          </p>

          <div className="about-hero__actions">
            <a href="tel:9014937651">
              Call Davis Asphalt
              <ArrowRight size={16} />
            </a>

            <span>
              <MapPin size={15} />
              Memphis, Tennessee
            </span>
          </div>
        </motion.div>

        <motion.div
          className="about-hero__media"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={crewPhoto}
          >
            <source src={crewVideo} type="video/mp4" />
          </video>

          <div className="about-hero__shade" />

          <div className="about-hero__stamp">
            <span>LOCAL CREW</span>
            <strong>MEMPHIS / TN</strong>
          </div>
        </motion.div>
      </section>

      <section className="about-fleet">
        <div className="about-section-heading">
          <div>
            <span>01 / OUR EQUIPMENT</span>
            <h2>
              FLEET &
              <br />
              FIREPOWER.
            </h2>
          </div>

          <p>
            Good paving depends on more than appearance. The right equipment
            helps control material placement, compaction and job-site efficiency.
          </p>
        </div>

        <div className="about-fleet__grid">
          {fleet.map(({ icon: Icon, title, video, caption }, index) => (
            <motion.article
              key={title}
              className="about-machine"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ delay: index * 0.08 }}
            >
              <div className="about-machine__media">
                <video autoPlay muted loop playsInline preload="metadata">
                  <source src={video} type="video/mp4" />
                </video>

                <div className="about-machine__shade" />

                <div className="about-machine__index">0{index + 1}</div>
              </div>

              <div className="about-machine__body">
                <div className="about-machine__title">
                  <Icon size={18} />
                  <h3>{title}</h3>
                </div>

                <p>{caption}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-pillars">
        <div className="about-pillars__intro">
          <span>02 / WHAT MATTERS</span>
          <h2>HOW WE SHOW UP.</h2>
        </div>

        <div className="about-pillars__grid">
          {pillars.map(({ icon: Icon, title, copy }, index) => (
            <motion.article
              key={title}
              className="about-pillar"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
              transition={{ delay: index * 0.08 }}
            >
              <div className="about-pillar__icon">
                <Icon size={24} />
              </div>

              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-roots">
        <div className="about-roots__heading">
          <span>03 / TENNESSEE ROOTS</span>
          <h2>
            LOCAL STORY.
            <br />
            CLEAR VALUES.
          </h2>
        </div>

        <div className="about-timeline">
          <div className="about-timeline__line" />

          {timeline.map((item, index) => (
            <motion.article
              key={item.year}
              className="about-timeline__item"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={reveal}
            >
              <div className="about-timeline__marker">
                <span>{index + 1}</span>
              </div>

              <div className="about-timeline__year">{item.year}</div>

              <div className="about-timeline__copy">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="about-roots__note">
          Historical dates and milestone counts can be added once confirmed by
          Davis Asphalt.
        </p>
      </section>

      <section className="about-cta">
        <div className="about-cta__media">
          <img
            src={completedProject}
            alt="Completed Davis Asphalt paving project"
          />
          <div className="about-cta__shade" />
        </div>

        <motion.div
          className="about-cta__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <span>WORK WITH US</span>

          <h2>
            NOW THAT YOU KNOW
            <br />
            OUR CREW,
            <strong>LET’S LOOK AT YOUR PAVEMENT.</strong>
          </h2>

          <p>
            Get a straightforward estimate for your driveway, parking lot or
            asphalt repair project.
          </p>

          <a href="tel:9014937651">
            Get an honest quote
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </main>
  )
}

export default About
