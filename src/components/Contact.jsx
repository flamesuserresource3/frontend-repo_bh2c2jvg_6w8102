import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Let’s build something great</h2>
          <p className="mt-3 text-slate-300">
            Open to freelance, remote roles, and open-source collaborations. Drop a message anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white shadow-lg shadow-sky-600/30">
              <Mail size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-white">Email</h3>
            <p className="mt-1 text-sm text-slate-300">fajarfirdaus2work@gmail.com</p>
            <a
              href="mailto:fajarfirdaus2work@gmail.com"
              className="mt-4 inline-block text-sm font-medium text-sky-300 hover:text-sky-200"
            >
              Say hello
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white ring-1 ring-white/15">
              <Github size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-white">GitHub</h3>
            <p className="mt-1 text-sm text-slate-300">@fajartheggman</p>
            <a
              href="https://github.com/fajartheggman"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-sky-300 hover:text-sky-200"
            >
              Explore profile
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-lg shadow-sky-600/30">
              <Linkedin size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-white">LinkedIn</h3>
            <p className="mt-1 text-sm text-slate-300">/in/fajarsystem</p>
            <a
              href="https://linkedin.com/in/fajarsystem"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-sky-300 hover:text-sky-200"
            >
              Connect
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Fajar Firdaus. All rights reserved.
        </p>
      </div>
    </section>
  );
}
