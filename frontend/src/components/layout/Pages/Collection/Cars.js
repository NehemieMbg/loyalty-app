import React from "react";

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
              <button className="btn-book">Book</button>
              <button className="btn-more">Find Out More</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cars;
