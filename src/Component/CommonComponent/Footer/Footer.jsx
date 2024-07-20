import React from 'react';
import { Link } from 'react-router-dom';
import Assets from '../../../Assets/Assets';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (contact) => {
    const section = document.getElementById(contact);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCareersClick = () => {
    window.location.href = 'mailto:hr@interllekt.com'; 
  };

  return (
    <footer className="custom-footer">
      <div className="c-layout is-footer">
        <div className="footer-left">
          <img src={Assets.interllektlogo} alt="Logo" style={{ width: '100px' }} />
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <Link to="/Contact" onClick={() => console.log('Navigating to Home')}>Home</Link>
            <Link to="/About" onClick={() => console.log('Navigating to About')}>About</Link>
            <Link to="/capabilities" onClick={() => console.log('Navigating to Capabilities')}>Capabilities</Link>
            <Link to="/" onClick={handleCareersClick}>Careers</Link>
            <Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
            <Link to="/Ethos" onClick={() => scrollToSection('ethos')}>Interllekt Ethos</Link>
            <Link to="/legal" onClick={() => scrollToSection('legal')}>Legal</Link>
            <Link to="/PrivacyAndPolicy" onClick={() => console.log('Navigating to Privacy and Policy')}>Privacy Policy</Link>
          </div>
          <div className="footer-section follow-us">
            <h3>Follow us</h3>
            <a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <p className="footer-bottom-text">
        &copy; {new Date().getFullYear()} Interllekt. All rights reserved.
      </p>
      <div className="footer-bottom-paragraph">
        <p>
          Interllekt is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
