type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps {
  as?: HeadingLevel
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

const sizeMap: Record<HeadingLevel, string> = {
  h1: 'text-[60px] font-bold leading-[75px]',
  h2: 'text-[40px] font-bold leading-[1.2]',
  h3: 'text-[20px] font-semibold leading-[1.4]',
  h4: 'text-[18px] font-semibold leading-[1.4]',
}

const Heading = ({ as: Tag = 'h2', children, className = '', gradient = false }: HeadingProps) => {
  return (
    <Tag
      className={`
        text-white
        ${sizeMap[Tag]}
        ${gradient ? 'text-gradient' : ''}
        ${className}
      `}
    >
      {children}
    </Tag>
  )
}

export { Heading }
