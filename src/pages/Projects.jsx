
import {
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Play,
  Ruler,
  Sparkles,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import { divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

import Navbar from '../components/Navbar'

import projectOne from '../assets/images/projectpage-1.jpg'
import projectTwo from '../assets/images/projectpage-2.jpg'
import projectThree from '../assets/images/projectpage-3.jpg'

import projectVideoOne from '../assets/videos/project-commercial.mp4'
import projectVideoTwo from '../assets/videos/project-driveway.mp4'
import careVideo from '../assets/videos/on-site-care.mp4'

import './Projects.css'
import { useMemo, useState } from 'react'
const projectLocations = [
  {
    id: 1,
    city: 'Memphis',
    position: [35.1495, -90.0490],
    type: 'Commercial Parking Lot',
    date: 'Recent Project',
    image: projectOne,
  },
  {
    id: 2,
    city: 'Germantown',
    position: [35.0868, -89.8101],
    type: 'Residential Driveway',
    date: 'Recent Project',
    image: projectThree,
  },
  {
    id: 3,
    city: 'Bartlett',
    position: [35.2045, -89.8740],
    type: 'Asphalt Repair',
    date: 'Recent Project',
    image: projectTwo,
  },
]

const projectMarker = divIcon({
  className: 'projects-map__leaflet-marker',
  html: '<span><b>DA</b></span>',
  iconSize: [46, 46],
  iconAnchor: [23, 23],
  popupAnchor: [0, -25],
})

const tennesseeBounds = [
  [34.95, -90.35],
  [36.75, -81.55],
]

const projects = [
  {
    id: 1,
    category: 'commercial',
    label: 'Commercial Parking Lots',
    title: 'Commercial Surface Renewal',
    location: 'Memphis, TN',
    scope: 'Parking lot paving + finish work',
    time: '1–2 Days',
    video: projectVideoOne,
    before: projectTwo,
    after: projectOne,
  },
  {
    id: 2,
    category: 'residential',
    label: 'Residential Driveways',
    title: 'Residential Driveway Finish',
    location: 'Memphis Area',
    scope: 'Prep + asphalt driveway installation',
    time: '1 Day',
    video: projectVideoTwo,
    before: projectTwo,
    after: projectThree,
  },
  {
    id: 3,
    category: 'repair',
    label: 'Sealcoating & Repair',
    title: 'Worn Surface Restoration',
    location: '901 Area',
    scope: 'Repair + surface restoration',
    time: 'Project Dependent',
    video: projectVideoOne,
    before: projectTwo,
    after: projectOne,
  },
]

const filters = [
  ['all', 'All Projects'],
  ['residential', 'Residential Driveways'],
  ['commercial', 'Commercial Parking Lots'],
  ['repair', 'Sealcoating & Repair'],
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

function ProjectMap() {
  return (
    <div className="projects-map__stage">
      <div className="projects-map__outline-label">
        <span>WEST</span>
        <strong>TENNESSEE</strong>
        <span>EAST</span>
      </div>

      <div className="projects-map__silhouette">
        <MapContainer
          className="projects-map__canvas"
          bounds={tennesseeBounds}
          boundsOptions={{ padding: [12, 12] }}
          maxBounds={[
            [33.8, -91.5],
            [37.8, -80.4],
          ]}
          maxBoundsViscosity={0.72}
          minZoom={6}
          maxZoom={15}
          zoomSnap={0.25}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ZoomControl position="bottomright" />

          {projectLocations.map((job) => (
            <Marker
              key={job.id}
              position={job.position}
              icon={projectMarker}
            >
              <Popup
                className="projects-map__leaflet-popup"
                closeButton={false}
                maxWidth={270}
                minWidth={220}
              >
                <div className="projects-map__popup-card">
                  <img
                    src={job.image}
                    alt={`${job.city} asphalt project`}
                  />

                  <div>
                    <small>Davis Asphalt / 901</small>
                    <strong>{job.city}, TN</strong>
                    <span>{job.type}</span>
                    <p>{job.date}</p>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="projects-map__silhouette-border" aria-hidden="true" />
      </div>

      <div className="projects-map__mobile-key">
        {projectLocations.map((job) => (
          <div key={job.id}>
            <span />
            <p>
              <strong>{job.city}</strong>
              {job.type}
            </p>
          </div>
        ))}
      </div>

      <div className="projects-map__footer">
        <span>MEMPHIS / TENNESSEE / 901</span>
        <span>DRAG TO MOVE / TAP A PIN</span>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [showBefore, setShowBefore] = useState(false)

  return (
    <motion.article
      layout
      className="project-case"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="project-case__media">
        <AnimatePresence mode="wait">
          {showBefore ? (
            <motion.img
              key="before"
              src={project.before}
              alt={`${project.title} before`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          ) : (
            <motion.video
              key="video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <source src={project.video} type="video/mp4" />
            </motion.video>
          )}
        </AnimatePresence>

        <div className="project-case__media-shade" />

        <span className="project-case__tag">{project.label}</span>

        <button
          className="project-case__toggle"
          onClick={() => setShowBefore((value) => !value)}
          type="button"
        >
          {showBefore ? 'Show finished result' : 'View before'}
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="project-case__content">
        <div className="project-case__heading">
          <span>0{project.id}</span>
          <h3>{project.title}</h3>
        </div>

        <div className="project-case__specs">
          <div>
            <MapPin size={15} />
            <span>Location</span>
            <strong>{project.location}</strong>
          </div>

          <div>
            <Ruler size={15} />
            <span>Scope</span>
            <strong>{project.scope}</strong>
          </div>

          <div>
            <Clock3 size={15} />
            <span>Time to Complete</span>
            <strong>{project.time}</strong>
          </div>
        </div>

        <a href="tel:9014937651" className="project-case__quote">
          Get a quote for a project like this
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.article>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')

  const visibleProjects = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <main className="projects-page">
      <Navbar />

      <section className="projects-intro">
        <motion.div
          className="projects-intro__copy"
          initial="hidden"
          animate="show"
          variants={reveal}
        >
          <div className="projects-kicker">
            <span>901</span>
            <div />
            <p>PROJECTS / TENNESSEE</p>
          </div>

          <h1>
            WORK YOU
            <span>CAN SEE.</span>
          </h1>

          <p>
            Real pavement, real equipment and real finished surfaces. Explore
            Davis Asphalt work by location, project type and result.
          </p>
        </motion.div>

        <motion.div
          className="projects-intro__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          <span>MEMPHIS / TENNESSEE</span>
          <span>COMMERCIAL + RESIDENTIAL</span>
          <span>901-493-7651</span>
        </motion.div>
      </section>

      <section className="projects-map">
        <div className="projects-map__heading">
          <div>
            <span>01 / LOCAL PROOF</span>
            <h2>
              TENNESSEE
              <br />
              JOB MAP.
            </h2>
          </div>

          <p>
            Explore Tennessee on a real interactive map. Drag, zoom and tap a Davis Asphalt marker to preview the project.
          </p>
        </div>

        <ProjectMap />

        <p className="projects-map__disclaimer">
          Map locations are presentation placeholders until exact completed-job
          addresses and dates are confirmed.
        </p>
      </section>

      <section className="projects-work">
        <div className="projects-work__top">
          <div>
            <span>02 / SELECTED WORK</span>
            <h2>PROJECT CASE STUDIES.</h2>
          </div>

          <p>
            Filter the work by the surface you need, then open each case study
            to compare the condition before and the finished result.
          </p>
        </div>

        <div className="projects-filter" role="tablist" aria-label="Project filters">
          {filters.map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={filter === value ? 'is-active' : ''}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="projects-cases">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="projects-care">
        <div className="projects-care__media">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={careVideo} type="video/mp4" />
          </video>

          <div className="projects-care__shade" />

          <div className="projects-care__play">
            <Play size={18} fill="currentColor" />
          </div>
        </div>

        <motion.div
          className="projects-care__copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          variants={reveal}
        >
          <span>03 / ON-SITE CARE</span>

          <h2>
            THE JOB ISN’T DONE
            <br />
            UNTIL THE SITE IS CLEAN.
          </h2>

          <p>
            Professional work is more than the asphalt. It’s protecting the
            surrounding property, keeping the site controlled and leaving the
            area clean when the equipment rolls out.
          </p>

          <div className="projects-care__checks">
            <div>
              <Check size={15} />
              <span>Clean work zones</span>
            </div>
            <div>
              <Check size={15} />
              <span>Property protection</span>
            </div>
            <div>
              <Check size={15} />
              <span>Professional equipment</span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="projects-cta">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <span>YOUR PROPERTY / NEXT</span>

          <h2>
            SEE A PROJECT
            <br />
            YOU LIKE?
            <strong>LET’S BUILD YOURS NEXT.</strong>
          </h2>

          <a href="tel:9014937651">
            Request a free estimate
            <ArrowRight size={18} />
          </a>
        </motion.div>

        <Sparkles className="projects-cta__mark" size={30} />
      </section>
    </main>
  )
}

export default Projects
