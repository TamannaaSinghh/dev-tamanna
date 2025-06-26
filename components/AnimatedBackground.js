'use client'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: 'transparent'
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 1000
            }
          },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.3,
            random: false
          },
          size: {
            value: 2,
            random: true
          },
          move: {
            enable: true,
            speed: 1.5,            // 🔁 continuous motion
            direction: 'none',
            outModes: {
              default: 'bounce'
            },
            straight: false
          },
          links: {
            enable: true,
            distance: 150,
            color: '#aaa',
            opacity: 0.4,
            width: 1
          }
        },
        detectRetina: true
      }}
    />
  )
}
