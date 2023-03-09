import type { FC, Key } from "react"
import Marquee from "react-fast-marquee"

interface Banner_onMissionProps {
  txt: string
  count: number
}

export const Banner_onMission: FC<Banner_onMissionProps> = ({ txt, count }) => {
  // make an array of the text
  let textArray = []
  for (let i = 0; i < count; i++) {
    textArray.push(
      <p key={i} className="ml-14 uppercase">
        {txt}
      </p>
    )
  }

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

import Image from "next/image"
import digital_ocean_SVG from "@/assets/icons/tech/digital_ocean.svg"
import akamai_SVG from "@/assets/icons/tech/akamai.svg"
import aws_SVG from "@/assets/icons/tech/aws.svg"
import vultr_SVG from "@/assets/icons/tech/vultr.svg"
import google_cloud_SVG from "@/assets/icons/tech/google_cloud.svg"

export const Banner_logos: FC = () => {
  return (
    <Marquee gradient={false}>
      <Image className="mr-[140px]" src={digital_ocean_SVG} alt="Digital Ocean" />
      <Image className="mr-[140px]" src={akamai_SVG} alt="Akamai" />
      <Image className="mr-[140px]" src={aws_SVG} alt="AWS" />
      <Image className="mr-[140px]" src={vultr_SVG} alt="Vultr" />
      <Image className="mr-[140px]" src={google_cloud_SVG} alt="Google Cloud" />
    </Marquee>
  )
}
