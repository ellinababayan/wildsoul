import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  window.onscroll = () => {
    scrollNavbar();
  };
  const scrollNavbar = () => {
    const navbar = document.getElementsByClassName("navbar__body");
    const links = document.getElementsByClassName("navbar__container");

    if (document.documentElement.scrollTop > 3100) {
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("scrolled_item");
        console.log("print");
      }
    } else if (document.documentElement.scrollTop > 700) {
      // Iterate over each link element and add the class to each one.
      for (let i = 0; i < links.length; i++) {
        links[i].classList.add("scrolled_item");
      }
    } else {
      for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("scrolled_item");
      }
    }
  };

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
              props.scrollToSection("plans");
            }}
          >
            Plans
          </a>
        </li>
        <li className="navbar__item navbar__item-4">
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
      </ul>
    </div>
  );
};

export default Navbar;
