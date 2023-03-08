import type { FC } from "react"
import Marquee from "react-fast-marquee"

interface Banner_onMissionProps {
  txt: string
  count: number
}

export const Banner_onMission: FC<Banner_onMissionProps> = ({ txt, count }) => {
  // make an array of the text
  const textArray = Array(count).fill(<p className="ml-14 uppercase">{txt}</p>)

  return (
    <Marquee
      gradient={false}
      style={{
        background: "linear-gradient(to right, #FFCC97, #D5D9C5)",
        paddingTop: 12,
        paddingBottom: 11,
        color: "#0E0E0E",
        fontWeight: 600,
      }}
    >
      {textArray}
    </Marquee>
  )
}
