import React from "react";
import "./Discover.css";

const Discover = (props) => {
  return (
    <div className="discover__body" id="discover">
      <div className="discover_header">
        <h1 className="discover_header-h1">Dive in</h1>
      </div>
      <section className="discover">
        <div className="discover__container">
          <div className="discover_bg">
            {/* <video className="bg-video__content" autoPlay muted loop>
              <source className="bg_video" src="img/retreat_bg.mp4" />
              Video is not supported by browser
            </video> */}
            <div className="layers_discover">
              <div
                className="layers__item layer-5"
                style={{ backgroundImage: "url(img/layer-5.png)" }}
              ></div>
              <div
                className="layers__item layer-7"
                style={{ backgroundImage: "url(img/layer-5.png)" }}
              ></div>
            </div>
          </div>
          <div className="dicover_description">
            <p className="discover-p">
              Welcome to the heart of transformation!<br></br> At Wild Soul, we
              invite you to embark on a journey of self-discovery, healing, and
              rejuvenation like no other. Our retreats are carefully crafted to
              reconnect you with nature and yourself, providing a sanctuary for
              mental and physical well-being.
            </p>
          </div>
          <a
            className="scroll_down"
            onClick={(e) => {
              e.preventDefault();
              props.scrollToSection("features");
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
                fill="#5f9b6d"
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
      </section>
    </div>
  );
};

export default Discover;
