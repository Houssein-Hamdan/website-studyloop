/** Public download of the signed release. Override with VITE_APK_URL if needed. */
const defaultApkUrl =
  'https://github.com/Houssein-Hamdan/studyloop-android/releases/download/v1.0.1/app-release.apk'

const apkUrl = import.meta.env.VITE_APK_URL?.trim() || defaultApkUrl

/**
 * SHA-256 of the published APK. Shown next to the download so people can
 * verify the file they received before installing it.
 */
const apkSha256 =
  '7deb89540fa01a3431cc516237081667cf1048e24233bc6215bfcdd91d048492'

export const site = {
  name: 'StudyLoop',
  tagline: 'Make what you study stick.',
  description:
    'StudyLoop is an Android study app that turns your lessons into topics, quizzes, summaries, and spaced reviews.',
  github: 'https://github.com/Houssein-Hamdan/studyloop-android',
  email: 'houssein.hamdn@gmail.com',
  /** Direct download of the signed v1.0.0 APK. */
  apkUrl,
  apkSha256,
  year: new Date().getFullYear(),
} as const

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'AI', href: '#ai' },
  { label: 'FAQ', href: '#faq' },
] as const

export const downloadHref = '#download'
export const contactHref = `mailto:${site.email}`
