import { Header } from '@/components/navigation/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <Header />
      
      {/* Sections */}
      <Hero />
      <About />
      <Projects />

      {/* Footer Area */}
      <footer className="py-12 border-t border-white/10 bg-zinc-950/50 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Mahdi Alizade. All rights reserved.
        </p>
      </footer>

    </main>
  )
}