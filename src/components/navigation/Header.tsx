"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react'
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
      if (window.scrollY > 25) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', onScrollWindow)
    return function cleanUp() {
      window.removeEventListener('scroll', onScrollWindow)
    }
  }, [])

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'py-3.5 bg-black/85 backdrop-blur-md border-b border-zinc-850'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-xs sm:text-sm text-zinc-100 hover:text-white transition-colors"
        >
          <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-750 flex items-center justify-center text-emerald-400 group-hover:border-zinc-500 transition-colors">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold tracking-tight text-zinc-200">
            {site.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] text-zinc-500 font-normal">
            / systems
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono">
          {navigationList.map(function (item) {
            return (
              <a
                key={item.id}
                href={item.path}
                className="text-zinc-400 hover:text-zinc-100 transition-colors py-1"
              >
                {item.label}
              </a>
            )
          })}

          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white transition-all text-xs"
          >
            <span>Source Code</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen ? (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-5 flex flex-col gap-4 font-mono text-xs shadow-2xl">
          {navigationList.map(function (item) {
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={closeMobileMenu}
                className="text-zinc-300 hover:text-emerald-400 py-1"
              >
                &gt; {item.label}
              </a>
            )
          })}
          <div className="pt-2 border-t border-zinc-900">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="inline-flex items-center justify-between w-full px-3 py-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              <span>GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}