import React from 'react'
import BSection2 from '../../Component/Business/BSection2/BSection2'
// import BSlider from '../../Component/Business/BSlider/BSlider'
// import BCard from '../../Component/Business/BCard/BCard'
// import BSlider2 from '../../Component/Business/BSlider2/BSlider2'
// import BTestiomonial from '../../Component/Business/BTestiomonial/BTestiomonial'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'
import BSubservices from '../../Component/Business/BSubservices/BSubservices'
import BParallax from '../../Component/Business/BParallax/BParallax'


const BuisnessPage = () => {
  return (
    <div>
        {/* <BParallax /> */}
        <BSection2 />
        <BSubservices />
        {/* <BSlider /> */}
        {/* <BCard /> */}
        {/* <BSlider2 /> */}
        {/* <BTestiomonial /> */}
        <ContactForm />
    </div>
  )
}

export default BuisnessPage