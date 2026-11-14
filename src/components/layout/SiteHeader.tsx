import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { downloadHref, navLinks } from '../../data/site'
import { useScrolled } from '../../hooks/useScrolled'
import { cn } from '../../lib/cn'
import { BrandMark } from '../brand/BrandMark'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300',
        scrolled || open
          ? 'border-line bg-canvas/90 shadow-[0_1px_0_rgb(232_231_242/0.5)]'
          : 'border-transparent bg-canvas/60',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a
          href="#overview"
          aria-label="StudyLoop — back to top"
          className="rounded-lg"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href={downloadHref} size="sm">
            Download
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-white/70 text-ink transition-colors hover:bg-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X className="size-5" strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Menu className="size-5" strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>
      </Container>

      {open ? (
        <div id="mobile-navigation" className="border-t border-line bg-canvas/95 md:hidden">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-[0.95rem] font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <ButtonLink
                href={downloadHref}
                className="mt-3 w-full"
                onClick={() => setOpen(false)}
              >
                Download
              </ButtonLink>
              <p className="px-3 pb-1 pt-3 text-xs text-ink-muted">
                APK download is pending release.
              </p>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
