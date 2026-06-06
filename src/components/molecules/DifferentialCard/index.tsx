import { Icon } from '@/components/atoms'
import type { IconName } from '@/components/atoms'
import type { Differential } from '@/types'

interface DifferentialCardProps {
  differential: Differential
}

const DifferentialCard = ({ differential }: DifferentialCardProps) => {
  return (
    <article className="relative bg-[#0f2040] border border-white/10 rounded-[16px] p-[33px] overflow-hidden">
      <span
        className="absolute right-8 top-8 text-[120px] font-bold text-white/[0.03] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {differential.number}
      </span>
      <div className="relative flex items-start gap-[19px]">
        <div className="bg-[rgba(21,93,252,0.15)] rounded-[14px] w-14 h-14 flex items-center justify-center shrink-0">
          <Icon
            name={differential.icon as IconName}
            size={28}
            className="text-brand-accent"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="text-white text-[22px] font-semibold leading-7 mb-2">
            {differential.title}
          </h3>
          <p className="text-[#90a1b9] text-[14px] leading-[22px]">
            {differential.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export { DifferentialCard }
