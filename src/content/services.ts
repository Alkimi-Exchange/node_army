import { Grid_gaps_DATA_TYPE } from "@/types/content"

import users_plus_IMG from "@/assets/icons/users_plus.png"
import server_IMG from "@/assets/icons/server.png"
import target_IMG from "@/assets/icons/target.png"
import percent_IMG from "@/assets/icons/percent.png"
import cpu_chip_IMG from "@/assets/icons/cpu_chip.png"
import cube_IMG from "@/assets/icons/cube.png"

export const services_DATA: Grid_gaps_DATA_TYPE = {
  title: "Services",
  blocksBeforeGap: 3,
  blocks: [
    {
      type: "text",
      title: "Co-Nodes",
      content: [
        `Collaborative staking among users to pool to achieve threshold stake and operate collectively. 
        This democratises participation and allows sub-stake holders to benefit from reward protocols. 
        It also enables compounding as participants can sweep earned rewards into further Co-Nodes`,
      ],
      icon: users_plus_IMG,
    },
    {
      type: "text",
      title: "Managed nodes",
      content: [
        `Outsource node deployment, management, and maintenance to Node Army for a small commission of earned rewards. 
        Develop a passive yield portfolio with minimum time and skill commitment.`,
      ],
      icon: server_IMG,
    },
    {
      type: "video",
      videoURL: "/video/service.mp4",
    },
    {
      type: "text",
      title: "Nodes as a service",
      content: [
        `An industrial node solution for projects requiring robust decentralised node infrastructures at scale. 
        Node Army collaborates with projects during development phase and through a blockchain lifecycle.`,
      ],
      icon: target_IMG,
    },
    {
      type: "text",
      title: "Rewards",
      content: [
        `Participate in underlying projects offering rewards for staking, 
        validating, and securing their network through a transparent process. 
        Node Army does not offer or promote its own Node Army yield, 
        but rewards are transparently distributed on the blockchain according to the underlying project's protocol and tokenomics.`,
      ],
      icon: percent_IMG,
    },
    {
      type: "text",
      title: "Node build templates",
      content: [
        `Easily deploy nodes with pre-built templates hosted in the Marketplaces of premier cloud computing providers. 
        Templates are specific to the different underlying blockchain networks, designed to make deployment seamless.`,
      ],
      icon: cpu_chip_IMG,
    },
    {
      type: "video",
      videoURL: "/video/blockchain.mp4",
    },
    {
      type: "text",
      title: "Blockchain scalability",
      content: [
        `Leverage scalable blockchain infrastructure and a substantial and growing community of 
        committed datapreneurs for rapid and effective scaling of blockchain-based applications. 
        Maintain high performance and security in a decentralised approach.`,
      ],
      icon: cube_IMG,
    },
  ],
}
