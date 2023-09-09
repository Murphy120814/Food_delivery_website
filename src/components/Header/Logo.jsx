import React from "react";
import LogoImg from "../../assets/logo.png";
function Logo() {
  return (
    <div className="logo__container">
      <img className="logo" src={LogoImg} alt="logoAvatar"></img>
    </div>
  );
}

export default Logo;
