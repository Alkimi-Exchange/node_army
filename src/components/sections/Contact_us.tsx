import type { FC } from "react"
import { H2, P } from "../Typography"
import { font_space_mono } from "@/util/fonts"

interface Contact_usProps {}

const Contact_us: FC<Contact_usProps> = ({}) => {
  return (
    <article className="py-[115px]">
      <div className="container">
        <div>
          <H2 className="uppercase mb-6">Contact us</H2>
          <P className="indent-32">
            We&apos;re here to help you deploy and manage nodes with ease. If you have any questions or concerns, please feel free to reach
            out to us using the contact information below. Our dedicated team is here to support you every step of the way.
          </P>
        </div>

        <section className={`mt-20 text-lg md:text-[22px] grid md:grid-cols-2 ${font_space_mono.className}`}>
          <address className="not-italic flex flex-col gap-3 md:gap-6">
            <p className="uppercase opacity-30">Address</p>
            <p>PO Box 227, Peveril Buildings</p>
            <p>Peveril Square, Douglas</p>
            <p>isle of man, IM99 1RZ</p>
            <p>node army limited</p>
          </address>
          <address className="not-italic flex flex-col gap-3 md:gap-6">
            <p className="uppercase opacity-30">Phone</p>
            <a href="tel:+1 415 801 6633">+1 415 801 6633</a>
            <a className="uppercase opacity-30" href="mailto:mail@node.army">
              mail@node.army
            </a>
            <p className="uppercase">@node_army</p>
          </address>
        </section>
      </div>
    </article>
  )
}
export default Contact_us
