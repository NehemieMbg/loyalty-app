import React from "react";

import "./Development.scss";
import { Route } from "react-router-dom";

const Development = () => {
  return (
    <div className="development-section">
      <h1 className="heading-title-1">How It Works</h1>
      <div className="development-container">
        <div className="development-item-1">
          <h2 className="heading-title-2">Seamless Booking</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            deleniti voluptates veritatis dolores. Sapiente ipsa iure eum sunt
            ipsam aspernatur aliquam minus ullam, illo nisi temporibus eaque
            soluta saepe numquam.
          </p>
        </div>
        <div className="development-item-1">
          <h2 className="heading-title-2">Get The Car You Book</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            nostrum beatae, fugit accusantium in magni adipisci sequi eveniet
            facilis nobis saepe quis omnis amet qui hic suscipit asperiores aut
            rem!
          </p>
        </div>
        <div className="development-item-1">
          <h2 className="heading-title-2">We Deliver</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus placeat recusandae quam labore suscipit impedit
            deserunt eaque repudiandae, quibusdam porro velit magni hic
            laboriosam rem molestiae rerum dicta autem facilis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Development;
