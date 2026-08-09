import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Mahdi Alizade | AI Developer & Builder',
  description: 'I build intelligent AI solutions that solve real-world problems.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const mailto = site.email ? `mailto:${site.email}` : '#'

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#050505] text-white selection:bg-green-900 selection:text-white flex flex-col">
          {children}

          <footer className="mt-auto border-t border-white/10 bg-zinc-950/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} {site.name}. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
                <a
                  href={mailto}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}