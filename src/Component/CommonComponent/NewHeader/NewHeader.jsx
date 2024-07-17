import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../../Assets/Images/logoblue.png";
import menu from "../../../Assets/Images/menu-icon.png";
import searchIcon from "../../../Assets/Images/search-icon.png";
import closeIcon from "../../../Assets/Images/close-icon.png";
import "./NewHeader.css";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const NewHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
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
      <div className="icons-container">
        <div className="search-icon" onClick={toggleSearch}>
          <img
            src={searchOpen ? closeIcon : searchIcon}
            alt="Search Icon"
            className="search-img"
          />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menu} alt="Menu Icon" className="menu-img" />
        </div>
      </div>

      {searchOpen && (
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      )}

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
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Ethos">Interllekt Ethos</Link>
              </li>
              <li>
                <Link to="/legal">Legal</Link>
              </li>
              <li>
                <Link to="/PrivacyAndPolicy">Privacy and Policy</Link>
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