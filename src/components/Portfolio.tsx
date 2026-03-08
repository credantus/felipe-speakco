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
import { useI18n } from '@/i18n';

// ─── Tipos ─────────────────────────────────────────────────────────────────

interface TrabajoCard {
  icono: LucideIcon;
  titulo: string;
  descripcion: string;
}

// ─── Íconos en el mismo orden que t.portfolio.cards ────────────────────────

const ICONS: LucideIcon[] = [
  GraduationCap,
  ShoppingCart,
  Brain,
  Bot,
  Leaf,
  MapPin,
  Gamepad2,
  BarChart3,
];

// Gradientes coloridos inspirados en el sitio original
const CARD_GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
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

// ─── Sub-componente: tarjeta individual ────────────────────────────────────

interface CardProps {
  trabajo: TrabajoCard;
  gradient: string;
}

function TrabajoCardItem({ trabajo, gradient }: CardProps): React.ReactElement {
  const Icono = trabajo.icono;

  return (
    <motion.article
      variants={cardVariants}
      className={cn(
        'group relative flex flex-col gap-4 rounded-2xl border p-6 overflow-hidden',
        'bg-white dark:bg-white/[0.08]',
        'border-gray-100 dark:border-white/[0.12]',
        'transition-all duration-300',
        'hover:shadow-xl hover:-translate-y-2',
        'hover:border-primary/20 dark:hover:border-primary/30',
        'focus-within:ring-2 focus-within:ring-primary/50',
      )}
    >
      {/* Barra de gradiente superior */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: gradient }}
        aria-hidden="true"
      />

      {/* Ícono con gradiente de fondo */}
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-xl',
          'transition-all duration-300',
          'group-hover:scale-110 group-hover:shadow-lg',
        )}
        style={{ background: gradient, opacity: 0.9 }}
        aria-hidden="true"
      >
        <Icono
          size={24}
          strokeWidth={1.75}
          className="text-white"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold leading-snug text-gray-900 dark:text-white">
          {trabajo.titulo}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {trabajo.descripcion}
        </p>
      </div>
    </motion.article>
  );
}

// ─── Componente principal exportado ───────────────────────────────────────

export function Portfolio(): React.ReactElement {
  const { t } = useI18n();
  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-titulo"
      className="px-6 py-24"
      style={{ backgroundColor: 'var(--color-light)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Grid de tarjetas */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.portfolio.cards.map((card, i) => {
            const Icono = ICONS[i];
            return (
              <TrabajoCardItem
                key={i}
                trabajo={{ icono: Icono, titulo: card.title, descripcion: card.description }}
                gradient={CARD_GRADIENTS[i]}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
