import Link from 'next/link'
import { ArrowRight, Github, Globe, LinkedIn, MapPin, Send } from 'lucide-react'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for global projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            I build AI solutions <br />
            that solve <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">real problems.</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Hi, I'm <strong className="text-white">Mahdi Alizade</strong>. I architect intelligent systems for the modern world. Currently building <strong>Nova AI</strong> for beauty clinics.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
              See My Work <ArrowRight size={20} className="ml-2" />
            </Button>
            
            <Button variant="outline" size="lg" asChild className="gap-2 cursor-pointer">
              <a href="https://github.com/Mahdi-Alizade" target="_blank" rel="noreferrer">
                 <Github size={20} /> View GitHub
              </a>
            </Button>
          </div>

          {/* Socials - Corrected Icons */}
          <div className="pt-8 border-t border-white/10 flex gap-6 items-center text-slate-500">
             <Globe size={18} className="hover:text-emerald-400 cursor-pointer transition-colors"/>
             <Github size={18} className="hover:text-white cursor-pointer transition-colors"/>
             <LinkedIn size={18} className="hover:text-blue-400 cursor-pointer transition-colors"/>
             <span className="text-sm ml-4">English • Persian</span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block h-[500px] rounded-2xl bg-zinc-900/50 border border-white/5 overflow-hidden">
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 space-y-4">
                 <div className="h-32 w-full bg-white/5 rounded-lg border border-white/5 animate-pulse" />
                 <div className="h-4 w-3/4 bg-white/5 rounded" />
                 <div className="h-4 w-1/2 bg-white/5 rounded" />
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}