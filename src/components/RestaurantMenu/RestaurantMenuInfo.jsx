import React from "react";

function RestaurantMenuInfo({ restInfo }) {
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = restInfo;
  return (
    <div className="restaurantMenuInfo__container">
      <div className="resInfo__container">
        <h1>{name}</h1>
        <h2>Rating:{avgRatingString}</h2>
        <h3>{costForTwoMessage}</h3>
        <h3>{cuisines.join(", ")}</h3>
      </div>
      <div className="resInfo__img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }></img>
      </div>
    </div>
  );
}

export default RestaurantMenuInfo;
