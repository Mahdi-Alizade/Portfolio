import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  // اعداد پایه برای هماهنگی با دکمه‌های موجود
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]"
  const primary = "bg-emerald-600 text-white hover:bg-emerald-700 shadow-[0_0_15px_rgba(5,150,105,0.4)] h-11 px-6 text-base gap-2 cursor-pointer"
  const outline = "border border-white/20 text-white hover:bg-white/10 h-11 px-6 text-base gap-2 cursor-pointer"

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] px-4">
      <div className="text-center max-w-md mx-auto space-y-6">
        {/* ۴۰۴ بزرگ لایه‌ای */}
        <div className="relative">
          <h1 
            className="text-8xl sm:text-9xl font-bold text-white/5 absolute inset-0 select-none tracking-tighter" 
            aria-hidden="true"
          >
            404
          </h1>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-700 font-bold tracking-tight">
            404
          </span>
        </div>

        <p className="text-lg sm:text-xl text-slate-300 font-medium">
          صفحه مورد نظر پیدا نشد.
        </p>
        <p className="text-sm text-slate-500 max-w-xs mx-auto">
          یا آدرس اشتباه بود، یا این بخش هنوز ساخته نشده. هر دو طرفه قابل حل است.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link href="/" className={`${base} ${primary}`}>
            <Home size={18} /> بازگشت به خانه
          </Link>
          <a
            href="https://github.com/Mahdi-Alizade"
            target="_blank"
            rel="noreferrer"
            className={`${base} ${outline}`}
          >
            <ArrowLeft size={18} /> گیت‌هاب من
          </a>
        </div>
      </div>
    </div>
  )
}