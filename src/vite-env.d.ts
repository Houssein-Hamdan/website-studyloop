/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public URL of the signed StudyLoop APK. Empty while the release is pending. */
  readonly VITE_APK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
