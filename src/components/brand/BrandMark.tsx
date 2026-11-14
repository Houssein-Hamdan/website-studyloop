import { cn } from '../../lib/cn'

type BrandMarkProps = {
  className?: string
  withWordmark?: boolean
  markClassName?: string
}

export function BrandMark({
  className,
  withWordmark = true,
  markClassName,
}: BrandMarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={cn('size-9 shrink-0', markClassName)}
      >
        <rect width="64" height="64" rx="17" fill="#635BDB" />
        <path
          d="M19.5 26.5a13 13 0 0 1 23.3-2.1"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path
          d="M36.8 20.3 42.8 24.4 37.1 29.1"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.4"
        />
        <path
          d="M14 37.5c6-3.4 12-3.4 18 0V50c-6-3.4-12-3.4-18 0V37.5Z"
          fill="#fff"
        />
        <path
          d="M50 37.5c-6-3.4-12-3.4-18 0V50c6-3.4 12-3.4 18 0V37.5Z"
          fill="#fff"
        />
        <path d="M32 37.5V50" stroke="#635BDB" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
      {withWordmark ? (
        <span className="font-display text-[1.35rem] font-semibold tracking-[-0.02em] text-ink">
          StudyLoop
        </span>
      ) : null}
    </span>
  )
}
