import React from "react";
import "./Plans.css";

const Plans = (props) => {
  return (
    <div className="plans__body" id="plans">
      <div className="plans__container">
        <div className="discover_bg">
          <div className="layers_plan">
            <div
              className="layers__item layer-5"
              style={{ backgroundImage: "url(img/layer-5.png)" }}
            ></div>
            <div
              className="layers__item layer-8"
              style={{ backgroundImage: "url(img/layer-5.png)" }}
            ></div>
          </div>
        </div>
        <h1 className="plans_h1">Check Out Retreat Plans</h1>
        <section className="plans">
          <div className="plans__item plans__item-1">
            <img
              src="https://www.vitacost.com/blog/wp-content/uploads/2019/05/Outdoor-Yoga-How-to-Practice-Yoga-Outside.jpg"
              alt="plan_photo1"
              className="plans__photo"
            />
            <h4 className="plan__message">Recharge Your Soul:</h4>
            <h2 className="plans_header">Yoga Retreat in Paradise</h2>
            <p className="plans_description">
              <span className="plan__bullet">
                <li className="plan__bullet-item">
                  Rejuvenate with spa treatments
                </li>
                <li className="plan__bullet-item">
                  Enjoy locally-sourced gourmet cuisine
                </li>
                <li className="plan__bullet-item">
                  Daily sessions for inner peace and clarity
                </li>
                <li className="plan__bullet-item">
                  All-level yoga classes with instructors
                </li>
                <li className="plan__bullet-item">
                  Connect with like-minded souls
                </li>
              </span>
            </p>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">270$</span>
            </button>
          </div>
          <div className="plans__item plans__item-2">
            <img
              src="https://www.mytravelbackpack.com/wp-content/uploads/2019/12/images2201-5e04e2aed5657.jpg"
              alt="plan_photo2"
              className="plans__photo"
            />
            <h4 className="plan__message">Reach New Heights:</h4>
            <h2 className="plans_header">Mountain Climb Retreat</h2>
            <p className="plans_description">
              <span className="plan__bullet">
                <li className="plan__bullet-item">
                  Guided climbs for all skill levels
                </li>
                <li className="plan__bullet-item">
                  Learn from certified instructors
                </li>
                <li className="plan__bullet-item">
                  Fuel with chef-prepared meals
                </li>
                <li className="plan__bullet-item">Discover alpine beauty</li>
                <li className="plan__bullet-item">
                  Cozy mountain accommodations
                </li>
              </span>
            </p>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">350$</span>
            </button>
          </div>
          <div className="plans__item plans__item-3">
            <img
              src="https://www.jonnymelon.com/wp-content/uploads/2021/07/Magic-Hills-Bali-72.jpg"
              alt="plan_photo3"
              className="plans__photo"
            />
            <h4 className="plan__message">Bali Bliss:</h4>
            <h2 className="plans_header">Retreat on Bali</h2>
            <p className="plans_description">
              <span className="plan__bullet">
                <li className="plan__bullet-item">Bali's tropical paradise</li>
                <li className="plan__bullet-item">Savor local cuisine</li>
                <li className="plan__bullet-item">
                  Secure your spot and enjoy special price
                </li>
                <li className="plan__bullet-item">Revive body and soul</li>
                <li className="plan__bullet-item">
                  Connect with fellow travelers
                </li>
              </span>
            </p>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">580$</span>
            </button>
          </div>
        </section>
        <a
          className="scroll_down-plans"
          onClick={(e) => {
            e.preventDefault();
            props.scrollToSection("book");
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
    </div>
  );
};

export default Plans;
