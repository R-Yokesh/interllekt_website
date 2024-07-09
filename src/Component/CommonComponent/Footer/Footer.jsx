import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Assets from '../../../Assets/Assets';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your subscription logic here
    console.log('Subscribe button clicked');
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-img s">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 logcnm">
            <img src={Assets.interllektlogo} alt="Logo" style={{ width: "100px" }} />
            {/* <span>Prosperity in Motion</span> */}
          </div>
          <div className="col-lg-3 col-md-6 logcnm titls">
            <ul className="list-unstyled">
              <li className='folin'><Link to="/" onClick={() => console.log('Navigating to Home')}>Home</Link></li>
              <li className='folin'><Link to="/" onClick={() => console.log('Navigating to About')}>About</Link></li>
              <li className='folin'><Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link></li>
              <li className='folin'><Link to="/Capabilities" onClick={() => console.log('Navigating to Capabilities')}>Capabilities</Link></li>
              <li className='folin'><Link to="/PrivacyAndPolicy" onClick={() => console.log('Navigating to Privacy and Policy')}>Privacy And Policy</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 logcnm">
            <h5>Follow us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 logcnm">
            <h5>Offices</h5>
            <ul className="list-unstyled">
              <li>Menachem Begin 144, Tel Aviv</li>
              <li>215 Park Ave South, New York</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ccpjn">
            <p className="copy-right">&copy; {new Date().getFullYear()} Interllekt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
