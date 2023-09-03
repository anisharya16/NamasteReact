import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const searchedRestaurant = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return searchedRestaurant;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8246756&lng=75.70952659999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // Early Return.
  // Situation comes where there is no allRestaurants.
  // Handles the allRestaurants.length is not defined
  // Best way to handle this error. This can also be handled by using optional chaining.
  // allRestaurants?.length===0
  if (!allRestaurants) return <h1>Component not rendered. LOL</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchFilteredData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(searchFilteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>Sorry. No restaurant found for your search query. ☹️</h1>
        ) : (
          filteredRestaurants.map((fetchedData) => {
            return (
              <Link
                to={"/restaurant/" + fetchedData.info.id}
                key={fetchedData.info.id}
              >
                <RestaurantCard {...fetchedData.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
