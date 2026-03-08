import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'

const COURSE_ICONS = ['⚡', '🤖', '🎨', '☁️']

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export function AcademiaPage() {
  const { t } = useI18n()

  return (
    <div style={{ backgroundColor: 'var(--color-dark)' }} className="relative min-h-screen overflow-hidden">
      {/* Orbes de color de fondo para glassmorphism */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-[10%] w-[600px] h-[600px] rounded-full bg-primary/[0.12] blur-[120px]" />
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-[100px]" />
        <div className="absolute bottom-20 left-[30%] w-[450px] h-[450px] rounded-full bg-primary-light/[0.10] blur-[90px]" />
      </div>

      {/* Header de página */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: 'var(--color-accent)' }}
        >
          SPEAK.CO®
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {t.academia.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-2xl"
          style={{ color: 'var(--color-gray-400)' }}
        >
          {t.academia.subtitle}
        </motion.p>
      </section>

      {/* Grid de cursos */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.academia.courses.map((course, i) => (
              <motion.article
                key={course.title}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="group relative rounded-2xl p-8 overflow-hidden cursor-default backdrop-blur-xl bg-white/[0.06] border border-white/[0.10] shadow-lg shadow-black/20 ring-1 ring-white/5 transition-all duration-300 hover:bg-white/[0.10] hover:shadow-xl hover:-translate-y-1"
              >
                {/* Borde accent al hacer hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: '1px solid var(--color-accent)' }}
                  aria-hidden="true"
                />

                {/* Ícono */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 text-2xl"
                  style={{ backgroundColor: 'rgba(220,241,40,0.1)' }}
                  aria-hidden="true"
                >
                  {COURSE_ICONS[i]}
                </div>

                {/* Contenido */}
                <h2 className="text-xl font-bold text-white mb-3">{course.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-gray-400)' }}>
                  {course.description}
                </p>

                {/* Badge "Próximamente" */}
                <div className="mt-6 inline-flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {t.academia.comingSoon}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bloque de CTA inferior */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 rounded-2xl p-10 text-center backdrop-blur-xl bg-accent/[0.06] border border-accent/[0.15] shadow-lg shadow-black/20 ring-1 ring-accent/5"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.academia.ctaTitle}
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'var(--color-gray-400)' }}>
              {t.academia.ctaDesc}
            </p>
            <a
              href="mailto:sales@speakcoeu.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-sm transition-opacity duration-200 hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-dark)',
              }}
            >
              {t.academia.ctaButton} →
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
