import React from "react";
import "./Book.css";

const Book = (props) => {
  return (
    <div
      className="book__body"
      id="book"
      style={{ backgroundImage: "url(img/bg-5.jfif)" }}
    >
      <h1 className="book__header">Book Your Reatreat Now</h1>
      <section className="book">
        <div className="book__container">
          <div className="book__form">
            <form>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Smith"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <button type="submit" className="btn btn-submit-form">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <a
        className="scroll_down-book"
        onClick={(e) => {
          e.preventDefault();
          props.scrollToSection("footer");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 60"
          x="0px"
          y="0px"
          className="scroll_down-svg"
        >
          <title>ui-dan-edition_final_200106_outlined</title>
          <path
            d="M27,10.32v2.06a12,12,0,1,1-4-.33v12l-2.19-2.19L19.4,23.28l3.53,3.54a1.48,1.48,0,0,0,2.06.05l.06-.05,3.54-3.54-1.41-1.41-.18.18-2,2V8H23v2.05a13.93,13.93,0,1,0,4,.27Z"
            fill="#fff"
          />
          <text
            x="0"
            y="68"
            fill="rgb(4, 79, 15)"
            fontSize="5px"
            fontWeight="bold"
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
          ></text>
        </svg>
      </a>
    </div>
  );
};

export default Book;
