import SEO from "@/components/SEO"
import { Banner_onMission } from "@/components/banners/Banner_loop"
import { enviroment_DATA } from "@/content/environment"
import { services_DATA } from "@/content/services"
import Grid_gaps from "@/layouts/Grid_gaps"
import SmoothScroll from "@/layouts/Smooth_scroll"

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <SmoothScroll>
        <div>
          {/* SERVICES BLOCK */}

          <Grid_gaps data={services_DATA} />

          {/* ON THE MISSION BANNER */}

          <Banner_onMission txt="We're on a Mission!" count={40} />

          {/* ENVIROMENT STATEMENT BLOCK */}
          <Grid_gaps data={enviroment_DATA} />
        </div>
      </SmoothScroll>
    </>
  )
}

export default Home
