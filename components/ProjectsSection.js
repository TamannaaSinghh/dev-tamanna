'use client'

import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    index: '01',
    title: 'IMDB Clone',
    description:
      'A movie discovery app to search, browse, and explore films in real time using the TMDB API, with a responsive, fast-loading interface.',
    tech: ['React', 'TMDB API', 'CSS'],
    link: 'https://imdb-next-ebon.vercel.app/',
  },
  {
    index: '02',
    title: 'ChatWise',
    description:
      'A real-time chat application with live messaging, authentication, and persistent storage powered by a Firebase backend.',
    tech: ['React', 'Firebase', 'CSS'],
    link: 'https://chat-wise-six.vercel.app/',
  },
  {
    index: '03',
    title: '3D Web Experience',
    description:
      'An immersive 3D landing page integrating Spline scenes with React for interactive, motion-rich storytelling.',
    tech: ['React', 'Spline', '3D'],
    link: 'https://spline-model-hh4ql049w-tamanna-singhs-projects.vercel.app/',
  },
  {
    index: '04',
    title: 'QuantumFit — Gym Landing',
    description:
      'A bold, conversion-focused gym landing page with crisp layout, smooth interactions, and a fully responsive build.',
    tech: ['HTML', 'Tailwind', 'JavaScript'],
    link: 'https://tamannaasinghh.github.io/Gym-Website--TailwindCSS/',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="eyebrow">03 — Selected Work</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
              Things I&apos;ve built
            </h2>
          </div>
          <a
            href="https://github.com/TamannaaSinghh"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 self-start font-mono text-sm text-bone-dim transition-colors hover:text-lime sm:self-auto"
          >
            All projects on GitHub <FiArrowUpRight />
          </a>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group glass relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:border-lime/30"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-6 flex items-start justify-between">
                <span className="font-mono text-sm text-bone-faint">
                  {project.index}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-bone-dim transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                  <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-bone transition-colors duration-300 group-hover:text-lime">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-bone-dim">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-bone-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
