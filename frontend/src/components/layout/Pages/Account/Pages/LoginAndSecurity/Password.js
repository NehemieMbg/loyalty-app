import React from "react";

import "./Password.scss";
import Pen from "../UI/Pen";

const users = require("../Users/users.json");
const user1 = users[0];
const userPassword = `${"*".repeat(user1.logs.password.length)}`;

const Password = () => {
  return (
    <div className="account-settings-container">
      <h3 className="heading-title-3 heading-from">Password</h3>

      <div className="account-current-information">
        <p className="fullname">
          {userPassword ? userPassword : "No name specified"}
        </p>
        <button className="edit-form">
          <Pen className="edit-pen" /> Edit
        </button>
      </div>

      {/* <form
        action=""
        method="post"
        className="password-form account-settings-form"
      >
        <div className="password-container account-settings__form-content">
          <div className="account-settings__from-group  password-container__item-1">
            <label
              htmlFor="current-password"
              className="password-form__password-label form-label"
            >
              Current Password{" "}
              <span className="form-required__highlight">*</span>
            </label>
            <input
              type="password"
              id="current-password"
              required
              className="password-form__password-input form-input"
            />
          </div>

          <div className="account-settings__from-group  password-container__item-2">
            <label
              htmlFor="new-password"
              className="password-form__password-label form-label"
            >
              New password <span className="form-required__highlight">*</span>
            </label>
            <input
              type="password"
              id="new-password"
              required
              className="email-form__password-input form-input"
            />
          </div>

          <div className="account-settings__from-group  password-container__item-3">
            <label
              htmlFor="confirm-new-password"
              className="password-form__password-label form-label"
            >
              Confirm new password{" "}
              <span className="form-required__highlight">*</span>
            </label>
            <input
              type="password"
              id="confirm-new-password"
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

export default Password;
