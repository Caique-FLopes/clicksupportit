interface TextProps {
  children: React.ReactNode
  size?: 'sm' | 'base' | 'lg'
  muted?: boolean
  className?: string
  as?: 'p' | 'span' | 'div'
}

const sizeClasses = {
  sm: 'text-[14px] leading-5',
  base: 'text-[16px] leading-6',
  lg: 'text-[18px] leading-[29.25px]',
}

const Text = ({ children, size = 'base', muted = false, className = '', as: Tag = 'p' }: TextProps) => {
  return (
    <Tag
      className={`
        font-normal
        ${sizeClasses[size]}
        ${muted ? 'text-[#90a1b9]' : 'text-[#cad5e2]'}
        ${className}
      `}
    >
      {children}
    </Tag>
  )
}

export { Text }
