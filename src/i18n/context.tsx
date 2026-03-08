import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import { es } from './es'
import { en } from './en'

// ─── Tipos ───────────────────────────────────────────────────────────────────

export type Locale = 'es' | 'en'

// El tipo de traducciones se deriva de `es` para que TypeScript
// infiera cada clave de forma estricta y habilite autocompletado.
export type Translations = typeof es

// ─── Constantes ──────────────────────────────────────────────────────────────

const STORAGE_KEY = 'speakco-locale'
const DEFAULT_LOCALE: Locale = 'es'

const TRANSLATIONS: Record<Locale, Translations> = {
  es,
  // `en` se castea porque ambos objetos comparten exactamente la misma
  // estructura; `as const` los hace literales y el cast evita conflictos
  // entre literales distintos que semánticamente son equivalentes.
  en: en as unknown as Translations,
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // localStorage puede no estar disponible (SSR, modo incógnito estricto, etc.)
  }
  return DEFAULT_LOCALE
}

function persistLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Silenciar errores de escritura
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

interface I18nContextType {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextType | null>(null)

// ─── Provider ────────────────────────────────────────────────────────────────

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    persistLocale(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === 'es' ? 'en' : 'es'
      persistLocale(next)
      return next
    })
  }, [])

  const value: I18nContextType = {
    locale,
    t: TRANSLATIONS[locale],
    setLocale,
    toggleLocale,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useI18n(): I18nContextType {
  const ctx = useContext(I18nContext)
  if (ctx === null) {
    throw new Error('useI18n debe usarse dentro de <I18nProvider>')
  }
  return ctx
}
