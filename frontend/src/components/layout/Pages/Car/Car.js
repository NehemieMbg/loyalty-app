import React from "react";
import { useParams } from "react-router-dom";

import "./Car.scss";

const collection = require("../Collection/CollectionDB/collection.json");

const Car = (props) => {
  const { id } = useParams();
  const carLoaded = collection.find((car) => car.id === id);

  return (
    <div className="car-section">
      <div className="car-sideImages-container">
        <img
          src={carLoaded.images[0]}
          alt={`${carLoaded.make} ${carLoaded.model}`}
          className="car-images__item car-images__item-1"
        />
        <img
          src={carLoaded.images[1]}
          alt={`${carLoaded.make} ${carLoaded.model}`}
          className="car-images__item car-images__item-2"
        />
        <img
          src={carLoaded.images[2]}
          alt={`${carLoaded.make} ${carLoaded.model}`}
          className="car-images__item car-images__item-3"
        />
        <img
          src={carLoaded.images[3]}
          alt={`${carLoaded.make} ${carLoaded.model}`}
          className="car-images__item car-images__item-4"
        />
        <img
          src={carLoaded.images[4]}
          alt={`${carLoaded.make} ${carLoaded.model}`}
          className="car-images__item car-images__item-5"
        />
      </div>

      <div className="car-section-container">
        <h1>{`${carLoaded.make}`}</h1>
      </div>
    </div>
  );
};

export default Car;
