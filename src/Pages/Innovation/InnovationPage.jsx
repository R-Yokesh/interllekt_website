import React from 'react'
import InnoSection1 from '../../Component/Innovation/InnoSection1/InnoSection1'
import InnoSlider1 from '../../Component/Innovation/InnoSlider1/InnoSlider1'
import InnoSlider2 from '../../Component/Innovation/InnoSlider2/InnoSlider2'
import InnoTestiomonial from '../../Component/Innovation/InnoTestiomonial/InnoTestiomonial'
import InnoContactForm from '../../Component/Innovation/InnoContactForm/InnoContactForm'


const InnovationPage = () => {
  return (
    <div>
        <InnoSection1 />
        <InnoSlider1 />
        <InnoSlider2 />
        <InnoTestiomonial />
        <InnoContactForm />
    </div>
  )
}

export default InnovationPage