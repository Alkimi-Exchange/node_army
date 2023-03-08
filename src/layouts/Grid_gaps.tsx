import { H2, H3, P } from "@/components/Typography"
import { Grid_gaps_DATA_TYPE, Grid_gaps_block_TYPE } from "@/types/content"
import type { FC } from "react"
import React from "react"
import Image from "next/image"

interface Grid_gapsProps {
  data: Grid_gaps_DATA_TYPE
}

const Grid_gaps: FC<Grid_gapsProps> = ({ data }) => {
  return (
    <article className="container pt-[60px] pb-20 sm:pt-20 sm:pb-[140px]">
      <H2 className="mb-[60px] uppercase">{data.title}</H2>

      <div className={`grid sm:grid-cols-2 xl:grid-cols-3 gap-[30px] lg:gap-y-[60px] grid-wrapper`}>
        {data.blocks.map((block, index) => {
          let spacer = false

          // if  blocksBeforeGap = 3 && index = 2 insert spacer
          if (data.blocksBeforeGap === 3 && index === 2) spacer = true
          // if  blocksBeforeGap = 2 && index = 1 insert spacer
          else if (data.blocksBeforeGap === 2 && index === 1) spacer = true
          // if  blocksBeforeGap = 3 && index = 4 insert spacer
          else if (data.blocksBeforeGap === 3 && index === 5) spacer = true

          return (
            <React.Fragment key={index}>
              <section>
                <Grid_block {...block} />
              </section>
              {spacer && (
                <>
                  <div className="hidden xl:block" />
                  <div className="hidden xl:block" />
                </>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </article>
  )
}

const Grid_block: FC<Grid_gaps_block_TYPE> = ({ type, title, content, icon, videoURL }) => {
  switch (type) {
    case "text":
      return (
        <>
          <H3 className="mb-2 uppercase">{title}</H3>

          {content?.map((item, index) => (
            <P key={index}>{item}</P>
          ))}
          {icon && <Image className="mt-8" src={icon} alt={title || "icon"} width={24} height={24} />}
        </>
      )
    case "video":
      return (
        <video autoPlay loop muted className="object-cover">
          <source src={videoURL} />
        </video>
      )
    default:
      return null
  }
}

export default Grid_gaps
