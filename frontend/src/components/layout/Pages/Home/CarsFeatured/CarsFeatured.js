import React from "react";

import "./CarsFeatured.scss";
import Cars from "../../Collection/Cars";
import ViewAll from "../../../UI/ViewAll/ViewAll";

const cars = require("../../Collection/CollectionDB/collection.json");

const CarsFeatured = () => {
  return (
    <div className="cars-featured-section">
      <div className="cars-featured-container">
        <div className="heading-and-link">
          <h1 className="heading-title-1 cars-featured-title">Featured</h1>
          <ViewAll className={"view-all-btn"} />
        </div>

        <Cars cars={cars.filter((el, idx) => idx < 3)} />
      </div>
    </div>
  );
};

export default CarsFeatured;
