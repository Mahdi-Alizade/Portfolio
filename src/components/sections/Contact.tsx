"use client"

import React from 'react'
import { Mail, ArrowUpRight, Radio, Shield, Terminal } from 'lucide-react'
import { site } from '../../lib/site'

function GitHubSvg(props: { className?: string }) {
  let finalClassName = props.className || 'w-5 h-5'
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={finalClassName}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedInSvg(props: { className?: string }) {
  let finalClassName = props.className || 'w-5 h-5'
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={finalClassName}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Contact() {
  let mailAddress = site.email
  if (!mailAddress) {
    mailAddress = 'contact@example.com'
  }
  
  let mailtoLink = "mailto:" + mailAddress
  let currentYear = new Date().getFullYear()

  return (
    <section id="contact" className="py-24 border-t border-zinc-900 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-sm font-mono text-electric-400">
                <Radio className="w-4 h-4 animate-pulse" />
                <span>DIRECT DISPATCH &amp; ENGAGEMENT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight leading-snug">
                Initiate Contact or Discuss Core Engineering
              </h2>

              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl">
                Available for engineering systems roles, high-throughput backend design,
                and custom runtime development. If you need low-level implementation
                or distributed architecture built without fluff, reach out directly.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-sm font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-zinc-400" />
                  <span>Secure Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <span>Asynchronous Response</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Email - Text is selectable, clicking the card opens mailto */}
              <a
                href={mailtoLink}
                className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded bg-zinc-850 text-electric-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-mono mb-0.5">Electronic Mail</div>
                    <div className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                      {mailAddress}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </a>

              {/* GitHub - URL hidden, consistent with LinkedIn */}
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded bg-zinc-850 text-zinc-300">
                    <GitHubSvg className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-mono mb-0.5">Code Repositories</div>
                    <div className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                      GitHub Profile
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded bg-zinc-850 text-zinc-300">
                    <LinkedInSvg className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-mono mb-0.5">Professional Network</div>
                    <div className="text-base font-medium text-zinc-200 group-hover:text-white transition-colors">
                      LinkedIn Profile
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
              </a>
            </div>

          </div>

          <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-mono text-zinc-500">
            <div>
              <span>© {currentYear} {site.name}. All systems operational.</span>
            </div>
            <div>
              <span>Built with Next.js &amp; Tailwind CSS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}