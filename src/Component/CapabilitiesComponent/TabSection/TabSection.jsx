import React, { useState, useEffect } from 'react';
import './TabSection.css';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState('capabilities');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  const handleScroll = () => {
    const sections = ['capabilities', 'innovation', 'business'];
    let found = false;
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element && !found) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveTab(id);
          found = true;
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="tab-container">
      <nav className="tab-nav">
        <ul className="tab-list">
          <li className="tab-item">
            <a
              href="#capabilities"
              className={`tab-link ${activeTab === 'capabilities' ? 'active' : ''}`}
              onClick={() => scrollToSection('capabilities')}
            >
              Capabilities
            </a>
          </li>
          <li className="tab-item">
            <a
              href="#innovation"
              className={`tab-link ${activeTab === 'innovation' ? 'active' : ''}`}
              onClick={() => scrollToSection('innovation')}
            >
              Innovation
            </a>
          </li>
          <li className="tab-item">
            <a
              href="#business"
              className={`tab-link ${activeTab === 'business' ? 'active' : ''}`}
              onClick={() => scrollToSection('business')}
            >
              Business
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TabSection;