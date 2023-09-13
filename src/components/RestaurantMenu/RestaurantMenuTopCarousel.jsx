import React from "react";

function RestaurantMenuTopCarousel({ topPicks }) {
  const topPickCarousel =
    topPicks.length === 0 ? [] : topPicks[0]?.card?.card?.carousel;
  return (
    <div className="restaurantMenuCarousel__container">
      <h1>Top Picks</h1>
      <div className="carouselImg__container">
        {topPickCarousel.map((banner) => (
          <img
            key={banner.bannerId}
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/" +
              banner.creativeId
            }></img>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenuTopCarousel;
