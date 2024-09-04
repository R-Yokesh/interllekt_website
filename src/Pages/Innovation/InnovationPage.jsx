import React from 'react'
import InnoSection1 from '../../Component/Innovation/InnoSection1/InnoSection1'
// import InnoSlider1 from '../../Component/Innovation/InnoSlider1/InnoSlider1'
// import InnoSlider2 from '../../Component/Innovation/InnoSlider2/InnoSlider2'
// import InnoTestiomonial from '../../Component/Innovation/InnoTestiomonial/InnoTestiomonial'
// import InnoContactForm from '../../Component/Innovation/InnoContactForm/InnoContactForm'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'
import ISubservices from '../../Component/Innovation/ISubservices/ISubservices'
import InnoParallax from '../../Component/Innovation/InnoParallax/InnoParallax'
import CardContent from '../../Component/HomePageComponent/CardContent/CardContent'
import ImageScrollEffect from '../../Component/ImageScrollEffect/ImageScrollEffect'
import Assets from '../../Assets/Assets';


const InnovationPage = ({ marginSec }) => {
  const innovationImages = [
    Assets.inno1,
    Assets.inno2,
    Assets.inno3,
    Assets.inno4,
    Assets.inno5,
    Assets.inno6,
    Assets.inno7,
    Assets.inno8,
    Assets.inno9,
    Assets.inno10,
    Assets.inno11,


    // Add more images as needed
  ];
  return (
    <div>

      <InnoParallax marginSec={marginSec} />
      <InnoSection1 />
      <ISubservices />
      {/* <InnoSlider1 /> */}
      {/* <InnoSlider2 /> */}
      {/* <InnoTestiomonial /> */}
      {/* <InnoContactForm /> */}
      {/* <CardContent /> */}
      <ImageScrollEffect images={innovationImages} />
      <ContactForm />
    </div>
  )
}

export default InnovationPage