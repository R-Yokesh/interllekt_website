import React from 'react';
import './Section2.css';
import  TabSection  from '../TabSection/TabSection';

const Section2 = () => {
  return (
    <div className="section2-container container common-class ">
      {/* <TabSection /> */}
      <div className="section2-body res-section">
        <h1>Concept & Design</h1>
        <p>
            A visionary creative network striving to craft sublime communication
            through design, pushing boundaries, we boldly explore new horizons,
            unlocking limitless possibilities through creative expression.
        </p>
        <p className='line1'>We can bring something to life for you.</p>
      </div>
    </div>
  );
};

export default Section2;
