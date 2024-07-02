import React from 'react';
import './Section2.css';
import  TabSection  from '../TabSection/TabSection';

const Section2 = () => {
  return (
    <div className="section2-container">
      <TabSection />
      <div className="section2-body">
        <h1>Concept & Design</h1>
        <p>
          <i>
            A visionary creative network striving to craft sublime communication
            through design, pushing boundaries, we boldly explore new horizons,
            unlocking limitless possibilities through creative expression.
          </i>
        </p>
      </div>
    </div>
  );
};

export default Section2;
