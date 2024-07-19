import React from 'react';
import Section1 from '../../Component/CapabilitiesComponent/Section1/Section1';
import Section2 from '../../Component/CapabilitiesComponent/Section2/Section2';
// import Slider from '../../Component/CapabilitiesComponent/Slider/Slider';
// import Slider2 from '../../Component/CapabilitiesComponent/Slider2/Slider2';
// import CardSection from '../../Component/CapabilitiesComponent/CardSection/CardSection';
// import Testimonial from '../../Component/CapabilitiesComponent/Testiomonial/Testiomonial';
import ContactForm from '../../Component/CapabilitiesComponent/ContactForm/ContactForm';
import TabSection from '../../Component/CapabilitiesComponent/TabSection/TabSection';
import BusinessPage from '../Business/BusinessPage';
import InnovationPage from '../Innovation/InnovationPage';
import CapSubservices from '../../Component/CapabilitiesComponent/CapSubservices/CapSubservices';

const CapabilitiesPage = () => {
  return (
    <div>
      <Section1 />
      <TabSection />
      <div id="capabilities">
        <Section2 />
      </div>
      <CapSubservices />
      {/* <Slider /> */}
      {/* <CardSection /> */}
      {/* <Slider2 /> */}
      {/* <Testimonial /> */}
      <div id="contact">
        <ContactForm/>
        </div>
      <div id="innovation">
        <InnovationPage />
      </div>
      <div id="business">
        <BusinessPage />
      </div>
    </div>
  );
};

export default CapabilitiesPage;
