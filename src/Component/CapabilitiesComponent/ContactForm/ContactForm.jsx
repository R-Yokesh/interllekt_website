import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css';

const ContactForm = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'company':
        setCompany(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'interest':
        setInterest(value);
        break;
      default:
        break;
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();
    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: lastName,
      title: title,
      company: company,
      email: email,
      interest: selectedOption,
    };

    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY
    ).then(
      (response) => {
        toast.success('Thank you for contacting us!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          theme: 'colored',
        });
        // Clear form fields
        setFirstName('');
        setLastName('');
        setTitle('');
        setCompany('');
        setEmail('');
        setInterest('');
      },
      (error) => {
        toast.error('Oops! Something went wrong. Please try again later.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          theme: 'colored',
        });
      }
    );
  };

  return (
    <div className='common-class'>
      <div className="contact-form container-fluid padding-sec">
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
        <h2 className='text-center'>
          {location.pathname !== '/' && 'Want to learn more?'}
          <span>Get in touch</span>
        </h2>
        <form onSubmit={sendEmail}>
          <div className="cform-row">
            <div className="cform-group">
              <input
                type="text"
                name="firstName"
                className='cinput'
                required
                placeholder="First Name"
                value={firstName}
                onChange={handleInputChange}
              />
              <label></label>
            </div>
            <div className="cform-group">
              <input
                type="text"
                name="lastName"
                className='cinput'
                required
                placeholder="Last Name"
                value={lastName}
                onChange={handleInputChange}
              />
              <label></label>
            </div>
            <div className="cform-group">
              <input
                type="text"
                name="title"
                className='cinput'
                required
                placeholder="Title"
                value={title}
                onChange={handleInputChange}
              />
              <label></label>
            </div>
          </div>
          <div className="cform-row">
            <div className="cform-group wide">
              <input
                type="text"
                name="company"
                className='cinput'
                required
                placeholder="Company"
                value={company}
                onChange={handleInputChange}
              />
              <label></label>
            </div>
            <div className="cform-group wide">
              <input
                type="email"
                name="email"
                className='cinput'
                required
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
              <label></label>
            </div>
          </div>
          <div className="cform-row">
            <div className="cform-group wide">
              <select
                name="interest"
                className='cinput'
                value={selectedOption}
                onChange={handleDropdownChange}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Capabilities">Concept and Design</option>
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
    </div>
  );
};

export default ContactForm;
