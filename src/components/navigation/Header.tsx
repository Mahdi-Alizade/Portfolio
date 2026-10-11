"use client"

import React, { useState, useEffect } from 'react'
import { site } from '../../lib/site'

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let headerBaseClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b "
  let headerStateClass = ""

  if (isScrolled) {
    headerStateClass = "py-4 bg-black/40 backdrop-blur-xl border-white/5 shadow-2xl shadow-black/50"
  } else {
    headerStateClass = "py-6 bg-transparent border-transparent"
  }

  let finalHeaderClass = headerBaseClass + headerStateClass

  return (
    <header className={finalHeaderClass}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        <a href="/" className="text-sm font-semibold tracking-wide text-white hover:text-electric-400 transition-colors">
          {site.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        <a 
          href="#contact" 
          className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-sm font-medium text-white transition-all backdrop-blur-md"
        >
          Let's Talk
        </a>

      </div>
    </header>
  )
}