# StudyLoop Website

Landing page for the StudyLoop Android app. Built with React, TypeScript, Vite,
Tailwind CSS v4, and Lucide React.

This project is independent from the Android app and does not import or modify
any Android source files.

## Local development

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Deployment target is Vercel (`vercel.json` is included); deploy when you are
ready.

## Environment

The site already points at the signed v1.0.0 APK. `VITE_APK_URL` is an optional
override if the file moves:

```bash
VITE_APK_URL=https://example.com/path/to/StudyLoop.apk
```

When set, it replaces the default download URL. The release panel always shows
the SHA-256 fingerprint stored in `src/data/site.ts`.

## Structure

```text
src/
  assets/
    screenshots/  Real Android captures used inside the phone mockups
  components/
    brand/      BrandMark, LoopMotif
    download/   DownloadButton
    layout/     SiteHeader, SiteFooter
    phone/      PhoneFrame, AppScreenshot
    sections/   Hero, Features, HowItWorks, AiCapabilities, Download, Faq
    ui/         Badge, Button, Container, Section, SectionHeading
  data/         site metadata and navigation
  hooks/        useScrolled
  lib/          class-name helper
  styles/       Tailwind theme tokens and fonts
```

## Sections

1. Hero
2. Features
3. How it works
4. AI capabilities
5. Download
6. FAQ

The header and footer link to the section anchors. The mobile menu closes after a
link is selected and supports the Escape key.

## Screenshots

The phone mockups use the real captures in `screenshots/`:

- `HomePage.jpg` — the Dashboard / home screen
- `AskAI.jpg` — the Ask AI screen

They are copied into `src/assets/screenshots/` (`home-dashboard.jpg`,
`ask-ai.jpg`) so Vite can hash and optimise them. Replace those two files to
update the site.

## Release status

- The Android APK downloads directly from the signed v1.0.0 release:
  `https://github.com/Houssein-Hamdan/studyloop-android/releases/download/v1.0.0/studyLoop.1.apk`
- SHA-256:
  `7deb89540fa01a3431cc516237081667cf1048e24233bc6215bfcdd91d048492` —
  verified against the hosted file and shown in the download panel.
- Privacy is marked as **Draft** in the footer, download panel, and FAQ. Retention
  and deletion details still need confirmation before a policy is published.
- No release date has been announced beyond the v1.0.0 tag, and no privacy page or
  deployment is included in this repository.
