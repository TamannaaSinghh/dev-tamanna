'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function ContactSection() {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    const form = formRef.current
    const message = form.message.value.trim()

    if (!message) {
      e.preventDefault()
      alert("Please enter a valid message before submitting.")
    }
  }

  return (
    <section id="contact" className="py-28 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          📬 Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12 text-sm"
        >
          Wanna build something cool? Have a crazy idea? Or just wanna say hi?  
          Drop a message - I don’t bite! 
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          action="https://formspree.io/f/mgvypjrz"
          method="POST"
          className="grid gap-6 text-left backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-lg"
        >
          <div>
            <label className="block text-sm text-purple-300 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-purple-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-purple-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="What's on your mind?"
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-gray-400"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full mt-4 transition"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
