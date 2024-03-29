import { useState, useEffect } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

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
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOffline = useOnline();

  if (!isOffline) return <p>🔴 Aww Snap! Check your internet Connection.</p>;

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
      <div className="flex justify-center p-5 mt-10 rounded-3xl">
        <input
          type="text"
          className="rounded-xl px-5 border border-red-500 focus:bg-blue-100"
          placeholder="Enter text here"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="ml-2 text-yellow-100 border border-blue-950 rounded-lg p-2 bg-blue-700 hover:bg-blue-300"
          onClick={() => {
            const searchFilteredData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(searchFilteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <h1>Sorry. No restaurant found for your search query. ☹️</h1>
        ) : (
          filteredRestaurants.map((fetchedData) => {
            return (
              <Link
                className="m-7"
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
