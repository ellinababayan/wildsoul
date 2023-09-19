import React from "react";
import "./Discover.css";

const Discover = () => {
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
            <div className="layers">
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
        </div>
      </section>
    </div>
  );
};

export default Discover;
