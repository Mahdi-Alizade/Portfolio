import { Button } from '../ui/Button'
import { ArrowUpRight, Calendar, Bot, Users } from 'lucide-react'

const projects = [
  {
    title: "Nova AI",
    desc: "An intelligent booking system for beauty clinics. Uses NLP to understand requests and manages the schedule.",
    tags: ["NestJS", "Next.js", "AI Integration"],
    icon: <Calendar className="w-6 h-6 text-emerald-500" />,
    status: "MVP Ready"
  },
  {
    title: "EcoTracker",
    desc: "A simple dashboard to track carbon footprints of daily activities.",
    tags: ["React", "Chart.js"],
    icon: <Bot className="w-6 h-6 text-blue-500" />,
    status: "Coming Soon"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Building tools that matter. Here are a few things I've been working on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300">
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-800/50 rounded-lg">
                  {project.icon}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full border ${
                  project.status === 'MVP Ready' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-slate-700 text-slate-500'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 line-clamp-3">
                {project.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="text-emerald-500 hover:text-emerald-400 p-0 hover:bg-transparent gap-1">
                  See Project <ArrowUpRight size={16} />
                </Button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}