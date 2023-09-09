import React from "react";

function RestaurantCard() {
  return (
    <div className="restaurant__card">
      <div className="restaurant__card_info">
        <img
          className="food__image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zjw2ip54m1mcw578uaaj"
          alt="dummyImg"></img>
        <h3>Meghna Foods</h3>
        <h6>Alandi</h6>
        <div className="food__rating">
          <h5>4 star</h5>
          <h5>18 mins</h5>
          <h5>400 for 2</h5>
        </div>
        <h4>Chinese, asian, vadapav</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
