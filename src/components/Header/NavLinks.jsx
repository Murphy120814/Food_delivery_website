import React from "react";

function NavLinks({ logIn, setLogIn }) {
  console.log("rerender");
  return (
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
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
