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
    <div className="menu">
      {/* <p>Restaurant Id: {myParam.resID}</p> */}
      <div>
        <p>Restaurant Id: {resID}</p>
        <p>Restaurant Name: {restaurant.name}</p>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <p>Average Rating: {restaurant.avgRatingString} ⭐</p>
        <p>Cost for Two: {restaurant.costForTwoMessage}</p>
      </div>
      <div className="menuList">
        <h1>Menu List</h1>
        {menuList.map((dishName) => {
          return <p key={dishName.card.info.id}>{dishName.card.info.name}</p>;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
