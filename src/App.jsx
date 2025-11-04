import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-sans text-white">
      {/* Hero with full-width Spline cover */}
      <Hero />

      {/* Main Content Sections */}
      <About />
      <Skills />

      {/* Simple Portfolio teaser inline with hero CTA requirement */}
      <section id="portfolio" className="relative w-full bg-black px-6 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <h3 className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-3xl font-extrabold text-transparent">
            Featured Work
          </h3>
          <p className="mt-2 max-w-2xl text-cyan-100/80">
            A glimpse into projects that blend performance, polish, and playful interaction.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <a
                key={i}
                href="#"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-4 shadow-2xl backdrop-blur transition-transform duration-200 hover:scale-[1.01]"
              >
                <div className="pointer-events-none absolute -inset-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -inset-8 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(56,189,248,0.20),rgba(168,85,247,0.20),transparent_40%)] blur-2xl" />
                </div>
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-600/15"></div>
                <div className="mt-4">
                  <div className="text-base font-semibold text-white">Project {i}</div>
                  <div className="text-sm text-cyan-100/70">Interactive 3D card with neon hover glow</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-6 text-center text-sm text-cyan-100/70">
        © {new Date().getFullYear()} I Made Wahyu Yoga Saputra — Crafted with passion and neon.
      </footer>
    </div>
  );
}
