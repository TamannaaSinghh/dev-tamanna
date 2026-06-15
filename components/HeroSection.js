'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiArrowDown } from 'react-icons/hi'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-12 px-6 pb-16 pt-32 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-10 lg:pt-28"
    >
      {/* LEFT — text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="order-2 w-full text-center lg:order-1 lg:w-3/5 lg:text-left"
      >
        <motion.p variants={item} className="eyebrow">
          Full-Stack Developer
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">Hi, I&apos;m </span>
          <span className="text-lime">Tamanna</span>
          <br className="hidden sm:block" />
          <span className="text-gradient"> Singh.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-bone-dim sm:text-lg lg:mx-0"
        >
          I build fast, accessible web experiences where clean code meets
          thoughtful design. Equal parts engineer and storyteller - always
          learning, always shipping.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:gap-3 hover:shadow-[0_0_40px_-8px_rgba(198,242,75,0.5)] sm:w-auto"
          >
            View my work
            <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="/Dev Tamanna Singh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-strong px-7 py-3.5 font-semibold text-bone transition-colors duration-300 hover:border-lime/50 hover:text-lime sm:w-auto"
          >
            <FiDownload className="text-lg" />
            Resume
          </a>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:justify-start"
        >
          {[
            { n: '2+ yr', l: 'Experience' },
            { n: '12+', l: 'Clients' },
            { n: '20+', l: 'Projects' },
          ].map((s) => (
            <div key={s.l} className="text-center lg:text-left">
              <div className="font-display text-2xl font-bold text-bone">
                {s.n}
              </div>
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-bone-faint">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative order-1 shrink-0 lg:order-2"
      >
        {/* Accent frame */}
        <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-lime/40" />
        <div className="relative h-72 w-64 overflow-hidden rounded-[2rem] border border-line-strong sm:h-80 sm:w-72 lg:h-96 lg:w-80">
          <Image
            src="/hero bg.jpeg"
            alt="Tamanna Singh"
            fill
            sizes="(max-width: 1024px) 18rem, 20rem"
            className="object-cover object-top"
            priority
          />
          {/* Tint to unify with palette */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          <div className="absolute inset-0 mix-blend-soft-light bg-lime/10" />
        </div>

        {/* Floating tag */}
        <div className="absolute -bottom-4 -left-4 rounded-xl border border-line-strong bg-ink/80 px-4 py-2.5 backdrop-blur-md">
          <p className="font-mono text-xs text-bone-dim">
            <span className="text-lime">{'</>'}</span> based in New Delhi
          </p>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-faint lg:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <HiArrowDown className="animate-bounce text-lg text-lime" />
      </motion.a>
    </section>
  )
}
