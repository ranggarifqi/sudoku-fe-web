/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_URL: string
  readonly VITE_BASIC_AUTH_USERNAME: string
  readonly VITE_BASIC_AUTH_PASSWORD: string
  readonly VITE_ENCRYPT_KEY: string
  readonly VITE_ENCRYPT_IV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}