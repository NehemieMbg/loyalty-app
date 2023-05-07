import React from "react";

import "./PersonalCode.scss";

const PersonalCode = () => {
  return (
    <div>
      <h3 className="heading-title-3">Name</h3>
      <div className="account-settings-form">
        <form action="" method="post" className="fullname-form ">
          <label
            htmlFor="firstname"
            className="fullname-form__firstname-label form-label"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            className="fullname-form__firstname-input form-input"
          />

          <label
            htmlFor="lastname"
            className="fullname-form__lastname-label form-label"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            className="fullname-form__lastname form-input"
          />
        </form>
      </div>
    </div>
  );
};

export default PersonalCode;
