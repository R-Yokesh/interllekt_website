import React from 'react';
import Slider2 from './components/Capabilities/Slider2/Slider2';
import Section1 from './components/Capabilities/Section1/Section1';
import Slider from './components/Capabilities/Slider/Slider';
import Section2 from './components/Capabilities/Section2/Section2';
import Card from './components/Capabilities/Card/Card';
import Testiomonial from './components/Capabilities/Testiomonial/Testiomonial';
import ContactForm from './components/Capabilities/ContactForm/ContactForm';
import InnoSection1 from './components/Innovation/InnoSection1/InnoSection1';
import InnoSlider1 from './components/Innovation/InnoSlider1/InnoSlider1';
import InnoSlider2 from './components/Innovation/InnoSlider2/InnoSlider2';
import InnoTestiomonial from './components/Innovation/InnoTestiomonial/InnoTestiomonial';
import InnoContactForm from './components/Innovation/InnoContactForm/InnoContactForm';
import Header from './components/Header/Header';






function App() {
  return (
    <div className="App">
      <Section1 />
      <Header />
      <Section2 />
      <Slider />
      <Card />
      <Slider2 />
      <Testiomonial />
      <ContactForm />
      {/* ---- Innovation Components ----  */}
      <InnoSection1 />
      <InnoSlider1 />
      <InnoSlider2 />
      <InnoTestiomonial />
      <InnoContactForm />
      
    </div>
  );
}

export default App;
