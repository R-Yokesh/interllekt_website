import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Assets from "../../../assets/Assets"

import "./Header.css";

const Header = () => {
  return (
    <div className="mainheaderrs">
      <Navbar bg="" expand="lg" className="navbar-custom">
        <Navbar.Brand href="#">
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
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/PrivacyAndPolicy">About</Nav.Link>
            <Nav.Link href="#">Capabilities</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
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
