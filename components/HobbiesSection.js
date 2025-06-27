'use client'

import { motion } from 'framer-motion'
import { FaDumbbell, FaPlane, FaUtensils, FaPalette, FaTheaterMasks, FaLaughSquint, FaMicrophone } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'

const hobbies = [
  { name: 'Gymming', icon: <FaDumbbell className="text-pink-400" /> },
  { name: 'Travelling', icon: <FaPlane className="text-yellow-400" /> },
  { name: 'Street Food Hunt', icon: <FaUtensils className="text-red-400" /> },
  { name: 'Frontend Designs', icon: <MdDesignServices className="text-teal-400" /> },
  { name: 'Anchoring', icon: <FaMicrophone className="text-purple-400" /> },
  { name: 'Public Speaking', icon: <FaMicrophone className="text-blue-400" /> },
  { name: 'Theatre Activities', icon: <FaTheaterMasks className="text-orange-400" /> },
  { name: 'Comedy Shows', icon: <FaLaughSquint className="text-green-400" /> },
]

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          🎨 Beyond the Code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 mb-10 text-sm max-w-xl mx-auto"
        >
          I’m more than just a full-stack developer - here’s a peek into what sparks my joy outside the code editor! 
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 rounded-xl shadow hover:bg-purple-600/20 transition"
            >
              <div className="text-3xl">{hobby.icon}</div>
              <p className="text-sm text-gray-200 font-medium">{hobby.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
