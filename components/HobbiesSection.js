'use client'

import { motion } from 'framer-motion'
import {
  FaDumbbell, FaPlane, FaUtensils, FaTheaterMasks, FaLaughSquint, FaMicrophone,
} from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import { BsMegaphone } from 'react-icons/bs'

/* Ordered + spanned so the bento tiles into clean rows of 4 on desktop. */
const hobbies = [
  { name: 'Gymming', blurb: 'Strength, discipline, and a clear head.', icon: <FaDumbbell />, wide: true },
  { name: 'Street Food Hunt', blurb: 'Chasing the next great bite.', icon: <FaUtensils /> },
  { name: 'Anchoring', blurb: 'Owning the mic on stage.', icon: <FaMicrophone /> },
  { name: 'Public Speaking', blurb: 'Turning ideas into out-loud moments.', icon: <BsMegaphone />, wide: true },
  { name: 'Theatre', blurb: 'Stories in motion.', icon: <FaTheaterMasks /> },
  { name: 'Comedy Shows', blurb: 'Because laughter matters.', icon: <FaLaughSquint /> },
  { name: 'Travelling', blurb: 'New cities, fresh perspectives.', icon: <FaPlane />, wide: true },
  { name: 'Frontend Design', blurb: 'Pixels with purpose.', icon: <MdDesignServices />, wide: true },
]

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="relative z-10 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="eyebrow">04 — Off the clock</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-bone sm:text-5xl">
            Beyond the code
          </h2>
          <p className="mt-4 max-w-xl text-bone-dim">
            I&apos;m more than the editor I work in. Here&apos;s what keeps me
            curious, energized, and inspired.
          </p>
        </motion.div>

        <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`group glass relative flex overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime/30 ${
                hobby.wide
                  ? 'col-span-2 items-center gap-4'
                  : 'flex-col items-start gap-3'
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Index marker */}
              <span className="absolute right-4 top-4 font-mono text-[0.65rem] text-bone-faint">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime/10 text-2xl text-lime transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                {hobby.icon}
              </span>

              {/* Text */}
              <div className="min-w-0">
                <p className="font-display text-base font-semibold text-bone">
                  {hobby.name}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-bone-dim">
                  {hobby.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
