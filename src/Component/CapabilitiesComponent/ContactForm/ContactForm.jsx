import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Want to learn more? <span>Get in touch.</span></h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <input type="text" name="firstName" required placeholder="First Name" />
            <label></label>
          </div>
          <div className="form-group">
            <input type="text" name="lastName" required placeholder="Last Name" />
            <label></label>
          </div>
          <div className="form-group">
            <input type="text" name="title" required placeholder="Title" />
            <label></label>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group wide">
            <input type="text" name="company" required placeholder="Company" />
            <label></label>
          </div>
          <div className="form-group wide">
            <input type="email" name="email" required placeholder="Email" />
            <label></label>
          </div>
        </div>
        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
};

export default ContactForm;
