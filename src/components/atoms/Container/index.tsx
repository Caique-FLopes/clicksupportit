interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

const Container = ({ children, className = '', as: Tag = 'div' }: ContainerProps) => {
  return (
    <Tag className={`max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-[142px] ${className}`}>
      {children}
    </Tag>
  )
}

export { Container }
