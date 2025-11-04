import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layout, Palette } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Code2 className="h-5 w-5 text-cyan-300" />, label: 'Front-end' },
    { icon: <Cpu className="h-5 w-5 text-purple-300" />, label: 'Back-end' },
    { icon: <Layout className="h-5 w-5 text-cyan-300" />, label: 'UI/UX' },
    { icon: <Palette className="h-5 w-5 text-purple-300" />, label: 'Design Systems' },
  ];

  return (
    <section id="about" className="relative w-full bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 blur-xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black p-6 shadow-2xl md:h-80 md:w-80">
              <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.20),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.18),transparent_55%)]" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-[2px]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-black/70 text-3xl font-bold tracking-wider">
                    IY
                  </div>
                </div>
                <p className="text-sm text-cyan-100/80">Futuristic 3D-inspired avatar</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
            I Made Wahyu Yoga Saputra
          </h2>
          <p className="text-cyan-100/80">
            I craft immersive web experiences with clean architecture, performance-first mindset, and a love for futuristic aesthetics. From elegant interfaces to robust backend services, I bring ideas to life with precision and passion.
          </p>
          <p className="text-cyan-100/80">
            Core strengths include building delightful front-ends, scalable back-ends, and thoughtful design systems. My philosophy: clarity, performance, and continuous learning.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur transition-colors hover:border-cyan-400/40"
              >
                {s.icon}
                <span className="text-sm text-white/90">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
