import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    // For now we just show an alert. This can be wired to a backend or service later.
    alert('Thanks! Your message has been drafted locally.');
  };

  return (
    <section id="contact" className="relative w-full bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-3xl font-extrabold text-transparent">
            Let’s build something great
          </h3>
          <p className="mt-2 max-w-md text-cyan-100/80">
            Have an idea or opportunity? I’d love to hear from you.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/90 backdrop-blur transition-colors hover:border-cyan-400/50"
            >
              <Mail className="h-4 w-4" /> hello@example.com
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="#" aria-label="GitHub" className="rounded-xl border border-white/10 p-2 text-white/80 transition-colors hover:border-cyan-400/50 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-xl border border-white/10 p-2 text-white/80 transition-colors hover:border-cyan-400/50 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-xl border border-white/10 p-2 text-white/80 transition-colors hover:border-cyan-400/50 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur"
        >
          <div className="pointer-events-none absolute -inset-12 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.15),rgba(168,85,247,0.15),transparent_35%)] blur-2xl" />
          <div className="relative z-10 space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/80">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-cyan-400/60"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-cyan-400/60"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder:text-zinc-400 outline-none transition focus:border-cyan-400/60"
                required
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
