import React, { useEffect, useState } from "react";
import CarouselElement from "./CarouselElement";
import "./carousel.css";
import dataFetch from "../../utils/dataFetch";
import ShimmerForCarousel from "../Shimmer/ShimmerForCarousel";

function Carousel() {
  const [listOfCarousel, setListOfCarousel] = useState(null);
  useEffect(() => {
    const fetchDataAndLogArray = async () => {
      try {
        const [arrayOfCarousel] = await dataFetch(); // Wait for the Promise to resolve
        setListOfCarousel(
          arrayOfCarousel[0].card?.card?.gridElements?.infoWithStyle?.info
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataAndLogArray();
  }, []);

  console.log("thisis Lit", listOfCarousel);
  return (
    <>
      <h1>Whats on your mind</h1>
      <div className="carousel__container">
        {!listOfCarousel ? (
          <ShimmerForCarousel />
        ) : (
          listOfCarousel.map((carouselElement) => (
            <CarouselElement
              imageId={carouselElement.imageId}
              key={carouselElement.id}
              altText={carouselElement.accessibility?.altText}
              name={carouselElement.action?.text}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Carousel;
