import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="ccontact-form container common-class">
      <h2>Want to learn more? <span>Get in touch.</span></h2>
      <form>
        <div className="cform-row">
          <div className="cform-group">
            <input type="text" name="firstName" className='cinput'required placeholder="First Name" />
            <label></label>
          </div>
          <div className="cform-group">
            <input type="text" name="lastName" className='cinput' required placeholder="Last Name" />
            <label></label>
          </div>
          <div className="cform-group">
            <input type="text" name="title" className='cinput' required placeholder="Title" />
            <label></label>
          </div>
        </div>
        <div className="cform-row">
          <div className="cform-group wide">
            <input type="text" name="company" className='cinput' required placeholder="Company" />
            <label></label>
          </div>
          <div className="cform-group wide">
            <input type="email" name="email" className='cinput' required placeholder="Email" />
            <label></label>
          </div>
        </div>
        <div className='cbtn'>
        <button type="submit">Contact Us</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
