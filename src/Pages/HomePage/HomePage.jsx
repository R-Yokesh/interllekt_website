import React from 'react'
// import AnimationBanner from '../../Component/HomePageComponent/AnimationBanner/AnimationBanner'
// import ScrollSection from '../../Component/HomePageComponent/ScrollSection/ScrollSection'
// import DesignFutureAnimation from '../../Component/HomePageComponent/DesignFutureAnimation/DesignFutureAnimation'
// import ArrowAni from '../../Component/HomePageComponent/AnimationBanner/ArrowAni'
// import IndustrySection from '../../Component/HomePageComponent/IndustrySection/IndustrySection'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'
import AnimationVideo from '../../Component/HomePageComponent/AnimationVideo/AnimationVideo'
import CardContent from '../../Component/HomePageComponent/CardContent/CardContent'
import HomeServices from '../../Component/HomePageComponent/HomeServices/HomeServices'
import TestAnimation from '../../Component/HomePageComponent/TestAnimation/TestAnimation'
import ImageScrollEffect from '../../Component/ImageScrollEffect/ImageScrollEffect'



const HomePage = () => {
  return (
    <div>
        <AnimationVideo/>
        {/* <AnimationBanner/> */}
        {/* <ArrowAni/> */}
        <div className='container-fluid'>
        <TestAnimation />
        </div>
       
        {/* <DesignFutureAnimation/> */}
        <div className='container-fluid'>
        <CardContent />
        </div>
        {/* <IndustrySection/> */}
        {/* <ScrollSection/> */}
        
        <HomeServices />

{/* <ImageScrollEffect/> */}

        
        <div id="contact container-fluid">
        <ContactForm/>
        </div>
    </div>
  )
}

export default HomePage