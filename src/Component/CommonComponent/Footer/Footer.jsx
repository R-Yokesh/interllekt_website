import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
            <img src={Assets.logo} alt="Logo" style={{ width: "120px" }} />
          </div>
          <div className="col-lg-3 col-md-6 logcnm titls">
            <ul className="list-unstyled">
            <li className='folin'><Link to="/" onClick={() => console.log('Navigating to Home')}>Home</Link></li>
              <li className='folin'><Link to="/" onClick={() => console.log('Navigating to About')}>About</Link></li>
              <li className='folin'><Link to="/" onClick={() => scrollToSection('contact') }>Contact</Link></li>
              <li className='folin'><Link to="/Capabilities" onClick={() => console.log('Navigating to Capabilities')}>Capabilities</Link></li>
              <li className='folin'><Link to="/PrivacyAndPolicy" onClick={() => console.log('Navigating to Privacy and Policy')}>Privacy And Policy</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 social-section logcnm" >
            <h4>Socials</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/interllekt" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://twitter.com/interllekt" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.facebook.com/interllekt" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/company/interllekt" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 logcnm">
            <h4 className='sgh'>Subscribe</h4>
            <form className="form-subscribe" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="email" className="form-control input-lg" placeholder="Your email address" required />
                <span className="input-group-btn">
                  <button className="btn btn-success btn-lg" type="submit">Subscribe</button>
                </span>
              </div>
            </form>
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
