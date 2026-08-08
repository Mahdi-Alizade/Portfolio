import { Header } from '@/components/navigation/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <Header />
      
      {/* Sections Order */}
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Mahdi Alizade. Built with Next.js</p>
      </footer>

    </main>
  )
}