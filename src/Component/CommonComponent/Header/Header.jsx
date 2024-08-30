import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Assets from '../../../Assets/Assets';

import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mainheaderrs">
      <Navbar bg="" expand="lg" className="navbar-custom">
        <Navbar.Brand href="#" className='bandbv'>
          <img
            src={Assets.logo} // Replace with your logo path
            className=""
            style={{ width: "110px" }}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto headsm">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/capabilities">Capabilities</Link>
            <Link className="nav-link" to="#" onClick={() => scrollToSection('contact')}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
