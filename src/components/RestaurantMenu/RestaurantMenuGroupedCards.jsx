import React, { useState } from "react";
import RestaurantMenuItemCards from "./RestaurantMenuItemCards";

function RestaurantMenuGroupedCards({ menuDishes }) {
  console.log(menuDishes);
  const [showIndex, setShowIndex] = useState(0);
  const dishCards = menuDishes.map((dish) => dish.card?.card);
  console.log("itemCards", dishCards);
  // const items = itemCards.map((card) => card.map((item) => item.card));

  return (
    <div className="menuGroupedCard__container">
      {dishCards.map((card, index) => (
        <RestaurantMenuItemCards
          title={card.title}
          key={card.title}
          itemCards={card.itemCards}
          showItem={index === showIndex ? true : false}
          index={index}
          setShowIndex={setShowIndex}
        />
      ))}
    </div>
  );
}

export default RestaurantMenuGroupedCards;
