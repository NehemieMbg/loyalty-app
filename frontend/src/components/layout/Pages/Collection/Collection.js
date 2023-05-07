import React from "react";

import "./Collection.scss";
import ReturnHomeBtn from "../../UI/ReturnHomeBtn/ReturnHomeBtn";
import Cars from "./Cars";
const cars = require("../Collection/CollectionDB/collection.json");

const Collection = () => {
  return (
    <div className="collection-section" id="collection">
      <div className="collection-container">
        <ReturnHomeBtn />

        <h1 className="heading-title-1 collection-heading">
          Sport Car for Rent
        </h1>

        <Cars cars={cars} />
      </div>
    </div>
  );
};

export default Collection;
