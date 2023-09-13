import React from "react";
import { Link } from "react-router-dom";

function CarouselElement({ imageId, altText, entityId }) {
  return (
    <div className="carousel__element">
      <Link to={"/carouselRestaurant/" + entityId.split("?")[1]}>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
            imageId
          }
          alt={altText}></img>
      </Link>
    </div>
  );
}

export default CarouselElement;
