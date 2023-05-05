import React, { useState } from "react";

import "./AccountNavigation.scss";
import { NavLink } from "react-router-dom";
import ArrowLeft from "./UI/ArrowLeft";

const AccountNavigation = () => {
  const [personalDataActive, setPersonalDataActive] = useState(true);
  const [loginSecurity, setLoginSecurityActive] = useState(false);
  const [orderActive, setorderDataActive] = useState(false);

  const personalHandler = () => {
    setLoginSecurityActive(false);
    setorderDataActive(false);
    setPersonalDataActive(true);
  };

  const loginSecurityHandler = () => {
    setPersonalDataActive(false);
    setorderDataActive(false);
    setLoginSecurityActive(true);
  };

  const orderHandler = () => {
    setPersonalDataActive(false);
    setLoginSecurityActive(false);
    setorderDataActive(true);
  };

  return (
    <div className="account-navigation">
      <div className="account-navigation-container">
        <ul className="account-navigation__list-return">
          <li className="account-navigation__return-btn">
            <NavLink to={"/"}>
              <ArrowLeft className={"account-arrow-left"} />
              Back to Home
            </NavLink>
          </li>
        </ul>

        <h1 className="heading-title-1">Account Settings</h1>

        <ul className="account-navigation__list">
          <li
            onClick={personalHandler}
            className={`account-navigation__list-link ${
              personalDataActive ? "account-navigation-active" : ""
            }`}
          >
            <NavLink to={"/account/personal-data"}>
              Personal Information
            </NavLink>
          </li>

          <li
            onClick={loginSecurityHandler}
            className={`account-navigation__list-link ${
              loginSecurity ? "account-navigation-active" : ""
            }`}
          >
            <NavLink to={"/account/login-and-security"}>
              Login & Security
            </NavLink>
          </li>

          <li
            onClick={orderHandler}
            className={`account-navigation__list-link ${
              orderActive ? "account-navigation-active" : ""
            }`}
          >
            <NavLink to={"/account/order-history"}>Orders</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountNavigation;
