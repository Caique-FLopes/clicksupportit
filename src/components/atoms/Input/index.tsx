import { forwardRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  id: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={id}
          className="text-[14px] font-medium text-[#cad5e2] leading-5"
        >
          {label}
          {props.required && <span className="text-red-400 ml-1" aria-label="obrigatório">*</span>}
        </label>
        <input
          ref={ref}
          id={id}
          className={`
            w-full bg-[#0f2040] border rounded-[10px]
            px-4 py-3 text-white text-[14px] leading-5
            placeholder:text-[#90a1b9]
            transition-all duration-200
            focus:outline-none
            ${error
              ? 'border-red-400 focus:border-red-400'
              : 'border-white/10 focus:border-brand-accent'
            }
            ${className}
          `}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="text-red-400 text-[12px]" role="alert">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
