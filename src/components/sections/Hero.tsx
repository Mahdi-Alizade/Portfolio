import { ArrowRight, Globe } from 'lucide-react'
import { Button } from '../ui/Button'

function GitHubIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedInIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] pointer-events-none opacity-50 mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            that solve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              real problems.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Hi, I&apos;m <strong className="text-white">Mahdi Alizade</strong>. I architect
            intelligent systems for the modern world. Currently building{' '}
            <strong>Nova AI</strong> for beauty clinics.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              See My Work <ArrowRight size={20} className="ml-2" />
            </Button>

            <a
              href="https://github.com/Mahdi-Alizade"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2 cursor-pointer">
                <GitHubIcon size={20} /> View GitHub
              </Button>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 flex gap-6 items-center text-slate-500">
            <Globe size={18} className="hover:text-emerald-400 cursor-pointer transition-colors" />
            <a
              href="https://github.com/Mahdi-Alizade"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon size={18} />
            </a>
            <span className="text-sm ml-4">English • Persian</span>
          </div>
        </div>

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