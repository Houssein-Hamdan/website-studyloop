import { RotateCcw } from 'lucide-react'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  {
    title: 'Create a space',
    body: 'Give each subject or project its own learning space so lessons stay grouped.',
  },
  {
    title: 'Build the lesson',
    body: 'Add topics yourself, or paste raw material and let AI organize it into a lesson.',
  },
  {
    title: 'Practice the material',
    body: 'Generate quizzes and summaries from the whole lesson or just the topics you choose.',
  },
  {
    title: 'Come back when due',
    body: 'Review lessons the app brings back, then follow your progress in analytics.',
  },
]

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="scroll-mt-24 border-y border-line bg-surface"
    >
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Study in a loop, not a straight line."
          description="Learn it, test it, condense it, then meet it again when it is due. StudyLoop keeps every pass connected to the same lesson."
        />

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-5 top-5 hidden h-px bg-line-strong lg:block"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-display text-sm font-semibold text-brand-800 shadow-[0_0_0_6px_var(--color-surface)]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.015em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-12 flex items-center gap-2 border-t border-line pt-6 text-sm text-ink-muted">
          <RotateCcw className="size-4 text-brand-700" strokeWidth={1.9} aria-hidden="true" />
          The loop restarts whenever a lesson is due for review.
        </p>
      </Container>
    </Section>
  )
}
