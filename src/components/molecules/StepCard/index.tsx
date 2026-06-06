import { Icon } from '@/components/atoms'
import type { IconName } from '@/components/atoms'
import type { Step } from '@/types'

interface StepCardProps {
  step: Step
  isLast?: boolean
}

const StepCard = ({ step, isLast = false }: StepCardProps) => {
  return (
    <article className="relative flex flex-col">
      <div className="relative bg-[#0f2040] border border-white/10 rounded-[16px] p-[25px] flex-1">
        <span className="absolute -top-3 left-[25px] text-[#155dfc] text-[12px] font-bold leading-4 bg-[#0a1628] px-2">
          {step.number}
        </span>
        <div className="bg-[rgba(21,93,252,0.15)] rounded-[12px] w-12 h-12 flex items-center justify-center mb-6">
          <Icon
            name={step.icon as IconName}
            size={24}
            className="text-brand-accent"
            aria-hidden="true"
          />
        </div>
        <h3 className="text-white text-[20px] font-semibold leading-7 mb-3">
          {step.title}
        </h3>
        <p className="text-[#90a1b9] text-[14px] leading-[23px]">
          {step.description}
        </p>
      </div>
      {!isLast && (
        <div
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-px h-px"
          aria-hidden="true"
        >
          <div className="w-6 h-px bg-white/20 -translate-x-3" />
        </div>
      )}
    </article>
  )
}

export { StepCard }
