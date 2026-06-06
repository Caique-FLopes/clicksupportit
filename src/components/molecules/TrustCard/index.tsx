import { Icon } from '@/components/atoms'
import type { IconName } from '@/components/atoms'
import type { Trust } from '@/types'

interface TrustCardProps {
  trust: Trust
}

const TrustCard = ({ trust }: TrustCardProps) => {
  return (
    <article className="flex items-start gap-6 p-[25px] bg-[#0f2040] border border-white/10 rounded-[16px]">
      <div className="bg-[rgba(21,93,252,0.15)] rounded-[12px] w-14 h-14 flex items-center justify-center shrink-0">
        <Icon
          name={trust.icon as IconName}
          size={28}
          className="text-brand-accent"
          aria-hidden="true"
        />
      </div>
      <div>
        <h3 className="text-white text-[18px] font-semibold leading-7 mb-1">
          {trust.title}
        </h3>
        <p className="text-[#90a1b9] text-[14px] leading-[23px]">
          {trust.description}
        </p>
      </div>
    </article>
  )
}

export { TrustCard }
