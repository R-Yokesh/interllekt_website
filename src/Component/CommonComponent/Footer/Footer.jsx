import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
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
    <footer className="custom-footer padding-sec">
      {/* First Row: Logo */}
      <div className="footer-row footer-let">
        <img src={Assets.WhiteLogo} alt="Logo" />
      </div>
      <hr className="footer-divider" />

      {/* Second Row: Links (flex-start) and Follow us (flex-end) */}
      <div className="footer-row footer-links-icons">
        <div className="footer-links">
          <div className="footer-links-row">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/capabilities">Capabilities</Link>
            <Link to="/" onClick={handleCareersClick}>Careers</Link>
          </div>
          <div className="footer-links-row">
            <Link to="/contact" onClick={() => scrollToSection('contact')}>Contact</Link>
            <Link to="/ethos" onClick={() => scrollToSection('ethos')}>Interllekt Ethos</Link>
            <Link to="/legal" onClick={() => scrollToSection('legal')}>Legal</Link>
            <Link to="/privacyandpolicy">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-icons">
          <a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      {/* Third Row: Paragraph (left) and Footer Logo (right) */}
      <div className="footer-row footer-bottom-content">
        <div className="footer-bottom-paragraph">
          <p>
            Interllekt is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable.
          </p>
        </div>
        <img src={Assets.fotlo} alt="Client Logos" className='footer-logo' />
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-bottom-text">&copy; 2024 Interllekt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
