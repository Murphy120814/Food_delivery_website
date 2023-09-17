import React from "react";
import LogoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <div className="logo__container">
        <img className="logo" src={LogoImg} alt="logoAvatar"></img>
      </div>
    </Link>
  );
}

export default Logo;
