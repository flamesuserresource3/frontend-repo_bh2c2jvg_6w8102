import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Let’s build something great</h2>
          <p className="mt-3 text-gray-600">
            Open to freelance, remote roles, and open-source collaborations. Drop a message anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Mail size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">Email</h3>
            <p className="mt-1 text-sm text-gray-600">fajarfirdaus2work@gmail.com</p>
            <a
              href="mailto:fajarfirdaus2work@gmail.com"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Say hello
            </a>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white">
              <Github size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">GitHub</h3>
            <p className="mt-1 text-sm text-gray-600">@fajartheggman</p>
            <a
              href="https://github.com/fajartheggman"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Explore profile
            </a>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A66C2] text-white">
              <Linkedin size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-900">LinkedIn</h3>
            <p className="mt-1 text-sm text-gray-600">/in/fajarsystem</p>
            <a
              href="https://linkedin.com/in/fajarsystem"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              Connect
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Fajar Firdaus. All rights reserved.
        </p>
      </div>
    </section>
  );
}
