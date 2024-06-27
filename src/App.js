import React from 'react';
import Slider2 from './components/Slider2/Slider2';
import Section1 from './components/Section1/Section1';
import Slider from './components/Slider/Slider';
import Section2 from './components/Section2/Section2';
import Card from './components/Card/Card';
import Testiomonial from './components/Testiomonial/Testiomonial';
import ContactForm from './components/ContactForm/ContactForm';



function App() {
  return (
    <div className="App">
      <Section1 />
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
