import React from "react";
import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, imageId, price }) => {
  return (
    <div className="w-60 p-2 shadow-xl rounded-md bg-blue-300 m-2">
      <img src={IMG_CDN_URL + imageId} alt="food_image" />
      <p className="font-bold text-gray-700 text-xl underline my-2">{name}</p>
      {console.log(price)}
      <p>
        {price
          ? "Rs." + price / 100
          : "Oops. Food price not available at the moment. Please check later."}
      </p>
    </div>
  );
};

export default FoodItem;
