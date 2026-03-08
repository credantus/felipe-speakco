'use client';

import { motion } from 'framer-motion';
import {
  Palette,
  Code2,
  Layers,
  TrendingUp,
  Users,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n';

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ICONS: LucideIcon[] = [Palette, Code2, Layers, TrendingUp, Users, ShieldCheck];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

interface ServiceCardProps {
  card: ServiceCard;
}

function ServiceCardItem({ card }: ServiceCardProps) {
  const Icon = card.icon;

  return (
    <motion.article
      variants={cardVariants}
      className={cn(
        'rounded-2xl p-8',
        'backdrop-blur-xl bg-white/45 dark:bg-white/[0.06]',
        'border border-white/50 dark:border-white/[0.12]',
        'shadow-lg shadow-primary/[0.04] dark:shadow-black/20',
        'ring-1 ring-white/30 dark:ring-white/5',
        'hover:shadow-xl hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-white/[0.10]',
        'transition-all duration-300',
        'flex flex-col gap-5',
      )}
    >
      {/* Ícono en círculo */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)' }}
        aria-hidden="true"
      >
        <Icon
          size={24}
          strokeWidth={1.75}
          style={{ color: 'var(--color-primary)' }}
        />
      </div>

      {/* Título */}
      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white leading-snug">
        {card.title}
      </h3>

      {/* Descripción */}
      <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
        {card.description}
      </p>
    </motion.article>
  );
}

interface ServicesProps {
  className?: string;
}

export function Services({ className }: ServicesProps) {
  const { t } = useI18n()

  return (
    <section
      id="servicios"
      className={cn('relative py-20 px-4 overflow-hidden', className)}
      style={{ backgroundColor: 'var(--color-light)' }}
    >
      {/* Orbes de color de fondo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full bg-primary/[0.08] dark:bg-primary/[0.15] blur-[100px]" />
        <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full bg-accent/[0.07] dark:bg-accent/[0.10] blur-[80px]" />
        <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] rounded-full bg-primary-light/[0.06] dark:bg-primary-light/[0.10] blur-[90px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Encabezado de sección */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            {t.services.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t.services.title}
          </h2>
        </motion.div>

        {/* Grid de cards con stagger */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.services.cards.map((card, i) => {
            const Icon = ICONS[i]
            return (
              <ServiceCardItem
                key={i}
                card={{ icon: Icon, title: card.title, description: card.description }}
              />
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
