import React from "react";

import "./PersonalData.scss";
import FullName from "./FullName";
import Birthday from "./Birthday";
import Address from "./Address";
import Number from "./Number";
import Document from "./Documents";
// import PersonalCode from "./PersonalCode";

const PersonalData = () => {
  return (
    <div className="personal-section">
      <div className="personal-section-container">
        <FullName />
        <Birthday />
        <Address />
        <Number />
        <Document />
        {/* <PersonalCode /> */}
      </div>
    </div>
  );
};

export default PersonalData;
