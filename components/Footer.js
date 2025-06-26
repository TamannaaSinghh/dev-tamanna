'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-black/70 backdrop-blur-md border-t border-white/10 text-white py-10 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-purple-400">Tamanna Singh</h3>
          <p className="text-sm text-gray-400">Turning ideas into interactive web experiences ✨</p>
        </div>

        {/* Middle: Contact Link */}
        <div className="text-center">
          <a href="#contact" className="text-sm text-purple-300 hover:underline">
            📬 Contact Me
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-5 justify-center text-xl">
          <a href="https://github.com/TamannaaSinghh" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaGithub /></a>
          <a href="https://linkedin.com/in/tamanna-singh-760792284" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaLinkedin /></a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaInstagram /></a>
          <a href="mailto:singhtamannaa21@gmail.com" className="hover:text-purple-400"><FaEnvelope /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-xs text-gray-500">
        © {new Date().getFullYear()} Tamanna Singh. All rights reserved.
      </div>
    </motion.footer>
  )
}
