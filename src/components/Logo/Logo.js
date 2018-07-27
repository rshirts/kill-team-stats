import React from "react";
import "./Logo.css";
import skullLogo from "../../assets/images/skull.png";

const logo = () => (
  <div styleName="logo">
    <img src={skullLogo} alt="Skull" />
    <div styleName="logoText">KillTeamStats</div>
  </div>
);

export default logo;
