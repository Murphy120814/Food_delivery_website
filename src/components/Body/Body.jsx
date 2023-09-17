import React from "react";
import RestaurantContainer from "./Restaurant/RestaurantContainer";
import { Carousel } from "../index";
import dataFetch from "../../utils/dataFetch";
import "./body.css";
import { useOutletContext } from "react-router-dom";
function Body() {
  const onlineStatus = useOutletContext();
  if (onlineStatus === false) {
    return "You are offline please connect to internet ";
  }
  return (
    <>
      <Carousel />
      <div className="body">
        <RestaurantContainer
          heading="Restaurants with online delivery"
          dataFetch={dataFetch}
        />
      </div>
    </>
  );
}

export default Body;
