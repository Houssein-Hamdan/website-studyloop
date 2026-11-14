import {
  ArrowUpRight,
  CalendarClock,
  Info,
  Layers,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import homeDashboard from '../../assets/screenshots/home-dashboard.jpg'
import { site } from '../../data/site'
import { LoopMotif } from '../brand/LoopMotif'
import { DownloadButton } from '../download/DownloadButton'
import { AppScreenshot } from '../phone/AppScreenshot'
import { PhoneFrame } from '../phone/PhoneFrame'
import { Badge } from '../ui/Badge'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'

const features = [
  { icon: Layers, label: 'Spaces, lessons & topics' },
  { icon: Sparkles, label: 'AI-assisted quizzes & summaries' },
  { icon: CalendarClock, label: 'Spaced review & progress' },
] as const

export function Hero() {
  const hasApk = site.apkUrl.length > 0

  return (
    <Section
      id="overview"
      className="hero-wash overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_55%_at_78%_35%,black,transparent)]" />
      </div>

      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 xl:gap-16">
          <div className="min-w-0">
            <Badge tone="brand">
              <Smartphone className="size-3.5" strokeWidth={1.9} aria-hidden="true" />
              For Android
            </Badge>

            <h1 className="mt-6 max-w-[13ch] text-balance text-display text-ink">
              Make what you study <em className="text-brand-700">stick.</em>
            </h1>

            <p className="mt-6 max-w-[47ch] text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              StudyLoop is an Android study app that turns lessons into topics,
              quizzes, summaries, and spaced reviews — so what you learn stays with
              you.
            </p>

            <div
              id="get-the-app"
              className="mt-9 flex scroll-mt-28 flex-col gap-3 sm:flex-row sm:items-center"
            >
              <DownloadButton
                placeholderHref="#download"
                describedBy={hasApk ? undefined : 'apk-note'}
              />

              <ButtonLink
                href={site.github}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="lg"
              >
                View on GitHub
                <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden="true" />
              </ButtonLink>
            </div>

            {!hasApk ? (
              <p
                id="apk-note"
                className="mt-4 flex max-w-xl items-start gap-2 text-xs leading-relaxed text-ink-muted"
              >
                <Info
                  className="mt-px size-3.5 shrink-0 text-brand-600"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
                <span>
                  <span className="font-medium text-ink-soft">
                    Placeholder download.
                  </span>{' '}
                  The signed APK is not published yet. This link will be activated
                  once the release is approved.
                </span>
              </p>
            ) : null}

            <ul className="mt-10 grid max-w-xl gap-x-6 gap-y-4 border-t border-line pt-7 sm:grid-cols-3">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-[0.82rem] font-medium leading-snug text-ink-soft">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:justify-self-end">
            <LoopMotif className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 text-brand-400 opacity-70 sm:h-[600px] sm:w-[600px]" />

            <div className="relative">
              <PhoneFrame>
                <AppScreenshot
                  src={homeDashboard}
                  width={534}
                  height={1070}
                  priority
                  alt="The StudyLoop home dashboard: a welcome card with a Start Learning button, plus quick actions for creating a space, Ask AI, review, and progress."
                />
              </PhoneFrame>
            </div>

            <p className="relative mt-7 text-center text-xs text-ink-muted">
              StudyLoop dashboard on Android
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
