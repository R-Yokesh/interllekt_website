import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../../Assets/Images/logoblue.png";
import menu from "../../../Assets/Images/menu-icon.png";
import "./NewHeader.css";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NewHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="new-header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menu} alt="Menu Icon" className="menu-img" />
      </div>

      {/* Navigation Menu Page */}
      <div className={`menu-page ${menuOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={toggleMenu}>
          &times;
        </span>
        <div className="menu-content">
          <div className="menu-column">
            <p>WHAT WE DO</p>
            <ul>
              <li>
                <Link to="/capabilities">Capabilities</Link>
              </li>
              <li>
                <Link to="/innovation">Innovation</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
            </ul>
          </div>
          <div className="menu-column">
            <p>WHO WE ARE</p>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Ethos</Link>
              </li>
              <li>
                <Link to="/">Legal</Link>
              </li>
              <li>
                <Link
                  to="/PrivacyAndPolicy"
                  onClick={() =>
                    console.log("Navigating to Privacy and Policy")
                  }
                >
                  Privacy and Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-column">
            <p>GET IN TOUCH</p>
            <ul>
              <li>
                <Link to="/" onClick={() => scrollToSection("contact")}>
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/interllekt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/interllekt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/interllekt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/interllekt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
