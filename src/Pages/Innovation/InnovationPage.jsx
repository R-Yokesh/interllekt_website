import React from 'react'
import InnoSection1 from '../../Component/Innovation/InnoSection1/InnoSection1'
// import InnoSlider1 from '../../Component/Innovation/InnoSlider1/InnoSlider1'
// import InnoSlider2 from '../../Component/Innovation/InnoSlider2/InnoSlider2'
// import InnoTestiomonial from '../../Component/Innovation/InnoTestiomonial/InnoTestiomonial'
// import InnoContactForm from '../../Component/Innovation/InnoContactForm/InnoContactForm'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'
import ISubservices from '../../Component/Innovation/ISubservices/ISubservices'


const InnovationPage = () => {
  return (
    <div>
        <InnoSection1 />
        <ISubservices />
        {/* <InnoSlider1 /> */}
        {/* <InnoSlider2 /> */}
        {/* <InnoTestiomonial /> */}
        {/* <InnoContactForm /> */}
        <ContactForm />
    </div>
  )
}

export default InnovationPage