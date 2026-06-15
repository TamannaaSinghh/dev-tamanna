'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/TamannaaSinghh', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/tamanna-singh-760792284/', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/tamannaa.singhh/', label: 'Instagram' },
  { icon: <FaEnvelope />, href: 'mailto:tamannaasinghh1214@gmail.com', label: 'Email' },
]

export default function ContactSection() {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    const form = formRef.current
    const message = form.message.value.trim()
    if (!message) {
      e.preventDefault()
      alert('Please enter a valid message before submitting.')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-line-strong bg-bone/[0.02] px-4 py-3 text-bone placeholder:text-bone-faint transition-colors focus:border-lime/50 focus:outline-none focus:ring-1 focus:ring-lime/40'

  return (
    <section id="contact" className="relative z-10 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — invitation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">05 — Contact</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
              Let&apos;s build
              <br />
              something <span className="text-lime">great.</span>
            </h2>
            <p className="mt-6 max-w-md text-bone-dim">
              Have a project in mind, a role to fill, or just want to say hi? My
              inbox is always open - I&apos;ll get back to you as soon as I can.
            </p>

            <a
              href="mailto:tamannaasinghh1214@gmail.com"
              className="link-underline mt-8 inline-flex items-center gap-2 font-display text-lg font-semibold text-bone transition-colors hover:text-lime"
            >
              tamannaasinghh1214@gmail.com <FiArrowUpRight />
            </a>

            <div className="mt-8 flex items-center gap-4 text-xl text-bone-dim">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong transition-all duration-300 hover:border-lime/50 hover:text-lime"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Availability status */}
            <div className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-lime/30 bg-lime/[0.06] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-lime">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            action="https://formspree.io/f/mgvypjrz"
            method="POST"
            className="glass grid gap-5 rounded-3xl p-8 sm:p-10"
          >
            <div>
              <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.15em] text-bone-dim">
                Your name
              </label>
              <input type="text" name="name" placeholder="Jane Doe" className={inputClass} required />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.15em] text-bone-dim">
                Email
              </label>
              <input type="email" name="email" placeholder="you@example.com" className={inputClass} required />
            </div>

            <div>
              <label className="mb-2 block font-mono text-[0.72rem] uppercase tracking-[0.15em] text-bone-dim">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your idea…"
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(198,242,75,0.5)]"
            >
              Send message <FiArrowUpRight className="text-lg" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
