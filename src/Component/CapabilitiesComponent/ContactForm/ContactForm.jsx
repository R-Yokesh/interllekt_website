import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="contact-form container-fluid common-class">
      <h2>
        {location.pathname !== '/' && 'Want to learn more?'} 
        <span>Get in touch.</span>
      </h2>
      <form>
        <div className="cform-row">
          <div className="cform-group">
            <input type="text" name="firstName" className='cinput' required placeholder="First Name" />
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
        <div className="cform-row">
          <div className="cform-group wide">
            <select name="interest" className='cinput' value={selectedOption} onChange={handleDropdownChange} required>
              <option value="" disabled>Select an option</option>
              <option value="Capabilities">Capabilities</option>
              <option value="Innovation">Innovation</option>
              <option value="Business">Business</option>
            </select>
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
