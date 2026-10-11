import React from 'react'
import { projectsList, ProjectItem } from '../../lib/site'
import { ExternalLink, Terminal, Cpu, Layers } from 'lucide-react'

export function Projects() {
  const systemsProjects = projectsList.filter(function (item) {
    return item.category === 'Systems & Core'
  })

  const fullStackProjects = projectsList.filter(function (item) {
    return item.category !== 'Systems & Core'
  })

  function renderProjectCard(project: ProjectItem) {
    return (
      <div
        key={project.id}
        className="flex flex-col justify-between p-6 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200"
      >
        <div>
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded">
              {project.status}
            </span>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-zinc-200 transition-colors p-1"
                aria-label={`Source code for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>

          <h4 className="text-lg font-semibold text-zinc-100 mb-1">
            {project.title}
          </h4>

          <p className="text-xs font-mono text-zinc-400 mb-3">
            {project.summary}
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {project.metrics ? (
            <div className="mb-4 text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-3 py-2 rounded">
              <span className="text-zinc-500 mr-1.5">&gt;</span>
              {project.metrics}
            </div>
          ) : null}
        </div>

        <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5">
          {project.stack.map(function (tech) {
            return (
              <span
                key={tech}
                className="text-xs text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING &amp; ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">
            Featured Systems &amp; Products
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl">
            Selected engineering implementations covering deep system internals,
            custom virtual machines, database storage engines, and full-stack platforms.
          </p>
        </div>

        {/* Systems & Low-Level Section */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-4 h-4 text-zinc-400" />
            <h3 className="text-lg font-semibold text-zinc-200">
              Low-Level Systems &amp; Runtimes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {systemsProjects.map(renderProjectCard)}
          </div>
        </div>

        {/* Applications & Distributed Architecture Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-4 h-4 text-zinc-400" />
            <h3 className="text-lg font-semibold text-zinc-200">
              Platform Architecture &amp; Production Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {fullStackProjects.map(renderProjectCard)}
          </div>
        </div>
      </div>
    </section>
  )
}