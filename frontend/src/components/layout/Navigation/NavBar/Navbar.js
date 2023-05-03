import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import User from "../UI/User";

const Navbar = () => {
  return (
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
          <div className="menu-btn">
            <p>Menu</p>
            <div className="menu-logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
