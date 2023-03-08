import { StaticImageData } from "next/image"

export type Grid_gaps_DATA_TYPE = {
  title: string
  blocksBeforeGap: 2 | 3
  blocks: Grid_gaps_block_TYPE[]
}

export type Grid_gaps_block_TYPE = {
  type: "text" | "video"
  videoURL?: string
  title?: string
  content?: string[]
  icon?: StaticImageData
}
