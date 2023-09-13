import React from "react";
import { Link } from "react-router-dom";

function NavLinks({ logIn, setLogIn }) {
  // console.log("rerender");
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <button
        onClick={() => {
          logIn ? setLogIn(false) : setLogIn(true);
        }}>
        {logIn ? "Log Out" : "Log In"}
      </button>
    </ul>
  );
}

export default NavLinks;
