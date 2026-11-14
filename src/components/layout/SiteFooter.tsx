import { ArrowUpRight, Mail } from 'lucide-react'
import { contactHref, downloadHref, navLinks, site } from '../../data/site'
import { BrandMark } from '../brand/BrandMark'
import { StatusTag } from '../ui/Badge'
import { Container } from '../ui/Container'

const hasApk = site.apkUrl.length > 0

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <BrandMark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              A focused Android study companion for turning lessons into lasting
              knowledge.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-ink-muted">
              <span className="size-1.5 rounded-full bg-warm-600" aria-hidden="true" />
              Independent project · Made for Android
            </p>
          </div>

          <div>
            <h2 className="text-eyebrow font-semibold uppercase text-ink-muted">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={downloadHref}
                  className="inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-brand-700"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-eyebrow font-semibold uppercase text-ink-muted">
              Project
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-brand-700"
                >
                  GitHub
                  <ArrowUpRight
                    className="size-3.5 text-ink-faint"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li>
                <a
                  href={contactHref}
                  className="inline-flex items-center gap-1.5 text-ink-soft transition-colors hover:text-brand-700"
                >
                  <Mail className="size-3.5" strokeWidth={1.9} aria-hidden="true" />
                  Contact
                </a>
              </li>
              
              <li className="flex items-center gap-2 text-ink-muted">
                Public APK{' '}
                {hasApk ? (
                  <StatusTag tone="success">Available</StatusTag>
                ) : (
                  <StatusTag tone="warm">Pending</StatusTag>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.year} StudyLoop · Built by Houssein Hamdan</p>
          <p>Independent project · Made for Android</p>
        </div>
      </Container>
    </footer>
  )
}
