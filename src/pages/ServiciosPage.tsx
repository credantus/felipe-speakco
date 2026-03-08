import { motion } from 'framer-motion'
import { Services } from '@/components/Services'
import { Differentials } from '@/components/Differentials'
import { useI18n } from '@/i18n'

export function ServiciosPage() {
  const { t } = useI18n()

  return (
    <>
      {/* Header de página */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-16"
        style={{ backgroundColor: 'var(--color-dark)' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: 'var(--color-accent)' }}
        >
          {t.services.label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          {t.nav.servicios}
        </motion.h1>
      </section>

      <Services />
      <Differentials />
    </>
  )
}
