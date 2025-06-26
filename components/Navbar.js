'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* MAIN NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
          {/* Logo */}
          <Link href="/">
            <span className="text-xl font-bold tracking-wider">Tamanna S.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-6 text-sm font-bold">
            <a href="#" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-xl">
            <a href="https://github.com/TamannaaSinghh" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaGithub /></a>
            <a href="https://linkedin.com/in/tamanna-singh-760792284/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaLinkedin /></a>
            <a href="https://www.instagram.com/tamannaa.singhh/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaInstagram /></a>
            <a href="mailto:tamannaasinghh1214@gmail.com" className="hover:text-purple-400"><FaEnvelope /></a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10 text-white px-6 py-6 fixed top-16 left-0 w-full z-40"
          >
            <div className="flex flex-col gap-4 text-base font-semibold">
              <a href="#" className="hover:text-purple-400" onClick={toggleMenu}>Home</a>
              <a href="#about" className="hover:text-purple-400" onClick={toggleMenu}>About</a>
              <a href="#skills" className="hover:text-purple-400" onClick={toggleMenu}>Skills</a>
              <a href="#projects" className="hover:text-purple-400" onClick={toggleMenu}>Projects</a>
              <a href="#contact" className="hover:text-purple-400" onClick={toggleMenu}>Contact</a>
            </div>

            <div className="flex justify-center mt-6 gap-6 text-xl">
              <a href="https://github.com/TamannaaSinghh" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaGithub /></a>
              <a href="https://linkedin.com/in/tamanna-singh-760792284/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaLinkedin /></a>
              <a href="https://www.instagram.com/tamannaa.singhh/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaInstagram /></a>
              <a href="mailto:tamannaasinghh1214@gmail.com" className="hover:text-purple-400"><FaEnvelope /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
