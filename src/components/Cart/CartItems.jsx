import React from "react";

function CartItems({ itemDetails }) {
  return (
    <div>
      <h1>{itemDetails.name}</h1>
    </div>
  );
}

export default CartItems;
