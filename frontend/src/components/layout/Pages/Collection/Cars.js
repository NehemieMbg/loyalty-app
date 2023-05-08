import React from "react";
import { Link } from "react-router-dom";

import "./Cars.scss";

const Cars = (props) => {
  const { cars } = props;
  return (
    <ul className="collection-list">
      {cars.map((car, idx) => {
        return (
          <li className="collection-list__car">
            <h1 className="car-heading-title">{`${car.make} ${car.model}`}</h1>
            <img
              src={car.images[0]}
              alt={`${car.make} ${car.model}`}
              className="collection-list__car-image"
            />
            <div className="collection-list__car-btn">
              <Link className="btn-book">Book</Link>

              <Link to={`/collection/${car.id}`} className="btn-more">
                Find Out More
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cars;
