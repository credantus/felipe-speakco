import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

interface LanguageToggleProps {
  className?: string
  darkText?: boolean
}

export function LanguageToggle({ className, darkText = false }: LanguageToggleProps) {
  const { locale, toggleLocale } = useI18n()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
      className={cn(
        'px-2 py-1.5 rounded-lg',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        darkText
          ? 'text-gray-500 hover:text-primary hover:bg-primary/5'
          : 'text-white/60 hover:text-white hover:bg-white/10',
        className,
      )}
    >
      <span className="text-xs font-bold font-mono leading-none" aria-hidden="true">
        {locale === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  )
}
