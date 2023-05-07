import React from "react";
import Email from "./Email";
import Password from "./Password";

import "./LoginAndSecurity.scss";

const LoginAndSecurity = () => {
  return (
    <div className="login-and-security-section">
      <div className="login-and-security-container">
        <Email />
        <Password />
      </div>
    </div>
  );
};

export default LoginAndSecurity;
