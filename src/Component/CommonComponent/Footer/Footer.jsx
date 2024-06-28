import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container container">
        <div className="titlcon"> <h2>Contact form</h2></div>
     
      <p className="description">Want to learn more? <span>Get in touch.</span></p>
      <form className="contact-form">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="input-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <button className='submnc' type="submit">CONTACT US</button>
      </form>
    </div>
  );
};

export default Footer;
