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
    <footer className="custom-footer padding-sec">
      <div className="c-layout is-foter row">
        <div className="footer-let col-lg-3 col-md-3 col-sm-12 pl-0">
          <img src={Assets.WhiteLogo} alt="Logo" style={{ width: '' }} />
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12 twoms">
          <div className="footer-secton col-lg-3">
            <Link to="/" onClick={() => console.log('Navigating to Home')}>Home</Link>
            <Link to="/About" onClick={() => console.log('Navigating to About')}>About</Link>
            <Link to="/capabilities" onClick={() => console.log('Navigating to Capabilities')}>Capabilities</Link>
            <Link to="/" onClick={handleCareersClick}>Careers</Link>
            <Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
            <Link to="/Ethos" onClick={() => scrollToSection('ethos')}>Interllekt Ethos</Link>
            <Link to="/legal" onClick={() => scrollToSection('legal')}>Legal</Link>
            <Link to="/PrivacyAndPolicy" onClick={() => console.log('Navigating to Privacy and Policy')}>Privacy Policy</Link>
          </div>


          <div className="footer-secton folow-us col-lg-2">
            <h3>Follow us</h3>
            <a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>


        {/* <div className="clientsligos col-lg-2 col-md-2 col-sm-12">

        </div> */}
      </div>
      <div className='footer-flex'>
        <p className="footer-bottom-text">
          &copy; {new Date().getFullYear()} Interllekt. All rights reserved.
        </p>
        <img src={Assets.fotlo} alt="" className='footer-logo clientsligos' />
      </div>
      <div className="footer-bottom-paragraph">
        <p>
          Interllekt is an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, age, religion, sex, sexual orientation, national origin, protected veteran status, or any other characteristic protected under federal, state or local law, where applicable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
