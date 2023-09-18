import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const smoothScroll = (e) => {
              e.preventDefault();
              props.scrollToSection("discover");
            }
  return (
    <div className="navbar__body">
      <ul className="navbar__container">
        <li className="navbar__item navbar__item-1">
          <a
            // href="#discover"
            className="nav"
            onClick={smoothScroll}
          >
            Discover
          </a>
        </li>
        <li className="navbar__item navbar__item-2">
          <a
            // href="features"
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
            // href="#book"
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
            // href="#contact"
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
