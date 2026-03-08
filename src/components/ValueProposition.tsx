'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ValuePropositionProps {
  className?: string;
}

export function ValueProposition({ className }: ValuePropositionProps) {
  return (
    <section
      id="propuesta"
      className={cn('relative z-10 -mt-20 px-4 pb-20', className)}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl px-8 py-14 md:px-16 md:py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Subtítulo small caps */}
        <motion.p
          className="text-sm font-semibold tracking-widest uppercase text-primary mb-4"
          style={{ fontVariant: 'small-caps' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Una idea, un desarrollo.
        </motion.p>

        {/* Título principal */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-dark leading-tight mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          Pensar es la diferencia.
        </motion.h2>

        {/* Párrafo descriptivo */}
        <motion.p
          className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35 }}
        >
          La creación de un buen software empieza con el primer paso: el
          pensamiento. En{' '}
          <span className="font-semibold text-dark">SPEAK.CO® Studio</span>{' '}
          diseñamos soluciones que transforman ideas en productos digitales de
          alto impacto.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <a
            href="#contacto"
            className={cn(
              'inline-flex items-center gap-2',
              'bg-primary text-white font-semibold',
              'px-8 py-4 rounded-full',
              'hover:bg-primary-dark transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
            )}
          >
            Trabaja con nosotros
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
