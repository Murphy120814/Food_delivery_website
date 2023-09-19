import React from "react";
import altFoodImg from "../../assets/altFoodImg.png";

function RestaurantMenuItemCards({
  title,
  itemCards,
  showItem,
  index,
  setShowIndex,
}) {
  const handleClick = () => {
    setShowIndex(index);
  };
  // console.log(title);
  // console.log("this are the itemCards", itemCards);
  //itemCard.card.info
  return (
    <div className="bg-gray-200 shadow-lg p-4 my-7">
      <div className="flex justify-between items-center" onClick={handleClick}>
        <span className="font-bold text-lg">
          {title + ` (${itemCards.length})`}
        </span>
        <span className="cursor-pointer">{!showItem ? "⬇️" : "⬆️"}</span>
      </div>
      {!showItem ? null : (
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
              <div className="item__img relative">
                <div className="absolute bottom-0 right-[45]">
                  <button className="p-2 bg-white shadow-lg text-black rounded-lg">
                    Add +
                  </button>
                </div>
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
      )}
    </div>
  );
}

export default RestaurantMenuItemCards;
