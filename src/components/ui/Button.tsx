import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button(props: ButtonProps) {
  // مقادیر پیش‌فرض رو استخراج می‌کنیم
  const variant = props.variant || 'default'
  const size = props.size || 'md'
  const className = props.className || ''
  
  // جدا کردن بقیه پراپ‌ها برای پاس دادن به دکمه اصلی
  const { variant: _v, size: _s, className: _c, children, ...restProps } = props

  // کلاس‌های پایه که همه دکمه‌ها دارن
  let baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-md "

  // کلاس‌های مربوط به سایز
  let sizeClasses = ""
  if (size === 'sm') {
    sizeClasses = "px-3 py-1.5 text-xs "
  } else if (size === 'lg') {
    sizeClasses = "px-6 py-3 text-base "
  } else {
    // سایز md به عنوان پیش‌فرض
    sizeClasses = "px-4 py-2 text-sm "
  }

  // کلاس‌های مربوط به ظاهر (Variant)
  let variantClasses = ""
  if (variant === 'default') {
    variantClasses = "bg-zinc-100 text-black hover:bg-zinc-200 "
  } else if (variant === 'outline') {
    variantClasses = "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 "
  } else if (variant === 'ghost') {
    variantClasses = "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 "
  }

  // ترکیب کردن همه کلاس‌ها
  const finalClassName = baseClasses + sizeClasses + variantClasses + className

  return (
    <button className={finalClassName} {...restProps}>
      {children}
    </button>
  )
}