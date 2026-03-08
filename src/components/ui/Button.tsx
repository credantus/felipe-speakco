import type { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base — transiciones y accesibilidad compartidos
  [
    'inline-flex items-center justify-center gap-2',
    'font-semibold leading-none tracking-wide',
    'rounded-lg border',
    'transition-all duration-200 ease-in-out',
    'cursor-pointer select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary border-primary text-white',
          'hover:bg-primary-dark hover:border-primary-dark',
          'focus-visible:ring-primary',
          'active:scale-[0.98]',
        ],
        outline: [
          'bg-transparent border-white text-white',
          'hover:bg-white/10',
          'focus-visible:ring-white',
          'active:scale-[0.98]',
        ],
        accent: [
          'bg-accent border-accent text-dark',
          'hover:bg-accent-dark hover:border-accent-dark',
          'focus-visible:ring-accent',
          'active:scale-[0.98]',
        ],
        ghost: [
          'bg-transparent border-transparent text-white',
          'hover:bg-white/10',
          'focus-visible:ring-white',
        ],
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

// Props para el elemento <button> nativo
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: false
}

// Props para cuando se renderiza como <a>
export interface ButtonAsLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  asChild: true
  href: string
  variant?: VariantProps<typeof buttonVariants>['variant']
  size?: VariantProps<typeof buttonVariants>['size']
  className?: string
  children: React.ReactNode
}

export type ButtonAllProps = ButtonProps | ButtonAsLinkProps

// Sobrecarga de función para manejar ambos casos con tipos precisos
export function Button(props: ButtonAsLinkProps): React.ReactElement
export function Button(props: ButtonProps): React.ReactElement
export function Button(props: ButtonAllProps): React.ReactElement {
  if (props.asChild) {
    const { asChild: _a, variant, size, className, href, children, ...rest } = props
    return (
      <a
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const { variant, size, className, asChild: _a, ...rest } = props
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    />
  )
}

// También exportar las variantes para uso externo
export { buttonVariants }
