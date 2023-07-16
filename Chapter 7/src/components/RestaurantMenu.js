import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //   const myParam = useParams();
  const { resID } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resID
    );
    const json = await data.json();
    setMenuList(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
  }

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
