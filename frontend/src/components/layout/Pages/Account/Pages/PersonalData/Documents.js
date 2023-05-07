import React from "react";

import "./Document.scss";
import Pen from "../UI/Pen";

const users = require("../Users/users.json");
const user1 = users[0];

const idCard = user1.personalInformations.documents.identityCard;
const license = user1.personalInformations.documents.licence;

const Documents = () => {
  return (
    <div className="account-settings-container">
      <h3 className="heading-title-3 heading-from">Documents</h3>

      <div className="account-current-information__container">
        <div className="account-current-information">
          <a
            href={idCard}
            target="_blank"
            rel="noreferrer"
            className="id-card"
            download
          >
            {idCard ? idCard : "No phone number specified"}
          </a>
          <button className="edit-form">
            <Pen className="edit-pen" /> Edit
          </button>
        </div>

        <div className="account-current-information">
          <a
            href={idCard}
            target="_blank"
            rel="noreferrer"
            className="id-card"
            download
          >
            {license ? license : "No phone number specified"}
          </a>
          <button className="edit-form">
            <Pen className="edit-pen" /> Edit
          </button>
        </div>
      </div>

      {/* <form
        action=""
        method="post"
        className="documents-form account-settings-form"
      >
        <div className="documents-container account-settings__form-content">
          <div className="account-settings__from-group  documents-container__item-1">
            <label
              htmlFor="identity"
              className="documents-form__identity-label form-label"
            >
              Identity card <span className="form-required__highlight">*</span>
            </label>
            <input
              type="file"
              id="identity"
              required
              className="documents-form__identity-input form-input"
            />
          </div>

          <div className="account-settings__from-group  documents-container__item-2">
            <label
              htmlFor="license"
              className="documents-form__license-label form-label"
            >
              Driver's Licence
            </label>
            <input
              type="file"
              id="license"
              className="documents-form__license-input form-input"
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

export default Documents;
