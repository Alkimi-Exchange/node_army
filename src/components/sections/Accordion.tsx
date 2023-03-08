import { FC, useRef, useState } from "react"
import { H2, P } from "../Typography"

interface AccordionProps {
  data: any
}

const Accordion: FC<AccordionProps> = ({}) => {
  return (
    <article className="my-20 lg:mt-44 lg:mb-40">
      <div className="container pb-16">
        <H2>Frequently Asked</H2>
      </div>
      <div className="grid gap-12">
        <CollapsibleItem />
        <CollapsibleItem />
      </div>
    </article>
  )
}

const CollapsibleItem = ({}) => {
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
          <button onClick={toggle}>
            <h4
              style={{
                color: isOpen ? "#0E0E0E" : "#FFFFFF",
              }}
              className="text-xl md:text-[28px] pt-[9px] pb-2 transition-all duration-300 ease-in-out"
            >
              What is Node Army?
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
      <div className="container transition-all duration-300 ease-in-out overflow-hidden" ref={contentRef} style={{ maxHeight: "0px" }}>
        <P className="pt-4">
          Node Army is a cloud-native blockchain infrastructure provider that empowers individuals and businesses to deploy and manage
          nodes, even without technical expertise. Our infrastructure is secure and scalable, with advanced features such as co-nodes,
          compounding, and managed nodes.
        </P>
      </div>
    </div>
  )
}

export default Accordion
