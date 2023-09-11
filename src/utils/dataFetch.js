export const FETCH_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9894007&lng=73.1175162&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// async function dataFetch() {
//   const data = await fetch(FETCH_URL);
//   const dataJSON = await data.json();
//   return dataJSON.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//     ?.restaurants;
// }
async function dataFetch() {
  try {
    const data = await fetch(FETCH_URL);
    const dataJSON = await data.json();
    const arrayOfRestaurantAndCarousel = dataJSON.data.cards.filter(
      (card) => card.card.card.gridElements?.infoWithStyle?.["@type"]
    );
    const arrayOfCarousel = arrayOfRestaurantAndCarousel.filter(
      (card) =>
        card.card.card.gridElements?.infoWithStyle?.["@type"] ===
          "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard" &&
        card.card.card.gridElements?.infoWithStyle?.info.length > 10
    );
    const arrayOfRestaurant = arrayOfRestaurantAndCarousel.filter(
      (card) =>
        card.card.card.gridElements?.infoWithStyle?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle" &&
        card.card.card.gridElements?.infoWithStyle?.restaurants.length > 10
    );
    console.log("Fetched data:", arrayOfRestaurant, arrayOfCarousel);
    return [
      arrayOfCarousel,
      arrayOfRestaurant,
    ];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to be caught in the caller
  }
}

export default dataFetch;
