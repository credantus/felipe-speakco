import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'

// ─── Tipos ───────────────────────────────────────────────────────────────────

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

// ─── Constantes ──────────────────────────────────────────────────────────────

const STORAGE_KEY = 'speakco-theme'
const DEFAULT_THEME: Theme = 'light'

// ─── Context ─────────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextType | null>(null)

// ─── Helpers ─────────────────────────────────────────────────────────────────

function applyThemeToDocument(theme: Theme): void {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

function readStoredTheme(): Theme {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // localStorage no disponible (SSR, modo incógnito bloqueado, etc.)
  }
  return DEFAULT_THEME
}

// ─── Provider ────────────────────────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME)

  // Leer preferencia guardada al montar
  useEffect(() => {
    const stored = readStoredTheme()
    setThemeState(stored)
    applyThemeToDocument(stored)
  }, [])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    applyThemeToDocument(newTheme)
    try {
      window.localStorage.setItem(STORAGE_KEY, newTheme)
    } catch {
      // Silenciar error si localStorage no está disponible
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de <ThemeProvider>')
  }
  return context
}
