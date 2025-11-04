import { Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 supports-[backdrop-filter]:bg-black/30 bg-black/40 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white">
          <span className="text-sky-400">Fajar</span> Firdaus
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
          <a href="#projects" className="text-slate-300 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a>
          <a
            href="https://github.com/fajartheggman"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-white ring-1 ring-white/15 hover:bg-white/15 transition backdrop-blur"
          >
            <Github size={16} /> <span>GitHub</span>
          </a>
        </div>
      </nav>
      {/* subtle bottom border glow */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
    </header>
  );
}
