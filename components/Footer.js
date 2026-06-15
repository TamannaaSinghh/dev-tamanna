'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/TamannaaSinghh', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/tamanna-singh-760792284', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/tamannaa.singhh/', label: 'Instagram' },
  { icon: <FaEnvelope />, href: 'mailto:tamannaasinghh1214@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-line px-6 pt-16 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl"
      >
        {/* ---- CTA band ---- */}
        <div className="flex flex-col items-start justify-between gap-8 pb-14 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Have an idea?</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-bone sm:text-4xl md:text-5xl">
              Let&apos;s build something
              <br />
              <span className="text-lime">great together.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tamannaasinghh1214@gmail.com&su=Let%27s%20connect"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-semibold text-ink transition-all duration-300 hover:gap-3 hover:shadow-[0_0_40px_-8px_rgba(198,242,75,0.5)]"
            >
              Get in touch
              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line-strong text-bone-dim transition-colors duration-300 hover:border-lime/50 hover:text-lime"
            >
              <FiArrowUp className="text-lg" />
            </a>
          </div>
        </div>

        {/* ---- Columns ---- */}
        <div className="grid gap-10 border-t border-line py-14 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-line-strong ring-1 ring-lime/30">
                <Image
                  src="/navbar icon.jpeg"
                  alt="Tamanna Singh logo"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-bone">
                  Tamanna Singh
                </p>
                <p className="font-mono text-xs tracking-wide text-lime">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-bone-dim">
              Turning ideas into fast, accessible, and interactive web
              experiences - from pixel-perfect interfaces to the APIs behind
              them.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-lg text-bone-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-lime/50 hover:text-lime"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-bone-faint">
              Navigate
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="w-fit text-sm text-bone-dim transition-colors hover:text-lime"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-bone-faint">
              Get in touch
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href="mailto:tamannaasinghh1214@gmail.com"
                className="w-fit text-bone-dim transition-colors hover:text-lime"
              >
                tamannaasinghh1214@gmail.com
              </a>
              <a
                href="mailto:singhtamannaa21@gmail.com"
                className="w-fit text-bone-dim transition-colors hover:text-lime"
              >
                singhtamannaa21@gmail.com
              </a>
              <span className="text-bone-dim">New Delhi, India</span>
              <a
                href="https://drive.google.com/file/d/1LTGwQCcUag7_6cKbzH44kivyF8Sgrvct/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-lime transition-opacity hover:opacity-80"
              >
                Download résumé <FiArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* ---- Giant wordmark watermark ---- */}
        <div className="pointer-events-none select-none pt-4">
          <p className="bg-gradient-to-b from-bone/[0.07] to-transparent bg-clip-text text-center font-display text-[15vw] font-extrabold leading-none tracking-tighter text-transparent">
            TAMANNA
          </p>
        </div>

        {/* ---- Bottom bar ---- */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-7 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-bone-faint">
            © {new Date().getFullYear()} Tamanna Singh. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
