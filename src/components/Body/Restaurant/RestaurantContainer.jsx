import React from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../../constants/constants";

function RestaurantContainer({ heading }) {
  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        {heading}
      </h1>
      <div className="restaurant__container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            restaurantData={restaurant.info}
            key={restaurant.info?.id}
          />
        ))}
      </div>
    </>
  );
}

export default RestaurantContainer;
