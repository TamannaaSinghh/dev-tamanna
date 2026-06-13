'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiMapPin, FiBookOpen, FiAward } from 'react-icons/fi'

const facts = [
  { icon: <FiBookOpen />, label: 'Education', value: 'B.Tech CSE · ADGIPS, New Delhi (2022–2026)' },
  { icon: <FiAward />, label: 'Academics', value: 'CGPA 8.9 · consistent top performer' },
  { icon: <FiMapPin />, label: 'Based in', value: 'New Delhi, India' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow">01 — About</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
            The person behind the code
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-bone-dim">
              I&apos;m{' '}
              <span className="font-semibold text-bone">Tamanna Singh</span>, a
              B.Tech CSE graduate and full-stack developer who cares deeply
              about building meaningful, accessible web experiences.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-bone-dim">
              I love the space where{' '}
              <span className="text-lime">engineering meets design</span> -
              turning ideas into interfaces that feel fast, intuitive, and
              genuinely enjoyable to use. Off the keyboard, I balance academics,
              leadership, and the stage.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {['Problem-solver', 'Accessibility tester','Web Developer', 'Public speaker', 'Lifelong learner'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-xs text-bone-dim"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Fact list */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {facts.map((f) => (
              <div
                key={f.label}
                className="glass flex items-start gap-4 rounded-2xl p-5 transition-colors duration-300 hover:border-lime/30"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-lg text-lime">
                  {f.icon}
                </span>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-bone-faint">
                    {f.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-bone">
                    {f.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
