import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__body" id="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          Copyright &copy;
          <a
            className="personal_link"
            href="https://www.linkedin.com/in/ellina-babaian/"
            target="_blank"
          >
            Ellina Babaian
          </a>
          &nbsp; 2023. All Rights Reserved.
        </p>
        <p className="footer__contact">
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/ellina-babaian/"
            target="_blank"
          >
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
