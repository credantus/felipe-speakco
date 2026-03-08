import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { useI18n } from '@/i18n'
import { useTheme } from '@/theme'

const WHATSAPP_LINK =
  'https://wa.me/573169535314?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20desarrollo%20de%20software'

interface NavLink {
  label: string
  href: string
}

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut' as const,
      when: 'afterChildren' as const,
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    height: 'auto' as const,
    transition: {
      duration: 0.3,
      ease: 'easeInOut' as const,
      when: 'beforeChildren' as const,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

const mobileLinkVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
}

export function Navbar() {
  const { t } = useI18n()
  const { theme } = useTheme()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isLight = theme === 'light'

  // Texto oscuro cuando: estamos scrolled en light mode
  const useDarkText = isScrolled && isLight

  const navLinks: NavLink[] = [
    { label: t.nav.inicio, href: '/' },
    { label: t.nav.servicios, href: '/servicios' },
    { label: t.nav.trabajos, href: '/trabajos' },
    { label: t.nav.academia, href: '/academia' },
    { label: t.nav.contacto, href: '/contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-500 ease-out',
        isScrolled
          ? isLight
            ? 'bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/[0.04] border-b border-gray-200/50'
            : 'bg-dark/80 backdrop-blur-2xl shadow-2xl shadow-black/30 border-b border-white/10'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="SPEAK.CO - Ir al inicio"
          >
            <img
              src="/images/logo.png"
              alt="SPEAK.CO®"
              className={cn(
                'h-8 md:h-10 w-auto transition-all duration-300',
                useDarkText && 'brightness-0',
              )}
            />
          </Link>

          {/* Links de navegación — desktop */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2" role="list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'relative px-3 py-2 rounded-lg text-sm font-medium',
                      'transition-all duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      useDarkText
                        ? isActive
                          ? 'text-primary'
                          : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                        : isActive
                          ? 'text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/10',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className={cn(
                          'absolute bottom-0 left-3 right-3 h-0.5 rounded-full',
                          useDarkText ? 'bg-primary' : 'bg-white',
                        )}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Controles derecha */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              href={WHATSAPP_LINK}
              variant="primary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'hidden md:inline-flex',
                'shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30',
              )}
            >
              {t.nav.agendar}
            </Button>

            <ThemeToggle darkText={useDarkText} />
            <LanguageToggle darkText={useDarkText} />

            {/* Hamburguesa mobile */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className={cn(
                'md:hidden p-2 rounded-lg',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                useDarkText
                  ? 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  : 'text-white/70 hover:text-white hover:bg-white/10',
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className={cn(
              'md:hidden overflow-hidden border-t',
              isLight
                ? 'bg-white/95 backdrop-blur-2xl border-gray-200/50'
                : 'bg-dark/98 backdrop-blur-md border-white/5',
            )}
          >
            <nav className="px-4 pt-3 pb-6 space-y-1" aria-label="Menú móvil">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <motion.div key={link.href} variants={mobileLinkVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-base font-medium',
                        'transition-colors duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                        isLight
                          ? isActive
                            ? 'text-primary bg-primary/5'
                            : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                          : isActive
                            ? 'text-white bg-white/8'
                            : 'text-white/70 hover:text-white hover:bg-white/8',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div variants={mobileLinkVariants} className="pt-2">
                <Button
                  asChild
                  href={WHATSAPP_LINK}
                  variant="primary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full shadow-md shadow-primary/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav.agendar}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
