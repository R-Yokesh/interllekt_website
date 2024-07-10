import React from 'react';
import { Link } from 'react-router-dom';
import Assets from '../../../Assets/Assets';
import './Footer.css'; // Ensure this path is correct

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-addr">
        <img src={Assets.interllektlogo} alt="Logo" style={{ width: "100px" }} />
      </div>
      
      <nav className="footer-nav">
        <ul className="nav-ul">
          <li><Link to="/" onClick={() => console.log('Navigating to Home')}>Home</Link></li>
          <li><Link to="/" onClick={() => console.log('Navigating to About')}>About</Link></li>
          <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
          <li><Link to="/Capabilities" onClick={() => console.log('Navigating to Capabilities')}>Capabilities</Link></li>
          <li><Link to="/PrivacyAndPolicy" onClick={() => console.log('Navigating to Privacy and Policy')}>Privacy And Policy</Link></li>
        </ul>
      </nav>

      <div className="nav-item nav-item-extra">
        <h2 className="nav-title">Follow us</h2>
        <ul className="nav-ul nav-ul-extra">
          <li><a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      
      <div className="nav-address-item">
        <h2 className="nav-title">Office</h2>
        <ul className="office-location">
          <li>Menachem Begin 144, Tel Aviv</li>
          <li>215 Park Ave South, New York</li>
        </ul>
      </div>
      
      <div className="legal">
        <p>&copy; {new Date().getFullYear()} Interllekt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
