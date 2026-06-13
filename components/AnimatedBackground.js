'use client'

/**
 * Atmospheric backdrop — layered radial glows + a subtle moving aurora.
 * Replaces the old connected-dots particle network for a more premium,
 * editorial feel. Pure CSS, GPU-friendly, fixed behind all content.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-ink" />

      {/* Top-left lime aurora */}
      <div className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full bg-lime/10 blur-[140px] animate-drift-slow" />

      {/* Right cool counter-glow for depth */}
      <div className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-[#1d4d3a]/25 blur-[150px] animate-drift-slow [animation-delay:-6s]" />

      {/* Bottom subtle warm glow */}
      <div className="absolute -bottom-48 left-1/3 h-[40rem] w-[40rem] rounded-full bg-lime/[0.06] blur-[160px] animate-drift-slow [animation-delay:-11s]" />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(236,235,228,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(236,235,228,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  )
}
