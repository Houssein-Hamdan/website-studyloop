import { cn } from '../../lib/cn'

type LoopMotifProps = {
  className?: string
}

/** Decorative review-loop line art. Purely visual, hidden from assistive tech. */
export function LoopMotif({ className }: LoopMotifProps) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      aria-hidden="true"
      className={cn('pointer-events-none select-none', className)}
    >
      <circle
        cx="240"
        cy="240"
        r="198"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeDasharray="2 12"
        strokeLinecap="round"
      />
      <circle cx="240" cy="240" r="132" stroke="currentColor" strokeOpacity="0.1" />
      <circle cx="240" cy="240" r="64" stroke="currentColor" strokeOpacity="0.1" />
      <path
        d="M111 246c-9-79 52-150 132-158 81-8 154 46 168 126 14 81-38 157-118 176"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M396 322c-42 51-111 74-174 56-64-18-110-72-121-135"
        stroke="currentColor"
        strokeOpacity="0.16"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="m291 393-7 17 17 6"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
