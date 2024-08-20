import React from 'react'
import BSection2 from '../../Component/Business/BSection2/BSection2'
// import BSlider from '../../Component/Business/BSlider/BSlider'
// import BCard from '../../Component/Business/BCard/BCard'
// import BSlider2 from '../../Component/Business/BSlider2/BSlider2'
// import BTestiomonial from '../../Component/Business/BTestiomonial/BTestiomonial'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'
import BSubservices from '../../Component/Business/BSubservices/BSubservices'
import BParallax from '../../Component/Business/BParallax/BParallax'
import CardContent from '../../Component/HomePageComponent/CardContent/CardContent'
import ImageScrollEffect from '../../Component/ImageScrollEffect/ImageScrollEffect'
import Assets from '../../Assets/Assets';

const BuisnessPage = () => {
  const businessImages = [
    Assets.busk1,
  Assets.busk2,
  Assets.busk3,
  Assets.busk4,
  Assets.busk5,
  Assets.busk6,
  Assets.busk7,
  Assets.busk8,
  Assets.busk9,
  Assets.busk10,
  Assets.busk11,
  Assets.busk12,
  Assets.busk13,
    // Add more images as needed
  ];
  return (
    <div>
        <BParallax />
        <BSection2 />
        <BSubservices />
        {/* <BSlider /> */}
        {/* <BCard /> */}
        {/* <BSlider2 /> */}
        {/* <BTestiomonial /> */}
        {/* <CardContent /> */}
        <ImageScrollEffect images={businessImages}/>
        <ContactForm />
    </div>
  )
}

export default BuisnessPage