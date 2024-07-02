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

  return (
    <footer className="bg-img s">
      <div className="container">
        <div className="row">
          <div className="col-md-2 logcnm">
            <img src={Assets.logo} alt="Logo" style={{ width: "120px" }} />
          </div>
          <div className="col-md-3 logcnm titls">
            <ul className="list-unstyled">
              <li className='folin'><Link to="/">Home</Link></li>
              <li className='folin'><Link to="/about">About</Link></li>
              <li className='folin'><Link to="/contact">contact</Link></li>
              <li className='folin'><Link to="/contact">Capabilities</Link></li>
             
              <li className='folin'><Link to="/PrivacyAndPolicy">Privacy And Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-3 social-section logcnm" >
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
          <div className="col-md-4 logcnm">
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
          <div className="col-12 ccpjn">
            <p className="copy-right">&copy; {new Date().getFullYear()} Interllekt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
