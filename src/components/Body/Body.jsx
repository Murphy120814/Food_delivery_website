import React from "react";
import Search from "./Search/Search";
import RestaurantContainer from "./Restaurant/RestaurantContainer";
import "./body.css";
function Body() {
  return (
    <div className="body">
      <Search />
      <RestaurantContainer heading = "Restaurants with online delivery" />
    </div>
  );
}

export default Body;
