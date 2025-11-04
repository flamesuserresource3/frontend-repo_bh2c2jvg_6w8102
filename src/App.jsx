import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Fajar</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a full‑stack developer from Indonesia who loves crafting clear architectures and polished developer experiences. I focus on
              shipping maintainable code, pragmatic testing, and thoughtful DX — from API design and data modeling to pixel‑perfect UIs and
              smooth CI/CD pipelines.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-black/5 p-4">
                <p className="font-medium">Frontend</p>
                <p className="mt-1 text-gray-600">React, Vite, Tailwind, Framer Motion</p>
              </div>
              <div className="rounded-xl border border-black/5 p-4">
                <p className="font-medium">Backend</p>
                <p className="mt-1 text-gray-600">FastAPI, Node.js, PostgreSQL, MongoDB</p>
              </div>
              <div className="rounded-xl border border-black/5 p-4">
                <p className="font-medium">DevOps</p>
                <p className="mt-1 text-gray-600">Docker, Kubernetes, Terraform, CI/CD</p>
              </div>
              <div className="rounded-xl border border-black/5 p-4">
                <p className="font-medium">Principles</p>
                <p className="mt-1 text-gray-600">Clean architecture, performance, accessibility</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/5 p-6 bg-gradient-to-br from-slate-50 to-white">
            <ul className="space-y-4 text-sm text-gray-700">
              <li>• Strong focus on maintainability and developer experience</li>
              <li>• Comfortable across monoliths and microservices</li>
              <li>• Pragmatic testing and observability mindset</li>
              <li>• Advocate for open-source and community-driven software</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
