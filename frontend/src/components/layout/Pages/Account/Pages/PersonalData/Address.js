import React from "react";

import "./Address.scss";
import Pen from "../UI/Pen";

const users = require("../Users/users.json");
const user1 = users[0];
const street = `${user1.personalInformations.address.houseNo} ${user1.personalInformations.address.street}`;
const country = `${user1.personalInformations.address.postalCode} ${user1.personalInformations.address.city} ${user1.personalInformations.address.country}`;

const Address = () => {
  return (
    <div className="account-settings-container">
      <h3 className="heading-title-3">Address</h3>

      <div className="account-current-information">
        <div className="account-current__address">
          {street && country ? (
            <p>
              {street} <br /> {country}
            </p>
          ) : (
            "No date of birth specified"
          )}
        </div>
        <button className="edit-form">
          <Pen className="edit-pen" /> Edit
        </button>
      </div>

      {/* <form
        action=""
        method="post"
        className="address-form account-settings-form"
      >
        <div className="account-settings__form-content address-container">
          <div className="account-settings__from-group address-container__item-1">
            <label
              htmlFor="country"
              className="address-form__country-label form-label"
            >
              Country <span className="form-required__highlight">*</span>
            </label>
            <input
              type="text"
              id="country"
              className="address-form__country-input form-input"
            />
          </div>

          <div className="account-settings__from-group address-container__item-2">
            <label
              htmlFor="house-no"
              className="fullname-form__house-no-label form-label"
            >
              House no <span className="form-required__highlight">*</span>
            </label>
            <input
              type="number"
              min="0"
              id="house-no"
              className="address-form__house-no-input form-input"
            />
          </div>

          <div className="account-settings__from-group address-container__item-3">
            <label
              htmlFor="street"
              className="address-form__street-label form-label"
            >
              Street <span className="form-required__highlight">*</span>
            </label>
            <input
              type="text"
              id="street"
              className="address-form__street-input form-input"
            />
          </div>

          <div className="account-settings__from-group address-container__item-4">
            <label
              htmlFor="supplement"
              className="address-form__supplement-label form-label"
            >
              Supplement
            </label>
            <input
              type="text"
              id="supplement"
              className="address-form__supplement-input form-input"
            />
          </div>

          <div className="account-settings__from-group address-container__item-5">
            <label
              htmlFor="city"
              className="address-form__city-label form-label"
            >
              City <span className="form-required__highlight">*</span>
            </label>
            <input
              type="text"
              id="city"
              className="address-form__city-input form-input"
            />
          </div>

          <div className="account-settings__from-group address-container__item-6">
            <label
              htmlFor="region"
              className="address-form__region-label form-label"
            >
              Region <span className="form-required__highlight">*</span>
            </label>
            <input
              type="text"
              id="region"
              className="address-form__region-input form-input"
            />
          </div>

          <div className="account-settings__from-group address-container__item-7">
            <label
              htmlFor="postal-code"
              className="address-form__postal-code-label form-label"
            >
              Postal Code <span className="form-required__highlight">*</span>
            </label>
            <input
              type="text"
              id="postal-code"
              className="address-form__postal-code-input form-input"
            />
          </div>

          <div className="form-btn-container address-container__item-8">
            <button className="form-btn btn-save">Save</button>
            <button className="form-btn btn-cancel">Cancel</button>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default Address;
