'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase,
  FaGitAlt, FaGithub, FaJs,
} from 'react-icons/fa'
import {
  SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiFirebase, SiC, SiCplusplus, SiExpress, SiVercel, SiMysql,
} from 'react-icons/si'
import {
  FiSmartphone, FiServer, FiLayout, FiShield, FiLayers, FiGitBranch,
  FiRefreshCw, FiMoon, FiBox, FiShare2, FiKey, FiCpu, FiZap, FiGlobe,
  FiTerminal, FiMessageCircle, FiMic, FiPackage, FiWifi, FiHardDrive,
  FiRepeat, FiGitMerge,
} from 'react-icons/fi'
import SectionMotif from './SectionMotif'

const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript (ES6+)', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'SQL', icon: <SiMysql /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Responsive Web Design', icon: <FiSmartphone /> },
      { name: 'UI/UX Development', icon: <FiLayout /> },
      { name: 'API Integration', icon: <FiServer /> },
      { name: 'Authentication Systems', icon: <FiShield /> },
      { name: 'Modern Frontend Architecture', icon: <FiLayers /> },
      { name: 'Dynamic Routing', icon: <FiGitBranch /> },
      { name: 'State Management', icon: <FiRefreshCw /> },
      { name: 'Dark/Light Theme UI', icon: <FiMoon /> },
      { name: 'Component-Based Architecture', icon: <FiBox /> },
    ],
  },
  {
    title: 'Backend & Database',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'REST APIs', icon: <FiShare2 /> },
      { name: 'NextAuth.js', icon: <FiKey /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
  },
  {
    title: 'AI & Modern Tech',
    items: [
      { name: 'Groq API', icon: <FiZap /> },
      { name: 'LLaMA 3 Integration', icon: <FiCpu /> },
      { name: 'AI-powered Web Applications', icon: <FiGlobe /> },
      { name: 'Prompt Engineering', icon: <FiTerminal /> },
      { name: 'AI Chat Interfaces', icon: <FiMessageCircle /> },
      { name: 'Voice AI Integration', icon: <FiMic /> },
    ],
  },
  {
    title: 'Tools & Foundations',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'DBMS', icon: <FaDatabase /> },
      { name: 'OOPs', icon: <FiPackage /> },
      { name: 'Computer Networks', icon: <FiWifi /> },
      { name: 'Operating Systems', icon: <FiHardDrive /> },
      { name: 'SDLC', icon: <FiRepeat /> },
      { name: 'Data Structures & Algorithms (DSA)', icon: <FiGitMerge /> },
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
          className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="eyebrow">02 — Toolkit</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
              Technologies I build with
            </h2>
          </div>
          <SectionMotif className="self-start sm:self-auto" />
        </motion.div>

        {/* Masonry — packs cards of varying heights tightly */}
        <div className="columns-1 gap-5 sm:columns-2 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (gi % 2) * 0.1 }}
              className="group/card glass relative overflow-hidden rounded-3xl p-7 transition-colors duration-500 hover:border-lime/20"
            >
              {/* Corner glow on hover */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100" />

              <div className="mb-6 flex items-center justify-between">
                <h3 className="flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-lime">
                  <span className="font-display text-base font-bold text-bone-faint">
                    {String(gi + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-6 bg-lime/50" />
                  {group.title}
                </h3>
                <span className="font-mono text-[0.7rem] text-bone-faint">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="group/chip inline-flex items-center gap-2 rounded-xl border border-line-strong bg-bone/[0.02] px-3.5 py-2 text-sm text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.04] hover:text-lime"
                  >
                    <span className="text-base text-bone-dim transition-colors duration-300 group-hover/chip:text-lime">
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
