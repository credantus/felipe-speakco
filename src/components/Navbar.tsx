import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const WHATSAPP_LINK =
  'https://wa.me/573169535314?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20desarrollo%20de%20software'

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Academia', href: '#academia' },
  { label: 'Contacto', href: '#contacto' },
]

// Variantes de animación para el menú móvil
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Detectar scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar el menú móvil al redimensionar la ventana hacia desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            aria-label="SPEAK.CO - Ir al inicio"
          >
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              SPEAK.CO
              <span className="text-accent">®</span>
            </span>
          </a>

          {/* Links de navegación — desktop */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium',
                    'text-gray-300 hover:text-white',
                    'transition-colors duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop + botón hamburguesa mobile */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              href={WHATSAPP_LINK}
              variant="primary"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              Agendar
            </Button>

            {/* Botón hamburguesa — solo mobile */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className={cn(
                'md:hidden p-2 rounded-md',
                'text-gray-300 hover:text-white hover:bg-white/10',
                'transition-colors duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
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
            className="md:hidden overflow-hidden bg-dark/98 backdrop-blur-md border-t border-white/5"
          >
            <nav className="px-4 pt-3 pb-6 space-y-1" aria-label="Menú móvil">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={mobileLinkVariants}>
                  <a
                    href={link.href}
                    onClick={handleNavLinkClick}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium',
                      'text-gray-300 hover:text-white hover:bg-white/8',
                      'transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
                    )}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <motion.div variants={mobileLinkVariants} className="pt-2">
                <Button
                  asChild
                  href={WHATSAPP_LINK}
                  variant="primary"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={handleNavLinkClick}
                >
                  Agendar consulta
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
