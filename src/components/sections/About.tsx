import { ArrowDownRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1507238691140-d48db37506ef?q=80&w=800&auto=format&fit=crop" 
              alt="Mahdi Alizade" 
              className="relative w-full h-[300px] sm:h-[400px] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-5">
            <div className="inline-block px-3 py-1 rounded-full border border-slate-700 text-[10px] font-medium text-slate-400 mb-2">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Architecting the Future of <span className="text-emerald-500">Beauty AI.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              I'm <strong className="text-white">Mahdi Alizade</strong>, a developer passionate about merging technology with human-centric solutions.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My focus is on building scalable SaaS products that solve real problems. Currently, I am the lead architect behind <strong>Nova AI</strong>, an intelligent appointment panel designed specifically for beauty clinics, aiming to bridge the gap between customer convenience and business efficiency.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
               {['Next.js', 'TypeScript', 'NestJS', 'React'].map((tech) => (
                 <span key={tech} className="px-3 py-1 bg-slate-900/50 rounded text-xs text-emerald-400 border border-slate-800">
                   {tech}
                 </span>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}