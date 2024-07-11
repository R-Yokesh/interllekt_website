import React from 'react';
import { Link } from 'react-router-dom';
import Assets from '../../../Assets/Assets';
import './Footer.css';
 
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <footer className="custom-footer">
      <div className="c-layout is-footer">
        <div className="footer-left">
          <img src={Assets.interllektlogo} alt="Logo" style={{ width: '100px' }} />
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <Link to="/" onClick={() => console.log('Navigating to Home')}>Home</Link>
            <Link to="/about" onClick={() => console.log('Navigating to About')}>About</Link>
            <Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
            <Link to="/capabilities" onClick={() => console.log('Navigating to Capabilities')}>Capabilities</Link>
            <Link to="/" onClick={() => scrollToSection('ethos')}>Interllekt Ethos</Link>
            <Link to="/legal" onClick={() => scrollToSection('legal')}>Legal</Link>
            <Link to="/PrivacyAndPolicy" onClick={() => console.log('Navigating to Privacy and Policy')}>Privacy and Policy</Link>
          </div>
          <div className="footer-section follow-us">
            <h3>Follow us</h3>
            <a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="footer-section offices">
            <h3>Office</h3>
            <p>12, Murugappa Road, Kotturpuram</p>
            <p>Chennai, Tamil Nadu 600085</p>
          </div>
        </div>
      </div>
      <p className="footer-bottom-text">&copy; {new Date().getFullYear()} Interllekt. All rights reserved.</p>
    </footer>
  );
};
 
export default Footer;