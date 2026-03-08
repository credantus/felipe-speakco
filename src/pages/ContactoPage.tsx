import { motion } from 'framer-motion'
import { Mail, Phone, MapPinned, Send } from 'lucide-react'
import { useI18n } from '@/i18n'

const WHATSAPP_LINK =
  'https://wa.me/573169535314?text=Hola,%20me%20interesa%20saber%20más%20sobre%20sus%20servicios%20de%20desarrollo%20de%20software'

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

const FIELD_BASE =
  'w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-200 focus:ring-2'

const FIELD_STYLE = {
  backgroundColor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  focusRingColor: 'var(--color-accent)',
}

export function ContactoPage() {
  const { t } = useI18n()

  return (
    <div style={{ backgroundColor: 'var(--color-dark)' }} className="min-h-screen">
      {/* Header */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
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
          {t.contact.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg max-w-xl"
          style={{ color: 'var(--color-gray-400)' }}
        >
          {t.contact.subtitle}
        </motion.p>
      </section>

      {/* Contenido principal — formulario + info */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Formulario con glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 md:p-10"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <h2 className="text-xl font-bold text-white mb-8">Cuéntenos sobre su proyecto</h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5"
              aria-label="Formulario de contacto"
            >
              {/* Nombre */}
              <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-gray-400)' }}
                >
                  {t.contact.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Felipe Rodríguez"
                  autoComplete="name"
                  className={FIELD_BASE}
                  style={FIELD_STYLE as React.CSSProperties}
                />
              </motion.div>

              {/* Email */}
              <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-gray-400)' }}
                >
                  {t.contact.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="felipe@empresa.com"
                  autoComplete="email"
                  className={FIELD_BASE}
                  style={FIELD_STYLE as React.CSSProperties}
                />
              </motion.div>

              {/* Empresa */}
              <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
                <label
                  htmlFor="contact-company"
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-gray-400)' }}
                >
                  {t.contact.company}
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Mi Empresa S.A.S."
                  autoComplete="organization"
                  className={FIELD_BASE}
                  style={FIELD_STYLE as React.CSSProperties}
                />
              </motion.div>

              {/* Mensaje */}
              <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'var(--color-gray-400)' }}
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Necesito desarrollar una plataforma de comercio electrónico con integración de pagos..."
                  className={FIELD_BASE + ' resize-none'}
                  style={FIELD_STYLE as React.CSSProperties}
                />
              </motion.div>

              {/* Botón enviar */}
              <motion.div custom={4} initial="hidden" animate="visible" variants={fieldVariants}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm transition-opacity duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-dark)',
                  }}
                >
                  <Send size={16} aria-hidden="true" />
                  {t.contact.send}
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Panel de información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Card de datos de contacto */}
            <div
              className="rounded-2xl p-8"
              style={{
                background:
                  'linear-gradient(135deg, rgba(220,241,40,0.06) 0%, rgba(220,241,40,0.01) 100%)',
                border: '1px solid rgba(220,241,40,0.15)',
              }}
            >
              <h3 className="text-base font-bold text-white mb-6 uppercase tracking-widest text-xs"
                  style={{ color: 'var(--color-accent)' }}>
                Contacto directo
              </h3>

              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href="tel:+16087747092"
                    className="flex items-center gap-3 group"
                    aria-label="Llamar al número 608-774-7092"
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ backgroundColor: 'rgba(220,241,40,0.12)' }}
                    >
                      <Phone size={16} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    </span>
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-white"
                      style={{ color: 'var(--color-gray-400)' }}
                    >
                      608-774-7092
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:sales@speakcoeu.com"
                    className="flex items-center gap-3 group"
                    aria-label="Enviar correo a sales@speakcoeu.com"
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ backgroundColor: 'rgba(220,241,40,0.12)' }}
                    >
                      <Mail size={16} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    </span>
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-white"
                      style={{ color: 'var(--color-gray-400)' }}
                    >
                      sales@speakcoeu.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:ceo@speakcoeu.com"
                    className="flex items-center gap-3 group"
                    aria-label="Enviar correo a ceo@speakcoeu.com"
                  >
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                      style={{ backgroundColor: 'rgba(220,241,40,0.12)' }}
                    >
                      <Mail size={16} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    </span>
                    <span
                      className="text-sm transition-colors duration-200 group-hover:text-white"
                      style={{ color: 'var(--color-gray-400)' }}
                    >
                      ceo@speakcoeu.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Oficinas */}
            <div
              className="rounded-2xl p-8"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-widest mb-6"
                style={{ color: 'var(--color-accent)' }}
              >
                Oficinas
              </h3>

              <ul className="flex flex-col gap-5">
                {[
                  { ciudad: 'Bogotá, Colombia', dir: 'Calle 90 #11-22, Bogotá, Colombia' },
                  { ciudad: 'Princeton, NJ, USA', dir: '100 Overlook Center, 2nd Floor, Princeton, NJ 08540' },
                  { ciudad: 'Valencia, España', dir: 'Calle Moratín nº14, 8º E, 46002 Valencia' },
                ].map((o) => (
                  <li key={o.ciudad} className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
                    >
                      <MapPinned size={16} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{o.ciudad}</p>
                      <p className="text-sm mt-0.5 leading-relaxed" style={{ color: 'var(--color-gray-400)' }}>
                        {o.dir}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl py-5 font-semibold text-sm transition-opacity duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#25D366',
                color: '#fff',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribirnos por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
