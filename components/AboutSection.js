'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 pt-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          👋 About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg"
        >
          <p className="text-lg leading-relaxed text-gray-300">
            I&apos;m <span className="text-purple-400 font-semibold">Tamanna Singh</span>, a fourth-year BTech student passionate about building meaningful and accessible web experiences. Whether it&apos;s crafting sleek UIs or developing full-stack applications, I love turning creative ideas into reality.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            🎓 I&apos;m currently pursuing my BTech in Computer Science at <span className="text-purple-400 font-semibold">Dr. Akhilesh Das Gupta Institute of Professional Studies</span>, New Delhi (2022–2026).
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            💯 With a CGPA of <span className="text-purple-300 font-semibold">8.70+</span>, I balance academics, leadership, and a love for building cool web stuff.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            🎭 Whether it&apos;s hosting events with <span className="text-purple-300 font-semibold">FUN</span> or solving DSA problems, I always show up with energy and intent.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>💡 I enjoy solving real-world problems through code.</p>
            <p>🎤 I&apos;m also a public speaker & anchor 🎙️</p>
            <p>💪 Gym lover — strength & frontend gains!</p>
            <p>📚 Always learning — currently exploring Next.js</p>
            <p>🍿 I unwind with comedy and rom-com movies & web series</p>
            <p>🛫 Travelling & street food hunting fuel my creativity</p>
            <p>🎨 I love designing beautiful and accessible frontend UIs</p>
            <p>🎭 Actively involved in cultural events</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
