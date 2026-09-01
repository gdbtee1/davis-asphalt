import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  Play,
} from 'lucide-react'

import Navbar from '../components/Navbar'

import asphaltVideo from '../assets/videos/asphalt.mp4'
import projectVideo from '../assets/videos/project-work.mp4'

import projectOne from '../assets/images/project-1.jpg'
import projectTwo from '../assets/images/project-2.jpg'
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

function Home() {
  return (
    <main className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">
        <Navbar />

        <div className="home-hero__media">
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src={asphaltVideo}
              type="video/mp4"
            />
          </video>

          <div className="home-hero__overlay" />
          <div className="home-hero__grain" />
        </div>

        <div className="home-hero__side-label">
          <span>MEMPHIS</span>
          <span className="home-hero__side-line" />
          <span>TENNESSEE</span>
        </div>

        <div className="home-hero__content">

          <div className="home-hero__eyebrow">
            <span className="home-hero__eyebrow-number">
              901
            </span>

            <span className="home-hero__eyebrow-line" />

            <span className="home-hero__eyebrow-text">
              COMMERCIAL + RESIDENTIAL ASPHALT
            </span>
          </div>

          <div className="home-hero__headline-wrap">
            <h1 className="home-hero__headline">
              <span>BUILT FOR</span>
              <span>TENNESSEE.</span>
            </h1>

            <div
              className="home-hero__headline-accent"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="home-hero__bottom">

            <div className="home-hero__intro">
              <p>
                Asphalt paving, parking lots, driveways
                and commercial surfaces built for the
                roads, businesses and properties of
                Memphis and surrounding Tennessee
                communities.
              </p>

              <div className="home-hero__actions">

                <a
                  href="tel:9014937651"
                  className="home-hero__primary-button"
                >
                  <span>Get an estimate</span>
                  <ArrowUpRight size={18} />
                </a>

                <button
                  type="button"
                  className="home-hero__video-button"
                  aria-label="Watch Davis Asphalt work"
                >
                  <span className="home-hero__play">
                    <Play
                      size={14}
                      fill="currentColor"
                    />
                  </span>

                  <span>Watch our work</span>
                </button>

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

          </div>
        </div>
      </section>

      {/* =====================================================
          WORK
      ===================================================== */}

      <section
        className="home-work"
        id="featured-work"
      >

        <div className="home-work__intro">

          <div className="home-work__label">
            <span>01</span>
            <div />

            <p>
              DAVIS ASPHALT / MEMPHIS TENNESSEE
            </p>
          </div>

          <h2>
            <span>PAVEMENT</span>
            <span>THAT WORKS.</span>
          </h2>

          <div className="home-work__intro-bottom">

            <p>
              Real crews. Real equipment. Real pavement.
              A look at the work being completed across
              Memphis and surrounding communities.
            </p>

            <span className="home-work__location">
              35.1495° N
              <br />
              90.0490° W
            </span>

          </div>
        </div>

        <div className="home-work__gallery">

          <article className="home-work__item">

            <div className="home-work__media">
              <img
                src={projectOne}
                alt="Davis Asphalt paving project"
              />
            </div>

            <div className="home-work__caption">

              <div>
                <span>01</span>
                <strong>Commercial Paving</strong>
              </div>

              <p>Memphis, Tennessee</p>

            </div>
          </article>

          <article className="home-work__item">

            <div className="home-work__media">
              <img
                src={projectTwo}
                alt="Asphalt parking lot project"
              />
            </div>

            <div className="home-work__caption">

              <div>
                <span>02</span>
                <strong>Parking Lots</strong>
              </div>

              <p>901 Area</p>

            </div>
          </article>

          <article className="home-work__item">

            <div className="home-work__media">
              <img
                src={projectThree}
                alt="Davis Asphalt driveway project"
              />
            </div>

            <div className="home-work__caption">

              <div>
                <span>03</span>
                <strong>Driveways</strong>
              </div>

              <p>Tennessee</p>

            </div>
          </article>

        </div>

        <div className="home-work__feature">

          <div className="home-work__feature-media">

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src={projectVideo}
                type="video/mp4"
              />
            </video>

            <div className="home-work__feature-shade" />

            <div className="home-work__feature-copy">

              <span>
                DAVIS ASPHALT / IN MOTION
              </span>

              <h3>
                BUILT ON
                <br />
                THE JOB.
              </h3>

            </div>

          </div>

          <div className="home-work__feature-footer">

            <p>
              Asphalt paving and maintenance
              throughout Memphis, Tennessee.
            </p>

            <a href="/projects">
              View all projects
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="home-services">

        <div className="home-services__heading">

          <div className="home-services__label">
            <span>02</span>
            <div />

            <p>WHAT WE DO</p>
          </div>

          <div className="home-services__heading-grid">

            <h2>
              PAVING THE
              <br />
              WAY FORWARD.
            </h2>

            <div className="home-services__heading-copy">

              <p>
                From residential driveways to high-traffic
                commercial pavement, Davis Asphalt handles
                the surface from preparation through the
                finished job.
              </p>

              <a href="/services">
                Explore all services
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>
        </div>

        <div className="home-services__grid">

          {services.map((service) => (
            <article
              className="home-service-card"
              key={service.number}
            >

              <a
                href="/services"
                className="home-service-card__media"
              >
                <img
                  src={service.image}
                  alt={service.title}
                />

                <span className="home-service-card__number">
                  {service.number}
                </span>
              </a>

              <div className="home-service-card__body">

                <h3>{service.title}</h3>

                <p>
                  {service.description}
                </p>

                <a
                  href="/services"
                  className="home-service-card__link"
                >
                  View service
                  <ArrowRight size={17} />
                </a>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================================
          CREDIBILITY
      ===================================================== */}

      <section className="home-standard">

        <div className="home-standard__top">

          <div className="home-standard__label">
            <span>DAVIS STANDARD</span>
          </div>

          <p>
            The difference is visible before
            the crew ever leaves the property.
          </p>

        </div>

        <div className="home-standard__statement">

          <h2>
            DONE RIGHT.
            <br />
            <span>FROM THE GROUND UP.</span>
          </h2>

        </div>

        <div className="home-standard__bottom">

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

          <a
            href="/about"
            className="home-standard__about"
          >
            <span>
              About Davis Asphalt
            </span>

            <ArrowUpRight size={20} />
          </a>

        </div>

      </section>

      {/* =====================================================
          TENNESSEE / SERVICE AREA
      ===================================================== */}

      <section className="home-territory">

        <div className="home-territory__flag">
          <span />
          <span />
          <span />
        </div>

        <div className="home-territory__content">

          <div className="home-territory__eyebrow">
            <MapPin size={16} />
            <span>MEMPHIS / TENNESSEE</span>
          </div>

          <h2>
            LOCAL ROADS.
            <br />
            LOCAL WORK.
          </h2>

          <div className="home-territory__lower">

            <p>
              Serving Memphis and surrounding Tennessee
              communities with paving solutions built for
              local homes, businesses and properties.
            </p>

            <div className="home-territory__coords">
              <span>35.1495° N</span>
              <span>90.0490° W</span>
              <span>AREA / 901</span>
            </div>

          </div>

        </div>

        <div className="home-territory__state-text">
          TENNESSEE
        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-cta">

        <div className="home-cta__top">

          <span>
            HAVE A SURFACE THAT NEEDS WORK?
          </span>

          <span>
            MEMPHIS, TN / 901
          </span>

        </div>

        <h2>
          LET'S GET IT
          <br />
          <span>PAVED.</span>
        </h2>

        <div className="home-cta__bottom">

          <p>
            Tell us about your driveway, parking lot,
            commercial property or asphalt project.
          </p>

          <div className="home-cta__actions">

            <a
              href="tel:9014937651"
              className="home-cta__call"
            >
              <Phone size={18} />

              <div>
                <span>Call Davis Asphalt</span>
                <strong>901-493-7651</strong>
              </div>
            </a>

            <a
              href="/about"
              className="home-cta__quote"
            >
              Request an estimate
              <ArrowUpRight size={19} />
            </a>

          </div>

        </div>

        <div className="home-cta__footer">

          <strong>DAVIS ASPHALT</strong>

          <span>
            Memphis, Tennessee
          </span>

          <span>
            © 2026 Davis Asphalt LLC
          </span>

        </div>

      </section>

    </main>
  )
}

export default Home