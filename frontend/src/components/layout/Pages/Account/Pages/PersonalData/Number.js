import React from "react";

import "./Number.scss";
import Pen from "../UI/Pen";

const users = require("../Users/users.json");
const user1 = users[0];
const phoneNumber = user1.personalInformations.phoneNumber;
// const phoneNumber = null; // Test

const Number = () => {
  return (
    <div className="account-settings-container ">
      <h3 className=" heading-title-3 heading-from">Phone Number</h3>

      <div className="account-current-information">
        <p className="date-of-birth">
          {phoneNumber ? phoneNumber : "No phone number specified"}
        </p>
        <button className="edit-form">
          <Pen className="edit-pen" /> Edit
        </button>
      </div>

      {/* <form
        action=""
        method="post"
        className="number-form account-settings-form"
      >
        <div className="account-settings__form-content number-container">
          <div className="number-container__item-1 account-settings__from-group">
            <label htmlFor="number" className="number-form__label form-label">
              <span className="form-required__highlight">*</span>
            </label>
            <input
              type="text"
              id="number"
              required
              className="number-form__input form-input"
            />
          </div>

          <div className="form-btn-container number-container__item-2">
            <button className="form-btn btn-save">Save</button>
            <button className="form-btn btn-cancel">Cancel</button>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default Number;
