import React from "react";
import RestaurantMenuItemCards from "./RestaurantMenuItemCards";

function RestaurantMenuGroupedCards({ menuDishes }) {
  console.log(menuDishes);
  const dishCards = menuDishes.map((dish) => dish.card?.card);
  console.log("itemCards", dishCards);
  // const items = itemCards.map((card) => card.map((item) => item.card));

  return (
    <div className="menuGroupedCard__container">
      {dishCards.map((card) => (
        <RestaurantMenuItemCards
          title={card.title}
          key={card.title}
          itemCards={card.itemCards}
        />
      ))}
    </div>
  );
}

export default RestaurantMenuGroupedCards;
