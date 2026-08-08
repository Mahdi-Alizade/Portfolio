import { Header } from '@/components/navigation/Header'
import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      
      {/* Placeholder for future sections */}
      <div id="projects" className="min-h-[50vh] flex items-center justify-center text-white/50">
        More coming soon...
      </div>
    </main>
  )
}