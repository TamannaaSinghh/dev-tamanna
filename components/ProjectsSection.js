'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: "IMDB Clone 🎬",
    description: "Search and discover movies using TMDB API.",
    tech: "React, TMDB API, CSS",
    link: "https://imdb-next-ebon.vercel.app/"
  },
  {
    title: "ChatWise 💬",
    description: "Real-time chat app with Firebase backend and react frontend.",
    tech: "React, Firebase, CSS",
    link: "https://chat-wise-six.vercel.app/"
  },
  {
    title: "3D Web with Spline 🧠",
    description: "3D landing page using Spline & React integration.",
    tech: "React, Spline",
    link: "https://spline-model-hh4ql049w-tamanna-singhs-projects.vercel.app/"
  },
  {
    title: "QuantumFit - Gym Website 🏋️‍♀️",
    description: "Creative gym website landing page.",
    tech: "HTML, CSS, TailWind CSS, JavaScript",
    link: "https://tamannaasinghh.github.io/Gym-Website--TailwindCSS/"
  },
  
  
 
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          💼 My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-1 text-purple-400">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.description}</p>
              <p className="text-xs text-gray-400 mb-4">🔧 {project.tech}</p>
              <a href={project.link} target="_blank" className="text-purple-300 hover:underline text-sm">🌐 Visit Project</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
