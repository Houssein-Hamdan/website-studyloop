import type { ReactNode } from 'react'
import { ChevronDown, Mail } from 'lucide-react'
import { contactHref, site } from '../../data/site'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

type FaqItem = {
  question: string
  answer: ReactNode
}

const hasApk = site.apkUrl.length > 0

const faqs: FaqItem[] = [
  {
    question: 'Is StudyLoop available to download yet?',
    answer: hasApk ? (
      <>
        Yes. The signed Android APK is available from the{' '}
        <a
          href="#download"
          className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-800"
        >
          download section
        </a>
        . Compare the published SHA-256 fingerprint with your downloaded file
        before installing.
      </>
    ) : (
      <>
        Not yet. The app is built for Android, but a signed public release is still
        pending. This site does not host an APK; the download button is a clearly
        marked placeholder.{' '}
        <a
          href="#download"
          className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-800"
        >
          See release status
        </a>
        .
      </>
    ),
  },
  {
    question: 'What can I do in StudyLoop?',
    answer:
      'Create learning spaces and lessons, add topics, take quizzes, generate summaries, review lessons when they are due, and follow your progress in analytics. Ask AI is also available for general study questions.',
  },
  {
    question: 'How does AI fit into the app?',
    answer:
      'AI assists with quiz and summary generation, organizes material in unstructured lessons, and powers Ask AI. It is a study aid: AI can make mistakes, so verify important information.',
  },
  {
    question: 'How does spaced review work?',
    answer:
      'Lessons that are due appear in a review queue with their next review date. Completing a review moves the lesson forward in its schedule, so material comes back over time.',
  },
  {
    question: 'Do I need an account?',
    answer:
      'Yes. StudyLoop uses an account to sign in and keep your learning spaces and lessons associated with you.',
  },
  {
    question: 'What about privacy?',
    answer:
      'A privacy policy is being prepared and will be published before release. It will explain what the app stores, how that data is handled, and the choices available to you. No retention or deletion terms are published yet.',
  },
]

export function Faq() {
  return (
    <Section id="faq" className="scroll-mt-24 border-t border-line bg-surface/60">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="FAQ"
              title="A few things worth knowing."
              description="Short answers about the app, the AI, and the release. For anything else, get in touch."
            />

            <a
              href={contactHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700 transition-colors hover:text-brand-800"
            >
              <Mail className="size-4" strokeWidth={1.9} aria-hidden="true" />
              houssein.hamdn@gmail.com
            </a>
          </div>

          <div className="border-t border-line">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-line py-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-[0.98rem] font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown
                    className="size-4 shrink-0 text-ink-muted transition-transform duration-200 group-open:rotate-180"
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                </summary>
                <div className="pb-1 pr-8 pt-3 text-sm leading-relaxed text-ink-muted">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
