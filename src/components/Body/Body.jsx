import React from "react";
import Search from "./Search/Search";
import RestaurantContainer from "./Restaurant/RestaurantContainer";
import "./body.css";
function Body() {
  return (
    <div>
      <Search />
      <RestaurantContainer />
    </div>
  );
}

export default Body;
