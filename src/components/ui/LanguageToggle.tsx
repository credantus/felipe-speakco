import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, toggleLocale } = useI18n()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
      aria-pressed={locale === 'en'}
      className={cn(
        'p-2 rounded-md',
        'text-gray-300 hover:text-white hover:bg-white/10',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
        className,
      )}
    >
      <span className="text-xs font-bold font-mono leading-none" aria-hidden="true">
        {locale === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  )
}
