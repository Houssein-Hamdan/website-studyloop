import type { ReactNode } from 'react'
import { BatteryFull, Wifi } from 'lucide-react'
import { cn } from '../../lib/cn'

type PhoneFrameProps = {
  children: ReactNode
  className?: string
}

/**
 * Android phone mockup. The screen area draws its own status bar; pass a real
 * app capture (see AppScreenshot) as children.
 */
export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[286px] sm:max-w-[300px]', className)}>
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[4.5rem] bg-brand-200/45 blur-3xl"
      />

      {/* Power and volume controls */}
      <span
        aria-hidden="true"
        className="absolute -right-[2px] top-[21%] h-16 w-[3px] rounded-r-full bg-ink/25"
      />
      <span
        aria-hidden="true"
        className="absolute -right-[2px] top-[37%] h-10 w-[3px] rounded-r-full bg-ink/25"
      />

      <div className="relative rounded-[3.1rem] bg-gradient-to-b from-[#373150] via-ink to-[#1b1730] p-[9px] shadow-phone ring-1 ring-ink/10">
        <div className="relative overflow-hidden rounded-[2.55rem] bg-white">
          <div className="relative aspect-[9/19.3]">
            <div className="absolute inset-x-0 top-0 z-10 flex h-9 items-center justify-between px-5 pt-2 text-[10px] font-semibold tabular-nums text-ink/85">
              <span>9:41</span>
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-2 size-[7px] -translate-x-1/2 rounded-full bg-ink/80 ring-2 ring-ink/10"
              />
              <span className="flex items-center gap-1" aria-hidden="true">
                <Wifi className="size-3" strokeWidth={2.2} />
                <BatteryFull className="size-3.5" strokeWidth={2} />
              </span>
            </div>

            <div className="absolute inset-0 pt-9">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
