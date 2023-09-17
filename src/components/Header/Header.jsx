import React from "react";
import Logo from "./Logo";
import "./header.css";
import NavBar from "./NavBar";

function Header({ onlineStatus }) {
  return (
    <div className="header">
      <Logo />
      <NavBar onlineStatus={onlineStatus} />
    </div>
  );
}

export default Header;
