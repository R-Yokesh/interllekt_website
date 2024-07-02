import React from 'react';
import './TabSection.css';

const TabSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className="tab-container">
        <nav className="tab-nav">
          <ul className="tab-list">
            <li className="tab-item">
              <a href="#capabilities" className="tab-link" onClick={() => scrollToSection('capabilities')}>
                Capabilities
              </a>
            </li>
            <li className="tab-item">
              <a href="#innovation" className="tab-link" onClick={() => scrollToSection('innovation')}>
                Innovation
              </a>
            </li>
            <li className="tab-item">
              <a href="#business" className="tab-link" onClick={() => scrollToSection('business')}>
                Business
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default TabSection;
