"use client"

import React, { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { site } from '../../lib/site'

interface NavigationItem {
  id: string
  label: string
  path: string
}

const navigationList: NavigationItem[] = [
  { id: 'nav-about', label: 'Architecture', path: '#about' },
  { id: 'nav-projects', label: 'Systems & Work', path: '#projects' },
  { id: 'nav-contact', label: 'Dispatch', path: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    function onScrollWindow() {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', onScrollWindow)
    return function cleanup() {
      window.removeEventListener('scroll', onScrollWindow)
    }
  }, [])

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

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
        
        <a href="/" className="group flex items-center gap-2.5 font-mono text-xs sm:text-sm text-zinc-100 hover:text-white transition-colors">
          <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-750 flex items-center justify-center text-electric-400 group-hover:border-zinc-500 transition-colors">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold tracking-wide text-white">
            {site.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] text-zinc-500 font-normal">
            / systems
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navigationList.map(function (item) {
            return (
              <a
                key={item.id}
                href={item.path}
                className="text-sm font-mono text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-sm font-medium text-white transition-all backdrop-blur-md"
          >
            Let's Talk
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>

      {mobileMenuOpen ? (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-xl border-b border-zinc-800 p-5 flex flex-col gap-4 font-mono text-xs shadow-2xl">
          {navigationList.map(function (item) {
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={closeMobileMenu}
                className="text-zinc-300 hover:text-electric-400 py-1"
              >
                &gt; {item.label}
              </a>
            )
          })}
        </div>
      ) : null}
    </header>
  )
}