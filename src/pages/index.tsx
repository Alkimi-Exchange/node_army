import SEO from "@/components/SEO"
import { Banner_onMission } from "@/components/banners/Banner_loop"
import Accordion from "@/components/sections/Accordion"
import Contact_us from "@/components/sections/Contact_us"
import Hero from "@/components/sections/Hero"
import { enviroment_DATA } from "@/content/environment"
import { faq_DATA } from "@/content/faq"
import { services_DATA } from "@/content/services"
import Footer from "@/layouts/Footer"
import Grid_gaps from "@/layouts/Grid_gaps"
import SmoothScroll from "@/layouts/Smooth_scroll"

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      {/* <SmoothScroll> */}
      <div>
        {/* HERO BLOCK */}
        <Hero />

        {/* SERVICES BLOCK */}
        <Grid_gaps data={services_DATA} />

        {/* ON THE MISSION BANNER */}
        <Banner_onMission txt="We're on a Mission!" count={40} />

        {/* ENVIROMENT STATEMENT BLOCK */}
        <Grid_gaps data={enviroment_DATA} />

        {/* FAQs  */}
        <Accordion data={faq_DATA} />

        {/* Contact US */}
        <Contact_us />

        {/* FOOTER */}
        <Footer />
      </div>
      {/* </SmoothScroll> */}
    </>
  )
}

export default Home
