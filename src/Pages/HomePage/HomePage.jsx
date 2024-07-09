import React from 'react'
import AnimationBanner from '../../Component/HomePageComponent/AnimationBanner/AnimationBanner'
// import ScrollSection from '../../Component/HomePageComponent/ScrollSection/ScrollSection'
import DesignFutureAnimation from '../../Component/HomePageComponent/DesignFutureAnimation/DesignFutureAnimation'
import ArrowAni from '../../Component/HomePageComponent/AnimationBanner/ArrowAni'
import IndustrySection from '../../Component/HomePageComponent/IndustrySection/IndustrySection'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'
import TestAnimation from '../../Component/HomePageComponent/TestAnimation/TestAnimation'

const HomePage = () => {
  return (
    <div>
        <AnimationBanner/>
        {/* <ArrowAni/> */}
        <TestAnimation />
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