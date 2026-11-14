import {
  BookOpen,
  CalendarClock,
  ChartColumn,
  Check,
  Clock,
  FileText,
  Layers,
  ListChecks,
  Sparkles,
} from 'lucide-react'
import { LoopMotif } from '../brand/LoopMotif'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const quizFormats = ['Multiple choice', 'Open text', 'Fill blanks', 'True or false']

const analyticsItems = [
  'Overall completion',
  'Topic progress',
  'Quiz performance',
  'Recent lessons',
]

const cardClass =
  'relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/70 p-6 transition-colors duration-300 hover:border-brand-200 sm:p-7'

export function Features() {
  return (
    <Section id="features" className="scroll-mt-24 border-t border-line">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Your lessons, turned into a study system."
          description="Spaces hold lessons. Lessons hold topics. Quizzes, summaries, and review all build on the material you add."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-6">
          <article className={`${cardClass} lg:col-span-3`}>
            <div className="flex items-center gap-2.5 text-brand-700">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50">
                <Layers className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-eyebrow font-semibold uppercase">
                Learning spaces
              </span>
            </div>

            <h3 className="mt-5 max-w-sm font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">
              Keep every subject in its own space.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
              Group related lessons into a learning space, then open that space to
              pick up exactly where you left off.
            </p>

            <div className="mt-6 rounded-2xl border border-line bg-surface/70 p-4 lg:mt-auto">
              <ol className="relative space-y-4 pl-6">
                <span
                  aria-hidden="true"
                  className="absolute bottom-2 left-[9px] top-2 w-px bg-line-strong"
                />
                <li className="relative">
                  <span className="absolute -left-6 top-0 flex size-5 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700">
                    <Layers className="size-3" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-medium text-ink">Space</p>
                  <p className="mt-0.5 text-[0.68rem] leading-relaxed text-ink-muted">
                    A subject or project
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-6 top-0 flex size-5 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700">
                    <BookOpen className="size-3" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-medium text-ink">Lesson</p>
                  <p className="mt-0.5 text-[0.68rem] leading-relaxed text-ink-muted">
                    One focused learning session
                  </p>
                </li>
                <li className="relative">
                  <span className="absolute -left-6 top-0 flex size-5 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700">
                    <ListChecks className="size-3" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-medium text-ink">Topic</p>
                  <p className="mt-0.5 text-[0.68rem] leading-relaxed text-ink-muted">
                    A smaller unit to complete
                  </p>
                </li>
              </ol>
            </div>
          </article>

          <article className={`${cardClass} bg-surface/70 lg:col-span-3`}>
            <div className="flex items-center gap-2.5 text-brand-700">
              <span className="flex size-9 items-center justify-center rounded-xl bg-white">
                <BookOpen className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-eyebrow font-semibold uppercase">Lessons</span>
            </div>

            <h3 className="mt-5 max-w-sm font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">
              Structure it yourself, or paste your notes.
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
              Build a lesson topic by topic, or start unstructured and let AI
              organize the material you paste in.
            </p>

            <ul className="mt-6 grid gap-2.5 lg:mt-auto">
              <li className="flex gap-3 rounded-2xl border border-line bg-white/70 p-3.5">
                <ListChecks
                  className="mt-0.5 size-4 shrink-0 text-brand-700"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-ink">Structured</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                    Add and arrange each topic yourself.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 rounded-2xl border border-line bg-white/70 p-3.5">
                <Sparkles
                  className="mt-0.5 size-4 shrink-0 text-brand-700"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-ink">Unstructured</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                    Paste raw notes and let AI organize the learning material.
                  </p>
                </div>
              </li>
            </ul>
          </article>

          <article className={`${cardClass} lg:col-span-2`}>
            <div className="flex items-center gap-2.5 text-brand-700">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50">
                <ListChecks className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-eyebrow font-semibold uppercase">Quizzes</span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">
              Practice that fits the lesson.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Generate a quiz from the full lesson, selected topics, or a random mix.
              You choose the difficulty, format, and number of questions.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 lg:mt-auto">
              {quizFormats.map((format) => (
                <li
                  key={format}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 text-[0.7rem] font-medium text-ink-soft"
                >
                  {format}
                </li>
              ))}
            </ul>
          </article>

          <article className={`${cardClass} lg:col-span-2`}>
            <div className="flex items-center gap-2.5 text-brand-700">
              <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50">
                <FileText className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-eyebrow font-semibold uppercase">Summaries</span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">
              Notes that get to the point.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Create a short, medium, or detailed summary of a full lesson or just the
              topics you choose.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 lg:mt-auto">
              {['Short', 'Medium', 'Detailed'].map((depth) => (
                <li
                  key={depth}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 text-[0.7rem] font-medium text-ink-soft"
                >
                  {depth}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-7 lg:col-span-2">
            <LoopMotif className="absolute -right-24 -top-28 size-72 text-brand-300 opacity-30" />

            <div className="relative flex flex-1 flex-col">
              <div className="flex items-center gap-2.5 text-brand-200">
                <span className="flex size-9 items-center justify-center rounded-xl bg-white/10">
                  <CalendarClock
                    className="size-[18px]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-eyebrow font-semibold uppercase">
                  Spaced review
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-white">
                The loop brings you back.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/85">
                When a lesson is due, it appears in your review queue with its next
                review date. Complete the review, and the schedule moves forward.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-brand-100 lg:mt-auto">
                <Clock className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
                Due-for-review queue
              </span>
            </div>
          </article>

          <article className={`${cardClass} lg:col-span-6`}>
            <div className="grid gap-7 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="flex items-center gap-2.5 text-brand-700">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-50">
                    <ChartColumn
                      className="size-[18px]"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-eyebrow font-semibold uppercase">Analytics</span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink">
                  See the loop add up.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                  Follow your overall completion, topic progress, quiz performance, and
                  the lessons you have worked on recently.
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {analyticsItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-ink-soft"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                      <Check className="size-3" strokeWidth={2.2} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  )
}
