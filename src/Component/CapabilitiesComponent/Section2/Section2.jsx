import React from 'react';
import './Section2.css';
import  TabSection  from '../TabSection/TabSection';

const Section2 = () => {
  return (
    <div className="section2-container container-fluid common-class ">
      {/* <TabSection /> */}
      <div className="section2-body res-section">
        {/* <h3>Concept & Design</h3> */}
        <p>
            A visionary creative network striving to craft sublime communication
            through design, pushing boundaries, we boldly explore new horizons,
            unlocking limitless possibilities through creative expression.
        </p>
        <h1 className='line1'>We can bring something to life for you.</h1>
      </div>
    </div>
  );
};

export default Section2;
