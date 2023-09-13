import React from "react";
import altFoodImg from "../../assets/altFoodImg.png";

function RestaurantMenuItemCards({ title, itemCards }) {
  // console.log(title);
  // console.log("this are the itemCards", itemCards);
  //itemCard.card.info
  return (
    <div>
      <h1>{title}</h1>
      <div className="itemCards__container">
        {itemCards.map((itemCard) => (
          <div className="item" key={itemCard.card.info.id}>
            <div className="item__info">
              <h3>{itemCard.card.info.isVeg === 1 ? "Veg" : "Non Veg"}</h3>
              <h1>{itemCard.card.info.name}</h1>
              <h2>
                {!itemCard.card.info.price
                  ? "200"
                  : itemCard.card.info.price / 100}
              </h2>
              <h4>{itemCard.card.info.description}</h4>
            </div>
            <div className="item__img">
              <img
                src={
                  !itemCard.card.info.imageId
                    ? altFoodImg
                    : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
                      itemCard.card.info.imageId
                }
                alt={itemCard.card.info.name}></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenuItemCards;
