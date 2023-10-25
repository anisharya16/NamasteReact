import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, area }) => {
  return (
    <div className="w-60 p-2 hover:bg-red-400 shadow-xl rounded-md sm:bg-purple-500 md:bg-red-500 lg:bg-blue-300">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food_image" />
      <h2 className="font-bold text-gray-700 text-xl underline my-2">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{area}</h4>
    </div>
  );
};

export default RestaurantCard;
