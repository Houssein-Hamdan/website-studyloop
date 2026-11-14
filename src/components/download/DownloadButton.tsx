import { Download } from 'lucide-react'
import { site } from '../../data/site'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'

type DownloadButtonProps = {
  size?: 'md' | 'lg'
  variant?: 'primary' | 'inverse'
  /** Where the placeholder button should send the visitor for the release note. */
  placeholderHref: string
  describedBy?: string
  className?: string
}

/**
 * Renders a real download only when VITE_APK_URL is configured. Otherwise the
 * button is an internal link to a visible release note, marked "Soon".
 */
export function DownloadButton({
  size = 'lg',
  variant = 'primary',
  placeholderHref,
  describedBy,
  className,
}: DownloadButtonProps) {
  if (site.apkUrl) {
    return (
      <ButtonLink
        href={site.apkUrl}
        size={size}
        variant={variant}
        className={cn(
          'whitespace-nowrap px-4 text-sm sm:px-6 sm:text-[0.95rem]',
          className,
        )}
      >
        Download for Android
        <Download className="size-4" strokeWidth={2} aria-hidden="true" />
      </ButtonLink>
    )
  }

  return (
    <ButtonLink
      href={placeholderHref}
      size={size}
      variant={variant}
      aria-describedby={describedBy}
      title="The signed APK is not published yet"
      className={cn(
        'whitespace-nowrap px-4 text-sm sm:px-6 sm:text-[0.95rem]',
        className,
      )}
    >
      Download for Android
      <span
        className={cn(
          'ml-0.5 rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-brand-700',
          variant === 'inverse' ? 'bg-brand-50' : 'bg-white',
        )}
      >
        Soon
      </span>
    </ButtonLink>
  )
}
