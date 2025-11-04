import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Palette, Workflow, Github } from 'lucide-react';

const skills = [
  { name: 'React', icon: <Code2 className="h-6 w-6 text-cyan-300" /> },
  { name: 'Node.js', icon: <Cpu className="h-6 w-6 text-purple-300" /> },
  { name: 'Python', icon: <Workflow className="h-6 w-6 text-cyan-300" /> },
  { name: 'Figma', icon: <Palette className="h-6 w-6 text-purple-300" /> },
  { name: 'GitHub', icon: <Github className="h-6 w-6 text-cyan-300" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-3xl font-extrabold text-transparent">
            Skills Universe
          </h3>
          <p className="mt-2 text-cyan-100/80">Hover to reveal more.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4 text-center backdrop-blur-sm"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-8 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(56,189,248,0.25),rgba(168,85,247,0.25),transparent_30%)] blur-2xl" />
              </div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 shadow-inner">
                {s.icon}
              </div>
              <div className="mt-3 text-sm font-medium text-white/90">{s.name}</div>
              <div className="mt-1 text-xs text-cyan-100/70 opacity-0 transition-opacity group-hover:opacity-100">
                Proficient
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
