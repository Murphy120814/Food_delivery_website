import React, { useState } from "react";
import NavLinks from "./NavLinks";

function NavBar({ onlineStatus }) {
  const [logIn, setLogIn] = useState(false);
  return (
    <div className="nav__items">
      <NavLinks logIn={logIn} setLogIn={setLogIn} onlineStatus={onlineStatus} />
    </div>
  );
}

export default NavBar;
