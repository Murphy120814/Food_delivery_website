import React from "react";

function CarouselElement({ imageId, altText, name }) {
  return (
    <div className="carousel__element">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          imageId
        }
        alt={altText}></img>
    </div>
  );
}

export default CarouselElement;
