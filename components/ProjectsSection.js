'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionMotif from './SectionMotif'

const projects = [
  {
    index: '01',
    title: 'Interview Prep AI',
    image: '/prepai.png',
    description:
      'Ace your next tech interview with an AI that listens — AI-generated questions, live voice mock interviews, and curated tutorials to sharpen every answer.',
    tech: ['Next.js', 'React.js', 'Voice AI', 'Groq / LLaMA', 'YouTube API', 'Google OAuth', 'Tailwind CSS'],
    link: 'https://prep-ai-sandy.vercel.app/login',
  },
  {
    index: '02',
    title: 'Raskrti Art',
    image: '/raskrtiart.png',
    description:
      'An e-commerce storefront for traditional Indian art — Madhubani, Pichwai and more — with a gallery, courses, and a smooth buying flow.',
    tech: ['Next.js', 'React.js', 'E-commerce UI', 'Tailwind CSS', 'Responsive Layouts'],
    link: 'https://raskrtiart.in/',
  },
  {
    index: '03',
    title: 'AI WorkForge',
    image: '/aiworkforge.png',
    description:
      'An AI workspace that turns rough ideas into polished emails in seconds, with tone control plus summarize, sentiment and classify tools.',
    tech: ['Next.js', 'React.js', 'Groq AI API', 'Supabase', 'Google OAuth', 'Prompt System', 'Tailwind CSS'],
    link: 'https://ai-workforge-gdqh.vercel.app/',
  },
  {
    index: '04',
    title: 'Trivantage',
    image: '/trivantage.png',
    description:
      'A brand site for a SEBI-registered boutique portfolio manager — focused, disciplined long-term wealth, told through clean editorial design.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Responsive UI', 'WordPress'],
    link: 'https://trivantagecapital.vercel.app/',
  },
  {
    index: '05',
    title: 'ChatWise',
    image: '/chatwise.png',
    description:
      'A fast, private real-time chat app with instant messaging, media sharing and seamless sync, powered by a Node.js and Express backend.',
    tech: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'Real-time Chat', 'Auth', 'Tailwind CSS'],
    link: 'https://chat-wise-six.vercel.app/',
  },
  {
    index: '06',
    title: 'AccuraCap',
    image: '/accuracap.png',
    description:
      'A polished marketing site for a boutique, quant-driven fund management firm built for long-term investors.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Sanity CMS', 'Cloudflare'],
    link: 'https://www.accuracap.com/',
  },
  {
    index: '07',
    title: 'Swasthya AI',
    image: '/swasthyaai.png',
    description:
      'A culturally intelligent health companion that blends modern science with Indian wellness to guide users through their concerns.',
    tech: ['Next.js', 'Gemini AI API', 'Tailwind CSS', 'Dark UI'],
    link: 'https://swasthya-ai-ten.vercel.app/',
  },
  {
    index: '08',
    title: 'MoneyGrow',
    image: '/moneygrow.png',
    description:
      'A wealth-management landing site for disciplined, long-term investing across PMS and AIF strategies.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Responsive UI', 'Sanity CMS'],
    link: 'https://money-grow-lemon.vercel.app/',
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
          <SectionMotif className="self-start sm:self-auto" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className="group glass relative flex flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1.5 hover:border-lime/30 hover:glow-lime"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                {/* Palette tint + bottom fade into the card */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-lime/0 mix-blend-soft-light transition-colors duration-500 group-hover:bg-lime/10" />

                {/* Index badge */}
                <span className="absolute left-4 top-4 rounded-full border border-line-strong bg-ink/50 px-2.5 py-1 font-mono text-xs text-bone backdrop-blur-md">
                  {project.index}
                </span>

                {/* Visit arrow */}
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line-strong bg-ink/50 text-bone backdrop-blur-md transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                  <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7">
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
                      className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-bone-dim transition-colors duration-300 group-hover:border-line-strong"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
