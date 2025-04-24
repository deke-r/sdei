import AboutUsSection from "../components/AboutUsSection"
import Carousel from "../components/Carosuel"
import CoreOfferings from "../components/CoreOfferings"
import Navbar from "../components/Navbar"
import TestimonialSection from "../components/TestimonialSection"
import WhyChooseUsSection from "../components/WhyChooseUsSection"
import Contact from "../components/Contact"
import testimg from '../assets/images/testimonial-skip-01.jpg'

const Home = () => {
  return (
    <>
          <div className="banner-top">

        
<Carousel/>

  <div className="video-overlay"></div>
  <Navbar />
</div>

<CoreOfferings/>
<AboutUsSection/>
<TestimonialSection
  image={testimg}
  quote="SDEI’s services exceeded my expectations. Professionalism, efficiency, and quality are their core values."
  name="John Smith"
/>
<WhyChooseUsSection/>
    <Contact/>
    </>
  )
}

export default Home