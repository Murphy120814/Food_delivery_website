import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../../utils/constants";

function RestaurantContainer({ heading }) {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  
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
      <button
        onClick={() => {
          const filteredRestaurant = listOfRestaurant.filter(
            (res) => res.info?.avgRating > 4
          );
          setListOfRestaurant(filteredRestaurant);
        }}>
        Top Rated Restaurants
      </button>
      <div className="restaurant__container">
        {listOfRestaurant.map((restaurant) => (
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
