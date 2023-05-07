import React from "react";
import { NavLink } from "react-router-dom";

import "./ReturnHomeBtn.scss";
import ArrowLeft from "../Icons/ArrowLeft";

const ReturnHomeBtn = () => {
  return (
    <NavLink to={"/"} className="return-home-btn">
      <ArrowLeft className={"arrow-left"} />
      Back to Home
    </NavLink>
  );
};

export default ReturnHomeBtn;
