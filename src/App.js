<<<<<<< HEAD
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
import BSection2 from './components/Business/BSection2/BSection2';
import BSlider from './components/Business/BSlider/BSlider';
import BCard from './components/Business/BCard/BCard';
import BSlider2 from './components/Business/BSlider2/BSlider2';
import BTestiomonial from './components/Business/BTestiomonial/BTestiomonial';
import BContactForm from './components/Business/BContactForm/BContactForm';
=======
import React, { Fragment, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 087fd2d6f9a3b598e299ba47c0cbaa521cdb877a





<<<<<<< HEAD
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
      {/*--Business-- */}
      <BSection2 />
      <BSlider />
      <BCard />
      <BSlider2 />
      <BTestiomonial />
      <BContactForm />
      
=======
// import "./App.sass";
import RoutesComponent from "./CommonRoutes";
import Layout from "./Pages/Layout/Layout";

function App() {
  return (
    <div className="App">
      {/* <RoutesComponent /> */}
      <Router basename='/interllekt.com'>
        <Routes>
          <Route path='/*' element={<Layout />} />
        </Routes>
      </Router>
>>>>>>> 087fd2d6f9a3b598e299ba47c0cbaa521cdb877a
    </div>
  );
}

export default App;
