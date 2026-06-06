import {
  HeadphonesIcon,
  Monitor,
  Wifi,
  Server,
  Grid2X2,
  ShieldCheck,
  Printer,
  Lightbulb,
  MessageSquare,
  Search,
  Laptop,
  CheckCircle,
  Award,
  ClipboardCheck,
  Lock,
  Cpu,
  EyeOff,
  MessageCircle,
  GraduationCap,
  Globe,
  Home,
  ArrowRight,
  Phone,
  ChevronDown,
  Menu,
  X,
  Check,
  Clock,
  type LucideProps,
} from 'lucide-react'

const iconMap = {
  HeadphonesIcon,
  Monitor,
  Wifi,
  Server,
  Grid2X2,
  ShieldCheck,
  Printer,
  Lightbulb,
  MessageSquare,
  Search,
  Laptop,
  CheckCircle,
  Award,
  ClipboardCheck,
  Lock,
  Cpu,
  EyeOff,
  MessageCircle,
  GraduationCap,
  Globe,
  Home,
  ArrowRight,
  Phone,
  ChevronDown,
  Menu,
  X,
  Check,
  Clock,
} as const

type IconName = keyof typeof iconMap

interface IconProps extends LucideProps {
  name: IconName
}

const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = iconMap[name]
  return <IconComponent {...props} />
}

export { Icon }
export type { IconName }
