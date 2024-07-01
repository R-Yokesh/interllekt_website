import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#capabilities" className="nav-link" onClick={() => scrollToSection('capabilities')}>
              Capabilities
            </a>
          </li>
          <li className="nav-item">
            <a href="#innovation" className="nav-link" onClick={() => scrollToSection('innovation')}>
              Innovation
            </a>
          </li>
          <li className="nav-item">
            <a href="#business" className="nav-link" onClick={() => scrollToSection('business')}>
              Business
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
