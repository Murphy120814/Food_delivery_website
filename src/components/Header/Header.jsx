import React from "react";
import Logo from "./Logo";
import "./header.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
