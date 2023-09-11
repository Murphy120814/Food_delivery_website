import React from "react";

function Search({
  searchText,
  setSearchText,
  listOfRestaurant,
  setFilteredRestaurant,
  setSearchFound,
}) {
  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurant.filter((restaurant) =>
      restaurant.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filteredRestaurant.length === 0) {
      setSearchFound(false);
    } else {
      setFilteredRestaurant(filteredRestaurant);
      setSearchFound(true);
    }
  };
  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}></input>
      <button
        onClick={() => {
          handleSearch();
        }}>
        Search
      </button>
    </>
  );
}

export default Search;
