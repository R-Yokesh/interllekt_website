import React from 'react'
import AnimationBanner from '../../Component/HomePageComponent/AnimationBanner/AnimationBanner'
import ScrollSection from '../../Component/HomePageComponent/ScrollSection/ScrollSection'
import DesignFutureAnimation from '../../Component/HomePageComponent/DesignFutureAnimation/DesignFutureAnimation'
import ArrowAni from '../../Component/HomePageComponent/AnimationBanner/ArrowAni'

const HomePage = () => {
  return (
    <div>
        <AnimationBanner/>
        <ArrowAni/>
        <DesignFutureAnimation/>
        {/* <ScrollSection/> */}
    </div>
  )
}

export default HomePage