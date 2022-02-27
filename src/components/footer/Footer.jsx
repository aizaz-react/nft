import React from "react";
import logo from "../../assets/logo.svg";
import twitter from "../../assets/twitter-icon.svg";
import discord from "../../assets/discord.svg";
import insta from "../../assets/insta.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="services">
          <img src={logo} alt={logo} />
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
        </div>
        <div className="social-links">
          <a>
            <img src={twitter} alt={twitter} />
          </a>
          <a>
            <img src={discord} alt={discord} />
          </a>
          <a>
            <img src={insta} alt={insta} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
