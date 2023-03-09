import { FC, useRef, useState } from "react"
import { H2, P } from "../Typography"
import { ACCORDION_DATA_TYPE } from "@/content/faq"

interface AccordionProps {
  data: ACCORDION_DATA_TYPE
}
interface CollapsibleItemProps {
  title: string
  content: string[]
}

const Accordion: FC<AccordionProps> = ({ data }) => {
  return (
    <article className="my-20 lg:mt-44 lg:mb-40">
      <div className="container pb-16">
        <H2>Frequently Asked</H2>
      </div>
      <div className="grid gap-12">
        {data.map((item, index) => (
          <CollapsibleItem key={index} {...item} />
        ))}
      </div>
    </article>
  )
}

const CollapsibleItem: FC<CollapsibleItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    setIsOpen(!isOpen)
    if (contentRef.current) contentRef.current.style.maxHeight = isOpen ? "0px" : `${contentRef.current.scrollHeight}px`
  }

  return (
    <div>
      <div className="relative">
        <div className="container z-20 relative">
          <button onClick={toggle} className="w-full">
            <h4
              style={{
                color: isOpen ? "#0E0E0E" : "#FFFFFF",
              }}
              className="text-xl md:text-[28px] pt-[9px] pb-2 default-transition uppercase flex justify-between items-center text-left"
            >
              {title}
              <span className="accordion-icon" data-active={isOpen} />
            </h4>
          </button>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #FFCC97, #D5D9C5)",
            opacity: isOpen ? "1" : "0",
          }}
          className="absolute w-full h-full inset-0 z-10 transition-opacity ease-in-out duration-300"
        />
      </div>
      <div className="container default-transition overflow-hidden" ref={contentRef} style={{ maxHeight: "0px" }}>
        {content.map((item, index) => (
          <P key={index} className="pt-4 opacity-70">
            {item}
          </P>
        ))}
      </div>
    </div>
  )
}

export default Accordion
