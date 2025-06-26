'use client'

import { motion } from 'framer-motion'

const skills = {
  Languages: ['C', 'C++', 'Python', 'R', 'Java', 'JavaScript', 'TypeScript'],
  Frontend: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Next.js', 'npm'],
  Backend: ['Node.js', 'Express.js', 'Firebase', 'PHP'],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose'],
  Tools: ['Vercel', 'AWS', 'Open API Space', 'DSA', 'OOPS', 'CN', 'OS', 'DBMS']
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6 text-white z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          💻 My Tech Stack
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-black/40 p-10 rounded-xl border border-white/10 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-10">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, j) => (
                    <span
                      key={j}
                      className="bg-white/10 text-gray-100 border border-white/20 px-4 py-2 rounded-xl text-sm hover:bg-purple-500 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
