import React, { useEffect, useState } from 'react';
import './Section1.css';

const Section1 = () => {
  const [displayText, setDisplayText] = useState('Capabilities');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => (prevText === 'Capabilities' ? 'Core' : 'Capabilities'));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section1-container">
      <div className="section1-body">
        <h1 className="heading-style-h1">
          Our <br />
          <span className="text-style-italic animated-text">{displayText}</span>
        </h1>
        <div className="para">
          <p>
            Interllekt is decades of collective expertise to help individuals & organisations achieve transformation and growth, translating concepts into enduring branding and legacies. Embracing a global perspective towards an impactful future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
