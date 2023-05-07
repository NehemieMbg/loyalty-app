import React from "react";
import { Link } from "react-router-dom";

import "./ViewAll.scss";
import ArrowRight from "../Icons/ArrowRight";

const ViewAll = (props) => {
  return (
    <Link to={"/collection"} className={`view-all ${props.className}`}>
      View all <ArrowRight className={"arrow-right"} />
    </Link>
  );
};

export default ViewAll;
