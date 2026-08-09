"use client";

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
    <section className="min-h-[calc(100vh-4rem)] flex items-center pt-24 pb-10 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none opacity-40 mix-blend-screen hidden sm:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="space-y-6 z-10 order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium uppercase tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for global projects
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
            I build AI solutions <br className="hidden sm:block" />
            that solve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              real problems.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed">
            Hi, I&apos;m <strong className="text-white">Mahdi Alizade</strong>. I architect
            intelligent systems for the modern world. Currently building{' '}
            <strong>Nova AI</strong> for beauty clinics.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="md"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              See My Work <ArrowRight size={18} className="ml-2" />
            </Button>

            <a href="https://github.com/Mahdi-Alizade" target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="md"
                className="gap-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                <GitHubIcon size={18} /> View GitHub
              </Button>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex gap-5 items-center text-slate-500 text-sm">
            <Globe size={16} className="hover:text-emerald-400 cursor-pointer transition-colors" />
            <a
              href="https://github.com/Mahdi-Alizade"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              <GitHubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <LinkedInIcon size={16} />
            </a>
            <span className="text-xs ml-2 opacity-60">English • Persian</span>
          </div>
        </div>

        <div className="order-2 relative w-full">
          <div className="absolute -inset-3 bg-emerald-500/20 rounded-2xl blur-2xl opacity-60 pointer-events-none" />
          <div className="relative rounded-2xl border border-white/10 bg-zinc-900/40 overflow-hidden shadow-2xl shadow-emerald-950/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/nova-demo.png"
              alt="Nova AI — AI operating system for beauty clinics"
              className="w-full h-auto object-cover object-top block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}