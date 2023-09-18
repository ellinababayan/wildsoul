import React from "react";
import "./Discover.css";

const Discover = () => {
  return (
    <div className="discover__body" id="discover">
      <div className="disciver_header">
        <h1 className="discover_header-h1">Dive in</h1>
      </div>
      <section className="discover">
        <div className="discover__container">
          <div className="discover_bg">
            <video className="bg-video__content" autoPlay muted loop>
              <source className="bg_video" src="img/retreat_bg.mp4" />
              Video is not supported by browser
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discover;
