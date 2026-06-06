interface NavItemProps {
  label: string
  href: string
  onClick?: () => void
}

const NavItem = ({ label, href, onClick }: NavItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-[#90a1b9] hover:text-white text-[15px] font-medium leading-6 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent rounded"
    >
      {label}
    </a>
  )
}

export { NavItem }
