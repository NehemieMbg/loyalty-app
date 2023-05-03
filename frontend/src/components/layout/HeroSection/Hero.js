import React from "react";

import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text__container">
        <h1 className="hero-heading item-1">
          Rent Your
          <br />
          Dream Sport Car
        </h1>
        <p className="hero-text item-2">
          We deliver across Lille. Unlimited mileage, additional drivers and
          insurance.
        </p>
      </div>
    </div>
  );
};

export default Hero;
