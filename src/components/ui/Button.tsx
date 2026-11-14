import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'quiet' | 'inverse'
type ButtonSize = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-700 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-600 text-white shadow-[0_10px_24px_-12px_rgb(99_91_219/0.8)] hover:bg-brand-700 active:bg-brand-800',
  secondary:
    'border border-line-strong bg-white/80 text-ink hover:border-brand-300 hover:bg-white',
  quiet: 'text-ink-soft hover:text-brand-700',
  inverse:
    'bg-white text-ink shadow-[0_12px_28px_-16px_rgb(0_0_0/0.5)] hover:bg-brand-50 active:bg-brand-100',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.9rem]',
  lg: 'h-12 px-6 text-[0.95rem]',
}

type SharedProps = {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: SharedProps & ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: SharedProps & ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
