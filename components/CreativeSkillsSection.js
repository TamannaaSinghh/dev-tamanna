'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase,
  FaGitAlt, FaJs, FaPhp, FaWordpress,
} from 'react-icons/fa'
import {
  SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiFirebase, SiC, SiCplusplus, SiExpress, SiMysql, SiR, SiVercel,
} from 'react-icons/si'

const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
      
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'WordPress', icon: <FaWordpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Tools & Foundations',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'DSA', icon: <FaDatabase /> },
      { name: 'CN', icon: <FaDatabase /> },
      { name: 'SDLC', icon: <FaDatabase /> },
      { name: 'OOPs', icon: <FaDatabase /> },
      { name: 'DBMS', icon: <FaDatabase /> },
    ],
  },
]

export default function CreativeSkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow">02 — Toolkit</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
            Technologies I build with
          </h2>
          <p className="mt-4 max-w-xl text-bone-dim">
            A pragmatic stack spanning the full web lifecycle — from pixel-perfect
            interfaces to the APIs and databases that power them.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass rounded-3xl p-7"
            >
              <h3 className="mb-5 flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-lime">
                <span className="h-px w-6 bg-lime/50" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="group inline-flex items-center gap-2 rounded-xl border border-line-strong bg-bone/[0.02] px-3.5 py-2 text-sm text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-lime/40 hover:text-lime"
                  >
                    <span className="text-base text-bone-dim transition-colors duration-300 group-hover:text-lime">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
