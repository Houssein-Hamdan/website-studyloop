import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '../../lib/cn'

type BadgeTone = 'brand' | 'neutral' | 'success' | 'warm' | 'info'

const tones: Record<BadgeTone, string> = {
  brand: 'border-brand-200 bg-brand-50 text-brand-800',
  neutral: 'border-line bg-white/70 text-ink-muted',
  success: 'border-success-600/20 bg-success-100 text-success-600',
  warm: 'border-warm-600/20 bg-warm-100 text-warm-700',
  info: 'border-info-600/20 bg-info-100 text-info-600',
}

type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  tone?: BadgeTone
}

export function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}

type StatusTagProps = ComponentPropsWithoutRef<'span'> & {
  tone?: BadgeTone
}

/** Small, non-interactive label used for pending placeholders. */
export function StatusTag({ tone = 'neutral', className, ...props }: StatusTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em]',
        tones[tone],
        className,
      )}
      {...props}
    />
  )
}
