import React from 'react';
import './Section1.css';


const Section1 = () => {
  return (
    <div className="section1-container">
      <header className="header">
        <div className="nav-left">
          <img src="assets/interllekt-logo.png" alt="Logo" className="logo" />
        </div>
        <div className="nav-right">
          <img src="assets/search-icon.png" alt="Search" className="icon" />
          <img src="assets/menu-icon.png" alt="Menu" className="icon" />
        </div>
      </header>
      <div className="section1-body">
      <h1 class="heading-style-h1">Our Offerings<br/><span class="text-style-italic animated-text">Capabilities<br/>core.</span></h1>
      <div className='para'>
        <p>Interllekt is decades of collective expertise to help individuals & organisations achieve transformation and growth, translating concepts into enduring branding and legacies. Embracing a global perspective towards an impactful future</p>
      </div>
      </div>
    </div>
  );
};

export default Section1;
