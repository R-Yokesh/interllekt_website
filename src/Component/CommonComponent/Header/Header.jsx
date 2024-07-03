import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
            // width="110px"
            // height="30"
            className=" "
            style={{width:"110px"}}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto headsm">
            <Nav.Link href="/interllekt.com">Home</Nav.Link>
            <Nav.Link href="/interllekt.com">About</Nav.Link>
            <Nav.Link href="/interllekt.com/Capabilities">Capabilities</Nav.Link>
            <Nav.Link href="#" onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown link" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
