import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1 className="text-2xl m-auto font-bold flex justify-center">
        THis is cart
      </h1>
      {cartItems.map((item) => (
        <CartItems itemDetails={item.card.info} />
      ))}
    </div>
  );
}

export default Cart;
