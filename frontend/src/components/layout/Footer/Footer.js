import React from "react";

import "./Footer.scss";
import LinkedIn from "./UI/LinkedIn";
import Instagram from "./UI/Instagram";
import Snapchat from "./UI/Snapchat";
import Twitter from "./UI/Twitter";
import Youtube from "./UI/Youtube";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li className="footer-list__link footer-link__item-1">Contact Us</li>
          <li className="footer-list__link footer-link__item-2">
            Terms & Conditions
          </li>
          <li className="footer-list__link footer-link__item-3">
            Privacy Policy
          </li>
        </ul>
        <div className="footer-hl"></div>
        <div className="footer-copyright">
          Copyright &copy; {year} Loyalty-rc
        </div>
        <div className="footer-socials__icon">
          <Instagram className={"footer-socials__icon-link"} />
          <Youtube className={"footer-socials__icon-link"} />
          <Twitter className={"footer-socials__icon-link"} />
          <Snapchat className={"footer-socials__icon-link"} />
          <LinkedIn className={"footer-socials__icon-link"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
