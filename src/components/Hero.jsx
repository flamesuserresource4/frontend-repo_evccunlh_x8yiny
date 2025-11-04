import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Galaxy Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to add depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute -inset-x-32 -top-32 h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -inset-x-32 bottom-0 h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-cyan-400/40 to-purple-500/40 p-[2px] shadow-[0_0_50px_rgba(56,189,248,0.35)] backdrop-blur"
            initial={{ rotate: -8, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12 }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/60">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-3xl font-extrabold tracking-wider text-transparent">
                IY
              </span>
            </div>
          </motion.div>

          <h1 className="mx-auto max-w-3xl bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl md:text-6xl">
            Building the Digital World, One Line of Code at a Time.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-cyan-100/80 sm:text-lg">
            A Web Developer & Tech Enthusiast passionate about innovation and technological exploration.
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              View My Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-black/40 px-5 py-3 text-sm font-semibold text-cyan-100 backdrop-blur transition-colors hover:border-cyan-400/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
