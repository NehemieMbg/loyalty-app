import React from "react";
import { NavLink } from "react-router-dom";

import "./Menu.scss";

const Menu = (props) => {
  //   const { menuActiveHandler } = props;

  return (
    <div className={` ${props.menuActive ? "menu-container" : "menu-hidden"}`}>
      {/* <div
        className={`menu-backdrop
          ${props.menuActive ? "active" : ""}`}
      ></div> */}
      <div className="menu-visible ">
        <div className="close-btn__container" onClick={props.menuHiddenHandler}>
          <div className="close-btn"></div>
        </div>

        <ul className="menu-visible__list">
          <li className="menu-visible__list-link menu-item menu-item-1">
            <NavLink to={"/collection"} onClick={props.menuHiddenHandler}>
              Our Cars
            </NavLink>
          </li>

          <li className="menu-visible__list-link menu-item menu-item-2">
            <NavLink to={"/included"} onClick={props.menuHiddenHandler}>
              What's Included
            </NavLink>
          </li>

          <li className="menu-visible__list-link menu-item menu-item-3">
            <NavLink to={"/journal"} onClick={props.menuHiddenHandler}>
              Journal
            </NavLink>
          </li>

          <li className="menu-visible__list-link menu-item menu-item-4">
            <NavLink to={"/about"} onClick={props.menuHiddenHandler}>
              About
            </NavLink>
          </li>

          <li className="menu-visible__list-link menu-item menu-item-5">
            <NavLink to={"/contact"} onClick={props.menuHiddenHandler}>
              Contact
            </NavLink>
          </li>

          <li className="menu-visible__list-link menu-item menu-item-6">
            <NavLink>Socials</NavLink>
          </li>

          <li className="menu-visible__list-link menu-item menu-item-7">
            <NavLink
              to={"/account/personal-data"}
              onClick={props.menuHiddenHandler}
            >
              My Account
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
