import { Banner_onMission } from "@/components/banners/Banner_loop"
import type { FC } from "react"
import Link from "next/link"

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const social_links = [
    { name: "Discord", url: "https://discord.gg/2VZ4Y4Y" },
    { name: "Twitter", url: "https://twitter.com/0xMaki" },
    { name: "Telegram", url: "https://t.me/0xMaki" },
    { name: "Linked In", url: "https://www.linkedin.com/company/0xmaki/" },
  ]

  return (
    <>
      <footer className="pt-12">
        <div className="container mb-[70px] text-lg uppercase sm:grid sm:grid-cols-2 lg:grid-cols-1 gap-[30px]">
          <div className="lg:grid grid-cols-4">
            <span className="lg:block" />
            <div className="grid gap-[24px]">
              <Link href="/">Services</Link>
              <Link href="/">projects</Link>
              <Link href="/">nft</Link>
              <Link href="/">faq</Link>
              <a className="opacity-40 flex justify-between md:flex-col">
                <span>Pratform</span>
                <span>coming soon</span>
              </a>
            </div>
            <div className="grid gap-[24px] mt-[24px] mb-20">
              <Link href="/">Terms</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Privacy</Link>
            </div>
          </div>
          <div className="lg:mt-[83px]">
            <div className="socials  grid lg:grid-cols-4 gap-[24px]">
              {social_links.map((item, index) => (
                <Link key={index} href={item.url} target="_blank">
                  {item.name}
                </Link>
              ))}
            </div>
            <p className="opacity-60 mt-[24px]">© 2023 Node Army™️ </p>
          </div>
        </div>
      </footer>
      <Banner_onMission txt="We're on a Mission!" count={40} />
    </>
  )
}
export default Footer
