import React from 'react'
import { Card } from 'react-bootstrap'
import Section1 from '../../Component/CapabilitiesComponent/Section1/Section1'
import Section2 from '../../Component/CapabilitiesComponent/Section2/Section2'
import Slider from '../../Component/CapabilitiesComponent/Slider/Slider'
import Slider2 from '../../Component/CapabilitiesComponent/Slider2/Slider2'
import CardSection from '../../Component/CapabilitiesComponent/CardSection/CardSection'
import Testiomonial from '../../Component/CapabilitiesComponent/Testiomonial/Testiomonial'
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm'
import TabSection  from '../../Component/CapabilitiesComponent/TabSection/TabSection'


const CapabilitiesPage = () => {
  return (
    <div>
        <Section1 />
        <TabSection />
        <Section2 />
        <Slider />
        <CardSection />
        <Slider2 />
        <Testiomonial />
        <ContactForm />
    </div>
  )
}

export default CapabilitiesPage