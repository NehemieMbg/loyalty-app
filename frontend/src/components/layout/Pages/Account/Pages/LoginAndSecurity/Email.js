import React from "react";

import "./Email.scss";
import Pen from "../UI/Pen";

const users = require("../Users/users.json");
const user1 = users[0];
const userEmail = user1.logs.email;

const Email = () => {
  return (
    <div className="account-settings-container">
      <h3 className="heading-title-3 heading-from">Email</h3>

      <div className="account-current-information">
        <p className="fullname">
          {userEmail ? userEmail : "No name specified"}
        </p>
        <button className="edit-form">
          <Pen className="edit-pen" /> Edit
        </button>
      </div>

      {/* <form
        action=""
        method="post"
        className="email-form account-settings-form"
      >
        <div className="email-container account-settings__form-content">
          <div className="account-settings__from-group  email-container__item-1">
            <label
              htmlFor="email"
              className="email-form__email-label form-label"
            >
              Email address <span className="form-required__highlight">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="email-form__email-input form-input"
            />
          </div>

          <div className="account-settings__from-group  email-container__item-2">
            <label
              htmlFor="password"
              className="email-form__password-label form-label"
            >
              Password <span className="form-required__highlight">*</span>
            </label>
            <input
              type="password"
              id="password"
              required
              className="email-form__password-input form-input"
            />
          </div>

          <div className="form-btn-container number-container__item-2">
            <button className="form-btn btn-save">Save</button>
            <button className="form-btn btn-cancel">Cancel</button>
          </div>

          <a
            href="http://localhost:3000/account/login-and-security"
            className="forgot-password"
          >
            Forgot password ?
          </a>
        </div>
      </form> */}
    </div>
  );
};

export default Email;
