import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function NavLinks({ logIn, setLogIn, onlineStatus }) {
  // console.log("rerender");

  const cartItem = useSelector((store) => store.cart.items);
  return (
    <ul>
      <li>Online Status: {!onlineStatus ? "🔴" : "🟢"} </li>
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
        <Link to="/cart">Cart ({cartItem.length} items)</Link>
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
