import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { AiCapabilities } from './components/sections/AiCapabilities'
import { Download } from './components/sections/Download'
import { Faq } from './components/sections/Faq'
import { Features } from './components/sections/Features'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'

export default function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <Features />
        <HowItWorks />
        <AiCapabilities />
        <Download />
        <Faq />
      </main>

      <SiteFooter />
    </div>
  )
}
