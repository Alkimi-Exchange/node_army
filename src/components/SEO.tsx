import Head from "next/head"
import type { FC } from "react"

interface SEOProps {
  title: string
}

const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>{`Node Army | ${title}`}</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
export default SEO
