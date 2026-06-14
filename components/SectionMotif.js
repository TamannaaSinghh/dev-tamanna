'use client'

import { motion } from 'framer-motion'

/**
 * Decorative editorial motif for section headers.
 * A faint orbit ring, a slowly counter-rotating asterisk, and an
 * orbiting lime dot — purely aesthetic, no text. Respects reduced motion
 * (animations are neutralised globally via prefers-reduced-motion).
 */
export default function SectionMotif({ className = '' }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        className="h-20 w-20 sm:h-24 sm:w-24"
        fill="none"
      >
        {/* Static faint ring */}
        <circle cx="50" cy="50" r="46" className="stroke-[var(--color-line-strong)]" strokeWidth="1" />

        {/* Dashed ring, slow spin */}
        <motion.circle
          cx="50"
          cy="50"
          r="33"
          className="stroke-lime/30"
          strokeWidth="1"
          strokeDasharray="2 7"
          style={{ transformOrigin: '50px 50px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        />

        {/* Six-point asterisk, counter spin */}
        <motion.g
          className="stroke-lime"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ transformOrigin: '50px 50px' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <line x1="50" y1="26" x2="50" y2="74" />
          <line x1="29.2" y1="38" x2="70.8" y2="62" />
          <line x1="29.2" y1="62" x2="70.8" y2="38" />
        </motion.g>

        {/* Orbiting dot */}
        <motion.g
          style={{ transformOrigin: '50px 50px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="50" cy="13" r="2.6" className="fill-lime" />
        </motion.g>

        {/* Center dot */}
        <circle cx="50" cy="50" r="3" className="fill-lime" />
      </svg>
    </div>
  )
}
