import React from 'react'
import BannerTop from '../components/BannerTop'
import TestimonialSection from '../components/TestimonialSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import CoreOfferingsServices from '../components/CoreOfferingsServices '
import testimg from '../assets/images/testimonial-skip-02.webp';
const Services = () => {
  return (
    <>
    <BannerTop page='Services'/>
    <CoreOfferingsServices/>

    <TestimonialSection
  image={testimg}
  quote="SDEI transformed our online presence seamlessly and enabled us to reach a wider audience effectively."
  name="Emma White"
/>

<WhyChooseUsSection/>

    </>
  )
}

export default Services