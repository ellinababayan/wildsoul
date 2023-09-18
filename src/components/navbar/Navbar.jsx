import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar__body">
      <ul className="navbar__container">
        <li className="navbar__item navbar__item-1">
          <a
            className="nav"
            onClick={(e) => {
              e.preventDefault();
              props.scrollToSection("discover");
            }}
          >
            Discover
          </a>
        </li>
        <li className="navbar__item navbar__item-2">
          <a
            className="nav"
            onClick={(e) => {
              e.preventDefault();
              props.scrollToSection("features");
            }}
          >
            Features
          </a>
        </li>
        <li className="navbar__item navbar__item-3">
          <a
            className="nav"
            onClick={(e) => {
              e.preventDefault();
              props.scrollToSection("book");
            }}
          >
            Book
          </a>
        </li>
        <li className="navbar__item navbar__item-4">
          <a
            className="nav"
            onClick={(e) => {
              e.preventDefault();
              props.scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
