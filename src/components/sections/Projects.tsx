import { Button } from '../ui/Button'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none opacity-50 sm:opacity-100" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base px-4">
            Building tools that matter. Here is what I&apos;m focused on right now.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="group relative rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-emerald-500/30 transition-colors duration-300 overflow-hidden">
            <div className="relative w-full border-b border-white/5 bg-zinc-950">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nova-demo.png"
                alt="Nova AI product preview"
                className="w-full h-auto object-cover object-top block"
              />
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Nova AI</h3>
                <span className="text-[10px] sm:text-xs px-2 py-1 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 shrink-0">
                  MVP Ready
                </span>
              </div>

              <p className="text-slate-400 mb-6 text-sm sm:text-base">
                AI operating system for beauty clinics. Turns WhatsApp &amp; Instagram
                messages into booked, paid appointments — automatically.
              </p>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-wrap gap-2">
                  {['NestJS', 'Next.js', 'AI Integration'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-emerald-500 hover:text-emerald-400 p-0 hover:bg-transparent gap-1 text-xs sm:text-sm shrink-0"
                >
                  See Project <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}