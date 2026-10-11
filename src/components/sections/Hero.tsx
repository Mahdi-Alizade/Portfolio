"use client"

import React from 'react'
import { Terminal, ArrowUpRight, ShieldCheck, Database, Cpu } from 'lucide-react'
import { site } from '../../lib/site'

function GitHubSvg({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
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

function LinkedInSvg({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
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
  function handleScrollToProjects() {
    const sectionElement = document.getElementById('projects')
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-900 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS &amp; DISTRIBUTED ARCHITECTURE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
              Engineering low-level core engines &amp; reliable production backends.
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I&apos;m <span className="text-zinc-100 font-medium">{site.name}</span>. I design
              virtual machines, database storage engines, and containerized cloud services.
              From scratch algorithms to resilient production applications like Nova AI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-zinc-100 text-black text-xs sm:text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                <span>Inspect Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs sm:text-sm hover:border-zinc-700 hover:text-white transition-colors"
              >
                <GitHubSvg className="w-4 h-4" />
                <span>GitHub Repositories</span>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2.5 rounded bg-zinc-900/40 text-zinc-400 border border-zinc-850 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedInSvg className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs font-mono text-zinc-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Zero Hallucinated Specs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-zinc-400" />
                <span>Engineered From Scratch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Readout Console */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-900 text-zinc-500">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] text-zinc-400">system_runtime_inspector.sh</span>
                </div>
                <span className="text-[10px] text-zinc-600">x86_64 / win32</span>
              </div>

              <div className="space-y-3 text-zinc-300">
                <div>
                  <span className="text-zinc-500">$</span> cat core_competencies.json
                  <div className="pl-3 pt-1 text-zinc-400 space-y-1">
                    <p><span className="text-emerald-400">&quot;systems&quot;</span>: [&quot;Custom Bytecode VM&quot;, &quot;Append-Only KV Store&quot;],</p>
                    <p><span className="text-emerald-400">&quot;engine&quot;</span>: [&quot;Autograd Engine&quot;, &quot;RESP Sockets&quot;],</p>
                    <p><span className="text-emerald-400">&quot;platform&quot;</span>: [&quot;NestJS&quot;, &quot;BullMQ&quot;, &quot;Dockerode Sandboxes&quot;]</p>
                  </div>
                </div>

                <div className="pt-1 border-t border-zinc-900">
                  <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-1.5">
                    <span>Active Subsystems:</span>
                    <span className="text-emerald-400">6 running</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-850 flex items-center gap-2">
                      <Cpu className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">PyVM Opcode Exec</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-900/60 border border-zinc-850 flex items-center gap-2">
                      <Database className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">DBDB Log Storage</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-zinc-500 text-[11px] flex justify-between">
                  <span>Status: READY_FOR_DEPLOYMENT</span>
                  <span className="text-emerald-500 font-bold">100%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}