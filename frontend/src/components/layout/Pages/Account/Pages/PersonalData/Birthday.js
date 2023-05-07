import React from "react";

import "./Birthday.scss";

import Pen from "../UI/Pen";

const users = require("../Users/users.json");
const user1 = users[0];
const dateOfBirth = user1.personalInformations.dateOfBirth;

const Birthday = () => {
  return (
    <div className="account-settings-container">
      <h3 className="heading-title-3 heading-from">Date of birth</h3>

      <div className="account-current-information">
        <p className="date-of-birth">
          {dateOfBirth ? dateOfBirth : "No date of birth specified"}
        </p>
        <button className="edit-form">
          <Pen className="edit-pen" /> Edit
        </button>
      </div>

      {/* <form
        action=""
        method="post"
        className="birth-form account-settings-form"
      >
        <div className="account-settings__form-content birth-container">
          <div className="account-settings__from-group">
            <label
              htmlFor="date-of-birth"
              className="birth-form__date-label form-label"
            >
              <span className="form-required__highlight">*</span>
            </label>
            <input
              type="date"
              id="date-of-birth"
              className="birth-form__date-input form-input"
              required
            />
          </div>

          <div className="form-btn-container">
            <button className="form-btn btn-save">Save</button>
            <button className="form-btn btn-cancel">Cancel</button>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default Birthday;
