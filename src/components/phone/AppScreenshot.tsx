import { cn } from '../../lib/cn'

type AppScreenshotProps = {
  /** Imported image URL of the capture. */
  src: string
  /** Describes what the screen shows for screen readers. */
  alt: string
  /** Native width of the capture, used to reserve layout space. */
  width: number
  /** Native height of the capture, used to reserve layout space. */
  height: number
  /** Skip lazy loading for captures that are visible on first paint. */
  priority?: boolean
  className?: string
}

/**
 * Fills the phone screen with a real capture of the Android app. Captures are
 * cropped to the status bar, so the frame draws its own status bar on top.
 */
export function AppScreenshot({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: AppScreenshotProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn(
        'h-full w-full bg-surface object-cover object-top',
        className,
      )}
    />
  )
}
