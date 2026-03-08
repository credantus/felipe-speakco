import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n';

// ─── Variantes de animación ────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// ─── Bloque 1 — Diferencial & Continuidad ─────────────────────────────────

function DiferencialBlock(): React.ReactElement {
  const { t } = useI18n();
  return (
    <div
      className={cn(
        'bg-dark py-24 px-6',
        'relative overflow-hidden',
      )}
      style={{
        background: 'linear-gradient(160deg, var(--color-dark) 0%, var(--color-dark-secondary) 100%)',
      }}
    >
      {/* Decoración de fondo sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 60%), radial-gradient(circle at 80% 30%, var(--color-accent) 0%, transparent 50%)',
        }}
      />

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Etiqueta superior */}
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm font-semibold uppercase tracking-widest"
          style={{ color: 'var(--color-accent)' }}
        >
          {t.differentials.label}
        </motion.p>

        {/* Título principal */}
        <motion.h2
          variants={fadeInUp}
          className="mb-6 text-3xl font-bold text-white md:text-4xl"
        >
          {t.differentials.title}
        </motion.h2>

        {/* Separador */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: 'var(--color-primary-light)' }}
        />

        {/* Párrafo descriptivo */}
        <motion.p
          variants={fadeInUp}
          className="text-lg leading-relaxed"
          style={{ color: 'var(--color-gray-300)' }}
        >
          {t.differentials.description}
        </motion.p>
      </motion.div>
    </div>
  );
}

// ─── Bloque 2 — Tecnología en el Desarrollo ───────────────────────────────

function TecnologiaBlock(): React.ReactElement {
  const { t } = useI18n();
  return (
    <div className="bg-white px-6 py-24">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Subtítulo de eficiencia */}
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm font-semibold uppercase tracking-widest"
          style={{ color: 'var(--color-primary)' }}
        >
          {t.differentials.efficiencyLabel}
        </motion.p>

        {/* Título principal */}
        <motion.h2
          variants={fadeInUp}
          className="mb-6 text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--color-dark)' }}
        >
          {t.differentials.efficiencyTitle}
        </motion.h2>

        {/* Separador */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mb-8 h-1 w-16 rounded-full"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />

        {/* Párrafo descriptivo */}
        <motion.p
          variants={fadeInUp}
          className="text-lg leading-relaxed"
          style={{ color: 'var(--color-gray-600)' }}
        >
          {t.differentials.efficiencyDesc}
        </motion.p>

        {/* Tarjetas de pilares tecnológicos */}
        <motion.div
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {t.differentials.pillars.map((pilar) => (
            <motion.div
              key={pilar.icon}
              variants={fadeInUp}
              className="rounded-2xl border p-6 text-left backdrop-blur-sm bg-white/80 dark:bg-white/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: 'var(--color-gray-200)',
              }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
                aria-hidden="true"
              >
                {pilar.icon}
              </div>
              <h3
                className="mb-2 text-base font-semibold"
                style={{ color: 'var(--color-dark)' }}
              >
                {pilar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-gray-500)' }}
              >
                {pilar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Componente principal exportado ───────────────────────────────────────

export function Differentials(): React.ReactElement {
  return (
    <section id="diferencial" aria-label="Diferencial y Tecnología">
      <DiferencialBlock />
      <TecnologiaBlock />
    </section>
  );
}
