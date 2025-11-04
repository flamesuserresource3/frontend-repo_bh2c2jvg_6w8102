import { Code2, Server, Cloud, ExternalLink } from 'lucide-react';

const projects = [
  {
    icon: Code2,
    title: 'Modern Frontend Interfaces',
    description:
      'Responsive, accessible, and delightful UIs built with React, Tailwind, and modern tooling.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Efficient Backend Systems',
    description:
      'Robust APIs and microservices focused on performance, reliability, and clean architecture.',
    tags: ['FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Cloud,
    title: 'Scalable Cloud Infrastructures',
    description:
      'Automated, secure, and cost-effective deployments that scale with your product.',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
];

function ProjectCard({ icon: Icon, title, description, tags }) {
  return (
    <div className="group relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-xl">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-50/0 to-blue-50/60 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white h-10 w-10">
          <Icon size={18} />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 ring-1 ring-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <a
            href="https://github.com/fajartheggman"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View on GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Work</h2>
          <p className="mt-3 text-gray-600">
            A snapshot of capabilities across the stack — from delightful user interfaces to resilient backend services and cloud automation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
