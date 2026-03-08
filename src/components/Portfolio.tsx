import { motion } from 'framer-motion';
import {
  GraduationCap,
  ShoppingCart,
  Brain,
  Bot,
  Leaf,
  MapPin,
  Gamepad2,
  BarChart3,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Tipos ─────────────────────────────────────────────────────────────────

interface TrabajoCard {
  icono: LucideIcon;
  titulo: string;
  descripcion: string;
}

// ─── Datos de trabajos ─────────────────────────────────────────────────────

const TRABAJOS: TrabajoCard[] = [
  {
    icono: GraduationCap,
    titulo: 'Modelo Educativo en Línea 24/7',
    descripcion:
      'Integración de entornos inmersivos en experiencia educativa con procesos continuos acelerados y soporte multilínea 24/7.',
  },
  {
    icono: ShoppingCart,
    titulo: 'Sistema Multiventa Escalada',
    descripcion:
      'Comercio electrónico con escalabilidad exponencial usando AWS para alta demanda y peticiones concurrentes.',
  },
  {
    icono: Brain,
    titulo: 'Comercio con Selectividad IA',
    descripcion:
      'Reconocimiento de patrones de interés y selectividad de productos mediante algoritmos de IA para mejorar la experiencia de usuario.',
  },
  {
    icono: Bot,
    titulo: 'Asistencia IA 24/7',
    descripcion:
      'Sistemas evaluativos con aprendizaje continuo y progreso mediante machine learning para asistencia inteligente.',
  },
  {
    icono: Leaf,
    titulo: 'Going Green Solution',
    descripcion:
      'Soluciones de ingeniería comprometidas con el cambio climático y procesos de desarrollo sostenible.',
  },
  {
    icono: MapPin,
    titulo: 'Operatividad y Logística',
    descripcion:
      'Sistemas de despliegue en tiempo real con integración de mapas, rutas de acceso y tracking GPS.',
  },
  {
    icono: Gamepad2,
    titulo: 'Educación y Entretenimiento',
    descripcion:
      'Innovación educativa con videojuegos, elementos de realidad aumentada y aprendizaje acelerado.',
  },
  {
    icono: BarChart3,
    titulo: 'Escalabilidad y Rentabilidad',
    descripcion:
      'Optimización SEO/SEM con machine learning orientado a marketing, retargeting y métricas de campañas.',
  },
];

// ─── Variantes de animación ────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Sub-componente: tarjeta individual ────────────────────────────────────

interface CardProps {
  trabajo: TrabajoCard;
}

function TrabajoCardItem({ trabajo }: CardProps): React.ReactElement {
  const Icono = trabajo.icono;

  return (
    <motion.article
      variants={cardVariants}
      className={cn(
        'group flex flex-col gap-4 rounded-2xl border bg-white p-6',
        'transition-all duration-300',
        'hover:shadow-lg hover:-translate-y-1',
        'focus-within:ring-2',
      )}
      style={{
        borderColor: 'var(--color-gray-200)',
        // Ring color on focus-within via CSS variable
      }}
    >
      {/* Ícono */}
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-xl',
          'transition-colors duration-300 group-hover:opacity-90',
        )}
        style={{ backgroundColor: 'rgba(17, 34, 187, 0.08)' }}
        aria-hidden="true"
      >
        <Icono
          size={24}
          strokeWidth={1.75}
          style={{ color: 'var(--color-primary)' }}
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-base font-semibold leading-snug"
          style={{ color: 'var(--color-dark)' }}
        >
          {trabajo.titulo}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--color-gray-500)' }}
        >
          {trabajo.descripcion}
        </p>
      </div>
    </motion.article>
  );
}

// ─── Componente principal exportado ───────────────────────────────────────

export function Portfolio(): React.ReactElement {
  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-titulo"
      className="px-6 py-24"
      style={{ backgroundColor: 'var(--color-light)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabecera */}
        <motion.div
          className="mb-14 text-center"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.14 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={headerVariants}
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: 'var(--color-primary)' }}
          >
            Fundamentos
          </motion.p>

          <motion.h2
            id="trabajos-titulo"
            variants={headerVariants}
            className="mb-6 text-3xl font-bold md:text-4xl"
            style={{ color: 'var(--color-dark)' }}
          >
            Nuestros Trabajos
          </motion.h2>

          <motion.div
            variants={headerVariants}
            className="mx-auto h-1 w-16 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </motion.div>

        {/* Grid de tarjetas */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {TRABAJOS.map((trabajo) => (
            <TrabajoCardItem key={trabajo.titulo} trabajo={trabajo} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
