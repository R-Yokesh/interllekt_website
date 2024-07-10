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
 
 
    <div className="interllekt-footer">
      <div className="interllekt-footerLogo">
        <div className='interllekt-spacing-div'>
          <img src={Assets.interllektlogo} alt="Logo" style={{ width: '100px' }} />
        </div>
        <div className='interllekt-spacing-div'>
          <p className="footer-bottom-text">&copy; {new Date().getFullYear()} Interllekt. All rights reserved.</p>
        </div>
 
      </div>
 
      <div className="interllekt-commonlinks">
        <div className="interllekt-footerSection">
          {/* <h3 className="footer-minorHeading">Support</h3> */}
          <ul className="interllekt-ul-commonlinks">
            <li><Link to="/" onClick={() => console.log('Navigating to Home')}>Home</Link></li>
            <li><Link to="/" onClick={() => console.log('Navigating to About')}>About</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
            <li><Link to="/Capabilities" onClick={() => console.log('Navigating to Capabilities')}>Capabilities</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('contact')}>Interllekt Ethos</Link></li>
            <li><Link to="/" onClick={() => scrollToSection('contact')}>Legal</Link></li>
            <li><Link to="/PrivacyAndPolicy" onClick={() => console.log('Navigating to Privacy and Policy')}>Privacy And Policy</Link></li>
          </ul>
        </div>
 
 
        <div className="interllekt-followus-footerSection">
          <h3 className="footer-minorHeading">Follow Us</h3>
          <ul className="interllekt-footerLinks">
            <li><a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
 
 
        <div className="interllekt-address">
          <h3 className="footer-minorHeading">Office</h3>
          <p>The location of the company will announce soon</p>
        </div>
      </div>
    </div>
  );
};
 
export default Footer;