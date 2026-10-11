import React from 'react'

import { Header } from '@/components/navigation/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  // این دیو اصلی کل برنامه است
  // استایل‌های پایه برای انتخاب متن (selection) اینجا تنظیم میشه
  return (
    <main className="relative min-h-screen bg-black text-zinc-200 selection:bg-emerald-500/30 selection:text-emerald-50">
      
      {/* هدر و ناوبری اصلی سایت */}
      <Header />
      
      {/* 
        ترتیب قرارگیری بخش‌های مختلف پورتفولیو
        فوتر به صورت یکپارچه داخل خود کامپوننت Contact قرار داده شده
      */}
      <div className="flex flex-col w-full">
        <Hero />
        
        <About />
        
        <Projects />
        
        <Contact />
      </div>

    </main>
  )
}