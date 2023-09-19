import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features__body" id="features">
      <div className="features_header">
        <div className="features_header-h1">Why Choose Wild Soul?</div>
      </div>
      <section className="features">
        <div className="features__container">
          <div className="features__item features__item-1">
            <h3 className="features__item-heading">Nature Immersion</h3>
            <p className="features__item-desciption">
              Immerse yourself in the beauty of pristine natural landscapes. Our
              retreats take place in serene locations, far away from the hustle
              and bustle of daily life.
            </p>
          </div>
          <div className="features__item features__item-2">
            <h3 className="features__item-heading">Holistic Healing </h3>
            <p className="features__item-desciption">
              Experience holistic healing practices that cater to both your
              mental and physical health. Our expert guides and facilitators are
              here to support your journey towards balance and well-being.
            </p>
          </div>
          <div className="features__item features__item-3">
            <h3 className="features__item-heading">
              Personalized Experiences
            </h3>
            <p className="features__item-desciption">
              We understand that each individual's path is unique. Our retreats
              offer personalized experiences that cater to your specific needs
              and goals.
            </p>
          </div>
          <div className="features__item features__item-4">
            <h3 className="features__item-heading">
              Community and Connection
            </h3>
            <p className="features__item-desciption">
              Connect with like-minded individuals on a similar quest for
              self-discovery. Our retreats foster a sense of community and
              belonging.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
