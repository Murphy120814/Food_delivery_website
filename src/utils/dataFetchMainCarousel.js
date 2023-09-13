const CAROUSEL_URL = (id) =>
  `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.980890333210745&lng=73.10281599318355&${id}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

export default async function dataFetchMainCarousel(id) {
  try {
    console.log(CAROUSEL_URL(id));
    const dataMainCarouselRes = await fetch(CAROUSEL_URL(id));
    const dataMainCarouselResJSON = await dataMainCarouselRes.json();
    return dataMainCarouselResJSON;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
