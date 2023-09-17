import React from "react";
import "./Header.css";

const Header = () => {
  document.addEventListener("mousemove", (e) => {
    Object.assign(document.documentElement, {
      style: `--deg-X: ${((e.clientX - window.innerWidth) / 2) * -.005}deg; 
            --deg-Y: ${((e.clientY - window.innerHeight) / 2) * -.01}deg;`,
    });
  });
  return (
    <div className="header__body">
      <div
        className="logo"
        style={{
          backgroundImage:
            "url(https://static.wildsouls.gr/app/uploads/2020/11/logo-1.png)",
        }}
      ></div>
      <section className="layers">
        <div className="layers__container">
          <div
            className="layers__item layer-1"
            style={{ backgroundImage: "url(img/layer-1.jpg)" }}
          ></div>
          <div
            className="layers__item layer-2"
            style={{ backgroundImage: "url(img/layer-2.png)" }}
          ></div>
          <div className="layers__item layer-3">
            <div className="header-content">
              <h1>Wild Soul</h1>
              <div className="header-content__p">
                Nature Retreats & Adventures
              </div>
              <button>Start Exploring</button>
            </div>
          </div>
          <div className="layers__item layer-4"></div>
          <div
            className="layers__item layer-5"
            style={{ backgroundImage: "url(img/layer-5.png)" }}
          ></div>
          <div
            className="layers__item layer-6"
            style={{ backgroundImage: "url(img/layer-6.png)" }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Header;
