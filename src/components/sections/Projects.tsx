import React from 'react'
import { projectsList, ProjectItem } from '../../lib/site'
import { ExternalLink, Terminal, Cpu, Layers, Lock } from 'lucide-react'

export function Projects() {
  // جدا کردن پروژه‌ها با حلقه‌های ساده‌تر
  let systemsProjects: ProjectItem[] = []
  let fullStackProjects: ProjectItem[] = []

  for (let i = 0; i < projectsList.length; i++) {
    let currentProject = projectsList[i]
    if (currentProject.category === 'Systems & Core') {
      systemsProjects.push(currentProject)
    } else {
      fullStackProjects.push(currentProject)
    }
  }

  function renderProjectCard(project: ProjectItem) {
    let statusClass = "text-xs font-mono uppercase tracking-wider text-electric-400 bg-electric-950/40 border border-electric-800/40 px-2.5 py-1 rounded"
    
    return (
      <div
        key={project.id}
        className="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-zinc-950/50 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 backdrop-blur-sm"
      >
        <div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className={statusClass}>
              {project.status}
            </span>
            
            {project.isPrivate ? (
              <div className="flex items-center gap-1.5 text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded text-xs font-mono">
                <Lock className="w-3.5 h-3.5" />
                <span>Private</span>
              </div>
            ) : project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-zinc-200 transition-colors p-1.5"
                aria-label={"Source code for " + project.title}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            ) : null}
          </div>

          <h4 className="text-xl font-semibold text-zinc-100 mb-2">
            {project.title}
          </h4>

          {/* بزرگ کردن خلاصه پروژه */}
          <p className="text-sm font-mono text-zinc-400 mb-4">
            {project.summary}
          </p>

          {/* بزرگ کردن توضیحات اصلی */}
          <p className="text-base text-zinc-400 leading-relaxed mb-6">
            {project.description}
          </p>

          {project.metrics ? (
            <div className="mb-6 text-sm font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-4 py-3 rounded">
              <span className="text-zinc-500 mr-2">&gt;</span>
              {project.metrics}
            </div>
          ) : null}
        </div>

        <div className="pt-5 border-t border-zinc-900 flex flex-wrap gap-2">
          {project.stack.map(function (tech) {
            return (
              <span
                key={tech}
                className="text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded"
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
    <section id="projects" className="py-24 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-sm font-mono text-electric-400 mb-3">
            <Terminal className="w-4 h-4" />
            <span>ENGINEERING &amp; ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
            Featured Systems &amp; Products
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Selected engineering implementations covering deep system internals,
            custom virtual machines, database storage engines, and full-stack platforms.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xl font-semibold text-zinc-200">
              Low-Level Systems &amp; Runtimes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemsProjects.map(renderProjectCard)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xl font-semibold text-zinc-200">
              Platform Architecture &amp; Production Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fullStackProjects.map(renderProjectCard)}
          </div>
        </div>
      </div>
    </section>
  )
}