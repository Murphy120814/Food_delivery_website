import React, { useEffect, useState } from "react";
import dataFetchMainCarousel from "../../../utils/dataFetchMainCarousel";
import { useParams } from "react-router-dom";
import "../body.css";
import { Shimmer } from "../../index";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

function CarouselRestaurant() {
  let { entityID } = useParams();
  entityID = entityID.split("_id").join("");
  console.log(entityID);
  const name = entityID.split("CCS_")[1];
  console.log(name);
  const [carouselResData, setCarouselResData] = useState(null);
  useEffect(() => {
    async function gettingCarouselRestData(id) {
      try {
        const data = await dataFetchMainCarousel(id);
        const destructuredDataArrayOfRes = data.data?.cards
          .filter(
            (card) =>
              card.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
          )
          .map((card) => card.card.card.info);
        setCarouselResData(destructuredDataArrayOfRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    gettingCarouselRestData(entityID);
  }, []);

  return (
    <>
      <h1> {name}</h1>
      {!carouselResData ? (
        <Shimmer />
      ) : (
        <div className="restaurant__container">
          {carouselResData.map((info) => (
            <Link to={"/restaurants/" + info?.id} key={info?.id}>
              <RestaurantCard restaurantData={info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default CarouselRestaurant;
