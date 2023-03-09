import type { FC } from "react"

interface ButtonProps {
  txt: string
}

export const Primary_btn: FC<ButtonProps> = ({ txt }) => {
  return (
    <button className="w-full bg-[#0E0E0E] border border-[#252525] rounded-[83px] pt-[6px] pb-[7px] px-6 md:w-fit gradient-text uppercase">
      {txt}
    </button>
  )
}
