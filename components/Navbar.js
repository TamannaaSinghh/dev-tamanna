'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/TamannaaSinghh', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/tamanna-singh-760792284/', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/tamannaa.singhh/', label: 'Instagram' },
  { icon: <FaEnvelope />, href: 'mailto:tamannaasinghh1214@gmail.com', label: 'Email' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setIsOpen((v) => !v)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'border-b border-line bg-ink/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-2.5">
            <span className="relative h-9 w-9 overflow-hidden rounded-lg border border-line-strong ring-1 ring-lime/30 transition-transform duration-300 group-hover:-rotate-6">
              <Image
                src="/navbar icon.jpeg"
                alt="Tamanna Singh logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-bone">
              Tamanna<span className="text-lime">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 font-mono text-[0.78rem] tracking-wide text-bone-dim transition-colors duration-300 hover:text-bone"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials + CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-3 text-lg text-bone-dim">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors duration-300 hover:text-lime"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="rounded-full border border-lime/40 bg-lime/10 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.15em] text-lime transition-colors duration-300 hover:bg-lime hover:text-ink"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-2xl text-bone md:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-[68px] z-40 w-full border-b border-line bg-ink/95 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={toggleMenu}
                  className="font-display text-2xl font-semibold text-bone transition-colors hover:text-lime"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6 text-xl text-bone-dim">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="transition-colors hover:text-lime"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
