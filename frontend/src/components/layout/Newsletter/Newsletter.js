import React from "react";

import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-hl"></div>
        <div className="newsletter-text__container">
          <h1 className="heading-title-1 newslett-heading">Newsletter</h1>
          <p className="newsletter-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            dolores facere voluptatem pariatur, repellat dolorum explicabo
            suscipit. Eligendi totam impedit vitae nemo debitis cupiditate
            repellat reiciendis possimus, consequuntur ullam nostrum?
          </p>
        </div>

        <form action="/" className="newsletter-form">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="Email"
            className="newsletter-form__input"
          />
          <button className="btn-primary">Subscribe</button>
          <p className="form-text">
            By sharing your email. You agree to our{" "}
            <span className="text-highlight">terms of use</span> and{" "}
            <span className="text-highlight">privacy</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
