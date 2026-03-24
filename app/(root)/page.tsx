'use client'
import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="h-20 sticky top-0 backdrop-blur-md bg-white/5 border-b border-white/10 flex items-center justify-between px-10">
        <h1 className="text-3xl font-semibold tracking-wide">
          The Apparel Website
        </h1>

        <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition">
          Sign In
        </button>

        <button className="px-5 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition">
          login
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Elevate Your Style
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-xl"
        >
          Discover premium fashion curated for modern lifestyles. Minimal,
          bold, and timeless designs crafted just for you.
        </motion.p>
      </section>

      {/* Card Section */}
      <section className="flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-[600px] max-w-full rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">New Collection</h3>
          <p className="text-gray-400 mb-6">
            Step into the season with our latest arrivals. Designed for comfort
            and style.
          </p>

          <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 transition">
            Explore Now
          </button>
        </motion.div>
      </section>
    </main>
  );
}
