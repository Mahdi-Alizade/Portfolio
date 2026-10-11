import React from 'react'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { site } from '../lib/site'

// تعریف فونت برای متن‌های اصلی
const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// تعریف فونت برای بخش‌های ترمینال و کد
const jetbrainsMonoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.bio,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // ساختن کلاس‌های فونت برای بادی
  // این کار باعث میشه فونت‌ها به درستی لود بشن و سایت به هم ریخته به نظر نرسه
  let bodyClasses = ""
  bodyClasses = bodyClasses + interFont.variable + " "
  bodyClasses = bodyClasses + jetbrainsMonoFont.variable + " "
  bodyClasses = bodyClasses + "font-sans bg-black text-zinc-200"

  return (
    <html lang="en" className="dark">
      <body className={bodyClasses}>
        {children}
      </body>
    </html>
  )
}