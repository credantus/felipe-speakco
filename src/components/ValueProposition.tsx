import { motion } from 'framer-motion';
import { Lightbulb, Sparkles, ArrowRight, Zap, Target, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n';
import { Link } from 'react-router-dom';

interface ValuePropositionProps {
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const PILLAR_ICONS = [Zap, Target, Rocket] as const;

export function ValueProposition({ className }: ValuePropositionProps) {
  const { t } = useI18n();

  const pillars = [
    { icon: PILLAR_ICONS[0], gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { icon: PILLAR_ICONS[1], gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { icon: PILLAR_ICONS[2], gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
  ];

  return (
    <section
      id="propuesta"
      className={cn('relative z-10 -mt-24 px-4 pb-24', className)}
    >
      {/* Orbes de color de fondo — le dan vida al glassmorphism */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 left-[15%] w-[600px] h-[600px] rounded-full bg-primary/[0.15] dark:bg-primary/[0.20] blur-[100px]" />
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-accent/[0.12] dark:bg-accent/[0.15] blur-[80px]" />
        <div className="absolute -bottom-32 left-[40%] w-[450px] h-[450px] rounded-full bg-primary-light/[0.10] dark:bg-primary-light/[0.12] blur-[90px]" />
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {/* Card principal con glassmorphism */}
        <div className={cn(
          'relative rounded-3xl overflow-hidden',
          'shadow-2xl shadow-primary/10',
          'border border-white/40 dark:border-white/[0.12]',
          'backdrop-blur-2xl',
          'bg-white/40 dark:bg-white/[0.06]',
        )}>
          {/* Manchas de color internas para profundidad */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-[450px] h-[450px] bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-[350px] h-[350px] bg-gradient-to-tr from-accent/12 to-transparent rounded-full blur-3xl" aria-hidden="true" />

          {/* Contenido */}
          <div className="relative px-8 py-14 md:px-16 md:py-20">
            {/* Layout de 2 columnas en desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

              {/* Columna izquierda: texto */}
              <div className="lg:col-span-3">
                {/* Badge decorativo */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
                    <Lightbulb size={16} className="text-primary" />
                  </span>
                  <span
                    className="text-sm font-semibold tracking-widest uppercase text-primary"
                    style={{ fontVariant: 'small-caps' }}
                  >
                    {t.value.label}
                  </span>
                </motion.div>

                {/* Título con gradient accent */}
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white"
                >
                  {t.value.title.split('.')[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">.</span>
                </motion.h2>

                {/* Línea decorativa */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <Sparkles size={16} className="text-accent" />
                </motion.div>

                {/* Párrafo descriptivo mejorado */}
                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg leading-relaxed max-w-xl mb-10 text-gray-500 dark:text-gray-400"
                >
                  {t.value.description}{' '}
                  <span className={cn(
                    'inline-flex items-center gap-1 font-bold',
                    'text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light',
                  )}>
                    {t.value.studio}
                  </span>{' '}
                  {t.value.descriptionEnd}
                </motion.p>

                {/* CTA con estilo mejorado */}
                <motion.div variants={itemVariants}>
                  <Link
                    to="/contacto"
                    className={cn(
                      'group inline-flex items-center gap-3',
                      'bg-gradient-to-r from-primary to-primary-light',
                      'text-white font-semibold text-base',
                      'px-8 py-4 rounded-2xl',
                      'shadow-lg shadow-primary/25',
                      'hover:shadow-xl hover:shadow-primary/35',
                      'hover:-translate-y-0.5',
                      'transition-all duration-300',
                      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                    )}
                  >
                    {t.value.cta}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Columna derecha: visual decorativo */}
              <div className="lg:col-span-2 flex justify-center">
                <motion.div
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Glow de fondo */}
                  <div className="absolute inset-0 scale-125 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 rounded-full blur-3xl" />

                  {/* 3 mini-cards de pilares */}
                  <div className="relative flex flex-col gap-4">
                    {pillars.map((pillar, i) => {
                      const Icon = pillar.icon;
                      const pillarLabels = [t.value.pillar1, t.value.pillar2, t.value.pillar3];
                      return (
                        <motion.div
                          key={i}
                          className={cn(
                            'flex items-center gap-4 px-6 py-4 rounded-2xl',
                            'bg-white/35 dark:bg-white/[0.08]',
                            'border border-white/50 dark:border-white/[0.15]',
                            'backdrop-blur-2xl',
                            'shadow-lg shadow-primary/[0.06] dark:shadow-black/20',
                            'ring-1 ring-white/30 dark:ring-white/5',
                            'transition-all duration-300',
                            'hover:bg-white/55 dark:hover:bg-white/[0.12]',
                            'hover:shadow-xl hover:-translate-y-1',
                          )}
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + i * 0.15,
                            ease: [0.22, 1, 0.36, 1] as const,
                          }}
                        >
                          <div
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-md"
                            style={{ background: pillar.gradient }}
                          >
                            <Icon size={20} className="text-white" strokeWidth={2} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">
                              {pillarLabels[i]}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SPEAK.CO® Core
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
