interface SectionLabelProps {
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

const SectionLabel = ({ children, icon, className = '' }: SectionLabelProps) => {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        bg-[rgba(43,127,255,0.15)] border border-[rgba(81,162,255,0.3)]
        px-[17px] py-[7px] rounded-full
        ${className}
      `}
    >
      {icon && <span aria-hidden="true">{icon}</span>}
      <span className="text-brand-accent text-[14px] font-medium leading-5 whitespace-nowrap">
        {children}
      </span>
    </div>
  )
}

export { SectionLabel }
