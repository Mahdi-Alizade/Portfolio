import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none opacity-60 sm:opacity-100" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-900/30 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Ready to start a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">conversation?</span>
            </h2>
            <p className="text-slate-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
              I'm currently open for new projects and collaborations globally. Drop me a line about your idea.
            </p>
          </div>

          <a 
            href="mailto:mahdi.contact.placeholder@gmail.com" 
            className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-emerald-400 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            Get in touch
            <Mail size={18} className="sm:w-5 sm:h-5 group-hover:-rotate-12 transition-transform" />
          </a>

        </div>
      </div>
    </section>
  )
}