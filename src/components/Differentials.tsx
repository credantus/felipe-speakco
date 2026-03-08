import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
          Diferencial
        </motion.p>

        {/* Título principal */}
        <motion.h2
          variants={fadeInUp}
          className="mb-6 text-3xl font-bold text-white md:text-4xl"
        >
          Diferencial &amp; Continuidad
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
          Modelo de desarrollo en software a medida con parámetros de expansión
          continua: fases de actualización y etapas de versionamiento para
          evolución constante.
        </motion.p>
      </motion.div>
    </div>
  );
}

// ─── Bloque 2 — Tecnología en el Desarrollo ───────────────────────────────

function TecnologiaBlock(): React.ReactElement {
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
          Eficiencia
        </motion.p>

        {/* Título principal */}
        <motion.h2
          variants={fadeInUp}
          className="mb-6 text-3xl font-bold md:text-4xl"
          style={{ color: 'var(--color-dark)' }}
        >
          Tecnología en el Desarrollo
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
          Diseño de software a medida orientado en modelos de venta directa e
          indirecta con sistemas B2C y B2B integrados.
        </motion.p>

        {/* Tarjetas de pilares tecnológicos */}
        <motion.div
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {PILARES_TECNOLOGICOS.map((pilar) => (
            <motion.div
              key={pilar.titulo}
              variants={fadeInUp}
              className="rounded-2xl border p-6 text-left"
              style={{
                borderColor: 'var(--color-gray-200)',
                backgroundColor: 'var(--color-light)',
              }}
            >
              <div
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white"
                style={{ backgroundColor: 'var(--color-primary)' }}
                aria-hidden="true"
              >
                {pilar.icono}
              </div>
              <h3
                className="mb-2 text-base font-semibold"
                style={{ color: 'var(--color-dark)' }}
              >
                {pilar.titulo}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-gray-500)' }}
              >
                {pilar.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Datos de pilares tecnológicos ────────────────────────────────────────

interface PilarTecnologico {
  icono: string;
  titulo: string;
  descripcion: string;
}

const PILARES_TECNOLOGICOS: PilarTecnologico[] = [
  {
    icono: 'B2C',
    titulo: 'Venta Directa',
    descripcion:
      'Plataformas orientadas al consumidor final con experiencias fluidas y conversiones optimizadas.',
  },
  {
    icono: 'B2B',
    titulo: 'Venta Indirecta',
    descripcion:
      'Ecosistemas empresariales con integraciones nativas, APIs robustas y flujos de trabajo automatizados.',
  },
  {
    icono: 'API',
    titulo: 'Integración Total',
    descripcion:
      'Arquitectura de microservicios y APIs RESTful para interoperabilidad entre sistemas heterogéneos.',
  },
];

// ─── Componente principal exportado ───────────────────────────────────────

export function Differentials(): React.ReactElement {
  return (
    <section id="diferencial" aria-label="Diferencial y Tecnología">
      <DiferencialBlock />
      <TecnologiaBlock />
    </section>
  );
}
