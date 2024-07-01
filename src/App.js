import React from 'react';
import Slider2 from './components/Capabilities/Slider2/Slider2';
import Section1 from './components/Capabilities/Section1/Section1';
import Slider from './components/Capabilities/Slider/Slider';
import Section2 from './components/Capabilities/Section2/Section2';
import Card from './components/Capabilities/Card/Card';
import Testiomonial from './components/Capabilities/Testiomonial/Testiomonial';
import ContactForm from './components/Capabilities/ContactForm/ContactForm';
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
      
    </div>
  );
}

export default App;
