import React, { useState } from "react";
import NavLinks from "./NavLinks";

function NavBar() {
  const [logIn, setLogIn] = useState(false);
  return (
    <div className="nav__items">
      <NavLinks logIn={logIn} setLogIn={setLogIn} />
    </div>
  );
}

export default NavBar;
