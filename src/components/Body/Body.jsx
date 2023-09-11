import React from "react";
import RestaurantContainer from "./Restaurant/RestaurantContainer";
import "./body.css";
function Body() {
  return (
    <div className="body">
      <RestaurantContainer heading="Restaurants with online delivery" />
    </div>
  );
}

export default Body;
