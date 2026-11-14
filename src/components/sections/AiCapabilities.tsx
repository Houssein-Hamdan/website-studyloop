import {
  BrainCircuit,
  FileText,
  Info,
  MessageSquare,
  ScanText,
} from 'lucide-react'
import askAi from '../../assets/screenshots/ask-ai.jpg'
import { LoopMotif } from '../brand/LoopMotif'
import { AppScreenshot } from '../phone/AppScreenshot'
import { PhoneFrame } from '../phone/PhoneFrame'
import { Container } from '../ui/Container'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'Quiz generation',
    body: 'Choose the lesson or topics, then set the difficulty, format, and question count.',
  },
  {
    icon: FileText,
    title: 'Lesson summaries',
    body: 'Generate short, medium, or detailed notes for a whole lesson or selected topics.',
  },
  {
    icon: ScanText,
    title: 'Unstructured lessons',
    body: 'Paste raw material and let AI organize it into learning content.',
  },
  {
    icon: MessageSquare,
    title: 'Ask AI',
    body: 'Ask a general study question and get a concept explained in simpler terms.',
  },
]

export function AiCapabilities() {
  return (
    <Section id="ai" className="scroll-mt-24 overflow-hidden border-t border-line">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 xl:gap-16">
          <div>
            <SectionHeading
              eyebrow="AI capabilities"
              title="AI that works alongside your lessons."
              description="Use AI to turn lesson material into practice, organize raw notes, or ask a question when a concept will not click. It is a study aid, not a final answer."
            />

            <ul className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, title, body }) => (
                <li key={title}>
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon className="size-4" strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-start gap-3 rounded-2xl border border-brand-200 bg-brand-50/70 p-4">
              <Info
                className="mt-0.5 size-4 shrink-0 text-brand-700"
                strokeWidth={1.9}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">AI can make mistakes.</span>{' '}
                Verify important information before relying on it.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] lg:justify-self-end">
            <LoopMotif className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-brand-300 opacity-80" />

            <div className="relative">
              <PhoneFrame>
                <AppScreenshot
                  src={askAi}
                  width={540}
                  height={1068}
                  alt="Ask AI in StudyLoop: a chat screen with suggested prompts and a question box for asking about a study topic."
                />
              </PhoneFrame>
            </div>

            <p className="relative mt-7 text-center text-xs text-ink-muted">
              Ask AI on Android
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
