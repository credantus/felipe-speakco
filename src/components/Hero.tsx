import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const WHATSAPP_LINK =
  'https://wa.me/573169535314?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20desarrollo%20de%20software'

// Variantes de animación reutilizables
const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay,
    },
  }),
}

const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// Chip de badge superior
function HeroBadge() {
  return (
    <motion.div
      variants={fadeUpVariants}
      custom={0}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      Colombia · USA · España
    </motion.div>
  )
}

// Fondo con gradiente y patrón de grilla
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Gradiente base oscuro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, var(--color-dark) 0%, var(--color-dark-secondary) 50%, #0D1020 100%)',
        }}
      />

      {/* Patrón de grilla sutil */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-gray-400) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-gray-400) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow azul primario — centro izquierda */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'var(--color-primary)' }}
      />

      {/* Glow accent verde — derecha */}
      <div
        className="absolute top-1/3 -right-1/4 w-[50%] h-[50%] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'var(--color-accent)' }}
      />

      {/* Degradado a negro en el borde inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/5 to-transparent" />
    </div>
  )
}

// Indicador de scroll animado
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
        Explorar
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="text-gray-500 w-5 h-5" />
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Sección principal de SPEAK.CO"
    >
      <HeroBackground />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <HeroBadge />

          {/* Título principal */}
          <motion.h1
            variants={fadeUpVariants}
            custom={0.1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Ingeniería de Software
            <br />
            <span
              className="inline-block"
              style={{
                background:
                  'linear-gradient(135deg, var(--color-primary-light), var(--color-primary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              a Medida
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUpVariants}
            custom={0.25}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-10"
          >
            Entendemos lo que necesitas. En tan solo{' '}
            <strong
              className="font-bold"
              style={{ color: 'var(--color-accent)' }}
            >
              15 días
            </strong>{' '}
            creamos desde sitios web y tiendas virtuales, hasta complejos
            sistemas de comercio impulsados por{' '}
            <span className="text-white font-medium">IA</span> para la
            industria.
          </motion.p>

          {/* Botones CTA */}
          <motion.div
            variants={fadeUpVariants}
            custom={0.4}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              href={WHATSAPP_LINK}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
            >
              Agendar consulta
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              asChild
              href="#academia"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Academia
            </Button>
          </motion.div>

          {/* Métricas rápidas */}
          <motion.div
            variants={fadeUpVariants}
            custom={0.55}
            className="mt-16 pt-10 border-t border-white/8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {METRICS.map((metric) => (
              <div key={metric.label} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-extrabold text-white mb-1"
                  style={{ color: metric.accent ? 'var(--color-accent)' : undefined }}
                >
                  {metric.value}
                </p>
                <p className="text-sm text-gray-500 font-medium">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}

interface Metric {
  value: string
  label: string
  accent?: boolean
}

const METRICS: Metric[] = [
  { value: '15', label: 'días al primer entregable', accent: true },
  { value: '+50', label: 'proyectos entregados' },
  { value: '3', label: 'países con presencia' },
  { value: '100%', label: 'satisfacción de clientes' },
]
