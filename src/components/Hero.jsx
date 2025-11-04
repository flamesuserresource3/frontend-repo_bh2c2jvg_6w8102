import Spline from '@splinetool/react-spline';
import { MapPin, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-50 ring-1 ring-blue-100 px-2.5 py-1 rounded-full">
            Full-Stack Developer & Open-Source Enthusiast
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Fajar Firdaus
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
            “I build efficient backend systems, modern frontend interfaces, and scalable cloud infrastructures.”
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={16} className="text-blue-600" /> Indonesia
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/fajartheggman"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/fajarsystem"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
            >
              Explore Projects
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-gradient-to-br from-slate-50 to-white">
          {/* Glow gradient overlay that doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_70%_30%,rgba(59,130,246,0.25),rgba(255,255,255,0))]" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
