"use client"

import React from 'react'
import { site } from '../../lib/site'

export function Hero() {
  function scrollToProjects() {
    let elem = document.getElementById('projects')
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Subtle Electric Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-[1.05] mb-6">
          Architecting <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-blue-500">
            Intelligent Systems.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
          I am {site.name}. A software engineer specializing in scalable architectures, 
          custom runtimes, and building products that bridge complex logic with seamless user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button 
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors w-full sm:w-auto"
          >
            Explore Projects
          </button>
          <a 
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-md"
          >
            View GitHub
          </a>
        </div>

      </div>
    </section>
  )
}