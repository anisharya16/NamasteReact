import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  const searchedRestaurant = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return searchedRestaurant;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  return (
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
            const searchFilteredData = filterData(searchText, restaurantList);
            setRestaurants(searchFilteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((fetchedData) => {
          return (
            <RestaurantCard {...fetchedData.data} key={fetchedData.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
