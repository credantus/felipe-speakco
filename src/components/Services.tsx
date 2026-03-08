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

interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: Palette,
    title: 'Diseño',
    description:
      'Desarrollo de software a medida con análisis previo de funcionalidad, arquitectura e implementación en tecnologías front-end y back-end.',
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description:
      'Sistemas escalables con seguridad informática SSL/SSH, servidores web, APIs, tokens e implementación de algoritmos de IA para entornos web y móviles.',
  },
  {
    icon: Layers,
    title: 'Modelo',
    description:
      'Modelos de software a medida con escalabilidad de rendimiento y actualización de infraestructura back-end que responden a sistemas de alta disponibilidad.',
  },
  {
    icon: TrendingUp,
    title: 'Expansión y Rentabilidad',
    description:
      'Orientación directa a la solución: aplicaciones a medida para crecimiento exponencial, consolidación de datos y escalabilidad tecnológica.',
  },
  {
    icon: Users,
    title: 'Equipo a Medida',
    description:
      'Equipo dedicado por proyecto: desarrolladores, diseñadores y Project Manager con tiempos definidos, entregables por fase y metodología ágil.',
  },
  {
    icon: ShieldCheck,
    title: 'Testing y QA',
    description:
      'Depuración de código, análisis de rendimiento, optimización de tiempos de carga y ejecución en despliegues móviles, web y servidor.',
  },
];

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
        'bg-white rounded-2xl p-8',
        'shadow-sm hover:shadow-lg',
        'transition-shadow duration-300',
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
      <h3 className="text-base md:text-lg font-semibold text-dark leading-snug">
        {card.title}
      </h3>

      {/* Descripción */}
      <p className="text-sm md:text-base text-gray-500 leading-relaxed">
        {card.description}
      </p>
    </motion.article>
  );
}

interface ServicesProps {
  className?: string;
}

export function Services({ className }: ServicesProps) {
  return (
    <section
      id="servicios"
      className={cn('bg-light py-20 px-4', className)}
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de sección */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Lo que hacemos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Nuestra Estructura
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
          {SERVICES.map((card) => (
            <ServiceCardItem key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
