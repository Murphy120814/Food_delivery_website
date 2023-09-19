import React from "react";

function RestaurantCard({ restaurantData }) {
  // destructuring data
  const {
    name,
    cloudinaryImageId,
    areaName,
    costForTwo,
    cuisines,
    avgRatingString,
    sla: { slaString: value },
    aggregatedDiscountInfoV3,
  } = restaurantData;
  return (
    <div className="restaurant__card">
      <div className="restaurant__card_info">
        <img
          className="food__image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt={name}></img>
        <h3>{name}</h3>
        <h6> {areaName}</h6>
        <div className="food__rating">
          <h5>{avgRatingString}</h5>
          <h5>{value}</h5>
          <h5>{costForTwo}</h5>
        </div>
        <h4>{cuisines.join(", ")}</h4>
      </div>
      {aggregatedDiscountInfoV3 ? (
        <label>
          {aggregatedDiscountInfoV3?.header ??
            "" + aggregatedDiscountInfoV3?.subHeader ??
            "" + aggregatedDiscountInfoV3?.discountTag ??
            ""}
        </label>
      ) : (
        ""
      )}
    </div>
  );
}

export default RestaurantCard;
