import React from "react";
import "./Plans.css";

const Plans = () => {
  return (
    <div
      className="plans__body"
      id="plans"
      style={{ backgroundImage: "url(img/bg-5.jfif)" }}
    >
      <div className="plans__container">
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
                  All-level yoga classes with experienced instructors
                </li>
                <li className="plan__bullet-item">
                  Connect with like-minded souls
                </li>
              </span>
            </p>
            <button type="submit" class="btn btn--primary">
              Book now
            </button>
            <button type="submit" class="btn btn--secondary">
              270$
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
            <button type="submit" class="btn btn--primary">
              Book now
            </button>
            <button type="submit" class="btn btn--secondary">
              350$
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
                  Secure your spot and take advantage of special pricing offers
                </li>
                <li className="plan__bullet-item">Revive body and soul</li>
                <li className="plan__bullet-item">
                  Connect with fellow travelers
                </li>
              </span>
            </p>
            <button type="submit" class="btn btn--primary">
              Book now
            </button>
            <button type="submit" class="btn btn--secondary">
              580$
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Plans;
