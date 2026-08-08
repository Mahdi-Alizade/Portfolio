import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// ایمپورت فونت اینترنتی Inter
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mahdi Alizade | AI Developer & Builder",
  description: "I build intelligent AI solutions that solve real-world problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        {/* یک div wrapper برای جلوگیری از پرش لود صفحه */}
        <div className="min-h-screen bg-[#050505] text-white selection:bg-green-900 selection:text-white">
          {children}
        </div>
      </body>
    </html>
  );
}