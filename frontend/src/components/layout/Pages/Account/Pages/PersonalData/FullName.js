import React, { useState } from "react";

import "./FullName.scss";
import Pen from "../UI/Pen";

const users = require("../Users/users.json");
const user1 = users[0];

const fullname = `${user1.personalInformations.firstname} ${user1.personalInformations.lastname}`;

const FullName = () => {
  const [isFormActive, setIsFormActive] = useState(false);

  const openFormHandler = () => {
    if (!isFormActive) setIsFormActive(true);
  };

  const closeFormHandler = () => {
    if (isFormActive) setIsFormActive(false);
  };

  return (
    <div className="account-settings-container">
      <h3 className="heading-title-3 heading-from">Name</h3>

      {!isFormActive ? (
        <div className="account-current-information">
          <p className="fullname">
            {fullname ? fullname : "No name specified"}
          </p>
          <button className="edit-form" onClick={openFormHandler}>
            <Pen className="edit-pen" /> Edit
          </button>
        </div>
      ) : (
        <form
          action=""
          method="post"
          className="fullname-form account-settings-form"
        >
          <div className="account-settings__form-content fullname-container">
            <div className="account-settings__from-group fullname-container__item-1">
              <label
                htmlFor="firstname"
                className="fullname-form__firstname-label form-label"
              >
                First Name <span className="form-required__highlight">*</span>
              </label>

              <input
                type="text"
                id="firstname"
                className="fullname-form__firstname-input form-input"
                required
              />
            </div>

            <div className="account-settings__from-group fullname-container__item-2">
              <label
                htmlFor="lastname"
                className="fullname-form__lastname-label form-label"
              >
                Last Name <span className="form-required__highlight">*</span>
              </label>

              <input
                type="text"
                id="lastname"
                className="fullname-form__lastname form-input"
                required
              />
            </div>

            <div className="form-btn-container">
              <button className="form-btn btn-save">Save</button>
              <button
                className="form-btn btn-cancel"
                onClick={closeFormHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FullName;
