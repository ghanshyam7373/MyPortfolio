import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import Profiles from "../../Data/Connect";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoGroup">
        <img src={logo} alt="logo" srcSet="" className="myLogo" />
        <h2 className="footerText">|</h2>
        <p className="footerText">Copyright ©2023 Ghanshyam7373</p>
      </div>
      <div className="connect">
        <p className="footerText">Connect with me</p>
        <h2 className="footerText">|</h2>
        {Profiles.map((data, index) => {
          return (
            <a
              href={data.link}
              key={index}
              className="profileSection"
              target="_blank"
            >
              <i className={data.className} />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
