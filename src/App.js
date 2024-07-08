import React, { Fragment, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





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
import ErrorBoundary from './Utiliz/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <RoutesComponent /> */}
      <ErrorBoundary>
      <Router basename='/interllekt.com'>
        <Routes>
          <Route path='/*' element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
