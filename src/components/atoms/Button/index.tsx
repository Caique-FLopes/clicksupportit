import { forwardRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-blue-600 shadow-[0px_20px_12.5px_rgba(21,93,252,0.3),0px_8px_5px_rgba(21,93,252,0.3)]',
  secondary:
    'bg-white/10 text-white border border-white/20 hover:bg-white/20',
  outline:
    'bg-transparent text-brand-accent border border-brand-accent hover:bg-brand-accent hover:text-white',
  ghost:
    'bg-transparent text-[#90a1b9] hover:text-white hover:bg-white/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-[10px]',
  md: 'px-8 py-4 text-base rounded-[14px]',
  lg: 'px-10 py-[18px] text-base rounded-[14px]',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-semibold leading-6
          transition-all duration-300 ease-in-out
          cursor-pointer
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
