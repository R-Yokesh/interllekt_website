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
import CapParallax from '../../Component/CapabilitiesComponent/CapParallax/CapParallax';
import CardContent from '../../Component/HomePageComponent/CardContent/CardContent'
// import ImageScrollEffect from '../../components/ImageScrollEffect/ImageScrollEffect';
import Assets from '../../Assets/Assets';
import ImageScrollEffect from '../../Component/ImageScrollEffect/ImageScrollEffect';


const CapabilitiesPage = () => {
  
const capabilitiesImages = [
  Assets.cap1,
  Assets.cap2,
  Assets.cap3,
  Assets.cap4,
  Assets.cap5,
  Assets.cap6,
  Assets.cap7,
  Assets.cap8,
  Assets.cap9,
  Assets.cap10,
  Assets.cap11,
  Assets.cap12,
  Assets.cap13,
];

  return (
    <div>
      <Section1 />
      <TabSection />
      <div id="capabilities">
      <CapParallax />
        <Section2 />
      </div>
     {/* <ImageScrollEffect/> */}
      
      <CapSubservices />
      {/* <Slider /> */}
      {/* <CardSection /> */}
      {/* <Slider2 /> */}
      {/* <Testimonial /> */}
      {/* <CardContent /> */}
      <ImageScrollEffect images={capabilitiesImages} />
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
