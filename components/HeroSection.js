"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import yourImage from "../public/lady.jpeg";
import { HiDownload } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-28 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 relative z-10 gap-10">
      {/* LEFT: TEXT */}
      <div className="text-center md:text-left md:w-3/4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white"
        >
          Hi, I'm <span className="text-purple-500">Tamanna Singh</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl"
        >
          Code that speaks, stories that move, and strength that inspires. I’m a
          full-stack developer with a love for pixels and people. Always
          learning, always building — always me. 🚀
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            View My Work
          </a>

          <a
            href="/Tamanna_Singh_Resume.pdf"
            download
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            <HiDownload className="text-xl" />
            Resume
          </a>
        </motion.div>
      </div>

      {/* RIGHT: IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="w-60 h-70 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-purple-500 shadow-lg hover:scale-105 transition duration-500"
      >
        <Image
          src={yourImage}
          alt="Tamanna Singh"
          width={300}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>
    </section>
  );
}
