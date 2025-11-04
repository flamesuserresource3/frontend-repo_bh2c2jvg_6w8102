import Spline from '@splinetool/react-spline';
import { MapPin, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] w-full overflow-hidden bg-black">
      {/* Spline Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EUGIv8h3muIGWcxR/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glossy/blue overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        {/* subtle radial blue glow */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(37,99,235,0.35),rgba(0,0,0,0))]" />
        {/* top chrome highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-[120%] rounded-b-[50%] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0))] blur-md" />
        {/* bottom blue sheen */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-56 w-[140%] rounded-t-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.35),rgba(0,0,0,0))] blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-sky-300 backdrop-blur">
            Full-Stack Developer • Open-Source
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Fajar Firdaus
          </h1>
          <p className="mt-4 text-slate-300/90 leading-relaxed">
            I build efficient backend systems, modern interfaces, and scalable cloud automation — with a focus on performance and clarity.
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={16} className="text-sky-400" /> Indonesia
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/fajartheggman"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white ring-1 ring-white/15 hover:bg-white/15 transition backdrop-blur"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/fajarsystem"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-sky-500/90 px-4 py-2 text-white hover:bg-sky-500 transition shadow-lg shadow-sky-500/25"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-white hover:from-sky-400 hover:to-indigo-400 transition shadow-lg shadow-sky-600/20"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
