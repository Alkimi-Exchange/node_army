import { Grid_gaps_DATA_TYPE } from "@/types/content"
import shield_tick_IMG from "@/assets/icons/shield_tick.png"
import dataflow_IMG from "@/assets/icons/dataflow.png"
import bar_chart_circle_IMG from "@/assets/icons/bar_chart_circle.png"

export const enviroment_DATA: Grid_gaps_DATA_TYPE = {
  title: "Environment statement",
  blocksBeforeGap: 2,
  blocks: [
    {
      type: "text",
      title: "proof of stake",
      content: [
        `Proof of stake blockchain validation is more environmentally friendly than proof of work, 
        as it consumes significantly less energy by not requiring computational puzzles to be solved. 
        Validators are selected based on cryptocurrency holdings, reducing the carbon footprint of the network.`,
        `Unless directly disclosed none of the projects we support will operate through Proof of Work.`,
      ],
      icon: shield_tick_IMG,
    },
    {
      type: "text",
      title: "Cloud computing",
      content: [
        `Cloud computing provides more efficient resource usage , reducing the need for physical hardware and lowering the carbon footprint of the network. 
         Other benefits include increased scalability, faster transaction speeds, and improved accessibility.`,
        `Overall, cloud computing provides an eco-friendly and efficient solution for validating and recording transactions on PoS blockchains.`,
      ],
      icon: dataflow_IMG,
    },
    {
      type: "video",
      videoURL: "/video/statement.mp4",
    },
    {
      type: "text",
      title: "Node army",
      content: [
        `We regularly review cloud computing platforms to ensure you can choose from proven, reliable, scalable and environmentally responsible providers. 
        Node Army will endeavor to integrate a energy utilization metric to our and your dashboards in the near future for transparency of impact`,
      ],
      icon: bar_chart_circle_IMG,
    },
  ],
}
