import { Info, Mail, ShieldCheck, Smartphone } from 'lucide-react'
import { cn } from '../../lib/cn'
import { contactHref, site } from '../../data/site'
import { LoopMotif } from '../brand/LoopMotif'
import { DownloadButton } from '../download/DownloadButton'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

function ReleaseTag({
  children,
  tone = 'default',
}: {
  children: string
  tone?: 'default' | 'success'
}) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.08em]',
        tone === 'success'
          ? 'border-success-600/35 bg-success-600/15 text-success-100'
          : 'border-white/15 bg-white/10 text-brand-100',
      )}
    >
      {children}
    </span>
  )
}

export function Download() {
  const hasApk = site.apkUrl.length > 0

  return (
    <Section id="download" className="scroll-mt-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div aria-hidden="true" className="download-wash absolute inset-0" />
          <div
            aria-hidden="true"
            className="dot-grid-dark absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom_right,black,transparent_72%)]"
          />
          <LoopMotif className="absolute -bottom-48 -right-32 size-[560px] text-brand-300 opacity-25" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-brand-100">
                <Smartphone className="size-3.5" strokeWidth={1.9} aria-hidden="true" />
                Android release
              </span>

              <h2 className="mt-5 max-w-xl text-balance font-display text-headline font-semibold text-white">
                Bring StudyLoop to your phone.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-100/85">
                {hasApk
                  ? 'StudyLoop is built for Android. Download the signed APK directly and install it on your device. Check the SHA-256 fingerprint before you install.'
                  : 'StudyLoop is built for Android. The signed APK is not published yet, so the download stays inactive until the release is ready.'}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <DownloadButton
                  variant="inverse"
                  placeholderHref="#download-status"
                  describedBy="download-status"
                />
                <ButtonLink
                  href={contactHref}
                  variant="quiet"
                  size="lg"
                  className="whitespace-nowrap border border-white/20 px-4 text-sm text-brand-100 hover:bg-white/10 hover:text-white sm:px-6 sm:text-[0.95rem]"
                >
                  Ask about the release
                  <Mail className="size-4" strokeWidth={1.9} aria-hidden="true" />
                </ButtonLink>
              </div>

              <p
                id="download-status"
                className="mt-4 flex max-w-xl scroll-mt-28 items-start gap-2 text-xs leading-relaxed text-brand-100/80"
              >
                <Info
                  className="mt-px size-3.5 shrink-0 text-brand-200"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
                <span>
                  {hasApk ? (
                    <>
                      <span className="font-medium text-white">Direct APK download.</span>{' '}
                      Android may ask you to allow installs from your browser the
                      first time you open the file.
                    </>
                  ) : (
                    <>
                      <span className="font-medium text-white">Placeholder download.</span>{' '}
                      No APK is hosted on this page yet. The link will be enabled
                      when a signed release is available.
                    </>
                  )}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-sm">
              <p className="text-eyebrow font-semibold uppercase text-brand-200">
                Release status
              </p>

              <dl className="mt-3 divide-y divide-white/10 text-sm">
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-brand-100/80">Platform</dt>
                  <dd className="font-medium text-white">Android</dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-brand-100/80">Public APK</dt>
                  <dd>
                    {hasApk ? (
                      <ReleaseTag tone="success">Available</ReleaseTag>
                    ) : (
                      <ReleaseTag>Pending</ReleaseTag>
                    )}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-brand-100/80">Download link</dt>
                  <dd>
                    {hasApk ? (
                      <ReleaseTag tone="success">Active</ReleaseTag>
                    ) : (
                      <ReleaseTag>Placeholder</ReleaseTag>
                    )}
                  </dd>
                </div>
              </dl>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.06] p-3.5">
                <p className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-brand-200">
                  <ShieldCheck
                    className="size-3.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  SHA-256
                </p>
                <code className="mt-2 block break-all font-mono text-[0.68rem] leading-relaxed text-brand-100/90">
                  {site.apkSha256}
                </code>
                <p className="mt-2 text-[0.7rem] leading-relaxed text-brand-100/70">
                  {hasApk
                    ? 'Compare this fingerprint with your downloaded file before installing.'
                    : 'Fingerprint of the signed build. The download link activates once the APK is hosted publicly.'}
                </p>
              </div>

              {hasApk ? null : (
                <p className="mt-4 text-xs leading-relaxed text-brand-100/75">
                  No release date has been announced. This page will not link to an
                  APK until the download is hosted.
                </p>
              )}

              <a
                href={contactHref}
                className="mt-4 inline-flex text-xs font-medium text-brand-100 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
              >
                Contact the developer
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
