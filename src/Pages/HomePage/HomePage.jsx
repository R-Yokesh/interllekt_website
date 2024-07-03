import React from 'react'
import AnimationBanner from '../../Component/HomePageComponent/AnimationBanner/AnimationBanner'
import ScrollSection from '../../Component/HomePageComponent/ScrollSection/ScrollSection'
import DesignFutureAnimation from '../../Component/HomePageComponent/DesignFutureAnimation/DesignFutureAnimation'
import ArrowAni from '../../Component/HomePageComponent/AnimationBanner/ArrowAni'
import IndustrySection from '../../Component/HomePageComponent/IndustrySection/IndustrySection'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'

const HomePage = () => {
  return (
    <div>
        <AnimationBanner/>
        <ArrowAni/>
        <DesignFutureAnimation/>
        <IndustrySection/>
        {/* <ScrollSection/> */}
        <div id="contact">
        <ContactForm/>
        </div>
    </div>
  )
}

export default HomePage