interface BadgeProps {
  children: React.ReactNode
  dot?: boolean
  className?: string
}

const Badge = ({ children, dot = false, className = '' }: BadgeProps) => {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        bg-[rgba(43,127,255,0.15)] border border-[rgba(81,162,255,0.3)]
        px-[17px] py-[9px] rounded-full
        ${className}
      `}
    >
      {dot && (
        <span className="w-2 h-2 rounded-full bg-brand-accent opacity-96 shrink-0" aria-hidden="true" />
      )}
      <span className="text-brand-accent text-[14px] font-medium leading-5 whitespace-nowrap">
        {children}
      </span>
    </div>
  )
}

export { Badge }
