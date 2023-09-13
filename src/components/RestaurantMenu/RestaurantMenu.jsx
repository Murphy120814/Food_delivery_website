import React, { useState, useEffect } from "react";
import "./restaurantMenu.css";
import dataFetchResMenu from "../../utils/dataFetchResMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import RestaurantMenuTopCarousel from "./RestaurantMenuTopCarousel";
import RestaurantMenuGroupedCards from "./RestaurantMenuGroupedCards";

function RestaurantMenu() {
  const [restInfo, setRestInfo] = useState(null);
  const [topPicks, setTopPicks] = useState(null);
  const [menuDishes, setMenuDishes] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    const fetchingResMenuData = async (id) => {
      try {
        const dataIncoming = await dataFetchResMenu(id);

        const { restInfo, topCarousel, dishes } = dataIncoming;
        setRestInfo(restInfo);
        setTopPicks(topCarousel);
        setMenuDishes(dishes);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };
    fetchingResMenuData(resId);
  }, []);

  if (restInfo === null || topPicks === null || menuDishes === null)
    return null;

  console.log("this is restInfo", restInfo);
  console.log("this is carousel", topPicks);
  console.log("this is menuDishes", menuDishes);
  return (
    <div>
      <RestaurantMenuInfo restInfo={restInfo} />
      <RestaurantMenuTopCarousel
        topPicks={topPicks.length === 0 ? [] : topPicks}
      />
      <RestaurantMenuGroupedCards
        menuDishes={menuDishes.length === 0 ? [] : menuDishes}
      />
    </div>
  );
}

export default RestaurantMenu;
