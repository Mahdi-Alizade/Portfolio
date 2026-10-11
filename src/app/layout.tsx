import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { site } from '../lib/site'

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: site.name + " | " + site.title,
  description: site.bio,
}

export default function RootLayout(props: { children: React.ReactNode }) {
  let fontClass = interFont.variable
  let layoutClass = fontClass + " font-sans bg-background text-foreground selection:bg-electric-500/20 selection:text-electric-400"

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={layoutClass}>
        {props.children}
      </body>
    </html>
  )
}