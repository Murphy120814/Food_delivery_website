import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import dataFetch from "../../../utils/dataFetch";
import Filter from "../Filter/Filter";
import { Shimmer } from "../../index";
import Search from "../Search/Search";

function RestaurantContainer({ heading }) {
  const [listOfRestaurant, setListOfRestaurant] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchFound, setSearchFound] = useState(true);

  //?Filter State Variable
  const [showTopRated, setShowTopRated] = useState(false);
  const [showFastDelivery, setShowFastDelivery] = useState(false);
  const [showCost, setShowCost] = useState(false);

  useEffect(() => {
    const fetchDataAndLogArray = async () => {
      try {
        const [, arrayOfRestaurant] = await dataFetch(); // Wait for the Promise to resolve

        setFilteredRestaurant(
          arrayOfRestaurant[0].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setListOfRestaurant(
          arrayOfRestaurant[0].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAndLogArray();
  }, []);

  const lessCost = () => {
    if (showCost) {
      setFilteredRestaurant(listOfRestaurant);
    } else {
      const filteredRestaurant = listOfRestaurant.filter(
        (res) => Number.parseInt(res.info?.costForTwo.slice(1)) <= 300
      );
      setFilteredRestaurant(filteredRestaurant);
    }
    setShowCost((preValue) => !preValue);
  };

  const fastDelivery = () => {
    if (showFastDelivery) {
      setFilteredRestaurant(listOfRestaurant);
    } else {
      const filteredRestaurant = listOfRestaurant.filter(
        (res) => res.info?.sla?.deliveryTime <= 25
      );
      setFilteredRestaurant(filteredRestaurant);
    }
    setShowFastDelivery((preValue) => !preValue);
  };

  const topRated = () => {
    if (showTopRated) {
      setFilteredRestaurant(listOfRestaurant);
    } else {
      const filteredRestaurant = listOfRestaurant.filter(
        (res) => res.info?.avgRating > 4
      );
      setFilteredRestaurant(filteredRestaurant);
    }
    setShowTopRated((preValue) => !preValue);
  };

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
      <div className="restaurant__feature">
        <div className="filter__container">
          <Filter handleClick={topRated} showState={showTopRated}>
            Show Top Rated
          </Filter>
          <Filter handleClick={fastDelivery} showState={showFastDelivery}>
            Fast delivery
          </Filter>
          <Filter handleClick={lessCost} showState={showCost}>
            Less Than 300Rs
          </Filter>
        </div>
        <div className="search">
          <Search
            searchText={searchText}
            setSearchText={setSearchText}
            listOfRestaurant={listOfRestaurant}
            setFilteredRestaurant={setFilteredRestaurant}
            setSearchFound={setSearchFound}
          />
        </div>
      </div>
      {!listOfRestaurant ? (
        <Shimmer />
      ) : (
        <div className="restaurant__container">
          {console.log(listOfRestaurant instanceof Array, listOfRestaurant)}
          {!searchFound ? (
            <h1> Nothing Found</h1>
          ) : (
            filteredRestaurant.map((restaurant) => (
              <RestaurantCard
                restaurantData={restaurant.info}
                key={restaurant.info?.id}
              />
            ))
          )}
        </div>
      )}
    </>
  );
}

export default RestaurantContainer;
