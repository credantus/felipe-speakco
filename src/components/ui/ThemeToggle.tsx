import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/theme'
import { cn } from '@/lib/utils'

const iconVariants = {
  initial: { opacity: 0, rotate: -90, scale: 0.6 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    rotate: 90,
    scale: 0.6,
    transition: { duration: 0.18, ease: 'easeIn' as const },
  },
}

interface ThemeToggleProps {
  className?: string
  darkText?: boolean
}

export function ThemeToggle({ className, darkText = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      aria-pressed={isDark}
      className={cn(
        'relative p-2 rounded-lg',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        darkText
          ? 'text-gray-500 hover:text-primary hover:bg-primary/5'
          : 'text-white/60 hover:text-white hover:bg-white/10',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="block"
            aria-hidden="true"
          >
            <Sun size={18} strokeWidth={1.75} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="block"
            aria-hidden="true"
          >
            <Moon size={18} strokeWidth={1.75} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}
