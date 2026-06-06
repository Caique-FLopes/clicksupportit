export const COLORS = {
  PRIMARY: '#155dfc',
  SECONDARY: '#0a1628',
  ACCENT: '#51a2ff',
  ACCENT_CYAN: '#00d3f3',
  SUCCESS: '#22c55e',
  BACKGROUND: '#0a1628',
  BACKGROUND_CARD: '#0f2040',
  TEXT: '#ffffff',
  MUTED: '#90a1b9',
  MUTED_LIGHT: '#cad5e2',
  BORDER: 'rgba(255,255,255,0.1)',
  BORDER_ACCENT: 'rgba(81,162,255,0.3)',
} as const

export const SPACING = {
  SECTION_Y: 'py-24',
  CONTAINER: 'max-w-[1280px] mx-auto px-[142px]',
  CONTAINER_INNER: 'px-8',
} as const

export const TYPOGRAPHY = {
  H1: 'text-[60px] font-bold leading-[75px]',
  H2: 'text-[40px] font-bold leading-[1.2]',
  H3: 'text-[20px] font-semibold leading-[1.4]',
  BODY: 'text-[18px] font-normal leading-[1.625]',
  SMALL: 'text-[14px] font-normal leading-[20px]',
  LABEL: 'text-[14px] font-medium leading-[20px]',
} as const

export const BORDER_RADIUS = {
  SM: 'rounded-[8px]',
  MD: 'rounded-[14px]',
  LG: 'rounded-[16px]',
  FULL: 'rounded-full',
} as const

export const SHADOWS = {
  BUTTON: '0px 20px 12.5px rgba(21,93,252,0.3), 0px 8px 5px rgba(21,93,252,0.3)',
  CARD: '0px 25px 50px -12px rgba(0,0,0,0.5)',
} as const

export const TRANSITIONS = {
  DEFAULT: 'transition-all duration-300 ease-in-out',
  FAST: 'transition-all duration-150 ease-in-out',
} as const
