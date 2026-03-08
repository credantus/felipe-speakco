import { Mail, Phone, MapPinned } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Tipos ─────────────────────────────────────────────────────────────────

interface EnlaceNavegacion {
  label: string;
  href: string;
}

interface Oficina {
  ciudad: string;
  direccion: string;
}

interface ContactoLinea {
  tipo: 'ciudad' | 'telefono' | 'email';
  valor: string;
  href?: string;
}

// ─── Datos estáticos ────────────────────────────────────────────────────────

const ENLACES_SERVICIOS: EnlaceNavegacion[] = [
  { label: 'Soluciones de Ingeniería', href: '#servicios' },
  { label: 'Sector Minero', href: '#servicios' },
  { label: 'Educación', href: '#servicios' },
  { label: 'Industria del Entretenimiento', href: '#servicios' },
  { label: 'Sectores Comerciales', href: '#servicios' },
];

const OFICINAS: Oficina[] = [
  {
    ciudad: 'Bogotá, Colombia',
    direccion: 'Calle 90 #11-22, Bogotá, Colombia',
  },
  {
    ciudad: 'Princeton, NJ, USA',
    direccion: '100 Overlook Center, 2nd Floor, Princeton, NJ 08540, USA',
  },
  {
    ciudad: 'Valencia, España',
    direccion: 'Calle Moratín nº14, 8º E, 46002 Valencia, España',
  },
];

const CONTACTO_LINEAS: ContactoLinea[] = [
  { tipo: 'ciudad', valor: 'Colombia — Bogotá' },
  { tipo: 'ciudad', valor: 'Estados Unidos — New Jersey' },
  { tipo: 'ciudad', valor: 'España — Valencia' },
  {
    tipo: 'telefono',
    valor: '608-774-7092',
    href: 'tel:+16087747092',
  },
  {
    tipo: 'email',
    valor: 'sales@speakcoeu.com',
    href: 'mailto:sales@speakcoeu.com',
  },
  {
    tipo: 'email',
    valor: 'ceo@speakcoeu.com',
    href: 'mailto:ceo@speakcoeu.com',
  },
];

// ─── Sub-componentes de columnas ───────────────────────────────────────────

function ColumnaEmpresa(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      {/* Logo textual */}
      <p className="text-xl font-bold text-white">SPEAK.CO®</p>

      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-gray-400)' }}
      >
        Ingeniería de software a medida
      </p>

      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-gray-400)' }}
      >
        Lunes a viernes de 6:00 a.m. a 6:00 p.m.
      </p>
    </div>
  );
}

function ColumnaServicios(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Servicios
      </h3>
      <nav aria-label="Servicios de SPEAK.CO">
        <ul className="flex flex-col gap-3">
          {ENLACES_SERVICIOS.map((enlace) => (
            <li key={enlace.label}>
              <a
                href={enlace.href}
                className={cn(
                  'text-sm transition-colors duration-200',
                  'hover:text-white focus-visible:outline-none focus-visible:text-white',
                )}
                style={{ color: 'var(--color-gray-400)' }}
              >
                {enlace.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function ColumnaOficinas(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Oficinas
      </h3>
      <ul className="flex flex-col gap-5">
        {OFICINAS.map((oficina) => (
          <li key={oficina.ciudad} className="flex items-start gap-3">
            <MapPinned
              size={16}
              strokeWidth={1.75}
              className="mt-0.5 shrink-0"
              style={{ color: 'var(--color-accent)' }}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">{oficina.ciudad}</p>
              <p
                className="mt-0.5 text-sm leading-relaxed"
                style={{ color: 'var(--color-gray-400)' }}
              >
                {oficina.direccion}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColumnaContacto(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
        Contacto
      </h3>
      <ul className="flex flex-col gap-3">
        {CONTACTO_LINEAS.map((linea) => {
          const isCiudad = linea.tipo === 'ciudad';
          const isTelefono = linea.tipo === 'telefono';
          const isEmail = linea.tipo === 'email';

          if (isCiudad) {
            return (
              <li
                key={linea.valor}
                className="text-sm font-medium"
                style={{ color: 'var(--color-gray-300)' }}
              >
                {linea.valor}
              </li>
            );
          }

          if (isTelefono) {
            return (
              <li key={linea.valor}>
                <a
                  href={linea.href}
                  className={cn(
                    'flex items-center gap-2 text-sm transition-colors duration-200',
                    'hover:text-white focus-visible:outline-none focus-visible:text-white',
                  )}
                  style={{ color: 'var(--color-gray-400)' }}
                  aria-label={`Llamar al número ${linea.valor}`}
                >
                  <Phone
                    size={14}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    style={{ color: 'var(--color-accent)' }}
                  />
                  {linea.valor}
                </a>
              </li>
            );
          }

          if (isEmail) {
            return (
              <li key={linea.valor}>
                <a
                  href={linea.href}
                  className={cn(
                    'flex items-center gap-2 text-sm transition-colors duration-200',
                    'hover:text-white focus-visible:outline-none focus-visible:text-white',
                  )}
                  style={{ color: 'var(--color-gray-400)' }}
                  aria-label={`Enviar correo a ${linea.valor}`}
                >
                  <Mail
                    size={14}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    style={{ color: 'var(--color-accent)' }}
                  />
                  {linea.valor}
                </a>
              </li>
            );
          }

          return null;
        })}
      </ul>
    </div>
  );
}

// ─── Barra de copyright ────────────────────────────────────────────────────

function BarraCopyright(): React.ReactElement {
  return (
    <div
      className="mt-12 border-t py-6 text-center"
      style={{ borderColor: 'var(--color-gray-800)' }}
    >
      <p
        className="text-sm"
        style={{ color: 'var(--color-gray-400)' }}
      >
        © 2017 – 2026 SPEAK.CO® Todos los derechos reservados.
      </p>
    </div>
  );
}

// ─── Componente principal exportado ───────────────────────────────────────

export function Footer(): React.ReactElement {
  return (
    <footer
      id="contacto"
      aria-label="Pie de página y contacto"
      className="px-6 pt-16"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Grid de columnas */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ColumnaEmpresa />
          <ColumnaServicios />
          <ColumnaOficinas />
          <ColumnaContacto />
        </div>

        {/* Copyright */}
        <BarraCopyright />
      </div>
    </footer>
  );
}
