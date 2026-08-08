    import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-zinc-900/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to start a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">conversation?</span>
            </h2>
            <p className="text-slate-400 max-w-lg">
              I'm currently open for new projects and collaborations globally. Drop me a line about your idea.
            </p>
          </div>

          <a 
            href="mailto:mahdi.contact.placeholder@gmail.com" // ⚠️ اینجا ایمیل واقعی رو بذار
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-emerald-400 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Get in touch
            <Mail size={20} className="group-hover:-rotate-12 transition-transform" />
          </a>

        </div>
      </div>
    </section>
  )
}