import { Icon } from '@/components/atoms'
import type { IconName } from '@/components/atoms'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <article
      className="
        bg-[#0f2040] border border-white/10 rounded-[16px] p-[25px]
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] hover:border-brand-accent/40
        cursor-default
      "
    >
      <div className="bg-[rgba(21,93,252,0.15)] rounded-[12px] w-12 h-12 flex items-center justify-center mb-[25px]">
        <Icon
          name={service.icon as IconName}
          size={24}
          className="text-brand-accent"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-white text-[18px] font-semibold leading-6 mb-2">
        {service.title}
      </h3>
      <p className="text-[#90a1b9] text-[14px] leading-[22px]">
        {service.description}
      </p>
    </article>
  )
}

export { ServiceCard }
