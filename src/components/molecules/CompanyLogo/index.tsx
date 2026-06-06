import type { Company } from '@/types'

interface CompanyLogoProps {
  company: Company
}

const CompanyLogo = ({ company }: CompanyLogoProps) => {
  return (
    <div className="flex items-center gap-3 bg-[#0f2040] border border-white/10 rounded-[12px] px-5 py-4 shrink-0 w-[130px]">
      <div className="bg-brand-primary/20 rounded-[8px] w-9 h-9 flex items-center justify-center shrink-0">
        <span className="text-brand-accent text-[12px] font-bold leading-4">
          {company.initials}
        </span>
      </div>
      <span className="text-[#90a1b9] text-[12px] font-medium leading-4 truncate">
        {company.name}
      </span>
    </div>
  )
}

export { CompanyLogo }
