import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  //   const myParam = useParams();
  const { resID } = useParams();
  const { restaurant, menuList } = useRestaurant(resID);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-5">
      {/* <p>Restaurant Id: {myParam.resID}</p> */}
      <div>
        <p className="italic">Restaurant Id: {resID}</p>
        <p className="font-bold text-gray-500 text-xl my-2">
          {restaurant.name}
        </p>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          className="rounded-lg"
        />
        <p className="my-2 text-lg">
          Average Rating: {restaurant.avgRatingString} ⭐
        </p>
        <p className="my-2 text-lg">Cost: {restaurant.costForTwoMessage}</p>
      </div>
      <div className="ml-20">
        <h1 className="text-3xl text-red-500 underline mb-6">Menu List</h1>
        {menuList.map((dishName) => {
          return (
            <p className="text-lg" key={dishName.card.info.id}>
              {dishName.card.info.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
