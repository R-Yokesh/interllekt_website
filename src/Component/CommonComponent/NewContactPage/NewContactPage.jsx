import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NewContactPage.css';

const NewContactPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');

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
            default:
                break;
        }
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const service = process.env.REACT_APP_SERVICE_ID;
    const template = process.env.REACT_APP_TEMPLATE_ID;
    const appId = process.env.REACT_APP_PUBLIC_KEY;
    
    const sendEmail = (event) => {
        event.preventDefault();

        const templateParams = {
            firstName,
            lastName,
            interest: selectedOption,
            email,
            company,
            title,
        };

        emailjs.send(
            service,
            template,
            templateParams,
            appId
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
                setSelectedOption('');
                setEmail('');
                setCompany('');
                setTitle('');
            },
            (error) => {
                toast.error('Oops! Something went wrong. Please try again later.', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    theme: 'colored',
                });
                console.error('Email sending error:', error);
            }
        );
    };

    return (
        <div className="container-fluid common-class padding-sec">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
            <div className="row content">
                <div className="col-md-6 left-side">
                    <div className="address details">
                        <div className="topic">Reach Us Through</div>
                        <div className="text-one">12/1, Murugappa Road, Koturpuram</div>
                        <div className="text-two">Chennai, India-600085</div>
                        <div className="text-two">
                            <a href="mailto:contactus@interllekt.com" className="email-llink">contactus@interllekt.com</a>
                        </div>
                        <div className="country cdetails">
                            <div className="countriess">
                                <div className="coun-head"><h3>Countries</h3></div>
                                <div className="coun-sub">UAE | South Africa | Europe | Latin America</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 right-side">
                    <div className="topic-text"><h2>Get in touch</h2></div>
                    <form onSubmit={sendEmail}>
                        <div className="cform-row">
                            <div className="cnform-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    className="cninput"
                                    required
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="cnform-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    className="cninput"
                                    required
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="cform-row">
                            <div className="cnform-group wide">
                                <select
                                    name="interest"
                                    className="cninput"
                                    value={selectedOption}
                                    onChange={handleDropdownChange}
                                    required
                                >
                                    <option value="" disabled>
                                        Please choose a category
                                    </option>
                                    <option value="Capabilities">Concept and Design</option>
                                    <option value="Innovation">Innovation</option>
                                    <option value="Business">Business</option>
                                </select>
                            </div>
                        </div>

                        <div className="cnform-group wide">
                            <input
                                type="email"
                                name="email"
                                className="cninput"
                                required
                                placeholder="Email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="cform-row">
                            <div className="cnform-group wide">
                                <input
                                    type="text"
                                    name="company"
                                    className="cninput"
                                    required
                                    placeholder="Company"
                                    value={company}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="cnform-group">
                                <input
                                    type="text"
                                    name="title"
                                    className="cninput"
                                    required
                                    placeholder="Position"
                                    value={title}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="cnbtn">
                            <button type="submit">Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewContactPage;
