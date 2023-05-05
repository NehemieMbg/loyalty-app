import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import User from "../UI/User";
import Menu from "./Menu";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const menuActiveHandler = () => {
    setMenuActive(true);
  };

  const menuHiddenHandler = () => {
    setMenuActive(false);
  };

  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar-container">
          <h1 className="logo">
            <NavLink to={"/"}>Loyalty RC</NavLink>
          </h1>

          <ul className="nav-list">
            <li className="nav-list__link item-1">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="nav-list__link item-2">
              <NavLink to={"/included"}>What's Included</NavLink>
            </li>
            <li className="nav-list__link item-3">
              <NavLink to={"/collection"}>Our Cars</NavLink>
            </li>
            <li className="nav-list__link item-4">
              <NavLink to={"/journal"}>The Journal</NavLink>
            </li>
          </ul>
          <div className="menu">
            <User className={"user-icon"} />

            <div className="vl"></div>
            <div className="menu-btn" onClick={menuActiveHandler}>
              <p>Menu</p>
              <div className="menu-logo"></div>
            </div>
          </div>
        </div>
      </div>
      <Menu menuActive={menuActive} menuHiddenHandler={menuHiddenHandler} />
    </React.Fragment>
  );
};

export default Navbar;
