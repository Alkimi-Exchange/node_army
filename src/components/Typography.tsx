import type { FC } from "react"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const H2: FC<TypographyProps> = ({ children, className }) => (
  <h2 className={`text-[45px] leading-none lg:text-[120px] font-bold ${className || ""}`}>{children}</h2>
)
export const H3: FC<TypographyProps> = ({ children, className }) => <h3 className={`text-2xl font-bold ${className || ""}`}>{children}</h3>

export const P: FC<TypographyProps> = ({ children, className }) => (
  <p className={`text-base lg:text-lg opacity-70 -tracking-[0.21px] ${className || ""}`}>{children}</p>
)
