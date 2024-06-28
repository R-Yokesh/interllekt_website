import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="section1-container">
      <header className="header">
        <div className="nav-left">
          <img src="https://placehold.co/93x45" alt="Logo" className="logo" />
        </div>
        <div className="nav-right">
          <img src="https://placehold.co/50x50" alt="Search" className="icon" />
          <img src="https://placehold.co/50x50" alt="Menu" className="icon" />
        </div>
      </header>
      <div className="section1-body">
        <div className="body-left">
          <h1><i>We are here<br />to design<br />your future.</i></h1>
        </div>
        <div className="body-right">
          <p>“We look ahead and manifest the future, through design, technology, strategy, venture and an omni thinking. From a startup to a legacy enterprise, building challenging transformations online and offline</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
