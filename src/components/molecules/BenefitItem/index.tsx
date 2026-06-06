import { Icon } from '@/components/atoms'
import type { IconName } from '@/components/atoms'

interface BenefitItemProps {
  icon: IconName
  label: string
}

const BenefitItem = ({ icon, label }: BenefitItemProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <Icon name={icon} size={20} className="text-brand-accent shrink-0" aria-hidden="true" />
      <span className="text-[#cad5e2] text-[14px] leading-5">{label}</span>
    </div>
  )
}

export { BenefitItem }
