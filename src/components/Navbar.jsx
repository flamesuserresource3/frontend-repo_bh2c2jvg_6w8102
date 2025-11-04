import { Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900">
          <span className="text-blue-600">Fajar</span> Firdaus
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          <a
            href="https://github.com/fajartheggman"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-1.5 text-white hover:bg-gray-800 transition"
          >
            <Github size={16} /> <span>GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
