import React from "react";
import RestaurantContainer from "./Restaurant/RestaurantContainer";
import { Carousel } from "../index";
import "./body.css";
function Body() {
  return (
    <>
      <Carousel />
      <div className="body">
        <RestaurantContainer heading="Restaurants with online delivery" />
      </div>
    </>
  );
}

export default Body;
